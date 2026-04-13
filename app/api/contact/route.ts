import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "lowerwithlacoocheeriverkeeper@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactPayload {
  formType: string;
  name: string;
  email: string;
  organization?: string;
  type?: string;
  message: string;
  phone?: string;
}

export async function POST(request: Request) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const body: ContactPayload = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const subjectMap: Record<string, string> = {
      partner: `Partner Inquiry from ${body.name}`,
      volunteer: `Volunteer Signup from ${body.name}`,
      contact: `Contact from ${body.name}`,
    };

    const subject = subjectMap[body.formType] || `LWRK Inquiry from ${body.name}`;

    const lines = [
      `Form: ${body.formType?.toUpperCase() || "GENERAL"}`,
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      body.phone ? `Phone: ${body.phone}` : null,
      body.organization ? `Organization: ${body.organization}` : null,
      body.type ? `Inquiry Type: ${body.type}` : null,
      ``,
      `Message:`,
      body.message,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: `"LWRK Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: body.email,
      subject,
      text: lines,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
