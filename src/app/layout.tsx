import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "WhatsMaster Tech Solutions | Innovating the Future",
    template: "%s | WhatsMaster Tech Solutions"
  },
  description: "WhatsMaster Tech Solutions Private Limited develops intelligent software, automation platforms, websites, AI solutions, and digital technologies that help individuals and businesses succeed.",
  keywords: ["AI", "Software Engineering", "Cyber Security", "Digital Transformation", "Web Development", "WhatsMaster Tech Solutions"],
  authors: [{ name: "Nur Mohammad Mandal" }],
  creator: "WhatsMaster Tech Solutions Private Limited",
  publisher: "WhatsMaster Tech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whatsmaster.tech",
    siteName: "WhatsMaster Tech Solutions",
    title: "WhatsMaster Tech Solutions | Innovating the Future",
    description: "Empowering Businesses Through Artificial Intelligence, Innovation and Digital Transformation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WhatsMaster Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsMaster Tech Solutions | Innovating the Future",
    description: "Empowering Businesses Through Artificial Intelligence, Innovation and Digital Transformation.",
    creator: "@whatsmaster",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
