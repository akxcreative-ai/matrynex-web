import React from "react";
import { Cpu, Wifi, Zap, CircuitBoard, LineChart, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Embedded Systems Design",
    description:
      "Firmware development and hardware prototyping across STM32, ESP32, and Arduino platforms.",
  },
  {
    icon: Wifi,
    title: "IoT & Connectivity",
    description:
      "Wi-Fi, LoRa, MQTT, and Bluetooth-based sensor networks and remote monitoring systems.",
  },
  {
    icon: Zap,
    title: "Power Electronics",
    description:
      "DC power monitoring, voltage regulation, motor control, and efficient power supply design.",
  },
  {
    icon: CircuitBoard,
    title: "PCB Design",
    description:
      "Schematic capture and PCB layout for prototype and small-batch production runs.",
  },
  {
    icon: LineChart,
    title: "Sensor Integration",
    description:
      "Current, voltage, temperature, humidity, and environmental sensor integration via I²C, SPI, and UART.",
  },
  {
    icon: Shield,
    title: "Technical Documentation",
    description:
      "Detailed engineering guides, component references, and reproducible project documentation.",
  },
];

export function Capabilities() {
  return (
    <section className="py-24 relative bg-navy-800/30">
      <div className="absolute inset-0 bg-blue-glow opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
            // Engineering Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What We Engineer
          </h2>
          <p className="text-silver-400 max-w-xl mx-auto">
            From bare-metal firmware to connected dashboards — MATRYNEX covers
            the full embedded engineering stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="card-glass rounded-xl p-6 group hover:border-electric-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 transition-colors">
                <cap.icon size={20} className="text-electric-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
              <p className="text-silver-400 text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
