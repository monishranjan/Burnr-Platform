'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-animated-gradient text-text font-burnr flex flex-col">
      <Header />

      <section className="w-full px-4 py-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">About Burnrs</h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mb-16 mt-4">
            Burnrs is a privacy-first platform offering disposable email addresses to help you stay anonymous and secure online.
          </p>

          <div className="w-full text-left space-y-12">
            {/* Mission */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">🌐 Our Mission</h2>
              <p className="text-text-muted">
                The internet should be a safe place for everyone. Burnrs was created to give users a hassle-free way to protect their privacy by using temporary email addresses while signing up on websites, accessing gated content, or avoiding spam.
              </p>
            </div>

            {/* Privacy */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">🛡️ Built with Privacy in Mind</h2>
              <p className="text-text-muted">
                We do not ask for your personal information. All email inboxes are temporary and automatically deleted after 24 hours. We do not store your identity, and all messages are discarded permanently. This makes Burnrs one of the safest tools for anonymous communication.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">🚀 Features</h2>
              <ul className="list-disc list-inside space-y-1 ml-4 text-text-muted">
                <li>Instantly generate temporary email addresses</li>
                <li>View inbox and read emails online</li>
                <li>Automatic deletion of emails after 24 hours</li>
                <li>No registration or sign-up required</li>
                <li>Mobile-friendly interface</li>
              </ul>
            </div>

            {/* Ads */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">📣 Ad-Supported & Free</h2>
              <p className="text-text-muted">
                Burnrs is completely free to use. To keep our services sustainable, we partner with third-party vendors, including Google, who use cookies to serve ads based on your prior visits to our website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Ads Settings</a>. For more details, please read our <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">📬 Contact Us</h2>
              <p className="text-text-muted">
                For any questions, support, or business inquiries, feel free to reach out to us at{' '}
                <a href="mailto:monishranjan9@gmail.com" className="text-primary underline">
                  monishranjan9@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
