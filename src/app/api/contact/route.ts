import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    // Assuming you have your email server credentials
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_HOST_SERVER, // Change this to your email provider's SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_USER_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    // Extracting contact form data from the request body
    const body = await req.json();
    const { name, email, subject, message }: ContactFormData = body;

    // Configuring the email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_USER_EMAIL,
      to: process.env.NEXT_PUBLIC_RECIEVER_EMAIL, 
      subject: `New Contact Form Submission - ${subject}`,
      text: `
      Full Name: ${name}
      Email Address: ${email}
      Subject: ${subject}
      Message: ${message}
      `,
    };

    // Sending the email
    await transporter.sendMail(mailOptions);

    // Sending a success response
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data: null,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    // Sending an error response
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
      data: null,
    });
  }
}
