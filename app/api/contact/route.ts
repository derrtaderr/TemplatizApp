import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, to, subject } = body;

    // Validate required environment variables
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing required email configuration:', {
        host: !!process.env.EMAIL_HOST,
        user: !!process.env.EMAIL_USER,
        password: !!process.env.EMAIL_PASSWORD
      });
      throw new Error('Missing required email configuration');
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 465),
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Log connection attempt
    console.log('Attempting to verify SMTP connection...');
    
    // Verify SMTP connection
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Email content with reply-to set to sender's email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      replyTo: email,
      subject,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h3>New Contact Form Submission</h3>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Company:</strong> ${company}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${message}</p>
</div>
      `,
    };

    // Log email attempt
    console.log('Attempting to send email...');

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 