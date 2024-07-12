"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full px-6 py-3 mt-4 text-sm font-medium text-center text-background-light bg-text-light rounded-md hover:bg-box-light transition-colors duration-300 dark:text-background-dark dark:bg-text-dark dark:hover:bg-box-dark disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Connect"}
    </Button>
  );
}
