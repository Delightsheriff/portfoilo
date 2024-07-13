import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delight Amadi-Sheriff | Full Stack Developer",
  description:
    "Portfolio of Delight Amadi-Sheriff, a passionate full stack developer. Explore my projects and more.",
  openGraph: {
    title: "Delight Amadi-Sheriff | Full Stack Developer",
    description:
      "Portfolio of Delight Amadi-Sheriff, a passionate full stack developer. Explore my projects and more.",
    url: "https://delightsheriff.vercel.app/",
    siteName: "Delight Amadi-Sheriff Portfolio",
    images: [
      {
        url: "https://delightsheriff.vercel.app/icon.png",
        width: 800,
        height: 600,
        alt: "Delight Amadi-Sheriff Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delight Amadi-Sheriff | Full Stack Developer",
    description:
      "Portfolio of Delight Amadi-Sheriff, a passionate full stack developer. Explore my projects and more.",
    site: "@quietandstuff",
    creator: "@quietandstuff",
    images: ["https://delightsheriff.vercel.app/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased flex flex-col min-h-dvh bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
      >
        <Header />
        <div className="flex-grow">
          <main className="container mx-auto px-4 md:px-6 py-16 md:py-16">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
