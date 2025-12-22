-- ============================================
-- Ruthvik Hospitals - Supabase Database Schema
-- ============================================
-- Copy and paste this entire file into Supabase SQL Editor
-- Then click "Run" to create all tables and indexes
-- ============================================

-- Doctors table
CREATE TABLE doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  qualifications TEXT NOT NULL,
  specialty TEXT NOT NULL,
  experience TEXT,
  description TEXT,
  services TEXT,
  languages TEXT,
  awards TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  photo_url TEXT DEFAULT '/images/default-doctor.jpg',
  availability JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Appointments table
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  preferred_date DATE,
  preferred_time TEXT,
  approaching_doctor JSONB NOT NULL,
  disease_category TEXT,
  reason_for_visit TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX idx_doctors_specialty ON doctors(specialty);
CREATE INDEX idx_doctors_name ON doctors(name);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_created_at ON appointments(created_at DESC);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- ============================================
-- SUCCESS!
-- ============================================
-- If you see "Success. No rows returned", tables are created!
-- Next step: Update .env file with your Supabase credentials
-- Then run: npm run seed
-- ============================================
