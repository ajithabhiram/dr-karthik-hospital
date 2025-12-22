const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('\n⚠️  ========================================');
  console.warn('⚠️  SUPABASE CREDENTIALS NOT CONFIGURED');
  console.warn('⚠️  ========================================');
  console.warn('⚠️  Please set up Supabase to use the backend:');
  console.warn('⚠️  1. Go to https://supabase.com');
  console.warn('⚠️  2. Create a new project (free)');
  console.warn('⚠️  3. Get your Project URL and anon key');
  console.warn('⚠️  4. Update apps/backend/.env file');
  console.warn('⚠️  ');
  console.warn('⚠️  See START_HERE.md for detailed instructions');
  console.warn('⚠️  ========================================\n');
  
  // Create a dummy client to prevent crashes
  const supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
  module.exports = supabase;
} else {
  const supabase = createClient(supabaseUrl, supabaseKey);
  module.exports = supabase;
}
