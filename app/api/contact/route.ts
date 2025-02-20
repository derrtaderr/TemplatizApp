import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate required environment variables
    const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASSWORD', 'EMAIL_FROM'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    if (missingVars.length > 0) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER, // authenticate with main email
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify SMTP connection
    console.log('Attempting to verify SMTP connection...');
    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_FROM, // send from alias
      to: process.env.EMAIL_USER, // send to main email
      replyTo: email, // replies will go to the form submitter
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 