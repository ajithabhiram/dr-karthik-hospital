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
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.HOSPITAL_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: emailHtml
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
