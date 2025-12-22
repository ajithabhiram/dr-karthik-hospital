-- ============================================
-- SUPABASE STORAGE POLICIES FOR MEDIA BUCKET
-- ============================================
-- Run this in Supabase SQL Editor to fix upload issues
-- This allows public access to upload, view, and delete files

-- 1. Enable RLS on storage.objects (if not already enabled)
-- This is usually already enabled by default

-- 2. Create policy to allow PUBLIC uploads to media bucket
CREATE POLICY "Allow public uploads to media bucket"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'media');

-- 3. Create policy to allow PUBLIC to view/download from media bucket
CREATE POLICY "Allow public downloads from media bucket"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'media');

-- 4. Create policy to allow PUBLIC to update files in media bucket
CREATE POLICY "Allow public updates to media bucket"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'media')
WITH CHECK (bucket_id = 'media');

-- 5. Create policy to allow PUBLIC to delete files from media bucket
CREATE POLICY "Allow public deletes from media bucket"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'media');

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Run these to verify policies were created:

-- Check if policies exist:
SELECT * FROM pg_policies WHERE tablename = 'objects' AND schemaname = 'storage';

-- Check bucket configuration:
SELECT * FROM storage.buckets WHERE id = 'media';
