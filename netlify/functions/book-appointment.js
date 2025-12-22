const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    
    // Validate required fields
    if (!body.fullName || !body.phone || !body.approachingDoctor) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
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

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Appointment booked successfully',
        appointment: data
      })
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to book appointment' })
    };
  }
};
