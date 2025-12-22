import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Us - Dr Karthik Paidi (Ruthvik Hospitals)" description="Learn about Dr Karthik Paidi and our commitment to healthcare">
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
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            ABOUT DR KARTHIK PAIDI
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Trusted Orthopaedic Surgeon
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional orthopaedic care with compassion, expertise, and cutting-edge technology in Visakhapatnam
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hospital Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome to Dr Karthik Paidi (Ruthvik Hospitals)
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Located opposite to Visakha Eye Hospital, near Vijetha Supermarket in Anand Nagar, Pothinamallayya Palem, Visakhapatnam 530041. Dr. Karthik Paidi has been serving the community with dedication and excellence in orthopaedic care. We are committed to providing world-class orthopaedic healthcare services with a patient-first approach.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our state-of-the-art facility combines advanced orthopaedic technology with the expertise of Dr. Karthik Paidi to deliver comprehensive orthopaedic solutions. From joint replacements to arthroscopic surgeries and trauma care, we ensure every patient receives personalized care and attention.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At Dr Karthik Paidi (Ruthvik Hospitals), we are committed to providing exceptional orthopaedic healthcare services with compassion, 
                integrity, and excellence. Our mission is to improve the musculoskeletal health and mobility of our community through 
                quality orthopaedic care, advanced surgical techniques, and a patient-centered approach.
              </p>
            </div>

            <div className="card border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the leading orthopaedic healthcare provider in Visakhapatnam, recognized for our clinical excellence, 
                innovative surgical techniques, and compassionate care. We strive to set new standards in orthopaedic care delivery 
                and patient satisfaction.
              </p>
            </div>
          </div>

          <div className="card border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl text-primary-600 mr-3">✓</span>
                <div>
                  <strong className="text-lg text-gray-900">Patient First</strong>
                  <p className="text-gray-600 mt-1">Every decision prioritizes patient well-being</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl text-primary-600 mr-3">✓</span>
                <div>
                  <strong className="text-lg text-gray-900">Excellence</strong>
                  <p className="text-gray-600 mt-1">Highest standards in medical care</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl text-primary-600 mr-3">✓</span>
                <div>
                  <strong className="text-lg text-gray-900">Compassion</strong>
                  <p className="text-gray-600 mt-1">Treating every patient with empathy</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl text-primary-600 mr-3">✓</span>
                <div>
                  <strong className="text-lg text-gray-900">Innovation</strong>
                  <p className="text-gray-600 mt-1">Modern technology and best practices</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                <span className="text-2xl text-primary-600 mr-3">✓</span>
                <div>
                  <strong className="text-lg text-gray-900">Integrity</strong>
                  <p className="text-gray-600 mt-1">Operating with transparency and ethical standards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Facilities</h2>
              <p className="text-gray-700 text-lg">
                Located in Anand Nagar, Pothinamallayya Palem, Visakhapatnam
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, name: 'Modern Operation Theaters' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>, name: 'Advanced Diagnostic Equipment' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, name: 'Comfortable Patient Rooms' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>, name: '24/7 Emergency Services' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, name: 'In-house Pharmacy' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, name: 'Clinical Laboratory' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, name: 'ICU Facilities' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, name: 'Ambulance Services' }
              ].map((facility, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-center text-primary-600 mb-2">{facility.icon}</div>
                  <p className="text-sm font-semibold text-gray-800">{facility.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="card border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Ruthvik Hospitals</h2>
              <p className="text-gray-700 text-lg">
                We stand out for our commitment to excellence and patient care
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Specialists</h3>
                <p className="text-gray-600">Highly qualified doctors with years of experience in their respective fields</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Advanced Technology</h3>
                <p className="text-gray-600">Latest medical equipment and diagnostic tools for accurate treatment</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Affordable Care</h3>
                <p className="text-gray-600">Quality healthcare services at reasonable and transparent pricing</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Proven Track Record</h3>
                <p className="text-gray-600">Thousands of successful treatments and satisfied patients</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Personalized Care</h3>
                <p className="text-gray-600">Individual attention and customized treatment plans for each patient</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Patient Satisfaction</h3>
                <p className="text-gray-600">Dedicated to ensuring the best possible experience and outcomes</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="card bg-gradient-to-r from-primary-600 to-primary-800 text-white border-0 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Quality Orthopaedic Care</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Visit Dr. Karthik Paidi today and experience the difference that compassionate, expert orthopaedic care can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/make-appointment" className="btn-primary bg-white text-primary-600 hover:bg-yellow-300 hover:text-primary-800 px-8 py-4 text-lg font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
              <a href="/contact" className="btn-secondary bg-transparent border-3 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
