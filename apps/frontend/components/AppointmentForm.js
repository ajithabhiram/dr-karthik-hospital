import { useState, useEffect } from 'react';
import { useDoctor } from '../context/DoctorContext';
import axios from 'axios';

// Use Netlify Functions (serverless) for faster response
const API_URL = process.env.NEXT_PUBLIC_API_URL || '/.netlify/functions';

export default function AppointmentForm({ onSuccess }) {
  const { selectedDoctor, selectDoctor } = useDoctor();
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    selectedDoctorId: '',
    preferredDate: '',
    preferredTime: '',
    reasonForVisit: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fallback doctor data in case API fails
  const fallbackDoctor = {
    id: 'karthik-paidi',
    name: 'Dr. Karthik Paidi',
    specialty: 'Consultant Orthopaedic, Arthroscopic and Replacement Surgeon',
    phone: '+917386361609'
  };

  // Fetch doctors on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-doctors`);
      console.log('Doctors fetched:', response.data);
      
      if (response.data && response.data.length > 0) {
        // Filter to show only Dr. Karthik
        const karthikOnly = response.data.filter(doc => doc.name.includes('Karthik'));
        setDoctors(karthikOnly.length > 0 ? karthikOnly : [fallbackDoctor]);
      } else {
        // Use fallback if no doctors found
        console.log('No doctors found, using fallback');
        setDoctors([fallbackDoctor]);
      }
      
      // If a doctor is already selected from context, set it in form
      if (selectedDoctor) {
        setFormData(prev => ({ ...prev, selectedDoctorId: selectedDoctor.doctorId }));
      }
    } catch (err) {
      console.error('Failed to fetch doctors:', err);
      // Use fallback doctor on error
      setDoctors([fallbackDoctor]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // If doctor is selected from dropdown, update context
    if (name === 'selectedDoctorId' && value) {
      const doctor = doctors.find(d => (d.id || d._id) === value);
      if (doctor) {
        selectDoctor({
          doctorId: doctor.id || doctor._id,
          name: doctor.name,
          phone: doctor.phone,
          specialty: doctor.specialty
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Check if API_URL is configured
    if (!API_URL) {
      setError('Backend API URL is not configured. Please contact support.');
      return;
    }

    // Get the selected doctor from form or context
    const doctorId = formData.selectedDoctorId || selectedDoctor?.doctorId;
    if (!doctorId) {
      setError('Please select a doctor to consult');
      return;
    }

    const doctor = doctors.find(d => (d.id || d._id) === doctorId);
    if (!doctor) {
      setError('Selected doctor not found');
      return;
    }

    setLoading(true);

    try {
      const appointmentData = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        reasonForVisit: formData.reasonForVisit,
        approachingDoctor: {
          doctorId: doctor.id || doctor._id,
          name: doctor.name,
          phone: doctor.phone,
          specialty: doctor.specialty
        }
      };

      console.log('Booking appointment to:', `${API_URL}/book-appointment`);
      
      const response = await axios.post(`${API_URL}/book-appointment`, appointmentData, {
        timeout: 30000, // 30 seconds - Netlify functions are much faster
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Appointment booked successfully:', response.data);
      
      if (onSuccess) onSuccess();
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        selectedDoctorId: '',
        preferredDate: '',
        preferredTime: '',
        reasonForVisit: ''
      });
    } catch (err) {
      console.error('Appointment booking error:', err);
      
      if (err.code === 'ECONNABORTED') {
        setError('Request timeout. The server is taking too long to respond. Please try again.');
      } else if (err.response) {
        setError(err.response?.data?.error || `Server error: ${err.response.status}`);
      } else if (err.request) {
        setError('Cannot reach the server. Please check your internet connection or try again later.');
      } else {
        setError('Failed to book appointment. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded" role="alert">
          {error}
        </div>
      )}

      {/* Doctor Selection Dropdown */}
      <div>
        <label htmlFor="selectedDoctorId" className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-xl">👨‍⚕️</span>
          Select Doctor to Consult *
        </label>
        <select
          id="selectedDoctorId"
          name="selectedDoctorId"
          value={formData.selectedDoctorId}
          onChange={handleChange}
          required
          className="input-field text-lg font-semibold border-2 border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-xl shadow-sm hover:shadow-md transition-all appearance-none bg-white cursor-pointer"
        >
          <option value="">Choose Your Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id || doctor._id} value={doctor.id || doctor._id}>
              {doctor.name} - {doctor.specialty}
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-2">
          👉 <strong>Dr. Karthik Paidi</strong> - Expert Orthopaedic Surgeon for all bone and joint issues
        </p>
      </div>

      {/* Show selected doctor details */}
      {selectedDoctor && formData.selectedDoctorId && (
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-300 rounded-xl p-4 md:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="text-4xl md:text-5xl">👨‍⚕️</div>
            <div className="flex-1">
              <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Your Selected Doctor</p>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">{selectedDoctor.name}</h3>
              <div className="space-y-1">
                <p className="text-sm md:text-base text-blue-700 font-semibold flex items-center gap-2">
                  <span>🏥</span>
                  <span className="break-words">{selectedDoctor.specialty}</span>
                </p>
                <p className="text-sm md:text-base text-blue-600 flex items-center gap-2">
                  <span>📞</span>
                  {selectedDoctor.phone}
                </p>
              </div>
            </div>
            <div className="bg-green-500 text-white px-3 md:px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-md">
              ✓ Selected
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-xl">👤</span>
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="input-field text-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-xl shadow-sm hover:shadow-md transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">📱</span>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91-XXXXX-XXXXX"
            className="input-field text-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">✉️</span>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="input-field text-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">📅</span>
            Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="input-field text-lg font-semibold border-2 border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-xl shadow-sm hover:shadow-md transition-all"
            style={{ colorScheme: 'light' }}
          />
          <p className="text-xs text-gray-500 mt-2">📌 Select your preferred appointment date</p>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">⏰</span>
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="input-field text-lg font-semibold border-2 border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-xl shadow-sm hover:shadow-md transition-all appearance-none bg-white cursor-pointer"
          >
            <option value="">Select Time Slot</option>
            <optgroup label="🌅 Morning (9 AM - 12 PM)">
              <option value="09:00">09:00 AM</option>
              <option value="09:30">09:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:30">11:30 AM</option>
            </optgroup>
            <optgroup label="☀️ Afternoon (12 PM - 4 PM)">
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="13:30">01:30 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="14:30">02:30 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="15:30">03:30 PM</option>
            </optgroup>
            <optgroup label="🌆 Evening (4 PM - 8 PM)">
              <option value="16:00">04:00 PM</option>
              <option value="16:30">04:30 PM</option>
              <option value="17:00">05:00 PM</option>
              <option value="17:30">05:30 PM</option>
              <option value="18:00">06:00 PM</option>
              <option value="18:30">06:30 PM</option>
              <option value="19:00">07:00 PM</option>
              <option value="19:30">07:30 PM</option>
            </optgroup>
          </select>
          <p className="text-xs text-gray-500 mt-2">⏱️ Choose your convenient time slot</p>
        </div>
      </div>

      <div>
        <label htmlFor="reasonForVisit" className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-xl">📝</span>
          Reason for Visit / Medical Concern
        </label>
        <textarea
          id="reasonForVisit"
          name="reasonForVisit"
          value={formData.reasonForVisit}
          onChange={handleChange}
          rows={4}
          placeholder="Please describe your symptoms, duration, and any other relevant information..."
          className="input-field text-lg border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-xl shadow-sm hover:shadow-md transition-all resize-none"
        />
        <p className="text-xs text-gray-500 mt-2">💡 Providing details helps the doctor prepare for your visit</p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-3xl">✅</div>
          <div>
            <h4 className="font-bold text-green-900 text-lg">Ready to Book?</h4>
            <p className="text-green-700 text-sm">Your appointment will be confirmed shortly</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary text-lg md:text-xl py-3 md:py-4 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl font-bold"
        >
          {loading ? (
            <span className="flex flex-col items-center justify-center gap-2">
              <span className="flex items-center gap-2 md:gap-3">
                <svg className="animate-spin h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-sm md:text-base">Booking Your Appointment...</span>
              </span>
              <span className="text-xs opacity-75">Please wait, this may take up to 60 seconds...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 md:gap-3">
              <span className="text-xl md:text-2xl">📅</span>
              <span className="text-sm md:text-base">Confirm & Book Appointment</span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
