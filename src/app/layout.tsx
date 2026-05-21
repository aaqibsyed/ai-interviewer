import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://ai-interviewer-aj.vercel.app/"
  ),

  title: {
    default: "AI Interviewer",
    template: "%s | AI Interviewer",
  },

  description:
    "Practice React, JavaScript, Next.js, and behavioral interviews with AI-powered feedback, adaptive difficulty, detailed performance reports, and progress tracking.",

  keywords: [
    "AI Interviewer",
    "Mock Interview",
    "Frontend Interview Preparation",
    "React Interview Questions",
    "JavaScript Interview Questions",
    "Next.js Interview Questions",
    "Behavioral Interview Practice",
    "Technical Interview Preparation",
    "Software Engineer Interview",
    "Frontend Developer Interview",
    "AI Interview Coach",
    "Interview Simulator",
    "Coding Interview Practice",
    "Interview Feedback",
    "Developer Interview Platform",
    "Interview Training",
    "React Practice",
    "Next.js Practice",
    "JavaScript Practice",
    "Job Interview Preparation",
  ],

  authors: [
    {
      name: "Aaqib Javed",
    },
  ],

  creator: "Aaqib Javed",

  publisher: "AI Interviewer",

  category: "Education",

  applicationName:
    "AI Interviewer",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview":
        "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical:
      "https://ai-interviewer-aj.vercel.app/",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://ai-interviewer-aj.vercel.app/",

    title:
      "AI Interviewer | Ace Your Frontend Interviews",

    description:
      "Practice React, JavaScript, Next.js, and HR interviews with adaptive AI feedback, detailed reports, and performance tracking.",

    siteName:
      "AI Interviewer",

    images: [
      {
        url: "/og-image.png",

        width: 1200,

        height: 630,

        alt:
          "AI Interviewer Platform",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "AI Interviewer | Mock Interviews with AI Feedback",

    description:
      "Practice technical and behavioral interviews with adaptive AI-powered feedback and detailed performance reports.",

    images: [
      "/og-image.png",
    ],
  },

  icons: {
    icon: "/icon.png",

    shortcut:
      "/icon.png",

    apple:
      "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="top-center"
          richColors
          theme="dark"
        />
      </body>
    </html>
  );
}