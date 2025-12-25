import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { uploadToSupabase, deleteFromSupabase, supabase } from '../../lib/supabase';

const ADMIN_PASSWORD = 'karthik@ruthvik';

export default function MediaUpload() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [uploadType, setUploadType] = useState('image');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState('');
  const [uploadedMedia, setUploadedMedia] = useState({ photos: [], videos: [] });
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const services = [
    { id: 'hip-replacement', name: 'Total Hip Replacement' },
    { id: 'knee-replacement', name: 'Total Knee Replacement' },
    { id: 'robotic-knee', name: 'Robotic Knee Replacement' },
    { id: 'arthroscopy', name: 'Arthroscopic Surgeries' },
    { id: 'ligament-reconstruction', name: 'Ligament Reconstruction' },
    { id: 'orif', name: 'Fracture Fixation (ORIF)' },
    { id: 'hand-wrist-surgery', name: 'Hand & Wrist Surgery' },
    { id: 'limb-deformities', name: 'Limb Deformity Correction' },
    { id: 'oats', name: 'Cartilage Transfer (OATS)' },
    { id: 'limb-lengthening', name: 'Limb Lengthening' },
    { id: 'scoliosis', name: 'Scoliosis Correction' },
    { id: 'diabetic-foot-ortho', name: 'Diabetic Foot (Orthopaedic)' }
  ];

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadMedia();
    }
  }, [isAuthenticated]);

  const loadMedia = async () => {
    setLoading(true);
    try {
      // Try loading from Supabase first
      try {
        const { data: photosData } = await supabase.storage.from('media').list('photos', { limit: 100 });
        const { data: videosData } = await supabase.storage.from('media').list('videos', { limit: 100 });

        const photos = (photosData || []).filter(item => item.name !== '.emptyFolderPlaceholder').map(item => {
          const { data: { publicUrl } } = supabase.storage.from('media').getPublicUrl(`photos/${item.name}`);
          return { id: item.name, name: item.name, path: publicUrl, storagePath: `photos/${item.name}`, title: item.name };
        });

        const videos = (videosData || []).filter(item => item.name !== '.emptyFolderPlaceholder').map(item => {
          const { data: { publicUrl } } = supabase.storage.from('media').getPublicUrl(`videos/${item.name}`);
          return { id: item.name, name: item.name, path: publicUrl, storagePath: `videos/${item.name}`, title: item.name };
        });

        setUploadedMedia({ photos, videos });
        console.log('Loaded from Supabase:', { photos: photos.length, videos: videos.length });
      } catch (supabaseError) {
        console.warn('Supabase load failed, loading from localStorage:', supabaseError);
        
        // Fallback to localStorage
        const savedPhotos = localStorage.getItem('uploadedPhotos');
        const savedVideos = localStorage.getItem('uploadedVideos');
        
        const photos = savedPhotos ? JSON.parse(savedPhotos) : [];
        const videos = savedVideos ? JSON.parse(savedVideos) : [];
        
        setUploadedMedia({ photos, videos });
        console.log('Loaded from localStorage:', { photos: photos.length, videos: videos.length });
      }
    } catch (err) {
      console.error('Load error:', err);
      // Set empty arrays if everything fails
      setUploadedMedia({ photos: [], videos: [] });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setPassword('');
  };

  // Bulk selection functions
  const handleSelectItem = (type, id) => {
    const itemKey = `${type}-${id}`;
    if (selectedItems.includes(itemKey)) {
      setSelectedItems(selectedItems.filter(i => i !== itemKey));
    } else {
      setSelectedItems([...selectedItems, itemKey]);
    }
  };

  const handleSelectAll = (type) => {
    const items = type === 'photos' ? uploadedMedia.photos : uploadedMedia.videos;
    const allKeys = items.map(item => `${type}-${item.id}`);
    
    // Check if all are already selected
    const allSelected = allKeys.every(key => selectedItems.includes(key));
    
    if (allSelected) {
      // Deselect all
      setSelectedItems(selectedItems.filter(key => !key.startsWith(type)));
    } else {
      // Select all
      const newSelected = [...selectedItems.filter(key => !key.startsWith(type)), ...allKeys];
      setSelectedItems(newSelected);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedItems.length === 0) {
      setError('Please select items to delete');
      setTimeout(() => setError(''), 3000);
      return;
    }

    if (confirm(`⚠️ Delete ${selectedItems.length} selected items? This cannot be undone!`)) {
      try {
        for (const item of selectedItems) {
          const [type, id] = item.split('-');
          const mediaItem = uploadedMedia[type].find(i => i.id === id);
          if (mediaItem && mediaItem.storagePath) {
            await deleteFromSupabase(mediaItem.storagePath);
          }
        }
        
        setSuccess(`✅ Successfully deleted ${selectedItems.length} items!`);
        setSelectedItems([]);
        await loadMedia();
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Bulk delete failed. Please try again.');
        console.error('Bulk delete error:', err);
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      if (uploadType === 'image') {
        if (!selectedFile.type.startsWith('image/')) {
          setError('Please select an image file (JPG, PNG, etc.)');
          return;
        }
      } else {
        if (!selectedFile.type.startsWith('video/')) {
          setError('Please select a video file (MP4, MOV, etc.)');
          return;
        }
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const fileSizeMB = file.size / (1024 * 1024);

    setUploading(true);
    setError('');
    setSuccess('');

    try {
      // Try Supabase first
      const folder = uploadType === 'image' ? 'photos' : 'videos';
      console.log('Attempting Supabase upload to:', folder, `(${fileSizeMB.toFixed(2)}MB)`);
      
      const result = await uploadToSupabase(file, folder);
      console.log('Supabase upload successful:', result);
      
      setSuccess(`✅ ${uploadType === 'image' ? 'Photo' : 'Video'} uploaded to Supabase successfully! (${fileSizeMB.toFixed(1)}MB)`);
      setFile(null);
      setSelectedService('');
      if (document.getElementById('fileInput')) {
        document.getElementById('fileInput').value = '';
      }
      
      await loadMedia();
      setTimeout(() => setSuccess(''), 5000);
    } catch (supabaseError) {
      console.error('Supabase upload failed:', supabaseError);
      
      // Check if file is too large for localStorage fallback
      if (fileSizeMB > 5) {
        setError(`❌ Upload failed. File too large (${fileSizeMB.toFixed(1)}MB). Supabase error: ${supabaseError.message || 'Connection failed'}. Please check Supabase setup.`);
        setUploading(false);
        return;
      }
      
      // Try localStorage fallback for small files only
      try {
        console.warn('Falling back to localStorage for small file...');
        
        const newId = Date.now();
        const fileName = file.name;
        
        // Convert file to base64
        const reader = new FileReader();
        const fileDataURL = await new Promise((resolve, reject) => {
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (e) => reject(e);
          reader.readAsDataURL(file);
        });

        // Try to save to localStorage with quota error handling
        try {
          if (uploadType === 'image') {
            const newPhoto = {
              id: newId,
              name: fileName,
              title: selectedService ? services.find(s => s.id === selectedService)?.name : 'General Photo',
              path: fileDataURL,
              category: selectedService ? services.find(s => s.id === selectedService)?.name : 'General',
              storagePath: `local-${newId}`
            };
            const savedPhotos = localStorage.getItem('uploadedPhotos');
            const existingPhotos = savedPhotos ? JSON.parse(savedPhotos) : [];
            const updatedPhotos = [...existingPhotos, newPhoto];
            localStorage.setItem('uploadedPhotos', JSON.stringify(updatedPhotos));
            setUploadedMedia(prev => ({ ...prev, photos: updatedPhotos }));
          } else {
            const newVideo = {
              id: newId,
              name: fileName,
              title: selectedService ? services.find(s => s.id === selectedService)?.name : 'General Video',
              path: fileDataURL,
              category: selectedService ? services.find(s => s.id === selectedService)?.name : 'General',
              storagePath: `local-${newId}`
            };
            const savedVideos = localStorage.getItem('uploadedVideos');
            const existingVideos = savedVideos ? JSON.parse(savedVideos) : [];
            const updatedVideos = [...existingVideos, newVideo];
            localStorage.setItem('uploadedVideos', JSON.stringify(updatedVideos));
            setUploadedMedia(prev => ({ ...prev, videos: updatedVideos }));
          }

          setSuccess(`✅ ${uploadType === 'image' ? 'Photo' : 'Video'} uploaded to localStorage! (${fileSizeMB.toFixed(1)}MB) - Note: Supabase failed, using local storage.`);
          setFile(null);
          setSelectedService('');
          if (document.getElementById('fileInput')) {
            document.getElementById('fileInput').value = '';
          }
          setTimeout(() => setSuccess(''), 5000);
        } catch (quotaError) {
          throw new Error(`localStorage quota exceeded. File too large (${fileSizeMB.toFixed(1)}MB). Please fix Supabase connection or use smaller files (<2MB).`);
        }
      } catch (fallbackError) {
        console.error('localStorage fallback failed:', fallbackError);
        setError(`❌ Upload failed: ${fallbackError.message}. Supabase is not working. Please check your Supabase bucket setup.`);
      }
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (type, itemId, storagePath) => {
    const confirmKey = `${type}-${itemId}`;
    
    if (deleteConfirm === confirmKey) {
      try {
        // Try Supabase first
        if (storagePath && !storagePath.startsWith('local-')) {
          try {
            await deleteFromSupabase(storagePath);
            console.log('Deleted from Supabase:', storagePath);
          } catch (supabaseError) {
            console.warn('Supabase delete failed:', supabaseError);
            throw supabaseError;
          }
        } else {
          // Delete from localStorage
          const storageKey = type === 'photos' ? 'uploadedPhotos' : 'uploadedVideos';
          const saved = localStorage.getItem(storageKey);
          if (saved) {
            const items = JSON.parse(saved);
            const updated = items.filter(item => item.id !== itemId);
            localStorage.setItem(storageKey, JSON.stringify(updated));
          }
        }
        
        setSuccess(`✅ ${type === 'photos' ? 'Photo' : 'Video'} deleted successfully!`);
        setDeleteConfirm(null);
        await loadMedia();
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError(`Delete failed: ${err.message}. Please try again.`);
        console.error('Delete error:', err);
        setTimeout(() => setError(''), 5000);
      }
    } else {
      setDeleteConfirm(confirmKey);
      setTimeout(() => setDeleteConfirm(null), 5000);
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout title="Admin Login - Media Upload">
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Access</h1>
                <p className="text-gray-600">Media Upload Panel</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Enter admin password"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded">
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  🔐 Login to Admin Panel
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => router.push('/')}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Media Upload - Admin Panel">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">🎯 Admin Control Panel</h1>
                <p className="text-gray-600">Manage photos and videos for Dr. Karthik's website</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn-secondary flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-xl p-2 mb-8">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveTab('upload')}
                className={`py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                  activeTab === 'upload'
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>📤 Upload Media</span>
              </button>
              <button
                onClick={() => setActiveTab('delete')}
                className={`py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                  activeTab === 'delete'
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>🗑️ Delete Media</span>
              </button>
            </div>
          </div>

          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload Media
              </h2>

              <form onSubmit={handleUpload} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Surgery/Service <span className="text-gray-400">(Optional)</span>
                  </label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="input-field"
                  >
                    <option value="">-- Choose a service (optional) --</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Leave empty for general gallery photos/videos</p>
                </div>

                {/* Upload Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Media Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUploadType('image')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        uploadType === 'image'
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">Photo</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUploadType('video')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        uploadType === 'video'
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">Video</span>
                    </button>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="fileInput" className="block text-sm font-semibold text-gray-700 mb-2">
                    Select {uploadType === 'image' ? 'Image' : 'Video'} File <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    accept={uploadType === 'image' ? 'image/*' : 'video/*'}
                    className="input-field"
                    required
                  />
                  {file && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Selected:</strong> {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    </div>
                  )}
                </div>

                {/* Messages */}
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded">
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded">
                    <p className="font-medium">{success}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Upload {uploadType === 'image' ? 'Photo' : 'Video'}
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Media Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{uploadedMedia.photos.length}</div>
                    <div className="text-sm text-gray-600 mt-1">Photos</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-red-600">{uploadedMedia.videos.length}</div>
                    <div className="text-sm text-gray-600 mt-1">Videos</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Quick Tips
                </h3>
                <ul className="space-y-2 text-green-900 text-sm">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Upload high-quality images (1920x1080px recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Use MP4 format for videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Service selection is optional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Click delete twice to confirm removal</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          )}

          {/* Delete Tab */}
          {activeTab === 'delete' && (
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-xl p-8 border-4 border-red-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-red-900 mb-3">🗑️ Delete Media Center</h2>
                <p className="text-lg text-red-700 mb-2">Exclusive Admin Power - Delete Photos & Videos</p>
                <div className="inline-block bg-red-100 border-2 border-red-300 text-red-800 px-6 py-2 rounded-full font-bold text-sm">
                  ⚠️ Click DELETE twice to confirm removal
                </div>
              </div>

              {/* Delete Management Section */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
                {/* Header with Bulk Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-red-900 flex items-center gap-3">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete Media Manager
                    </h2>
                    {selectedItems.length > 0 && (
                      <p className="text-sm text-primary-600 font-bold mt-1">
                        ✓ {selectedItems.length} items selected
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedItems.length > 0 && (
                      <button
                        onClick={handleBulkDelete}
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-all transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete Selected ({selectedItems.length})
                      </button>
                    )}
                    <button
                      onClick={async () => {
                        if (window.confirm('⚠️ Are you sure you want to delete ALL photos? This cannot be undone!')) {
                          try {
                            // Delete all photos from Supabase
                            for (const photo of uploadedMedia.photos) {
                              if (photo.storagePath && !photo.storagePath.startsWith('local-')) {
                                try {
                                  await deleteFromSupabase(photo.storagePath);
                                } catch (err) {
                                  console.warn('Failed to delete:', photo.storagePath, err);
                                }
                              }
                            }
                            // Clear localStorage
                            localStorage.setItem('uploadedPhotos', JSON.stringify([]));
                            setSelectedItems([]);
                            await loadMedia();
                            setSuccess('✅ All photos deleted successfully!');
                            setTimeout(() => setSuccess(''), 3000);
                          } catch (err) {
                            setError('Failed to delete all photos. Please try again.');
                            console.error('Delete all photos error:', err);
                          }
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-all transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete All Photos
                    </button>
                    <button
                      onClick={async () => {
                        if (window.confirm('⚠️ Are you sure you want to delete ALL videos? This cannot be undone!')) {
                          try {
                            // Delete all videos from Supabase
                            for (const video of uploadedMedia.videos) {
                              if (video.storagePath && !video.storagePath.startsWith('local-')) {
                                try {
                                  await deleteFromSupabase(video.storagePath);
                                } catch (err) {
                                  console.warn('Failed to delete:', video.storagePath, err);
                                }
                              }
                            }
                            // Clear localStorage
                            localStorage.setItem('uploadedVideos', JSON.stringify([]));
                            setSelectedItems([]);
                            await loadMedia();
                            setSuccess('✅ All videos deleted successfully!');
                            setTimeout(() => setSuccess(''), 3000);
                          } catch (err) {
                            setError('Failed to delete all videos. Please try again.');
                            console.error('Delete all videos error:', err);
                          }
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-all transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete All Videos
                    </button>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="🔍 Search photos or videos by name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-lg"
                    />
                    <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                    {/* Photos Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between bg-red-100 p-4 rounded-xl border-2 border-red-300 mb-4">
                    <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      📸 Delete Photos ({uploadedMedia.photos.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.name.toLowerCase().includes(searchTerm.toLowerCase())).length} {searchTerm ? 'found' : 'total'})
                    </h3>
                    {uploadedMedia.photos.length > 0 && (
                      <button
                        onClick={() => handleSelectAll('photos')}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={uploadedMedia.photos.every(p => selectedItems.includes(`photos-${p.id}`))}
                          onChange={() => {}}
                          className="w-4 h-4"
                        />
                        Select All Photos
                      </button>
                    )}
                  </div>
                  {uploadedMedia.photos.length === 0 ? (
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-600 font-semibold">No photos to delete</p>
                      <p className="text-sm text-gray-500 mt-1">Upload photos first from the Upload tab</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {uploadedMedia.photos.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((photo) => (
                        <div key={photo.id} className={`relative group bg-white rounded-xl overflow-hidden shadow-lg border-2 transition-all ${
                          selectedItems.includes(`photos-${photo.id}`) ? 'border-blue-500 ring-4 ring-blue-200' : 'border-red-200'
                        }`}>
                          <img src={photo.path} alt={photo.title} className="w-full h-32 object-cover" />
                          <div className="p-2 bg-gray-50">
                            <p className="text-xs text-gray-600 truncate">{photo.title}</p>
                          </div>
                          {/* Checkbox */}
                          <div className="absolute top-2 left-2">
                            <input
                              type="checkbox"
                              checked={selectedItems.includes(`photos-${photo.id}`)}
                              onChange={() => handleSelectItem('photos', photo.id)}
                              className="w-6 h-6 cursor-pointer"
                            />
                          </div>
                          {/* Delete Button */}
                          <button
                            onClick={() => handleDelete('photos', photo.id, photo.storagePath)}
                            className={`absolute top-2 right-2 p-3 rounded-xl font-bold transition-all shadow-xl ${
                              deleteConfirm === `photos-${photo.id}`
                                ? 'bg-red-600 text-white scale-110'
                                : 'bg-white/95 text-red-600 hover:bg-red-600 hover:text-white'
                            }`}
                          >
                            {deleteConfirm === `photos-${photo.id}` ? '✓ Confirm?' : '🗑️'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Videos Section */}
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2 bg-red-100 p-4 rounded-xl border-2 border-red-300">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    🎥 Delete Videos ({uploadedMedia.videos.filter(v => v.title.toLowerCase().includes(searchTerm.toLowerCase()) || v.name.toLowerCase().includes(searchTerm.toLowerCase())).length} {searchTerm ? 'found' : 'total'})
                  </h3>
              {uploadedMedia.videos.length === 0 ? (
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-semibold">No videos uploaded yet</p>
                  <p className="text-sm text-gray-500 mt-1">Upload videos using the form above</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploadedMedia.videos.filter(v => v.title.toLowerCase().includes(searchTerm.toLowerCase()) || v.name.toLowerCase().includes(searchTerm.toLowerCase())).map((video) => (
                    <div key={video.id} className="relative group bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900">{video.title}</p>
                          <p className="text-xs text-gray-500">{video.name}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete('videos', video.id, video.storagePath)}
                        className={`w-full py-2 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                          deleteConfirm === `videos-${video.id}`
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-red-600 hover:bg-red-600 hover:text-white border-2 border-red-600'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {deleteConfirm === `videos-${video.id}` ? 'Click Again to Confirm' : 'Delete Video'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

              </div>
            </div>
          )}

          {/* Quick Links - Always Visible */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Link
              href="/gallery/photos"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              👁️ View Photos Gallery
            </Link>
            <Link
              href="/gallery/videos"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              👁️ View Videos Gallery
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
