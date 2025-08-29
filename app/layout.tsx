import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Frontend Engineer specializing in React, Next.js, and TypeScript. Creating modern, responsive web experiences with a focus on performance and accessibility. Let's build something amazing together.

export const metadata: Metadata = {
  title: "Boris Karabut — Frontend Software Engineer",
  description: "",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "russia",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
    "фронтенд",
    "реакт",
    "технологии",
    "креативный разработчик",
    "разработка интерфейсов",
    "фронтенд инженер",
    "портфолио разработчика",
    "креативная разработка",
    "россия",
    "программы",
    "разработка программ",
    "портфолио",
  ],
  openGraph: {
    title: "Boris Karabut — Frontend Software Engineer",
    description: "",
    url: "https://www.adeolabadero.me",
    siteName: "www.adeolabadero.me",
    images: [
      {
        url: "https://i.ibb.co/FKMqc28/adeola-badero.png",
        width: 1200,
        height: 630,
        alt: "Boris Karabut — Frontend Software Engineer",
      },
      {
        url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
        width: 800,
        height: 800,
        alt: "Boris Karabut — Frontend Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boris Karabut — Software Engineer",
    description: "",
    creator: "@korobkaboris",
    images: ["https://i.ibb.co/FKMqc28/adeola-badero.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
