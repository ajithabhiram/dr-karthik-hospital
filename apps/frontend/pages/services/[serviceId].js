import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { servicesData } from '../../data/servicesData';

export default function ServiceDetail() {
  const router = useRouter();
  const { serviceId } = router.query;
  
  const service = servicesData[serviceId];

  // Scroll to top smoothly when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  if (!service) {
    return (
      <Layout title="Service Not Found">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button onClick={handleBack} className="btn-primary">
            Back to Services
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${service.name} - Ruthvik Hospitals`} description={service.overview}>
      {/* Hero Section WITHOUT Image */}
      <div className="relative bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-700 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <button onClick={handleBack} className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors cursor-pointer">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </button>
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4">
              {service.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-lg md:text-xl opacity-90">{service.tagline}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">{service.overview}</p>
            </div>
          </section>

          {/* Conditions Treated */}
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              Conditions Treated
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {service.conditions.map((condition, index) => (
                <li key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{condition}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Symptoms */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              Symptoms
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-6 mb-6">
              <p className="text-red-900 font-semibold mb-2">When to Seek Medical Attention:</p>
              <p className="text-red-800">If you experience any of the following symptoms, consult our specialists immediately.</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-4">
              {service.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md border-2 border-gray-100">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Diagnosis */}
          <section className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              Diagnosis
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{service.diagnosis.description}</p>
            <div className="space-y-4">
              {service.diagnosis.methods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{method.name}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Options */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              Treatment Options
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.treatmentOptions.map((option, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">{index + 1}</span>
                    {option.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{option.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Surgical Procedure */}
          <section className="mb-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Surgical Procedure
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{service.procedure.description}</p>
            <div className="space-y-4">
              {service.procedure.steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-indigo-100 border-l-4 border-indigo-500 rounded-r-xl p-6">
              <p className="text-indigo-900"><strong>Duration:</strong> {service.procedure.duration}</p>
              <p className="text-indigo-900 mt-2"><strong>Anesthesia:</strong> {service.procedure.anesthesia}</p>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Risks & Complications */}
          <section className="mb-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              Risks & Complications
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              While this procedure is generally safe, as with any surgery, there are potential risks and complications. Our experienced surgical team takes every precaution to minimize these risks.
            </p>
            <ul className="space-y-3">
              {service.risks.map((risk, index) => (
                <li key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{risk}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Recovery & Follow-Up */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Recovery & Follow-Up Care
            </h2>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-r-2xl p-6 mb-6">
              <p className="text-cyan-900 font-semibold">Recovery Timeline: {service.recovery.timeline}</p>
            </div>
            <div className="space-y-6">
              {service.recovery.stages.map((stage, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    {stage.period}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{stage.description}</p>
                  <div className="bg-cyan-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-cyan-900 mb-2">Care Instructions:</p>
                    <ul className="space-y-1">
                      {stage.instructions.map((instruction, idx) => (
                        <li key={idx} className="text-sm text-cyan-800 flex items-start gap-2">
                          <span className="text-cyan-600 mt-1">•</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-start gap-3">
                    <span className="text-purple-600 flex-shrink-0">Q{index + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Consultation?</h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Our expert team is here to answer your questions and provide the best care possible
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
          </section>
        </div>
      </div>
    </Layout>
  );
}
