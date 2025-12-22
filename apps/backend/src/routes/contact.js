const express = require('express');
const { body, validationResult } = require('express-validator');
const supabase = require('../db/supabase');
const nodemailer = require('nodemailer');

const router = express.Router();

// Email transporter setup
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

// POST contact message
router.post('/',
  [
    body('name').notEmpty().trim(),
    body('email').isEmail(),
    body('message').notEmpty().trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([{
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone || null,
          subject: req.body.subject || null,
          message: req.body.message
        }])
        .select()
        .single();

      if (error) throw error;

      // Send email notification
      if (transporter) {
        try {
          const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Contact Form Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f7fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">🏥 Ruthvik Hospitals</h1>
              <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 16px;">New Contact Form Message</p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #fef3c7; padding: 15px 30px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
                ⚠️ <strong>New Message:</strong> Someone has contacted you through the website
              </p>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                Contact Details
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 120px;">Name:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: bold;">${req.body.name}</td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Email:</td>
                  <td style="color: #1f2937; font-size: 14px;">
                    <a href="mailto:${req.body.email}" style="color: #2563eb; text-decoration: none;">
                      ${req.body.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Phone:</td>
                  <td style="color: #1f2937; font-size: 14px;">
                    ${req.body.phone ? `<a href="tel:${req.body.phone}" style="color: #2563eb; text-decoration: none;">${req.body.phone}</a>` : '<span style="color: #9ca3af;">Not provided</span>'}
                  </td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Subject:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: bold;">
                    ${req.body.subject || '<span style="color: #9ca3af;">No subject</span>'}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Content -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                Message
              </h2>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
                <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${req.body.message}</p>
              </div>
            </td>
          </tr>

          <!-- Action Button -->
          <tr>
            <td style="padding: 0 30px 30px 30px;" align="center">
              <a href="mailto:${req.body.email}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);">
                📧 Reply to ${req.body.name}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">🏥 Ruthvik Hospitals</h3>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                Anand Nagar, Pothinamallayya Palem<br>
                Visakhapatnam, Andhra Pradesh
              </p>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                📞 <a href="tel:+917386361609" style="color: #2563eb; text-decoration: none;">+91-73863-61609</a>
              </p>
              <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px;">
                ✉️ <a href="mailto:ruthvikhospitals@gmail.com" style="color: #2563eb; text-decoration: none;">ruthvikhospitals@gmail.com</a>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Ruthvik Hospitals. All rights reserved.
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
            to: process.env.HOSPITAL_EMAIL,
            subject: `Contact Form: ${req.body.subject || 'New Message from ' + req.body.name}`,
            html: emailHtml
          });
          
          console.log('✅ Contact form email sent to:', process.env.HOSPITAL_EMAIL);
        } catch (emailError) {
          console.error('❌ Email send error:', emailError);
          // Don't fail the request if email fails
        }
      } else {
        console.log('📧 Email not configured. Contact message saved to database.');
      }

      res.status(201).json({ 
        message: 'Message sent successfully',
        data: data
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  }
);

module.exports = router;
