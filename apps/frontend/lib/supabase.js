import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://scgrqhqqlzwxzacdypww.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZ3JxaHFxbHp3eHphY2R5cHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1MjA5MTMsImV4cCI6MjA4MTA5NjkxM30.MNoW4SQ6EOcVvr1Ab3UnUy1efMxYUjdxDSsvi5BAOE0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to upload file to Supabase Storage
export async function uploadToSupabase(file, folder = 'general') {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    console.log('Uploading to:', filePath);

    const { data, error } = await supabase.storage
      .from('media')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Supabase upload error:', error);
      throw error;
    }

    console.log('Upload successful:', data);

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    console.log('Public URL:', publicUrl);

    return {
      path: filePath,
      url: publicUrl,
      name: file.name
    };
  } catch (error) {
    console.error('Upload error details:', error);
    throw error;
  }
}

// Helper function to delete file from Supabase Storage
export async function deleteFromSupabase(filePath) {
  try {
    const { error } = await supabase.storage
      .from('media')
      .remove([filePath]);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
}

// Helper function to list all files
export async function listFiles(folder = '') {
  try {
    const { data, error } = await supabase.storage
      .from('media')
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('List files error:', error);
    throw error;
  }
}
