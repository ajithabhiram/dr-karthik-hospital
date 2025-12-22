-- ============================================
-- Update Doctors Table - Add New Columns
-- ============================================
-- Run this in Supabase SQL Editor to add new fields
-- for complete doctor information
-- ============================================

-- Add new columns to doctors table
ALTER TABLE doctors 
ADD COLUMN IF NOT EXISTS experience TEXT,
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS services TEXT,
ADD COLUMN IF NOT EXISTS languages TEXT,
ADD COLUMN IF NOT EXISTS awards TEXT;

-- ============================================
-- SUCCESS!
-- ============================================
-- New columns added: experience, description, services, languages, awards
-- Next step: Run seed command to update doctor data
-- Command: cd ruth && npm run seed
-- ============================================
