"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/store", label: "Store" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-md border-b border-electric-500/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 rounded-lg"
            aria-label="MATRYNEX Electronics home"
          >
            <Logo size={36} />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-base tracking-wider text-white group-hover:text-electric-400 transition-colors">
                MATRYNEX
              </span>
              <span className="text-[10px] tracking-[0.2em] text-electric-500/70 font-mono uppercase">
                Electronics
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    active
                      ? "text-electric-400"
                      : "text-silver-300 hover:text-white"
                  }`}
                >
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-electric-500 rounded-full" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/store"
              className="flex items-center gap-2 px-4 py-2 bg-electric-600 hover:bg-electric-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-blue-glow hover:shadow-blue-glow-lg"
            >
              <Zap size={14} />
              Browse Components
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-silver-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 bg-navy-900/95 backdrop-blur-md pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg mx-2 transition-colors ${
                      active
                        ? "text-electric-400 bg-electric-500/10"
                        : "text-silver-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-2 pt-2">
                <Link
                  href="/store"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-electric-600 hover:bg-electric-500 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <Zap size={14} />
                  Browse Components
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
