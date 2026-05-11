import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "syedalizeraknaqvi@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B1B3A; color: #F5F1E8; padding: 32px; border-radius: 12px;">
          <div style="border-bottom: 2px solid #C9A24A; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #C9A24A; font-size: 24px; margin: 0;">New Portfolio Inquiry</h1>
          </div>
          <p><strong style="color: #C9A24A;">From:</strong> ${name} (${email})</p>
          <p><strong style="color: #C9A24A;">Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #C9A24A;">
            <p style="white-space: pre-wrap; color: #F5F1E8;">${message}</p>
          </div>
          <p style="color: #8892A4; font-size: 12px; margin-top: 24px;">Sent via syedazerak.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
