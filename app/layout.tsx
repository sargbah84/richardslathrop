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
  metadataBase: new URL("https://richardslathrop.com"),
  title: {
    default: "Richards, Lathrop & Associates | An independently owned boutique wealth management firm dedicated to client prosperity above all else.",
    template: "%s | Richards, Lathrop & Associates",
  },
  description:
    "Richards, Lathrop & Associates is an independently owned boutique wealth management firm providing personalized financial planning, investment management, and multigenerational wealth strategies.",
  keywords: [
    "wealth management",
    "financial planning",
    "investment management",
    "boutique wealth management",
    "financial advisor",
    "estate planning",
    "tax optimization",
    "multigenerational wealth",
    "high net worth",
    "Richards Lathrop",
  ],
  authors: [{ name: "Richards, Lathrop & Associates" }],
  creator: "Richards, Lathrop & Associates",
  publisher: "Richards, Lathrop & Associates",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Richards, Lathrop & Associates",
    title: "Richards, Lathrop & Associates | Boutique Wealth Management",
    description:
      "Independently owned boutique wealth management firm providing personalized financial planning, investment management, and multigenerational wealth strategies.",
    images: [
      {
        url: "/assets/img/logo-main.png",
        width: 1200,
        height: 630,
        alt: "Richards, Lathrop & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richards, Lathrop & Associates | Boutique Wealth Management",
    description:
      "Independently owned boutique wealth management firm providing personalized financial planning, investment management, and multigenerational wealth strategies.",
    images: ["/assets/img/logo-main.png"],
  },
  icons: {
    icon: [
      { url: "/assets/img/favicon.ico", sizes: "any" },
      { url: "/assets/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/img/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/assets/img/site.webmanifest",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormCRS from "@/components/FormCRS";

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
        <FormCRS />
      </body>
    </html>
  );
}
