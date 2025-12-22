import { useState } from 'react';

export default function SurgicalExcellence() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Advanced Orthopaedic Procedure',
      description: 'Dr. Karthik Paidi performing complex orthopaedic surgery with precision',
      thumbnail: '/videos/v1.mp4',
      videoUrl: '/videos/v1.mp4',
      category: 'Orthopaedic Surgery'
    },
    {
      id: 2,
      title: 'Joint Replacement Surgery',
      description: 'State-of-the-art joint replacement technique demonstration',
      thumbnail: '/videos/v2.mp4',
      videoUrl: '/videos/v2.mp4',
      category: 'Joint Replacement'
    },
    {
      id: 3,
      title: 'Arthroscopic Procedure',
      description: 'Minimally invasive arthroscopic surgery by Dr. Karthik',
      thumbnail: '/videos/v3.mp4',
      videoUrl: '/videos/v3.mp4',
      category: 'Arthroscopy'
    },
    {
      id: 4,
      title: 'Fracture Management',
      description: 'Expert fracture fixation and management techniques',
      thumbnail: '/videos/v4.mp4',
      videoUrl: '/videos/v4.mp4',
      category: 'Trauma Care'
    },
    {
      id: 5,
      title: 'Surgical Excellence',
      description: 'Demonstration of surgical expertise and patient care',
      thumbnail: '/videos/v5.mp4',
      videoUrl: '/videos/v5.mp4',
      category: 'General Orthopaedics'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
            🎥 SURGICAL EXCELLENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Watch Our Expert Surgeons in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the precision and expertise of Dr. Karthik Paidi through real surgical procedures. 
            See why patients trust us with their health.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative h-56 bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
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
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="w-10 h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {video.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-semibold text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Video
                  </span>
                  <span className="text-gray-400 text-xs">👨‍⚕️ Dr. Karthik Paidi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Impressed by Our Expertise?</h3>
            <p className="text-xl mb-6 opacity-90">
              Book a consultation with Dr. Karthik Paidi and experience world-class orthopaedic care
            </p>
            <a
              href="/doctors"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:text-primary-800 shadow-xl transform hover:scale-105 transition-all"
            >
              📅 Book Appointment with Dr. Karthik
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
                playsInline
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-gray-800">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-300">{selectedVideo.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
