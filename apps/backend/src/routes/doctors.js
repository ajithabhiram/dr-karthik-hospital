const express = require('express');
const { body, validationResult } = require('express-validator');
const supabase = require('../db/supabase');
const { authMiddleware } = require('../utils/auth');

const router = express.Router();

// GET all doctors with optional search and filter
router.get('/', async (req, res) => {
  try {
    const { q, specialty } = req.query;
    let query = supabase.from('doctors').select('*');

    if (q) {
      query = query.ilike('name', `%${q}%`);
    }

    if (specialty) {
      query = query.ilike('specialty', `%${specialty}%`);
    }

    // Order by created_at to maintain insertion order (Dr. Shalini first)
    const { data, error } = await query.order('created_at', { ascending: true });

    if (error) throw error;

    // Transform snake_case to camelCase for frontend
    const doctors = data.map(doc => ({
      _id: doc.id,
      id: doc.id,
      name: doc.name,
      qualifications: doc.qualifications,
      specialty: doc.specialty,
      phone: doc.phone,
      email: doc.email,
      photoUrl: doc.photo_url,
      availability: doc.availability,
      createdAt: doc.created_at
    }));

    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single doctor
router.get('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('doctors')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    const doctor = {
      _id: data.id,
      id: data.id,
      name: data.name,
      qualifications: data.qualifications,
      specialty: data.specialty,
      phone: data.phone,
      email: data.email,
      photoUrl: data.photo_url,
      availability: data.availability,
      createdAt: data.created_at
    };

    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create doctor (admin only)
router.post('/',
  authMiddleware,
  [
    body('name').notEmpty().trim(),
    body('qualifications').notEmpty(),
    body('specialty').notEmpty(),
    body('phone').notEmpty(),
    body('email').isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { data, error } = await supabase
        .from('doctors')
        .insert([{
          name: req.body.name,
          qualifications: req.body.qualifications,
          specialty: req.body.specialty,
          phone: req.body.phone,
          email: req.body.email,
          photo_url: req.body.photoUrl || '/images/default-doctor.jpg',
          availability: req.body.availability
        }])
        .select()
        .single();

      if (error) throw error;

      res.status(201).json({
        _id: data.id,
        ...data
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// PUT update doctor (admin only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('doctors')
      .update({
        name: req.body.name,
        qualifications: req.body.qualifications,
        specialty: req.body.specialty,
        phone: req.body.phone,
        email: req.body.email,
        photo_url: req.body.photoUrl,
        availability: req.body.availability
      })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error || !data) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE doctor (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { error } = await supabase
      .from('doctors')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;

    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
