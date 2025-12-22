-- ============================================
-- Update Appointments Table - Add Disease Category
-- ============================================
-- Run this in Supabase SQL Editor
-- ============================================

-- Add disease_category column to appointments table
ALTER TABLE appointments 
ADD COLUMN IF NOT EXISTS disease_category TEXT;

-- ============================================
-- SUCCESS!
-- ============================================
-- New column added: disease_category
-- This will store the patient's medical condition/disease category
-- ============================================
