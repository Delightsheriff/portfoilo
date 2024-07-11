import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <section className="w-full border border-red-800 py-12  ">
      <div className="container max-w-5xl px-0 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Want to work with me? Let&apos;s Connect
            </h2>
            <p className="text-muted-foreground md:text-xl">
              I am open to remote and onsite full-time, part-time, and contract
              frontend web development jobs.
            </p>
          </div>
          <Card>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full">Connect</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
