import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email
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
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                      🏥 Ruthvik Hospitals
                    </h1>
                    <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">
                      Contact Form Submission
                    </p>
                  </td>
                </tr>

                <!-- Alert Banner -->
                <tr>
                  <td style="background-color: #dbeafe; padding: 15px 30px; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: bold;">
                      💬 NEW MESSAGE - Response Required
                    </p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 30px;">
                    <h2 style="color: #059669; margin: 0 0 20px 0; font-size: 22px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                      📨 Message Details
                    </h2>

                    <!-- Sender Information -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="padding: 12px; background-color: #f9fafb; border-radius: 8px;">
                          <table width="100%" cellpadding="8" cellspacing="0">
                            <tr>
                              <td width="35%" style="color: #6b7280; font-size: 14px; font-weight: bold;">👤 Name:</td>
                              <td style="color: #111827; font-size: 16px; font-weight: bold;">${name}</td>
                            </tr>
                            <tr>
                              <td style="color: #6b7280; font-size: 14px; font-weight: bold;">✉️ Email:</td>
                              <td style="color: #111827; font-size: 16px;">
                                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                              </td>
                            </tr>
                            ${phone ? `
                            <tr>
                              <td style="color: #6b7280; font-size: 14px; font-weight: bold;">📱 Phone:</td>
                              <td style="color: #111827; font-size: 16px;">
                                <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                              </td>
                            </tr>
                            ` : ''}
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Subject -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="padding: 12px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
                          <p style="margin: 0 0 5px 0; color: #1e40af; font-size: 14px; font-weight: bold;">📋 Subject:</p>
                          <p style="margin: 0; color: #111827; font-size: 16px; font-weight: bold;">${message.subject || 'No subject'}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Message Content -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td style="padding: 15px; background-color: #f0fdf4; border-radius: 8px; border-left: 4px solid #10b981;">
                          <p style="margin: 0 0 10px 0; color: #065f46; font-size: 14px; font-weight: bold;">💬 Message:</p>
                          <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Quick Actions -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                      <tr>
                        <td style="padding: 20px; background-color: #dbeafe; border-radius: 8px; text-align: center;">
                          <p style="margin: 0 0 15px 0; color: #1e40af; font-size: 16px; font-weight: bold;">
                            ⚡ Quick Actions
                          </p>
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" style="padding: 5px;">
                                <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
                                  📧 Reply via Email
                                </a>
                              </td>
                              ${phone ? `
                              <td align="center" style="padding: 5px;">
                                <a href="tel:${phone}" style="display: inline-block; padding: 12px 24px; background-color: #10b981; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
                                  📞 Call Now
                                </a>
                              </td>
                              ` : ''}
                            </tr>
                          </table>
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
      replyTo: email,
      subject: `💬 Contact Form: ${name} - ${message.subject || 'General Inquiry'}`,
      html: emailHtml
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
