import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matrynex.com"),
  title: {
    default: "MATRYNEX Electronics — Intelligence in Every Layer",
    template: "%s | MATRYNEX Electronics",
  },
  description:
    "MATRYNEX Electronics is an electronics R&D brand specialising in embedded systems, IoT engineering, component sourcing, and open engineering projects.",
  keywords: [
    "electronics",
    "embedded systems",
    "IoT",
    "ESP32",
    "STM32",
    "microcontrollers",
    "engineering",
    "PCB design",
    "MATRYNEX",
  ],
  authors: [{ name: "MATRYNEX Electronics" }],
  creator: "MATRYNEX Electronics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matrynex.com",
    siteName: "MATRYNEX Electronics",
    title: "MATRYNEX Electronics — Intelligence in Every Layer",
    description:
      "Electronics R&D, embedded systems, IoT engineering, and component sourcing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MATRYNEX Electronics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MATRYNEX Electronics",
    description: "Intelligence in Every Layer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-navy-900 text-silver-50 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
