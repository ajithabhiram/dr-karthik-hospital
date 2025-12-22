const express = require('express');
const { Parser } = require('json2csv');
const Appointment = require('../models/Appointment');
const { generateToken, authMiddleware } = require('../utils/auth');

const router = express.Router();

// POST admin login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    const token = generateToken({ username, role: 'admin' });
    res.json({ token, user: { username, role: 'admin' } });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// GET export appointments as CSV (admin only)
router.get('/appointments/export', authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find().lean();

    const fields = [
      'fullName',
      'phone',
      'email',
      'preferredDate',
      'preferredTime',
      'approachingDoctor.name',
      'approachingDoctor.specialty',
      'approachingDoctor.phone',
      'reasonForVisit',
      'status',
      'createdAt'
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(appointments);

    res.header('Content-Type', 'text/csv');
    res.attachment('appointments.csv');
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
