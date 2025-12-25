require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('🔧 Testing email configuration...\n');
  
  console.log('📧 Email Settings:');
  console.log('   HOST:', process.env.EMAIL_HOST);
  console.log('   PORT:', process.env.EMAIL_PORT);
  console.log('   USER:', process.env.EMAIL_USER);
  console.log('   PASS:', process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET');
  console.log('   TO:', process.env.HOSPITAL_EMAIL);
  console.log('');

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ EMAIL_USER or EMAIL_PASS not configured in .env file');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    debug: true, // Enable debug output
    logger: true // Log to console
  });

  try {
    console.log('🔍 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!\n');

    console.log('📤 Sending test email...');
    const info = await transporter.sendMail({
      from: `"Ruthvik Hospitals Test" <${process.env.EMAIL_USER}>`,
      to: process.env.HOSPITAL_EMAIL,
      subject: '✅ Test Email - Email Configuration Working',
      text: 'This is a test email to verify that the email configuration is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f7fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #2563eb; margin-bottom: 20px;">✅ Email Test Successful!</h1>
            <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
              This is a test email to verify that your email configuration is working correctly.
            </p>
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #075985; font-weight: bold;">
                ✓ SMTP Connection: Working<br>
                ✓ Email Sending: Working<br>
                ✓ Configuration: Correct
              </p>
            </div>
            <p style="color: #6b7280; font-size: 14px;">
              Sent at: ${new Date().toLocaleString('en-IN')}
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              🏥 Ruthvik Hospitals - Email System Test
            </p>
          </div>
        </div>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log('📬 Message ID:', info.messageId);
    console.log('📧 Email sent to:', process.env.HOSPITAL_EMAIL);
    console.log('\n✨ Email configuration is working correctly!');
    console.log('💡 Check your inbox at:', process.env.HOSPITAL_EMAIL);
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Email test failed!');
    console.error('Error:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Authentication failed. Please check:');
      console.error('   1. Gmail App Password is correct (no spaces)');
      console.error('   2. 2-Step Verification is enabled on Gmail');
      console.error('   3. App Password was generated correctly');
      console.error('\n📝 To generate a new App Password:');
      console.error('   1. Go to: https://myaccount.google.com/security');
      console.error('   2. Enable 2-Step Verification');
      console.error('   3. Go to App Passwords');
      console.error('   4. Generate new password for "Mail"');
      console.error('   5. Copy the 16-character password (remove spaces)');
      console.error('   6. Update EMAIL_PASS in .env file');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n💡 Connection failed. Please check:');
      console.error('   1. Internet connection is working');
      console.error('   2. Firewall is not blocking port 587');
      console.error('   3. EMAIL_HOST and EMAIL_PORT are correct');
    }
    
    process.exit(1);
  }
}

testEmail();
