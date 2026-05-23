import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script"; // ✅ Import Next.js Script
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-burnr",
});

export const metadata: Metadata = {
  title: "Burnr - Temporary Email",
  description: "Get temporary emails instantly. No signup needed.",
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
      </body>
    </html>
  );
}
