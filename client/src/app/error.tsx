'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if desired
    console.error('Unhandled application error:', error);
  }, [error]);

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
          <h2 className="text-3xl font-bold text-red-500 mb-4">Oops! Something went wrong!</h2>
          <p className="text-text-muted mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          <button
            onClick={() => reset()}
            className="bg-primary text-white px-8 py-3 rounded-xl shadow-lg font-medium transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            Try again
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
