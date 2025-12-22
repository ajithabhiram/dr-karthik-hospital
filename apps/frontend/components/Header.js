import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      {/* Premium Top Bar with Medical Theme */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-3 hidden md:block border-b-2 border-blue-700 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <a href="tel:+917386361609" className="flex items-center gap-2 hover:text-blue-200 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-bold">24/7 Support: +91-73863-61609</span>
              </a>
              <a href="mailto:ruthvikhospitals@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold">ruthvikhospitals@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full shadow-lg animate-pulse">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-bold">24/7 Emergency Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 border-b-2 border-gray-100 ${
        scrolled ? 'shadow-2xl py-2' : 'shadow-lg py-4'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src="/ruthvik.png" 
                  alt="Ruthvik Hospitals Logo" 
                  className="h-14 md:h-20 w-auto transform group-hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-xl"
                />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:via-blue-600 group-hover:to-blue-500 transition-all duration-300">
                  Dr Karthik Paidi (Ruthvik Hospitals)
                </div>
                <div className="text-xs md:text-sm text-gray-600 hidden md:flex items-center gap-2 font-bold mt-1">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  <span>Orthopaedic Surgeon • Visakhapatnam</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs ml-2">MBBS, MS, FIAS, FIJR</span>
                </div>
              </div>
            </Link>

          {/* Premium Desktop Menu */}
          <div className="hidden lg:flex space-x-2 items-center">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-bold relative group rounded-lg hover:bg-blue-50">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-bold relative group rounded-lg hover:bg-blue-50">
              About
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/services" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-bold relative group rounded-lg hover:bg-blue-50">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/doctors" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-bold relative group rounded-lg hover:bg-blue-50">
              Doctors
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-bold relative group rounded-lg hover:bg-blue-50">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/admin/media-upload" className="px-4 py-2 text-gray-500 hover:text-blue-600 transition-all duration-300 font-semibold relative group rounded-lg hover:bg-blue-50 text-sm">
              <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Admin
            </Link>
          </div>

          <Link href="/make-appointment" className="hidden lg:flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg border-2 border-green-400/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Book Appointment</span>
          </Link>

          {/* Premium Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Menu with Animation - Scrollable */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in border-t border-gray-200 pt-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            <Link 
              href="/" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link 
              href="/about" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </Link>
            <Link 
              href="/services" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Services
            </Link>
            <Link 
              href="/doctors" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Doctors
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
            
            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>
            
            {/* Gallery Links */}
            <Link 
              href="/gallery/photos" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Photo Gallery
            </Link>
            <Link 
              href="/gallery/videos" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-all font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Video Gallery
            </Link>
            
            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>
            
            {/* Book Appointment Button - Prominent */}
            <Link 
              href="/make-appointment" 
              className="flex items-center justify-center gap-2 mx-2 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>
            
            {/* Quick Contact Links */}
            <div className="px-2 pt-2 space-y-2">
              <a 
                href="tel:+917386361609" 
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now: +91-73863-61609
              </a>
              <a 
                href="https://wa.me/917386361609?text=Hello%20Dr.%20Karthik,%20I%20would%20like%20to%20book%20an%20appointment" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Chat
              </a>
            </div>
            
            {/* Admin Link */}
            <div className="px-2 pt-2">
              <Link 
                href="/admin/media-upload" 
                className="flex items-center gap-3 px-4 py-2 text-gray-500 hover:text-gray-700 text-sm rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Admin Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
