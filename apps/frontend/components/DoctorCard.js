export default function DoctorCard({ doctor }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-gray-200 hover:border-primary-300">
      {/* Doctor Image */}
      <div className="relative h-96 bg-gradient-to-b from-gray-50 to-gray-100">
        <img
          src={doctor.photo_url || doctor.photoUrl || '/u1.jpeg'}
          alt={doctor.name}
          className="w-full h-full object-cover object-top"
          loading="eager"
          onError={(e) => {
            console.error('Image failed to load:', doctor.photo_url || doctor.photoUrl);
            e.target.src = '/u1.jpeg';
          }}
        />
      </div>

      {/* Doctor Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{doctor.name}</h3>
        
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">Qualifications</p>
          <p className="text-gray-700 text-sm leading-relaxed">{doctor.qualifications}</p>
        </div>

        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">Specialty</p>
          <p className="text-gray-800 font-medium">{doctor.specialty}</p>
        </div>

        {doctor.experience && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">Experience</p>
            <p className="text-gray-700 text-sm font-medium">{doctor.experience}</p>
          </div>
        )}

        {doctor.description && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">About</p>
            <p className="text-gray-700 text-sm leading-relaxed">{doctor.description}</p>
          </div>
        )}

        {doctor.services && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">Services Provided</p>
            <p className="text-gray-700 text-sm leading-relaxed">{doctor.services}</p>
          </div>
        )}

        {doctor.languages && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">Languages</p>
            <div className="flex gap-2">
              {doctor.languages.split(',').map((lang, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {lang.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {doctor.awards && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2 flex items-center">
              <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Awards & Achievements
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{doctor.awards}</p>
          </div>
        )}

        {/* Contact Hospital Section */}
        <div className="mb-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
          <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contact for Appointment
          </p>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">For appointments and consultations:</p>
            <a href="tel:+917386361609" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold text-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91-73863-61609</span>
            </a>
            <p className="text-xs text-gray-500 mt-2">24/7 Hospital Support</p>
          </div>
        </div>

        {doctor.availability && (
          <div className="p-4 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl border border-primary-100">
            <p className="text-xs font-bold text-primary-700 uppercase tracking-wide mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Available Days
            </p>
            <div className="flex flex-wrap gap-2">
              {doctor.availability.weekdays?.map((day, index) => (
                <span key={index} className="px-3 py-1.5 bg-white text-primary-700 rounded-lg text-sm font-semibold shadow-sm border border-primary-200">
                  {day}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
