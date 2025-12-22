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
      const { data, error } = await supabase.storage.from('media').list('', {
        limit: 1000,
        sortBy: { column: 'created_at', order: 'desc' }
      });

      if (error) throw error;

      const photos = [];
      const videos = [];

      for (const item of data || []) {
        if (item.name === '.emptyFolderPlaceholder') continue;
        
        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(item.name);

        const mediaItem = {
          id: item.id || item.name,
          name: item.name,
          path: publicUrl,
          storagePath: item.name,
          title: item.metadata?.title || 'Uploaded Media',
          category: item.metadata?.category || 'General'
        };

        if (item.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          photos.push(mediaItem);
        } else if (item.name.match(/\.(mp4|mov|avi|webm)$/i)) {
          videos.push(mediaItem);
        }
      }

      setUploadedMedia({ photos, videos });
    } catch (err) {
      console.error('Load media error:', err);
      setError('Failed to load media');
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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
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

    setUploading(true);
    setError('');
    setSuccess('');

    try {
      const folder = uploadType === 'image' ? 'photos' : 'videos';
      const result = await uploadToSupabase(file, folder);

      setSuccess(`✅ ${uploadType === 'image' ? 'Photo' : 'Video'} uploaded successfully!`);
      
      setFile(null);
      setSelectedService('');
      document.getElementById('fileInput').value = '';
      
      await loadMedia();
      
      setTimeout(() => setSuccess(''), 5000);
      
    } catch (err) {
      setError('Upload failed. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (type, storagePath) => {
    if (deleteConfirm === storagePath) {
      try {
        await deleteFromSupabase(storagePath);
        setSuccess(`✅ ${type === 'photos' ? 'Photo' : 'Video'} deleted successfully!`);
        setDeleteConfirm(null);
        await loadMedia();
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Delete failed. Please try again.');
        console.error('Delete error:', err);
      }
    } else {
      setDeleteConfirm(storagePath);
      setTimeout(() => setDeleteConfirm(null), 5000);
    }
  };

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
    const allSelected = allKeys.every(key => selectedItems.includes(key));
    
    if (allSelected) {
      setSelectedItems(selectedItems.filter(key => !key.startsWith(type)));
    } else {
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
          if (mediaItem) {
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

                <button type="submit" className="w-full btn-primary text-lg py-4">
                  🔐 Login to Admin Panel
                </button>
              </form>

              <div className="mt-6 text-center">
                <button onClick={() => router.push('/')} className="text-primary-600 hover:text-primary-700 font-medium">
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
