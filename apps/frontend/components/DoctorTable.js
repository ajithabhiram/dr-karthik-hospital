import { useState } from 'react';
import { useDoctor } from '../context/DoctorContext';
import Image from 'next/image';

export default function DoctorTable({ doctors }) {
  const { selectedDoctor, selectDoctor } = useDoctor();
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');

  // Get unique specialties
  const specialties = [...new Set(doctors.map(d => d.specialty))];

  // Filter doctors
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !specialtyFilter || doctor.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  const handleSelectDoctor = (doctor) => {
    selectDoctor({
      doctorId: doctor._id,
      name: doctor.name,
      phone: doctor.phone,
      specialty: doctor.specialty
    });
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by doctor name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field flex-1"
          aria-label="Search doctors by name"
        />
        <select
          value={specialtyFilter}
          onChange={(e) => setSpecialtyFilter(e.target.value)}
          className="input-field md:w-64"
          aria-label="Filter by specialty"
        >
          <option value="">All Specialties</option>
          {specialties.map(specialty => (
            <option key={specialty} value={specialty}>{specialty}</option>
          ))}
        </select>
      </div>

      {/* Selected Doctor Notice */}
      {selectedDoctor && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4" role="status" aria-live="polite">
          <p className="text-primary-800">
            <strong>Approaching Doctor Selected:</strong> {selectedDoctor.name} ({selectedDoctor.specialty})
          </p>
        </div>
      )}

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Photo</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Qualifications</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Specialty</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Contact</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Availability</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Approaching Doctor</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr key={doctor._id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={doctor.photoUrl}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      onError={(e) => { e.target.src = '/images/default-doctor.jpg' }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{doctor.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{doctor.qualifications}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{doctor.specialty}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div>{doctor.phone}</div>
                  <div className="text-xs text-gray-500">{doctor.email}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {doctor.availability?.weekdays?.join(', ') || 'N/A'}
                </td>
                <td className="px-6 py-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="approachingDoctor"
                      checked={selectedDoctor?.doctorId === doctor._id}
                      onChange={() => handleSelectDoctor(doctor)}
                      className="w-5 h-5 text-primary-600 focus:ring-2 focus:ring-primary-500"
                      aria-label={`Select ${doctor.name} as approaching doctor`}
                    />
                    <span className="ml-2 text-sm text-gray-700">Select</span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredDoctors.map((doctor) => (
          <div key={doctor._id} className="card">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 relative rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src={doctor.photoUrl}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  onError={(e) => { e.target.src = '/images/default-doctor.jpg' }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                <p className="text-sm text-primary-600 font-medium mt-1">{doctor.specialty}</p>
                <p className="text-sm text-gray-600 mt-2">{doctor.phone}</p>
                <p className="text-xs text-gray-500">{doctor.email}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Available: {doctor.availability?.weekdays?.join(', ') || 'N/A'}
                </p>
                <label className="flex items-center mt-4 cursor-pointer">
                  <input
                    type="radio"
                    name="approachingDoctor"
                    checked={selectedDoctor?.doctorId === doctor._id}
                    onChange={() => handleSelectDoctor(doctor)}
                    className="w-5 h-5 text-primary-600 focus:ring-2 focus:ring-primary-500"
                    aria-label={`Select ${doctor.name} as approaching doctor`}
                  />
                  <span className="ml-2 font-medium text-primary-600">
                    {selectedDoctor?.doctorId === doctor._id ? 'Selected as Approaching Doctor' : 'Select as Approaching Doctor'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No doctors found matching your criteria.
        </div>
      )}
    </div>
  );
}
