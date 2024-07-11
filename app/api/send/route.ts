import GithubAccessTokenEmail from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Use this for testing or your verified domain
      to: "delightsheriff@gmail.com",
      subject: "Hello World",
      react: GithubAccessTokenEmail({ username: "Delight" }),
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
