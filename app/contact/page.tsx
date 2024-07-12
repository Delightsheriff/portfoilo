"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { send, State } from "@/lib/actions";
import { useFormState } from "react-dom";
// import { useFormState } from "react-dom";

const initialState: State = {
  errors: {},
  message: "",
  success: false,
};

export default function Page() {
  const [state, formAction] = useFormState(send, initialState);
  return (
    <section className="w-full  py-12  ">
      <div className="container max-w-5xl px-0 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Want to work with me? Let&apos;s Connect!
            </h2>
            <p className="text-muted-foreground md:text-xl">
              I am a full stack developer open to remote and onsite full-time,
              part-time, and contract frontend web development jobs
            </p>
          </div>
          <Card className=" rounded-lg border bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark  dark:border-box-light shadow-shadow-light  shadow-md dark:shadow-md transition-transform duration-300 py-8">
            <CardContent className="space-y-4">
              <form action={formAction}>
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
                <Button className="w-full px-6 py-3 mt-4 text-sm font-medium text-center text-background-light bg-text-light rounded-md hover:bg-box-light transition-colors duration-300 dark:text-background-dark dark:bg-text-dark dark:hover:bg-box-dark">
                  Connect
                </Button>
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
