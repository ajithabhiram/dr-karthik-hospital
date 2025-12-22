const nodemailer = require('nodemailer');

let transporter = null;

// Initialize transporter if email credentials are provided
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

const sendAppointmentConfirmation = async (appointment) => {
  const formattedDate = appointment.preferredDate 
    ? new Date(appointment.preferredDate).toLocaleDateString('en-IN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : 'Not specified';

  const formattedTime = appointment.preferredTime || 'Not specified';
  const createdAt = new Date(appointment.createdAt).toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  // Plain text version
  const textContent = `
New Appointment Request - Ruthvik Hospitals

PATIENT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${appointment.fullName}
Phone: ${appointment.phone}
Email: ${appointment.email || 'Not provided'}

DOCTOR INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Approaching Doctor: ${appointment.approachingDoctor.name}
Specialty: ${appointment.approachingDoctor.specialty}
Doctor Phone: ${appointment.approachingDoctor.phone}

APPOINTMENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Preferred Date: ${formattedDate}
Preferred Time: ${formattedTime}
Reason for Visit: ${appointment.reasonForVisit || 'Not provided'}
Submitted: ${createdAt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ruthvik Hospitals
Anand Nagar, Pothinamallayya Palem
Visakhapatnam, Andhra Pradesh
Phone: +91-73863-61609
Email: ruthvikhospitals@gmail.com
  `;

  // Professional HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Appointment Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 20px 0;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">🏥 Ruthvik Hospitals</h1>
              <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 16px;">New Appointment Request</p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #fef3c7; padding: 15px 30px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
                ⚠️ <strong>Action Required:</strong> New patient appointment request received
              </p>
            </td>
          </tr>

          <!-- Patient Information -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                👤 Patient Information
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 140px;">Full Name:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: bold;">${appointment.fullName}</td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Phone Number:</td>
                  <td style="color: #1f2937; font-size: 14px;">
                    <a href="tel:${appointment.phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">
                      📞 ${appointment.phone}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Email Address:</td>
                  <td style="color: #1f2937; font-size: 14px;">
                    ${appointment.email 
                      ? `<a href="mailto:${appointment.email}" style="color: #2563eb; text-decoration: none;">✉️ ${appointment.email}</a>`
                      : '<span style="color: #9ca3af;">Not provided</span>'
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Doctor Information -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                👨‍⚕️ Requested Doctor
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #eff6ff; border-radius: 8px; border: 2px solid #bfdbfe;">
                <tr>
                  <td style="color: #1e40af; font-size: 14px; font-weight: 600; width: 140px;">Doctor Name:</td>
                  <td style="color: #1e3a8a; font-size: 15px; font-weight: bold;">${appointment.approachingDoctor.name}</td>
                </tr>
                <tr>
                  <td style="color: #1e40af; font-size: 14px; font-weight: 600;">Specialty:</td>
                  <td style="color: #1e3a8a; font-size: 14px;">${appointment.approachingDoctor.specialty}</td>
                </tr>
                <tr>
                  <td style="color: #1e40af; font-size: 14px; font-weight: 600;">Doctor Phone:</td>
                  <td style="color: #1e3a8a; font-size: 14px;">
                    <a href="tel:${appointment.approachingDoctor.phone}" style="color: #1e40af; text-decoration: none; font-weight: 600;">
                      📞 ${appointment.approachingDoctor.phone}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Appointment Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                📅 Appointment Details
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr style="background-color: #f9fafb;">
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 140px;">Preferred Date:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: bold;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600;">Preferred Time:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: bold;">${formattedTime}</td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Medical Condition:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: bold;">
                    ${appointment.diseaseCategory || '<span style="color: #9ca3af;">Not specified</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; font-weight: 600; vertical-align: top;">Additional Details:</td>
                  <td style="color: #1f2937; font-size: 14px; line-height: 1.6;">
                    ${appointment.reasonForVisit || '<span style="color: #9ca3af;">Not provided</span>'}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Submission Info -->
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); border-radius: 8px; border: 2px solid #0ea5e9;">
                <tr>
                  <td align="center">
                    <p style="margin: 0; color: #075985; font-size: 14px;">
                      📅 <strong>Appointment Submitted:</strong> ${createdAt}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Button -->
          <tr>
            <td style="padding: 0 30px 30px 30px;" align="center">
              <a href="tel:${appointment.phone}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);">
                📞 Call Patient Now
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
                📞 <a href="tel:+917386361609" style="color: #2563eb; text-decoration: none; font-weight: 600;">+91-73863-61609</a>
              </p>
              <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px;">
                ✉️ <a href="mailto:ruthvikhospitals@gmail.com" style="color: #2563eb; text-decoration: none;">ruthvikhospitals@gmail.com</a>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Ruthvik Hospitals. All rights reserved.
              </p>
              <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 12px;">
                🚑 24/7 Emergency Services Available
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

  if (!transporter) {
    console.log('📧 Email not configured. Appointment details:');
    console.log(textContent);
    return { success: true, message: 'Email logging only (no SMTP configured)' };
  }

  try {
    await transporter.sendMail({
      from: `"Ruthvik Hospitals" <${process.env.EMAIL_USER}>`,
      to: process.env.HOSPITAL_EMAIL,
      subject: `New Appointment - ${appointment.fullName} with ${appointment.approachingDoctor.name}`,
      text: textContent,
      html: htmlContent
    });
    console.log('✅ Professional email sent successfully to:', process.env.HOSPITAL_EMAIL);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('❌ Email send error:', error);
    return { success: false, message: error.message };
  }
};

module.exports = {
  sendAppointmentConfirmation
};
