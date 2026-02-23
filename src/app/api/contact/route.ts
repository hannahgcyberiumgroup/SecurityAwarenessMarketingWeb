import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  demo: "Demo Request",
  pricing: "Pricing Question",
  partnership: "Partnership",
  other: "Other",
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.SENDER_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Missing SendGrid environment variables.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, subject, message } = body;

  if (!name?.trim() || !email?.trim() || !company?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const subjectLabel = SUBJECT_LABELS[subject] ?? subject;

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: { email, name },
      subject: `[CyberEscape] ${subjectLabel} from ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company}`,
        `Subject: ${subjectLabel}`,
        "",
        message,
      ].join("\n"),
      html: `
        <table style="font-family:sans-serif;font-size:14px;color:#111;max-width:600px;">
          <tr><td style="padding:24px 0 8px;">
            <h2 style="margin:0;font-size:18px;">New contact form submission</h2>
          </td></tr>
          <tr><td style="padding:4px 0;"><strong>Name:</strong> ${name}</td></tr>
          <tr><td style="padding:4px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:4px 0;"><strong>Company:</strong> ${company}</td></tr>
          <tr><td style="padding:4px 0;"><strong>Subject:</strong> ${subjectLabel}</td></tr>
          <tr><td style="padding:24px 0 4px;"><strong>Message:</strong></td></tr>
          <tr><td style="padding:12px;white-space:pre-wrap;background:#f5f5f5;border-radius:6px;">
            ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
          </td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
