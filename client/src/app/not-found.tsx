'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col text-text font-burnr"
      style={{
        backgroundImage: "linear-gradient(135deg, #e5f2ff, #fff, #e6ccff)"
      }}
    >
      <Header />
      
      <section className="flex flex-col items-center justify-center flex-grow text-center px-4 py-16">
        <div className="bg-surface/70 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-lg border border-white/40">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text mb-4">Page Not Found</h2>
          <p className="text-text-muted mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex bg-primary text-white px-8 py-3 rounded-xl shadow-lg font-medium transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            Return Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
