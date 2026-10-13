import React from "react";
import { Layers, Cpu, Wifi, BookOpen, Target, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MATRYNEX Electronics",
  description:
    "Learn about MATRYNEX Electronics — our engineering mission, R&D philosophy, and commitment to open electronics education.",
};

const pillars = [
  {
    icon: Cpu,
    title: "Embedded Systems Focus",
    description:
      "We design and prototype at the hardware level — MCU registers, peripheral buses, and firmware that runs reliably on constrained silicon.",
  },
  {
    icon: Wifi,
    title: "Connected Engineering",
    description:
      "Every project considers connectivity — whether Wi-Fi, LoRa, MQTT, or BLE — because isolated sensors are rarely useful.",
  },
  {
    icon: BookOpen,
    title: "Open Documentation",
    description:
      "We document everything: what worked, what failed, why we chose each component, and how to reproduce our work.",
  },
  {
    icon: Target,
    title: "Practical Over Theoretical",
    description:
      "Theory informs decisions, but working prototypes are the measure of success. We build first, then refine.",
  },
  {
    icon: Heart,
    title: "Honest Engineering",
    description:
      "We clearly distinguish between what is built, what is in development, and what is conceptual. No inflated claims.",
  },
  {
    icon: Layers,
    title: "Layered Knowledge",
    description:
      "From silicon physics to application-layer protocols — understanding the full stack produces better engineers and better products.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-3">
            // About MATRYNEX Electronics
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Intelligence in{" "}
            <span className="text-gradient">Every Layer.</span>
          </h1>
          <p className="text-silver-400 text-lg max-w-2xl mx-auto leading-relaxed">
            MATRYNEX Electronics is an independent electronics R&amp;D brand
            building embedded systems, IoT solutions, and open engineering
            knowledge — one documented project at a time.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent mb-16" />

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-silver-300 leading-relaxed">
              Electronics engineering can feel opaque. Datasheets are dense,
              development boards are abundant but underdocumented, and the gap
              between &quot;blink an LED&quot; and &quot;build a reliable
              product&quot; is often left unexplained.
            </p>
            <p className="text-silver-400 leading-relaxed text-sm">
              MATRYNEX exists to close that gap. We design real engineering
              projects — power monitors, IoT nodes, embedded controllers — and
              document the complete process: component selection, circuit
              reasoning, firmware structure, and lessons learned.
            </p>
            <p className="text-silver-400 leading-relaxed text-sm">
              We are not a corporate R&amp;D lab. We are independent engineers
              building in public, sharing what we learn, and building a
              community around practical electronics education.
            </p>
          </div>

          {/* Visual */}
          <div className="relative h-64 rounded-2xl card-glass border border-electric-500/10 flex items-center justify-center overflow-hidden">
            <div className="absolute w-56 h-56 rounded-full border border-electric-500/10" />
            <div className="absolute w-40 h-40 rounded-full border border-electric-500/15" />
            <div className="absolute w-24 h-24 rounded-full border border-electric-500/25" />
            <div className="w-14 h-14 rounded-full bg-electric-500/10 border border-electric-500/40 flex items-center justify-center">
              <Layers size={26} className="text-electric-400" />
            </div>
          </div>
        </div>

        {/* Engineering pillars */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-2">
            Engineering Philosophy
          </h2>
          <p className="text-silver-400 text-sm mb-10">
            The principles that guide how we design, build, and document.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="card-glass rounded-xl p-5 group hover:border-electric-500/30 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-3 group-hover:bg-electric-500/20 transition-colors">
                  <pillar.icon size={18} className="text-electric-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {pillar.title}
                </h3>
                <p className="text-silver-400 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* R&D interests */}
        <div className="card-glass rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-5">R&amp;D Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Low-power embedded sensor nodes",
              "INA219 and ACS712 current sensing",
              "LoRa long-range sensor networks",
              "STM32 bare-metal firmware",
              "ESP32 Wi-Fi IoT architectures",
              "DC-DC converter design",
              "FreeRTOS task management",
              "Custom PCB design and manufacturing",
              "MQTT and edge telemetry systems",
              "Open-source firmware development",
            ].map((interest) => (
              <div
                key={interest}
                className="flex items-center gap-2 text-silver-300 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric-500 flex-shrink-0" />
                {interest}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-5 rounded-xl border border-silver-700/30 bg-silver-800/10 text-sm text-silver-400">
          <p className="font-semibold text-silver-300 mb-2">About This Brand</p>
          <p>
            MATRYNEX Electronics is an independent R&amp;D and content brand.
            Company registration details, office addresses, staff counts, and
            formal certifications are not displayed here as they are not yet
            applicable. No customer testimonials, verified sales statistics, or
            claimed awards are represented on this site.
          </p>
        </div>
      </div>
    </div>
  );
}
