const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../apps/backend/src/index');
const Appointment = require('../../apps/backend/src/models/Appointment');
const Doctor = require('../../apps/backend/src/models/Doctor');

describe('Appointments API', () => {
  let doctorId;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ruthvik_test');
    
    // Create a test doctor
    const doctor = await Doctor.create({
      name: 'Test Doctor',
      qualifications: 'MBBS',
      specialty: 'General',
      phone: '+911234567890',
      email: 'test@example.com'
    });
    doctorId = doctor._id;
  });

  afterAll(async () => {
    await Appointment.deleteMany({});
    await Doctor.deleteMany({});
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Appointment.deleteMany({});
  });

  describe('POST /api/appointments', () => {
    it('should create appointment with valid approaching doctor', async () => {
      const appointmentData = {
        fullName: 'John Doe',
        phone: '+919876543210',
        email: 'john@example.com',
        preferredDate: '2024-12-20',
        preferredTime: '10:00',
        approachingDoctor: {
          doctorId: doctorId.toString(),
          name: 'Test Doctor',
          phone: '+911234567890',
          specialty: 'General'
        },
        reasonForVisit: 'Checkup'
      };

      const response = await request(app)
        .post('/api/appointments')
        .send(appointmentData)
        .expect(201);

      expect(response.body).toHaveProperty('_id');
      expect(response.body.fullName).toBe('John Doe');
      expect(response.body.approachingDoctor.doctorId).toBe(doctorId.toString());
      expect(response.body.approachingDoctor.name).toBe('Test Doctor');
      expect(response.body.status).toBe('pending');
    });

    it('should fail without approaching doctor', async () => {
      const appointmentData = {
        fullName: 'John Doe',
        phone: '+919876543210'
      };

      const response = await request(app)
        .post('/api/appointments')
        .send(appointmentData)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should fail with incomplete approaching doctor data', async () => {
      const appointmentData = {
        fullName: 'John Doe',
        phone: '+919876543210',
        approachingDoctor: {
          doctorId: doctorId.toString()
          // Missing name, phone, specialty
        }
      };

      const response = await request(app)
        .post('/api/appointments')
        .send(appointmentData)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should save appointment with full doctor object structure', async () => {
      const appointmentData = {
        fullName: 'Jane Smith',
        phone: '+919876543211',
        approachingDoctor: {
          doctorId: doctorId.toString(),
          name: 'Test Doctor',
          phone: '+911234567890',
          specialty: 'General'
        }
      };

      await request(app)
        .post('/api/appointments')
        .send(appointmentData)
        .expect(201);

      const savedAppointment = await Appointment.findOne({ fullName: 'Jane Smith' });
      expect(savedAppointment.approachingDoctor).toBeDefined();
      expect(savedAppointment.approachingDoctor.doctorId.toString()).toBe(doctorId.toString());
      expect(savedAppointment.approachingDoctor.name).toBe('Test Doctor');
      expect(savedAppointment.approachingDoctor.phone).toBe('+911234567890');
      expect(savedAppointment.approachingDoctor.specialty).toBe('General');
    });
  });
});
