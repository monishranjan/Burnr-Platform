import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from '@next/third-parties/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-burnr",
});

export const metadata: Metadata = {
  title: "Burnr | Free Temporary Email Generator & Disposable Inbox",
  description: "Protect your privacy with Burnr. Get a free temporary email address instantly. Avoid spam, bypass verification, and stay secure with our disposable throwaway emails.",
  keywords: "temporary email, disposable email, fake email generator, throwaway email, 10 minute mail, temp mail, anonymous email, random email generator, temp email address, temporary inbox",
  openGraph: {
    title: "Burnr | Free Temporary Email Generator",
    description: "Instantly create a secure, disposable email address. Protect your real inbox from spam and tracking.",
    url: "https://burnr-inbox.vercel.app",
    siteName: "Burnr",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnr | Free Temporary Email Generator",
    description: "Instantly create a secure, disposable email address to protect your privacy.",
  },
  alternates: {
    canonical: "https://burnr-inbox.vercel.app",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* ✅ Add AdSense Script here */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3046874546195429"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-burnr">
        {children}
        <Toaster position="bottom-right" />
        <GoogleAnalytics gaId="G-7XWG7NV4EL" />
      </body>
    </html>
  );
}
