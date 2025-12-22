require('dotenv').config();
const express = require('express');
const cors = require('cors');
const supabase = require('./db/supabase');

const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const contactRouter = require('./routes/contact');
const adminRouter = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Supabase connection
(async () => {
  try {
    const { data, error } = await supabase.from('doctors').select('count');
    if (error) {
      console.log('⚠️  Supabase connection warning:', error.message);
      console.log('💡 Make sure to create tables in Supabase dashboard. Run: npm run migrate');
    } else {
      console.log('✅ Supabase connected');
    }
  } catch (err) {
    console.log('⚠️  Supabase connection check failed');
  }
})();

// Routes
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/contact', contactRouter);
app.use('/api/admin', adminRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

module.exports = app;


