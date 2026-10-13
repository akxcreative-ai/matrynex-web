import React from "react";
import Link from "next/link";
import { Zap, Mail, Code2, Globe, Share2, Tv } from "lucide-react";
import { Logo } from "./Logo";

const footerNav = [
  {
    title: "Products",
    links: [
      { href: "/store", label: "Component Catalog" },
      { href: "/store?category=Microcontrollers", label: "Microcontrollers" },
      { href: "/store?category=Sensors", label: "Sensors" },
      { href: "/store?category=Communication", label: "Communication" },
      { href: "/store?category=Power+Electronics", label: "Power Electronics" },
    ],
  },
  {
    title: "Projects",
    links: [
      { href: "/projects", label: "Project Lab" },
      { href: "/projects/powersense-v1", label: "PowerSense v1" },
      { href: "/projects/iot-telemetry-system", label: "IoT Telemetry" },
      { href: "/projects/embedded-controller-suite", label: "Embedded Suite" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/guides", label: "Technical Guides" },
      { href: "/guides/esp32-vs-stm32", label: "ESP32 vs STM32" },
      { href: "/guides/ina219-power-sensor", label: "INA219 Guide" },
      { href: "/guides/intro-to-mqtt", label: "Intro to MQTT" },
      { href: "/guides/pcb-design-basics", label: "PCB Design Basics" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About MATRYNEX" },
      { href: "/contact", label: "Contact" },
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms & Conditions" },
      { href: "/legal/affiliate-disclosure", label: "Affiliate Disclosure" },
    ],
  },
];

const socials = [
  {
    href: "#github-placeholder",
    label: "GitHub",
    icon: Code2,
  },
  {
    href: "#twitter-placeholder",
    label: "Twitter / X",
    icon: Share2,
  },
  {
    href: "#linkedin-placeholder",
    label: "LinkedIn",
    icon: Globe,
  },
  {
    href: "#youtube-placeholder",
    label: "YouTube",
    icon: Tv,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 w-fit">
              <Logo size={32} />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm tracking-wider text-white">
                  MATRYNEX
                </span>
                <span className="text-[9px] tracking-[0.2em] text-electric-500/70 font-mono uppercase">
                  Electronics
                </span>
              </div>
            </Link>
            <p className="text-silver-400 text-sm leading-relaxed mb-4">
              Intelligence in Every Layer.
            </p>
            <p className="text-silver-500 text-xs leading-relaxed mb-6">
              Electronics R&amp;D, embedded systems, IoT engineering, and component
              sourcing.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 text-silver-500 hover:text-electric-400 hover:bg-electric-500/10 rounded-lg transition-all duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-silver-400 hover:text-electric-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Affiliate disclaimer */}
        <div className="border border-electric-500/10 rounded-lg p-4 mb-8 bg-electric-500/5">
          <div className="flex items-start gap-3">
            <Zap size={14} className="text-electric-400 mt-0.5 flex-shrink-0" />
            <p className="text-silver-500 text-xs leading-relaxed">
              <span className="text-electric-400 font-semibold">
                Affiliate Disclosure:{" "}
              </span>
              MATRYNEX Electronics participates in affiliate programmes. Some
              product links may earn us a small commission at no extra cost to
              you. All affiliate relationships will be clearly disclosed.
              Current external links are placeholders until verified partnerships
              are established.{" "}
              <Link
                href="/legal/affiliate-disclosure"
                className="text-electric-400 hover:underline"
              >
                Read full disclosure →
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-silver-500 text-xs">
            © {year} MATRYNEX Electronics. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/legal/privacy"
              className="text-silver-500 hover:text-electric-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-silver-500 hover:text-electric-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/legal/affiliate-disclosure"
              className="text-silver-500 hover:text-electric-400 transition-colors"
            >
              Affiliates
            </Link>
            <a
              href="mailto:[YOUR-EMAIL@DOMAIN.COM]"
              className="flex items-center gap-1 text-silver-500 hover:text-electric-400 transition-colors"
            >
              <Mail size={12} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
