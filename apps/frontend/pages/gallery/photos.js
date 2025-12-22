import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

export default function PhotosGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load photos from Supabase Storage
  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      // Load from Supabase Storage
      const { data, error } = await supabase.storage
        .from('media')
        .list('photos', {
          limit: 100,
          sortBy: { column: 'created_at', order: 'desc' }
        });

      if (error) throw error;

      const photosList = [];
      for (const item of data || []) {
        if (item.name === '.emptyFolderPlaceholder') continue;
        
        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(`photos/${item.name}`);

        photosList.push({
          id: item.id || item.name,
          name: item.name,
          path: publicUrl,
          title: item.metadata?.title || 'Hospital Photo'
        });
      }

      setPhotos(photosList);
    } catch (error) {
      console.error('Error loading photos from Supabase:', error);
      // Fallback to localStorage if Supabase fails
      try {
        const savedPhotos = localStorage.getItem('uploadedPhotos');
        if (savedPhotos) {
          setPhotos(JSON.parse(savedPhotos));
        }
      } catch (e) {
        console.error('Fallback error:', e);
      }
    } finally {
      setLoading(false);
    }
  };

  // Save scroll position when opening photo
  const handlePhotoClick = (photo) => {
    setScrollPosition(window.scrollY);
    setSelectedPhoto(photo);
  };

  // Restore scroll position when closing photo
  const handleClosePhoto = () => {
    setSelectedPhoto(null);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };



  return (
    <Layout title="Photo Gallery - Dr. Karthik Paidi" description="View surgical procedures and achievements">
      {/* Hero Section - Mobile Optimized */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            PHOTO GALLERY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">Surgical Photo Gallery</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
            View Dr. Karthik Paidi's surgical procedures, achievements, and medical expertise
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        {/* Back Button & Exit Button - Mobile Optimized */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-3">
          <Link href="/" className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-all hover:gap-3 px-4 py-2.5 sm:py-3 sm:px-0 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Exit Gallery</span>
          </Link>
        </div>

        {/* Photos Grid - Mobile Optimized: 2 columns on mobile, more on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handlePhotoClick(photo)}
              className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer border border-gray-200 sm:border-2 hover:border-blue-500"
            >
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-100">
                <img
                  src={photo.path}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                    <span className="inline-block bg-blue-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold mb-1 sm:mb-2">
                      {photo.category}
                    </span>
                    <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2">{photo.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {photos.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Photos Yet</h3>
            <p className="text-gray-600 mb-6">Photos will appear here once uploaded by Dr. Karthik</p>
            <Link href="/admin/media-upload" className="btn-primary inline-block">
              Upload Photos
            </Link>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={handleClosePhoto}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile: Top buttons inside modal */}
            <div className="flex justify-between items-center mb-2 sm:mb-0 sm:absolute sm:-top-14 sm:left-0 sm:right-0 gap-2">
              {/* Back to Gallery Button */}
              <button
                onClick={handleClosePhoto}
                className="flex-1 sm:flex-none bg-white hover:bg-primary-600 text-gray-900 hover:text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-full shadow-2xl transition-all transform hover:scale-105 border-2 sm:border-4 border-white font-bold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Back to Gallery</span>
                <span className="sm:hidden">Back</span>
              </button>

              {/* Close Button with X */}
              <button
                onClick={handleClosePhoto}
                className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-full shadow-2xl transition-all transform hover:scale-110 border-2 sm:border-4 border-white font-bold flex items-center justify-center gap-2 text-sm sm:text-base"
                aria-label="Close photo"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Close (X)</span>
              </button>
            </div>

            {/* Photo with Close Button on Image */}
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src={selectedPhoto.path}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain"
              />
              {/* Close X button on photo */}
              <button
                onClick={handleClosePhoto}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-600/90 hover:bg-red-700 text-white p-2 sm:p-3 rounded-full shadow-2xl transition-all transform hover:scale-110"
                aria-label="Close"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-4 sm:p-6 bg-gray-800 text-white">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">Dr. Karthik Paidi - Expert Orthopaedic Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
