"use client";
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { send, State } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/ui/SubmitButton";

const initialState: State = {
  errors: {},
  message: "",
  success: false,
};

export default function ContactPage() {
  const [state, formAction] = useFormState(send, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }

    const timer = setTimeout(() => {
      formAction(new FormData()); // This will reset the state
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [state.success, formAction]);

  return (
    <section className="w-full  py-12  ">
      <div className="container max-w-5xl px-0 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          <div className="space-y-5 flex justify-center items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Want to work with me? Let&apos;s Connect!
              </h2>
              <p className="text-muted-foreground md:text-xl">
                I am a full stack developer open to remote and onsite full-time,
                part-time, and contract frontend web development jobs
              </p>
            </div>
          </div>
          <Card className=" rounded-lg border bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark  dark:border-box-light shadow-shadow-light  shadow-md dark:shadow-md transition-transform duration-300 py-8">
            <CardContent className="space-y-4">
              <form ref={formRef} action={formAction}>
                <div className="space-y-2 my-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    required
                    className="bg-background-light dark:bg-background-dark"
                  />
                  {state.errors?.name && (
                    <p className="text-red-500 text-sm">{state.errors.name}</p>
                  )}
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="bg-background-light dark:bg-background-dark"
                  />
                  {state.errors?.email && (
                    <p className="text-red-500 text-sm">{state.errors.email}</p>
                  )}
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px] bg-background-light dark:bg-background-dark"
                    name="message"
                    required
                  />
                  {state.errors?.message && (
                    <p className="text-red-500 text-sm">
                      {state.errors.message}
                    </p>
                  )}
                </div>
                <SubmitButton />
              </form>
              {state.message && (
                <p
                  className={state.success ? "text-green-500" : "text-red-500"}
                >
                  {state.message}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}