import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent animate-scan-line pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-xs font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-dot-blink" />
              Electronics R&amp;D · Embedded Systems · IoT
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-white">Engineering</span>
                <br />
                <span className="text-gradient">Intelligence.</span>
                <br />
                <span className="text-white">Building Tomorrow.</span>
              </h1>
            </div>

            {/* Sub-text */}
            <p className="text-silver-300 text-lg leading-relaxed max-w-xl">
              MATRYNEX Electronics is an engineering R&amp;D brand designing
              embedded systems, IoT solutions, and connected devices — while
              building a curated library of technical guides and a sourced
              component catalog for makers and engineers.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-electric-600 hover:bg-electric-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-blue-glow hover:shadow-blue-glow-lg"
              >
                Explore Our Projects
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-6 py-3 border border-electric-500/40 hover:border-electric-500 text-silver-200 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-electric-500/10"
              >
                Browse Components
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/5">
              {[
                { label: "Components Catalogued", value: "14+" },
                { label: "Engineering Projects", value: "3" },
                { label: "Technical Guides", value: "6+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-electric-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-silver-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Animated Electronic Core */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 animate-float">
              {/* Outermost ring */}
              <div className="absolute inset-0 rounded-full border border-electric-500/15 animate-ring-pulse-slow" />
              {/* Outer ring */}
              <div
                className="absolute rounded-full border border-electric-500/25 animate-ring-pulse"
                style={{ inset: "20px" }}
              />
              {/* Middle ring with dashes */}
              <div
                className="absolute rounded-full animate-ring-pulse"
                style={{
                  inset: "50px",
                  border: "1px dashed rgba(14,165,233,0.4)",
                  animationDelay: "0.5s",
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute rounded-full border-2 border-electric-500/60 animate-ring-pulse"
                style={{ inset: "90px", animationDelay: "1s" }}
              />

              {/* Core */}
              <div
                className="absolute bg-electric-500/20 rounded-full animate-core-glow"
                style={{ inset: "120px" }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-electric-500 rounded-full opacity-80 flex items-center justify-center">
                    <Cpu size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Orbiting dot 1 */}
              <div
                className="absolute w-3 h-3 rounded-full bg-electric-400 shadow-blue-glow animate-orbit"
                style={{ top: "50%", left: "50%", marginTop: "-6px", marginLeft: "-6px" }}
              />

              {/* Orbiting dot 2 */}
              <div
                className="absolute w-2 h-2 rounded-full bg-electric-300 animate-orbit-rev"
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: "-4px",
                  marginLeft: "-4px",
                }}
              />

              {/* Corner data labels */}
              {[
                { text: "ESP32", pos: "top-2 left-2" },
                { text: "STM32", pos: "top-2 right-2" },
                { text: "LoRa", pos: "bottom-2 left-2" },
                { text: "I²C", pos: "bottom-2 right-2" },
              ].map((tag) => (
                <div
                  key={tag.text}
                  className={`absolute ${tag.pos} px-1.5 py-0.5 rounded text-[9px] font-mono text-electric-400 border border-electric-500/20 bg-navy-900/80`}
                >
                  {tag.text}
                </div>
              ))}

              {/* Connector lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 320 320"
              >
                <line x1="20" y1="20" x2="140" y2="160" stroke="#0ea5e9" strokeWidth="0.5" />
                <line x1="300" y1="20" x2="180" y2="160" stroke="#0ea5e9" strokeWidth="0.5" />
                <line x1="20" y1="300" x2="140" y2="160" stroke="#0ea5e9" strokeWidth="0.5" />
                <line x1="300" y1="300" x2="180" y2="160" stroke="#0ea5e9" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}
