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
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Appointment Booking</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                        🏥 Ruthvik Hospitals
                      </h1>
                      <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">
                        Dr. Karthik Paidi - Orthopaedic Surgeon
                      </p>
                    </td>
                  </tr>

                  <!-- Alert Banner -->
                  <tr>
                    <td style="background-color: #fef3c7; padding: 15px 30px; border-left: 4px solid #f59e0b;">
                      <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: bold;">
                        ⚠️ NEW APPOINTMENT BOOKING - Immediate Action Required
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <h2 style="color: #1e40af; margin: 0 0 20px 0; font-size: 22px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                        📋 Appointment Details
                      </h2>

                      <!-- Patient Information -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 12px; background-color: #f9fafb; border-radius: 8px;">
                            <table width="100%" cellpadding="8" cellspacing="0">
                              <tr>
                                <td width="40%" style="color: #6b7280; font-size: 14px; font-weight: bold;">👤 Patient Name:</td>
                                <td style="color: #111827; font-size: 16px; font-weight: bold;">${body.fullName}</td>
                              </tr>
                              <tr>
                                <td style="color: #6b7280; font-size: 14px; font-weight: bold;">📱 Phone:</td>
                                <td style="color: #111827; font-size: 16px;">
                                  <a href="tel:${body.phone}" style="color: #2563eb; text-decoration: none;">${body.phone}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="color: #6b7280; font-size: 14px; font-weight: bold;">✉️ Email:</td>
                                <td style="color: #111827; font-size: 16px;">
                                  ${body.email ? `<a href="mailto:${body.email}" style="color: #2563eb; text-decoration: none;">${body.email}</a>` : '<span style="color: #9ca3af;">Not provided</span>'}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Appointment Schedule -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 12px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
                            <table width="100%" cellpadding="8" cellspacing="0">
                              <tr>
                                <td width="40%" style="color: #1e40af; font-size: 14px; font-weight: bold;">📅 Preferred Date:</td>
                                <td style="color: #111827; font-size: 16px; font-weight: bold;">
                                  ${body.preferredDate || '<span style="color: #9ca3af;">Not specified</span>'}
                                </td>
                              </tr>
                              <tr>
                                <td style="color: #1e40af; font-size: 14px; font-weight: bold;">⏰ Preferred Time:</td>
                                <td style="color: #111827; font-size: 16px; font-weight: bold;">
                                  ${body.preferredTime || '<span style="color: #9ca3af;">Not specified</span>'}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Doctor Information -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 12px; background-color: #f0fdf4; border-radius: 8px; border-left: 4px solid #10b981;">
                            <table width="100%" cellpadding="8" cellspacing="0">
                              <tr>
                                <td width="40%" style="color: #065f46; font-size: 14px; font-weight: bold;">👨‍⚕️ Consulting Doctor:</td>
                                <td style="color: #111827; font-size: 16px; font-weight: bold;">${body.approachingDoctor.name}</td>
                              </tr>
                              <tr>
                                <td style="color: #065f46; font-size: 14px; font-weight: bold;">🏥 Specialty:</td>
                                <td style="color: #111827; font-size: 14px;">${body.approachingDoctor.specialty}</td>
                              </tr>
                              <tr>
                                <td style="color: #065f46; font-size: 14px; font-weight: bold;">📞 Doctor Phone:</td>
                                <td style="color: #111827; font-size: 14px;">
                                  <a href="tel:${body.approachingDoctor.phone}" style="color: #2563eb; text-decoration: none;">${body.approachingDoctor.phone}</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Medical Concern -->
                      ${body.reasonForVisit ? `
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                        <tr>
                          <td style="padding: 15px; background-color: #fef2f2; border-radius: 8px; border-left: 4px solid #ef4444;">
                            <p style="margin: 0 0 8px 0; color: #991b1b; font-size: 14px; font-weight: bold;">📝 Reason for Visit / Medical Concern:</p>
                            <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.6;">${body.reasonForVisit}</p>
                          </td>
                        </tr>
                      </table>
                      ` : ''}

                      <!-- Action Required -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                        <tr>
                          <td style="padding: 20px; background-color: #fef3c7; border-radius: 8px; text-align: center;">
                            <p style="margin: 0 0 15px 0; color: #92400e; font-size: 16px; font-weight: bold;">
                              ⚡ Action Required
                            </p>
                            <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                              Please contact the patient as soon as possible to confirm the appointment and provide further instructions.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 10px 0; color: #111827; font-size: 16px; font-weight: bold;">
                        🏥 Ruthvik Hospitals
                      </p>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">
                        Opposite to Visakha Eye Hospital, Near Vijetha Supermarket<br>
                        Anand Nagar, Pothinamallayya Palem, Visakhapatnam - 530041
                      </p>
                      <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 13px;">
                        📞 <a href="tel:+917386361609" style="color: #2563eb; text-decoration: none;">+91-73863-61609</a> | 
                        ✉️ <a href="mailto:ruthvikhospitals@gmail.com" style="color: #2563eb; text-decoration: none;">ruthvikhospitals@gmail.com</a>
                      </p>
                      <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 12px;">
                        This is an automated notification from your hospital website.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"Ruthvik Hospitals" <${process.env.EMAIL_USER}>`,
        to: process.env.HOSPITAL_EMAIL || process.env.EMAIL_USER,
        subject: `🏥 New Appointment: ${body.fullName} - ${body.preferredDate || 'Date TBD'}`,
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
