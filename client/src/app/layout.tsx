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
  title: "Burnrs | Free Temporary Email Generator & Disposable Inbox",
  description: "Protect your privacy with Burnrs. Get a free temporary email address instantly. Avoid spam, bypass verification, and stay secure with our disposable throwaway emails.",
  keywords: "temporary email, disposable email, fake email generator, throwaway email, 10 minute mail, temp mail, anonymous email, random email generator, temp email address, temporary inbox",
  openGraph: {
    title: "Burnrs | Free Temporary Email Generator",
    description: "Instantly create a secure, disposable email address. Protect your real inbox from spam and tracking.",
    url: "https://www.burnrs.site",
    siteName: "Burnrs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnrs | Free Temporary Email Generator",
    description: "Instantly create a secure, disposable email address to protect your privacy.",
  },
  alternates: {
    canonical: "https://www.burnrs.site",
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
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
