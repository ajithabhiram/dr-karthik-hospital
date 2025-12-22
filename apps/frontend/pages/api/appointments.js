import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    
    // Validate required fields
    if (!body.fullName || !body.phone || !body.approachingDoctor) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Insert appointment into Supabase
    const appointmentData = {
      full_name: body.fullName,
      phone: body.phone,
      email: body.email || null,
      preferred_date: body.preferredDate || null,
      preferred_time: body.preferredTime || null,
      approaching_doctor: body.approachingDoctor,
      disease_category: body.diseaseCategory || null,
      reason_for_visit: body.reasonForVisit || null
    };

    const { data, error } = await supabase
      .from('appointments')
      .insert([appointmentData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const emailHtml = `
        <h2>New Appointment Booking</h2>
        <p><strong>Patient Name:</strong> ${body.fullName}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email || 'Not provided'}</p>
        <p><strong>Preferred Date:</strong> ${body.preferredDate || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${body.preferredTime || 'Not specified'}</p>
        <p><strong>Doctor:</strong> ${body.approachingDoctor.name} (${body.approachingDoctor.specialty})</p>
        <p><strong>Reason for Visit:</strong> ${body.reasonForVisit || 'Not provided'}</p>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.HOSPITAL_EMAIL || process.env.EMAIL_USER,
        subject: `New Appointment: ${body.fullName}`,
        html: emailHtml
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails
    }

    return res.status(201).json({
      message: 'Appointment booked successfully',
      appointment: data
    });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Failed to book appointment' });
  }
}
