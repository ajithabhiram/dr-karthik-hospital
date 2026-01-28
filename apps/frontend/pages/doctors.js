import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import DoctorCard from '../components/DoctorCard';
import { supabase } from '../lib/supabase';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      // Fetch directly from Supabase
      const { data, error: supabaseError } = await supabase
        .from('doctors')
        .select('*')
        .order('name');

      if (supabaseError) {
        console.warn('Supabase error, using fallback data:', supabaseError);
        // Use fallback data if Supabase fails
        setDoctors(getFallbackDoctors());
        setLoading(false);
        return;
      }
      
      // If no data from Supabase, use fallback
      if (!data || data.length === 0) {
        console.log('No data in Supabase, using fallback');
        setDoctors(getFallbackDoctors());
        setLoading(false);
        return;
      }
      
      // Filter to show only Dr. Karthik
      const karthikOnly = data.filter(doc => doc.name.includes('Karthik'));
      
      if (karthikOnly.length === 0) {
        // If no Karthik found, use fallback
        setDoctors(getFallbackDoctors());
      } else {
        setDoctors(karthikOnly);
      }
    } catch (err) {
      console.error('Error fetching doctors:', err);
      // Use fallback data instead of showing error
      setDoctors(getFallbackDoctors());
    } finally {
      setLoading(false);
    }
  };

  // Fallback doctor data
  const getFallbackDoctors = () => {
    return [{
      _id: '1',
      name: 'Dr. Karthik Paidi',
      specialty: 'Orthopaedic Surgeon',
      qualifications: 'MBBS, MS (Orthopaedics), FIAS, FIJR',
      experience: '12 years overall, 9 years as specialist',
      image: '/photos/Dr. Karthik Paidi.png',
      phone: '+91 73863 61609',
      email: 'ruthvikhospitals@gmail.com',
      description: 'Expert in joint replacement surgery and orthopaedic trauma care with extensive training in arthroscopic procedures.'
    }];
  };

  return (
    <Layout title="Our Doctors - Ruthvik Hospitals" description="Meet our experienced medical professionals">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
            <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            OUR MEDICAL TEAM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Meet Dr. Karthik Paidi</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Expert Orthopaedic Surgeon with years of experience and international training, dedicated to providing exceptional healthcare
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600"></div>
            <p className="mt-4 text-gray-600">Loading our expert doctors...</p>
          </div>
        )}

        {!loading && (
          <>
            {/* Doctors Grid with Detailed Biographies */}
            <div className="space-y-16 max-w-6xl mx-auto">
              {doctors.map((doctor) => (
                <div key={doctor._id} className="space-y-8">
                  {/* Doctor Card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <DoctorCard doctor={doctor} />
                    
                    {/* Detailed Biography Section */}
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl border-2 border-gray-200">
                      <div className="mb-6">
                        <div className="inline-block bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
                          <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                          PROFESSIONAL PROFILE
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                        <p className="text-lg text-primary-600 font-semibold">{doctor.specialty}</p>
                      </div>

                      {/* Detailed Information */}
                      <div className="space-y-6">
                        {doctor.name.includes('Karthik') && (
                          <>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                                <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                Education & Training
                              </h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                  <span className="text-green-600 mr-2 mt-1">•</span>
                                  <span>MBBS - Dr. NTR University of Health Sciences (2014)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-600 mr-2 mt-1">•</span>
                                  <span>MS Orthopaedics - Dr. NTR University of Health Sciences (2017)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-600 mr-2 mt-1">•</span>
                                  <span>FIAS - Fellowship in Arthroscopy & Sports Medicine (AMD, Gujarat)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-green-600 mr-2 mt-1">•</span>
                                  <span>FIJR - Fellowship in Joint Replacement (Sunshine, Hyderabad)</span>
                                </li>

                              </ul>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                                <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Experience & Expertise
                              </h4>
                              <p className="text-gray-700 leading-relaxed mb-3">
                                With 12 years of overall experience including 9 years as a specialist, Dr. Karthik Paidi is an expert in joint replacement surgery and orthopaedic trauma care. He has vast experience in arthroscopic surgeries including knee arthroscopy (meniscal & ligament surgeries) and shoulder procedures (rotator cuff & labral repair).
                              </p>
                              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                                <p className="text-sm font-semibold text-green-900 mb-1">Senior Residency</p>
                                <p className="text-sm text-green-800">KGH, AMC & Apollo Hospitals</p>
                              </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                                <svg className="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Awards & Recognition
                              </h4>
                              <div className="space-y-3">
                                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                                  <p className="text-sm font-semibold text-yellow-900 mb-1">🏆 Gold Medal (2016)</p>
                                  <p className="text-sm text-yellow-800">Best Paper Presentation Award</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                  <p className="text-sm font-semibold text-blue-900 mb-1">👨‍⚕️ Fellowship Training</p>
                                  <p className="text-sm text-blue-800">Trained under Dr. Prathmesh Jain, one of India's best arthroscopy surgeons</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                                <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                                Specialized Services
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {[
                                  'Joint Replacement',
                                  'Arthroscopy Surgery',
                                  'ACL/PCL Repair',
                                  'Sports Medicine',
                                  'Trauma Surgery',
                                  'Fracture Management',
                                  'Shoulder Surgery',
                                  'Knee Surgery'
                                ].map((service, idx) => (
                                  <div key={idx} className="flex items-center text-sm">
                                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">{service}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                                <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Minimally Invasive Expertise
                              </h4>
                              <p className="text-gray-700 leading-relaxed">
                                Dr. Karthik specializes in arthroscopy surgery, a minimally invasive keyhole surgery technique that provides faster rehabilitation and quicker return to normal activities. This advanced approach reduces recovery time and improves patient outcomes significantly.
                              </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md">
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                                <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Practice Location
                              </h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                  <span className="text-primary-600 mr-2 mt-1">📍</span>
                                  <div>
                                    <p className="font-semibold">Ruthvik Hospitals</p>
                                    <p className="text-sm text-gray-600">Opposite Visakha Eye Hospital, Near Vijetha Supermarket</p>
                                    <p className="text-sm text-gray-600">Anand Nagar, Pothinamallayya Palem, Visakhapatnam 530041</p>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            {/* Award Photo Section */}
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-md border-2 border-yellow-300">
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                                <svg className="w-6 h-6 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Gold Medal Award
                              </h4>
                              <div className="bg-white rounded-lg p-4 shadow-lg">
                                <img 
                                  src="/u2.jpeg" 
                                  alt="Dr. Karthik Paidi receiving Gold Medal for Best Paper Presentation"
                                  className="w-full h-auto rounded-lg shadow-md mb-3"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                                <div className="text-center">
                                  <p className="font-bold text-yellow-900 mb-1">🏆 Gold Medal Award (2016)</p>
                                  <p className="text-sm text-yellow-800">Received Gold Medal for the Best Paper Presentation</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Separator between doctors */}
                  {doctor.name.includes('Karthik') && (
                    <div className="border-t-4 border-gray-200 my-12"></div>
                  )}
                </div>
              ))}
            </div>



            {/* Call to Action */}
            <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book an Appointment?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Choose your preferred doctor and schedule your consultation today
              </p>
              <a
                href="/make-appointment"
                className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-yellow-300 hover:text-primary-800 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Appointment Now</span>
              </a>
            </div>
          </>
        )}
      </div>

    </Layout>
  );
}
