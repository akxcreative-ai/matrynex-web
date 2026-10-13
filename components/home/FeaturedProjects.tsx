import React from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Radio, Cpu } from "lucide-react";

const projects = [
  {
    slug: "powersense-v1",
    title: "MATRYNEX PowerSense v1",
    subtitle: "DC Power Monitoring System",
    description:
      "A low-voltage DC power monitor using the INA219 sensor for real-time measurement of voltage, current, and power consumption. Designed for battery management and embedded energy analytics.",
    status: "In Development",
    statusColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    icon: FlaskConical,
    tags: ["INA219", "ESP32", "I²C", "Power"],
    color: "from-blue-900/40 to-navy-900",
  },
  {
    slug: "iot-telemetry-system",
    title: "IoT Telemetry System",
    subtitle: "Remote Sensor Dashboard",
    description:
      "A conceptual multi-sensor IoT platform for collecting temperature, humidity, and custom sensor data and visualising it on a remote dashboard over MQTT.",
    status: "Concept",
    statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    icon: Radio,
    tags: ["MQTT", "DHT22", "Wi-Fi", "Dashboard"],
    color: "from-purple-900/30 to-navy-900",
  },
  {
    slug: "embedded-controller-suite",
    title: "Embedded Controller Suite",
    subtitle: "STM32 & ESP32 Prototypes",
    description:
      "A collection of embedded firmware experiments and prototype boards exploring peripheral control, RTOS basics, and low-level register programming.",
    status: "Concept",
    statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    icon: Cpu,
    tags: ["STM32", "ESP32", "RTOS", "Firmware"],
    color: "from-teal-900/30 to-navy-900",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              // Project Lab
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured R&amp;D Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 text-sm font-medium transition-colors"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group card-glass rounded-xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Icon + status */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
                  <project.icon size={20} className="text-electric-400" />
                </div>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${project.statusColor}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-white font-bold text-base group-hover:text-electric-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-electric-500 text-xs mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-silver-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-silver-400 border border-white/10 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-electric-500 text-xs font-medium group-hover:gap-2 transition-all">
                View project <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
