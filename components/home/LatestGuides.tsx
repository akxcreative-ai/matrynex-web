import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { guides } from "@/lib/data/guides";

const featured = guides.slice(0, 3);

export function LatestGuides() {
  return (
    <section className="py-24 bg-navy-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              // Technical Library
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Latest Guides
            </h2>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 text-sm font-medium transition-colors"
          >
            All guides
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group card-glass rounded-xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Category chip */}
              <span className="text-[10px] font-mono text-electric-400 tracking-wider">
                {guide.category}
              </span>

              {/* Title */}
              <h3 className="text-white font-semibold leading-snug group-hover:text-electric-300 transition-colors">
                {guide.title}
              </h3>

              {/* Excerpt */}
              <p className="text-silver-400 text-sm leading-relaxed flex-1">
                {guide.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-silver-500 text-xs pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {guide.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={11} />
                  {guide.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
