import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./components/background";
import Navbar from "./components/navbar"; // Import Navbar component

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CrowdCon | Real-Time Crowd Monitoring",
  description: "AI-powered indoor and outdoor crowd safety monitoring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-black text-white relative">
        <div className="mx-[150px]">
          <Background />
          <Navbar /> {/* Navbar added here */}
          {children}
        </div>
      </body>
    </html>
  );
}
