'use client';

import Link from "next/link";
import { Mail, Home as HomeIcon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon size={20} />,
      isActive: pathname === "/",
    },
    {
      label: "Temp Email",
      href: "/temp-email",
      icon: <Mail size={20} />,
      isActive: pathname === "/temp-email",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-bold text-2xl text-primary">Burnrs</Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ label, href, icon, isActive }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition
                ${isActive
                  ? "bg-accent text-text font-medium"
                  : "text-text-muted hover:bg-accent hover:text-text"}
              `}
            >
              {icon}
              <span className="text-base">{label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 rounded-md hover:bg-accent transition"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 bg-surface border rounded-xl p-4 shadow-md">
            {navLinks.map(({ label, href, icon, isActive }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
                  ${isActive
                    ? "bg-accent text-text font-medium"
                    : "text-text-muted hover:bg-accent hover:text-text"}
                `}
              >
                {icon}
                <span className="text-base">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
