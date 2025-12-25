import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

export default function VideosGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([
    { num: 1, title: 'Orthopaedic Surgery', category: 'Advanced Procedure', icon: '🏥' },
    { num: 2, title: 'ACL Surgery', category: 'Surgical Technique', icon: '🦴' },
    { num: 3, title: 'Arthroscopic Surgery', category: 'Minimally Invasive', icon: '⚕️' },
    { num: 4, title: 'Joint Replacement Surgery', category: 'Advanced Procedure', icon: '🚑' },
    { num: 5, title: 'Surgical Excellence', category: 'Expert Demonstration', icon: '⭐' }
  ]);

  // Save scroll position when opening video
  const handleVideoClick = (video) => {
    setScrollPosition(window.scrollY);
    setSelectedVideo(video);
  };

  // Restore scroll position when closing video
  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  // Load videos from Supabase Storage
  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    const defaultVideos = [
      { num: 1, title: 'Orthopaedic Surgery', category: 'Advanced Procedure', icon: '🏥', path: '/videos/v1.mp4' },
      { num: 2, title: 'ACL Surgery', category: 'Surgical Technique', icon: '🦴', path: '/videos/v2.mp4' },
      { num: 3, title: 'Arthroscopic Surgery', category: 'Minimally Invasive', icon: '⚕️', path: '/videos/v3.mp4' },
      { num: 4, title: 'Joint Replacement Surgery', category: 'Advanced Procedure', icon: '🚑', path: '/videos/v4.mp4' },
      { num: 5, title: 'Surgical Excellence', category: 'Expert Demonstration', icon: '⭐', path: '/videos/v5.mp4' }
    ];

    try {
      // Load from Supabase Storage with cache busting
      const { data, error } = await supabase.storage
        .from('media')
        .list('videos', {
          limit: 100,
          sortBy: { column: 'created_at', order: 'desc' }
        });

      if (error) throw error;

      const supabaseVideos = [];
      for (const item of data || []) {
        if (item.name === '.emptyFolderPlaceholder') continue;
        
        // Add cache busting timestamp to URL
        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(`videos/${item.name}`);

        const urlWithCache = `${publicUrl}?t=${Date.now()}`;

        supabaseVideos.push({
          num: `supabase-${item.name}`,
          title: item.metadata?.title || item.name.replace(/\.[^/.]+$/, ''),
          category: 'Uploaded Video',
          icon: '📹',
          path: urlWithCache,
          isSupabase: true
        });
      }

      // Combine default videos with Supabase videos
      const allVideos = [...defaultVideos, ...supabaseVideos];
      setVideos(allVideos);
      console.log('Loaded videos:', { default: defaultVideos.length, supabase: supabaseVideos.length, total: allVideos.length });
    } catch (error) {
      console.error('Error loading videos from Supabase:', error);
      // Fallback to localStorage
      try {
        const savedVideos = localStorage.getItem('uploadedVideos');
        if (savedVideos) {
          const userVideos = JSON.parse(savedVideos);
          const formattedUserVideos = userVideos.map(v => ({
            num: `local-${v.id}`,
            title: v.title,
            category: v.category || 'User Upload',
            icon: '📹',
            path: v.path,
            isLocal: true
          }));
          setVideos([...defaultVideos, ...formattedUserVideos]);
          console.log('Loaded videos from localStorage:', formattedUserVideos.length);
        } else {
          setVideos(defaultVideos);
        }
      } catch (e) {
        console.error('Fallback error:', e);
        setVideos(defaultVideos);
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        handleCloseVideo();
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <Layout title="Video Gallery - Dr. Karthik Paidi" description="Watch surgical procedures and techniques">
      {/* Hero Section - Mobile Optimized */}
      <div className="relative bg-gradient-to-r from-red-600 via-pink-700 to-purple-800 text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            VIDEO GALLERY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">Surgical Video Gallery</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
            Watch Dr. Karthik Paidi's surgical expertise and advanced techniques
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
          <div className="flex gap-2">
            <button
              onClick={() => {
                setLoading(true);
                loadVideos();
              }}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-bold shadow-lg transition-all transform hover:scale-105 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Refresh</span>
            </button>
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Exit Gallery</span>
            </Link>
          </div>
        </div>

        {/* Videos Grid - Mobile Optimized: 1 column on mobile for better video viewing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.num}
              onClick={() => handleVideoClick(video)}
              className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer border border-gray-200 sm:border-2 hover:border-red-500"
            >
              <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-900 to-gray-800">
                <video
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                >
                  <source src={video.path || `/videos/v${video.num}.mp4`} type="video/mp4" />
                </video>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/40 transition-all">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm text-red-700 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-bold shadow-lg flex items-center gap-1 sm:gap-1.5">
                  <span className="text-sm sm:text-lg">{video.icon}</span>
                  <span className="text-xs sm:text-xs">Video {video.num}</span>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-6 bg-white">
                <h4 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl mb-1 sm:mb-2 group-hover:text-red-600 transition-colors line-clamp-1">{video.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{video.category}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">Click to watch</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Mobile Optimized */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Schedule Your Consultation</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
              Experience world-class orthopaedic care with Dr. Karthik Paidi
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/make-appointment"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-primary-800 shadow-xl transform hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+917386361609"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 shadow-xl transform hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call 24/7</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={handleCloseVideo}
        >
          <div
            className="relative max-w-6xl w-full bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile: Top buttons inside modal */}
            <div className="flex justify-between items-center p-3 sm:p-0 sm:mb-0 sm:absolute sm:-top-14 sm:left-0 sm:right-0 gap-2 bg-gray-900 sm:bg-transparent">
              {/* Back to Gallery Button */}
              <button
                onClick={handleCloseVideo}
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
                onClick={handleCloseVideo}
                className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-full shadow-2xl transition-all transform hover:scale-110 border-2 sm:border-4 border-white font-bold flex items-center justify-center gap-2 text-sm sm:text-base"
                aria-label="Close video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Close (X)</span>
              </button>
            </div>

            {/* Video Player with Close Button on Video */}
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
                playsInline
                key={selectedVideo.num}
              >
                <source src={selectedVideo.path || `/videos/v${selectedVideo.num}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Close X button on video */}
              <button
                onClick={handleCloseVideo}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-600/90 hover:bg-red-700 text-white p-2 sm:p-3 rounded-full shadow-2xl transition-all transform hover:scale-110 z-10"
                aria-label="Close"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Info */}
            <div className="p-4 sm:p-6 bg-gray-800">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-3">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3">Performed by Dr. Karthik Paidi - Expert Orthopaedic Surgeon</p>
                  <div className="hidden sm:flex items-center gap-4 text-gray-400 text-sm">
                    <span>💡 Press <kbd className="px-2 py-1 bg-gray-700 rounded border border-gray-600">ESC</kbd> to close</span>
                    <span>👆 Click outside to close</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
