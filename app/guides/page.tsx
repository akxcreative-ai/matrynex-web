import React from "react";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { guides } from "@/lib/data/guides";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Guides | MATRYNEX Electronics",
  description:
    "Electronics engineering guides covering ESP32, STM32, INA219, MQTT, PCB design, and embedded systems fundamentals.",
};

const difficultyColor: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10 border-green-400/20",
  Intermediate: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Advanced: "text-red-400 bg-red-400/10 border-red-400/20",
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
            // Technical Library
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Engineering Guides
          </h1>
          <p className="text-silver-400 max-w-xl">
            Practical electronics engineering articles covering microcontrollers,
            sensors, communication protocols, and PCB design.
          </p>
        </div>

        {/* Guide grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group card-glass rounded-xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Category + difficulty */}
              <div className="flex items-center justify-between">
                <span className="text-electric-400 text-[10px] font-mono tracking-wider">
                  {guide.category}
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${difficultyColor[guide.difficulty]}`}>
                  {guide.difficulty}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-white font-bold leading-snug group-hover:text-electric-300 transition-colors">
                {guide.title}
              </h2>

              {/* Excerpt */}
              <p className="text-silver-400 text-sm leading-relaxed flex-1">
                {guide.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {guide.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono text-silver-500 border border-white/8 bg-white/3">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-silver-500 pt-2 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {guide.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={11} /> {guide.difficulty}
                  </span>
                </div>
                <ArrowRight size={13} className="text-electric-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
