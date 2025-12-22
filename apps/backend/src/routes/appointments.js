const express = require('express');
const { body, validationResult } = require('express-validator');
const supabase = require('../db/supabase');
const { authMiddleware } = require('../utils/auth');
const { sendAppointmentConfirmation } = require('../utils/mailer');

const router = express.Router();

// POST create appointment
router.post('/',
  [
    body('fullName').notEmpty().trim(),
    body('phone').notEmpty(),
    body('approachingDoctor.doctorId').notEmpty().withMessage('Approaching doctor is required'),
    body('approachingDoctor.name').notEmpty(),
    body('approachingDoctor.phone').notEmpty(),
    body('approachingDoctor.specialty').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const appointmentData = {
        full_name: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email || null,
        preferred_date: req.body.preferredDate || null,
        preferred_time: req.body.preferredTime || null,
        approaching_doctor: req.body.approachingDoctor,
        disease_category: req.body.diseaseCategory || null,
        reason_for_visit: req.body.reasonForVisit || null
      };

      const { data, error } = await supabase
        .from('appointments')
        .insert([appointmentData])
        .select()
        .single();

      if (error) throw error;

      // Prepare appointment object for email
      const appointment = {
        fullName: data.full_name,
        phone: data.phone,
        email: data.email,
        preferredDate: data.preferred_date,
        preferredTime: data.preferred_time,
        approachingDoctor: data.approaching_doctor,
        diseaseCategory: data.disease_category,
        reasonForVisit: data.reason_for_visit,
        createdAt: data.created_at
      };

      // Send email notification to hospital
      console.log('📧 Sending appointment notification to:', process.env.HOSPITAL_EMAIL);
      await sendAppointmentConfirmation(appointment);

      res.status(201).json({
        message: 'Appointment booked successfully',
        appointment: data
      });
    } catch (error) {
      console.error('Appointment creation error:', error);
      res.status(500).json({ error: 'Failed to book appointment. Please try again.' });
    }
  }
);

// GET all appointments (admin only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error('Get appointments error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
