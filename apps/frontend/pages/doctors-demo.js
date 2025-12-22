import { useState } from 'react';
import Layout from '../components/Layout';
import DoctorTable from '../components/DoctorTable';

// Mock data for demo purposes
const mockDoctors = [
  {
    _id: '1',
    name: "Dr. Shalini Duvvada",
    qualifications: "MBBS, MS, MRCS (U.K), FMAS",
    specialty: "General / Laparoscopic & Laser Surgeon",
    phone: "+917386361609",
    email: "shalini@ruthvikhospitals.com",
    photoUrl: "/images/dr_shalini.jpg",
    availability: {
      weekdays: ["Mon", "Wed", "Fri"],
      slots: ["10:00", "14:00"]
    }
  },
  {
    _id: '2',
    name: "Dr. Karthik Paidi",
    qualifications: "MBBS, MS (Orthopaedics)",
    specialty: "Orthopaedics / Arthroscopy",
    phone: "+917386361600",
    email: "karthik@ruthvikhospitals.com",
    photoUrl: "/images/dr_karthik.jpg",
    availability: {
      weekdays: ["Tue", "Thu"],
      slots: ["11:00", "16:00"]
    }
  },
  {
    _id: '3',
    name: "Dr. Priya Sharma",
    qualifications: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrics",
    phone: "+917386361601",
    email: "priya@ruthvikhospitals.com",
    photoUrl: "/images/dr_priya.jpg",
    availability: {
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      slots: ["09:00", "15:00"]
    }
  },
  {
    _id: '4',
    name: "Dr. Rajesh Kumar",
    qualifications: "MBBS, MD (Cardiology), DM",
    specialty: "Cardiology",
    phone: "+917386361602",
    email: "rajesh@ruthvikhospitals.com",
    photoUrl: "/images/dr_rajesh.jpg",
    availability: {
      weekdays: ["Mon", "Wed", "Fri"],
      slots: ["11:00", "17:00"]
    }
  }
];

export default function DoctorsDemo() {
  return (
    <Layout title="Our Doctors (Demo) - Ruthvik Hospitals" description="Meet our experienced medical professionals">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            <strong>📝 Demo Mode:</strong> This page shows sample doctors to demonstrate the "Approaching Doctor" selection feature.
            To see real data, set up Supabase (see SETUP_SUPABASE_NOW.md)
          </p>
        </div>

        <h1 className="section-title">Our Doctors</h1>
        <p className="section-subtitle">
          Meet our team of experienced and qualified medical professionals
        </p>

        <DoctorTable doctors={mockDoctors} />

        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-900 mb-2">✅ Try the Approaching Doctor Feature!</h3>
          <ol className="list-decimal list-inside space-y-2 text-green-800">
            <li>Click a radio button to select a doctor</li>
            <li>Notice the blue banner showing your selection</li>
            <li>Go to <a href="/make-appointment" className="underline font-semibold">Book Appointment</a></li>
            <li>See the form pre-filled with doctor information!</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}
