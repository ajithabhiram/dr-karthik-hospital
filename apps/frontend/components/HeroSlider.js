import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: '/u1.jpeg',
    title: 'Dr. Karthik Paidi',
    subtitle: 'Expert Orthopaedic Surgeon',
    description: 'Consultant Orthopaedic, Arthroscopic and Replacement Surgeon with 12 years of experience',
    position: 'top center'
  },
  {
    image: '/u2.jpeg',
    title: 'Gold Medal Award Winner',
    subtitle: 'Excellence in Orthopaedic Surgery',
    description: 'Received Gold Medal for the Best Paper Presentation (2016)',
    position: '30% center'
  },
  {
    image: '/u3.jpeg',
    title: 'Advanced Orthopaedic Care',
    subtitle: 'Joint Replacement & Arthroscopy Specialist',
    description: 'State-of-the-art surgical techniques for better patient outcomes',
    position: 'top center'
  },
  {
    image: '/u4.jpeg',
    title: 'Comprehensive Orthopaedic Services',
    subtitle: 'From Diagnosis to Recovery',
    description: 'Expert care for all bone and joint conditions at Ruthvik Hospitals',
    position: 'top center'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          {/* Split Screen Layout */}
          <div className="h-full grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT SIDE - PHOTO (Full, Clear, Visible) */}
            <div className="relative h-80 md:h-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                style={{ objectPosition: slide.position || 'top center' }}
              />
              {/* Subtle overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 md:hidden"></div>
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-blue-700 flex items-center justify-center p-6 md:p-8 lg:p-12">
              <div className="max-w-xl text-white animate-fade-in">
                
                {/* Hospital Logo */}
                <div className="mb-6 text-center md:text-left">
                  <div className="inline-block bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-all duration-300">
                    <img 
                      src="/ruthvik.png" 
                      alt="Ruthvik Hospitals Logo" 
                      className="h-14 md:h-16 lg:h-20 w-auto"
                    />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-center md:text-left">
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl mb-3 text-yellow-300 font-semibold text-center md:text-left">
                  {slide.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg mb-6 text-gray-100 leading-relaxed text-center md:text-left">
                  {slide.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Link
                    href="/make-appointment"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-base font-bold rounded-xl shadow-2xl hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Book Appointment</span>
                  </Link>
                  <Link
                    href="/doctors"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white text-white text-base font-bold rounded-xl shadow-xl hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Meet Our Doctor</span>
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 hover:bg-white/25 transition-all">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-200">24/7 Support</div>
                      <a href="tel:+917386361609" className="font-bold hover:text-yellow-300 transition-colors">
                        +91-73863-61609
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 hover:bg-white/25 transition-all">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-200">Location</div>
                      <span className="font-bold">Visakhapatnam, AP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-yellow-400'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
}
