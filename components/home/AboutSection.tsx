import React from "react";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative hidden lg:block">
            <div className="w-full h-80 rounded-2xl card-glass border border-electric-500/10 flex items-center justify-center relative overflow-hidden">
              {/* Layered decorative rings */}
              <div className="absolute w-64 h-64 rounded-full border border-electric-500/10" />
              <div className="absolute w-48 h-48 rounded-full border border-electric-500/15" />
              <div className="absolute w-32 h-32 rounded-full border border-electric-500/25" />
              <div className="absolute w-16 h-16 rounded-full bg-electric-500/10 border border-electric-500/40 flex items-center justify-center">
                <Layers size={24} className="text-electric-400" />
              </div>
              {/* Corner labels */}
              <span className="absolute top-4 left-4 text-[10px] font-mono text-electric-500/50">
                R&amp;D
              </span>
              <span className="absolute top-4 right-4 text-[10px] font-mono text-electric-500/50">
                IoT
              </span>
              <span className="absolute bottom-4 left-4 text-[10px] font-mono text-electric-500/50">
                Embedded
              </span>
              <span className="absolute bottom-4 right-4 text-[10px] font-mono text-electric-500/50">
                Open Eng.
              </span>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div>
              <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
                // About MATRYNEX
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Engineering with Purpose
              </h2>
            </div>

            <p className="text-silver-300 leading-relaxed">
              MATRYNEX Electronics is an independent electronics R&amp;D brand
              focused on building useful, well-documented embedded systems and
              sharing open engineering knowledge with the maker and professional
              engineering community.
            </p>

            <p className="text-silver-400 leading-relaxed text-sm">
              From low-power IoT nodes to power monitoring systems, we design,
              prototype, and document real engineering projects — with full
              transparency about what is built, what is in progress, and what is
              still conceptual.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Mission", value: "Practical R&D" },
                { label: "Focus", value: "Embedded + IoT" },
                { label: "Style", value: "Open & Documented" },
                { label: "Status", value: "Active Development" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-lg border border-white/5 bg-white/2"
                >
                  <div className="text-silver-500 text-xs mb-1">
                    {item.label}
                  </div>
                  <div className="text-white text-sm font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 text-sm font-medium transition-colors"
            >
              Learn more about MATRYNEX
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
