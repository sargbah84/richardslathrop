import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Richards, Lathrop & Associates",
  description: "Boutique Wealth Management Firm",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-cream text-navy`}
      >
        <Header />
        <main className="w-full min-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
