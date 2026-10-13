import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MATRYNEX Electronics logo"
    >
      {/* Outer ring */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeDasharray="6 3"
        opacity="0.5"
      />
      {/* Middle ring */}
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#38bdf8"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Inner ring */}
      <circle
        cx="32"
        cy="32"
        r="14"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        opacity="0.7"
      />
      {/* Core glow fill */}
      <circle cx="32" cy="32" r="8" fill="#0ea5e9" opacity="0.15" />
      {/* M letterform — circuit-style strokes */}
      {/* Left vertical */}
      <path
        d="M22 40V24"
        stroke="#f8fafc"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left diagonal up */}
      <path
        d="M22 24L32 33"
        stroke="#f8fafc"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right diagonal up */}
      <path
        d="M42 24L32 33"
        stroke="#f8fafc"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right vertical */}
      <path
        d="M42 40V24"
        stroke="#f8fafc"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Node dots */}
      <circle cx="22" cy="24" r="2" fill="#0ea5e9" />
      <circle cx="42" cy="24" r="2" fill="#0ea5e9" />
      <circle cx="22" cy="40" r="2" fill="#38bdf8" opacity="0.7" />
      <circle cx="42" cy="40" r="2" fill="#38bdf8" opacity="0.7" />
      <circle cx="32" cy="33" r="2.5" fill="#7dd3fc" />
    </svg>
  );
}
