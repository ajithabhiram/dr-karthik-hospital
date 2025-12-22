import Layout from '../components/Layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const serviceCategories = [
  {
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    description: 'Expert joint replacement, arthroscopy, and trauma care with state-of-the-art surgical techniques',
    color: 'from-green-600 to-emerald-600',
    services: [
      { id: 'hip-replacement', name: 'Total Hip Replacement', image: '/services/hip-replacement.jpg', excerpt: 'Advanced total hip arthroplasty.' },
      { id: 'knee-replacement', name: 'Total Knee Replacement', image: '/services/knee-replacement.jpg', excerpt: 'Total knee replacement surgery.' },
      { id: 'robotic-knee', name: 'Robotic Knee Replacement', image: '/services/robotic-knee.jpg', excerpt: 'Robotic-assisted knee replacement.' },
      { id: 'arthroscopy', name: 'Arthroscopic Surgeries', image: '/services/arthroscopy.jpg', excerpt: 'Minimally invasive joint surgery.' },
      { id: 'ligament-reconstruction', name: 'Ligament Reconstruction', image: '/services/ligament.jpg', excerpt: 'ACL, PCL, MCL reconstruction surgery.' },
      { id: 'orif', name: 'Fracture Fixation (ORIF)', image: '/services/orif.jpg', excerpt: 'Surgical treatment for complex fractures.' },
      { id: 'hand-wrist-surgery', name: 'Hand & Wrist Surgery', image: '/services/hand-surgery.jpg', excerpt: 'Specialized hand and wrist procedures.' },
      { id: 'limb-deformities', name: 'Limb Deformity Correction', image: '/services/limb-correction.jpg', excerpt: 'Correction of limb deformities.' },
      { id: 'oats', name: 'Cartilage Transfer (OATS)', image: '/services/oats.jpg', excerpt: 'Cartilage restoration procedure.' },
      { id: 'limb-lengthening', name: 'Limb Lengthening', image: '/services/limb-lengthening.jpg', excerpt: 'Limb lengthening surgery.' },
      { id: 'scoliosis', name: 'Scoliosis Correction', image: '/services/scoliosis.jpg', excerpt: 'Spinal deformity correction.' },
      { id: 'diabetic-foot-ortho', name: 'Diabetic Foot (Ortho)', image: '/services/diabetic-foot-ortho.jpg', excerpt: 'Orthopedic diabetic foot care.' }
    ]
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  // Save scroll position before navigating away
  useEffect(() => {
    const handleRouteChange = () => {
      sessionStorage.setItem('servicesScrollPosition', window.scrollY.toString());
    };

    // Save state before leaving the page
    window.addEventListener('beforeunload', handleRouteChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, []);

  // Restore scroll position when returning
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('servicesScrollPosition');
    
    if (savedScrollPosition !== null) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollPosition),
          behavior: 'smooth'
        });
      }, 100);
    }
  }, []);

  return (
    <Layout title="Our Services - Ruthvik Hospitals" description="Comprehensive surgical and medical services at Ruthvik Hospitals">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-sm mb-6 border border-white/20">
            COMPREHENSIVE HEALTHCARE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            Expert surgical and medical care with advanced technology and experienced specialists
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Surgical Services */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Specialized Surgical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any service to learn more about the procedure, treatment options, and recovery process
            </p>
          </div>

          {/* Doctor Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              Dr. Karthik Paidi - Orthopaedic Surgeon
            </div>
          </div>

          {/* Active Category Content */}
          {serviceCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-500 ${
                activeCategory === catIndex ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-8`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{category.category}</h3>
                    <p className="text-xl opacity-95">{category.doctor}</p>
                  </div>
                </div>
                <p className="text-lg md:text-xl opacity-95 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Services Grid with Images */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.id}`}
                    onClick={() => {
                      sessionStorage.setItem('servicesScrollPosition', window.scrollY.toString());
                    }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-primary-400"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img 
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className={`inline-block bg-gradient-to-r ${category.color} px-3 py-1 rounded-full text-white text-xs font-bold`}>
                          {category.category}
                        </div>
                      </div>
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-6">
                      <h4 className="font-bold text-gray-900 text-xl mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm mb-4">
                        {service.excerpt}
                      </p>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                        <span>Learn More</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Medical Consultation?</h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Contact us to schedule an appointment with our specialists or for more information about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917386361609"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-600 hover:bg-yellow-400 hover:text-primary-800 px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call +91-73863-61609</span>
              </a>
              <a
                href="/make-appointment"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-3 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-5 text-lg font-bold rounded-2xl shadow-xl transform hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
