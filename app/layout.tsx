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

export const metadata: Metadata = {
  title: "Achille Balme | Software Developer",
  description:
    "Portfolio of Achille Balme, software developer from Switzerland focused on application development, automation and modern web technologies.",
  keywords: [
    "Achille Balme",
    "Software Developer",
    "Application Development",
    "React",
    "Next.js",
    "TypeScript",
    "Switzerland",
  ],
  authors: [{ name: "Achille Balme" }],
  creator: "Achille Balme",
  openGraph: {
    title: "Achille Balme | Software Developer",
    description:
      "Portfolio showcasing professional experience, technical projects and modern web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achille Balme | Software Developer",
    description:
      "Portfolio showcasing professional experience, technical projects and modern web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
