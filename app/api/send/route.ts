import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const fromEmail = process.env.RESEND_EMAIL;
  const toEmail = process.env.PERSONAL_EMAIL;

  if (!fromEmail || !toEmail) {
    console.error("Missing email configuration");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Someone Wants to Connect with You!`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email send response:", { data, error });

    if (error) {
      console.error("Error from Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      message: "Email sent successfully",
      id: data?.id || "ID not provided",
      data: data,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
