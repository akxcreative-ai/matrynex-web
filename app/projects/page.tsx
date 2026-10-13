import React from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Radio, Cpu } from "lucide-react";
import { projects } from "@/lib/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Lab | MATRYNEX Electronics",
  description:
    "Explore MATRYNEX Electronics engineering projects — embedded systems, IoT telemetry, and power monitoring prototypes.",
};

const iconMap: Record<string, React.ElementType> = {
  "powersense-v1": FlaskConical,
  "iot-telemetry-system": Radio,
  "embedded-controller-suite": Cpu,
};

const statusConfig: Record<string, { label: string; color: string }> = {
  completed: { label: "Completed", color: "text-green-400 bg-green-400/10 border-green-400/20" },
  "in-development": { label: "In Development", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
  concept: { label: "Concept", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
            // Project Lab
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Engineering Projects
          </h1>
          <p className="text-silver-400 max-w-2xl leading-relaxed">
            Real electronics projects designed, prototyped, and documented by
            MATRYNEX Electronics. Projects are clearly labelled by development
            status — concept, in development, or completed.
          </p>
          <div className="mt-6 p-4 rounded-xl border border-yellow-500/15 bg-yellow-500/5 max-w-2xl">
            <p className="text-yellow-300/80 text-sm">
              <span className="font-semibold text-yellow-400">Note: </span>
              Projects marked as &quot;Concept&quot; have not been physically built or tested.
              No project is claimed as commercially deployed or certified.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project) => {
            const Icon = iconMap[project.slug] || Cpu;
            const status = statusConfig[project.status];
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group card-glass rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start hover:border-electric-500/30 transition-all duration-300 block"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-500/20 transition-colors">
                  <Icon size={24} className="text-electric-400" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-white font-bold text-lg group-hover:text-electric-300 transition-colors">
                      {project.title}
                    </h2>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                  <p className="text-electric-500 text-sm">{project.subtitle}</p>
                  <p className="text-silver-400 text-sm leading-relaxed max-w-3xl">
                    {project.overview.slice(0, 200)}…
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono text-silver-400 border border-white/10 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight size={18} className="text-silver-600 group-hover:text-electric-400 flex-shrink-0 mt-1 transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
