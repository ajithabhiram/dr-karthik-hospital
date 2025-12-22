import { useState } from 'react';
import Layout from '../components/Layout';
import AppointmentForm from '../components/AppointmentForm';
import Link from 'next/link';

export default function MakeAppointment() {
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <Layout title="Book Appointment - Dr Karthik Paidi (Ruthvik Hospitals)" description="Schedule your appointment with Dr. Karthik Paidi">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Schedule your visit with Dr. Karthik Paidi - Expert Orthopaedic Surgeon
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6" role="alert">
              ✅ Appointment booked successfully! We'll contact you soon.
            </div>
          )}

          <div className="card border-2 border-primary-200">
            <AppointmentForm onSuccess={handleSuccess} />
          </div>

          {/* Doctor Info Card */}
          <div className="mt-8 card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">👨‍⚕️</div>
              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-2">Dr. Karthik Paidi</h3>
                <p className="text-xl text-green-700 font-semibold mb-4">Expert Orthopaedic Surgeon</p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Specializing in joint replacement, arthroscopy, trauma care, and advanced orthopaedic procedures with state-of-the-art surgical techniques.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Orthopaedic Services Available:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Total Hip & Knee Replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Robotic-Assisted Surgery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Arthroscopic Procedures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Ligament Reconstruction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Fracture Fixation (ORIF)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Sports Injury Treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Limb Deformity Correction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Spine & Scoliosis Surgery</span>
                </div>
              </div>
              <Link href="/services" className="mt-6 btn-primary inline-block text-center w-full bg-green-600 hover:bg-green-700">
                View All Services
              </Link>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <span className="text-2xl">ℹ️</span>
                Learn More About Dr. Karthik
              </h3>
              <p className="text-gray-700 mb-4">
                View Dr. Karthik Paidi's complete profile, credentials, and expertise in orthopaedic surgery.
              </p>
              <Link href="/doctors" className="btn-primary inline-block text-center">
                👨‍⚕️ View Doctor Profile
              </Link>
            </div>

            <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Need Help?
              </h3>
              <p className="text-gray-700 mb-4">
                Call us directly to book your appointment or for any queries.
              </p>
              <a href="tel:+917386361609" className="btn-primary inline-block text-center bg-green-600 hover:bg-green-700">
                📞 Call +91-73863-61609
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
