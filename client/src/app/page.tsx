'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Shield, Clock } from "lucide-react";

import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-text font-burnr bg-animated-gradient">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Burnrs - Temporary Email",
            "url": "https://www.burnrs.site",
            "description": "Protect your privacy with Burnrs. Get a free temporary email address instantly. Avoid spam, bypass verification, and stay secure with our disposable throwaway emails.",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 py-16">
        <div className="space-y-2">
          <h1 className="flex flex-col">
            <span className="text-3xl sm:text-4xl md:text-5xl font-light text-text">Free Temporary</span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">Email Generator</span>
            <span className="text-xl sm:text-2xl font-light text-gray-400 mt-2">Made Simple</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-text-muted mt-6">
          Protect your privacy with disposable email addresses.
          <br className="hidden sm:block" />
          No registration required, instant access, completely free.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/temp-email"
            className="flex gap-3 bg-primary text-surface px-8 py-3 rounded-xl shadow-lg items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Mail strokeWidth={1.5} />
            <span className="text-lg font-medium">Get a Temp Email</span>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl px-4">
          <div className="glass-card py-10 px-6 sm:px-8 rounded-2xl text-center flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-2xl">
            <Shield size={48} className="text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-text">Privacy First</h2>
            <p className="text-text-muted text-sm">
              Your real information stays completely private and secure.
            </p>
          </div>

          <div className="glass-card py-10 px-6 sm:px-8 rounded-2xl text-center flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-2xl">
            <Clock size={48} className="text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-text">Instant Access</h2>
            <p className="text-text-muted text-sm">
              Get temporary contacts immediately. No waiting or setup needed.
            </p>
          </div>

          <div className="glass-card py-10 px-6 sm:px-8 rounded-2xl text-center flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-2xl">
            <Mail size={48} className="text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-text">Completely Free</h2>
            <p className="text-text-muted text-sm">
              No hidden costs, subscriptions, or premium features required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
