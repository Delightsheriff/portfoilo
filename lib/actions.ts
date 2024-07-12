"use server";
import { z } from "zod";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 5 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function send(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const initialState: State = {
    errors: {},
    message: null,
    success: false,
  };

  if (
    !formData.get("name") &&
    !formData.get("email") &&
    !formData.get("message")
  ) {
    return initialState;
  }

  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message:
        "There were errors with your submission. Please correct them and try again.",
      success: false,
    };
  }

  try {
    const site_url = process.env.SITE_URL;
    const response = await fetch(`${site_url}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send email");
    }

    return { message: "Email sent successfully", success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      message: "Failed to send email. Please try again later.",
      success: false,
    };
  }
}
