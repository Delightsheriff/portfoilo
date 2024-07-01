import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-box-light dark:text-box-dark" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Oops, page not found!
        </h1>
        <p className="mt-4 text-text-light dark:text-text-dark opacity-80">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-box-light dark:bg-box-dark px-4 py-2 text-sm font-medium text-background-light dark:text-background-dark shadow-sm transition-colors hover:bg-text-light hover:text-background-light dark:hover:bg-text-dark dark:hover:text-background-dark focus:outline-none focus:ring-2 focus:ring-text-light dark:focus:ring-text-dark focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
