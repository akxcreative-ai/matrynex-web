import React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-blue-glow opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-4">
          // Get in Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Have an Engineering Question?
        </h2>
        <p className="text-silver-400 mb-8 leading-relaxed">
          Whether you&apos;re working on an embedded project, selecting
          components, or exploring a collaboration — we&apos;d like to hear from
          you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-electric-600 hover:bg-electric-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-blue-glow"
          >
            <Mail size={16} />
            Contact MATRYNEX
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 border border-electric-500/40 hover:border-electric-500 text-silver-200 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-electric-500/10"
          >
            Browse Guides
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
