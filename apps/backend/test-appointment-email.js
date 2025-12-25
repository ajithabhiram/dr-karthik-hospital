require('dotenv').config();
const { sendAppointmentConfirmation } = require('./src/utils/mailer');

async function testAppointmentEmail() {
  console.log('📧 Testing Appointment Email Template...\n');

  const sampleAppointment = {
    fullName: 'Test Patient',
    phone: '+91-9876543210',
    email: 'testpatient@example.com',
    preferredDate: new Date('2025-12-30'),
    preferredTime: '10:00 AM',
    approachingDoctor: {
      name: 'Dr. Karthik Paidi',
      specialty: 'Consultant Orthopaedic, Arthroscopic and Replacement Surgeon',
      phone: '+91-73863-61609'
    },
    diseaseCategory: 'Knee Pain',
    reasonForVisit: 'Experiencing severe knee pain for the past 2 weeks. Need consultation for possible treatment options.',
    createdAt: new Date()
  };

  try {
    console.log('📤 Sending appointment confirmation email...\n');
    const result = await sendAppointmentConfirmation(sampleAppointment);
    
    if (result.success) {
      console.log('✅ Appointment email sent successfully!');
      console.log('📧 Email sent to:', process.env.HOSPITAL_EMAIL);
      console.log('\n✨ Professional email template delivered!');
      console.log('💡 Check your inbox at:', process.env.HOSPITAL_EMAIL);
      console.log('\n📋 Email includes:');
      console.log('   ✓ Professional Ruthvik Hospitals header');
      console.log('   ✓ Patient information section');
      console.log('   ✓ Doctor details');
      console.log('   ✓ Appointment date & time');
      console.log('   ✓ Medical condition & reason');
      console.log('   ✓ Call patient button');
      console.log('   ✓ Hospital contact footer');
    } else {
      console.error('❌ Failed to send email:', result.message);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testAppointmentEmail();
