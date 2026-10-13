import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040710",
          900: "#0a0e1a",
          800: "#0d1220",
          700: "#111827",
          600: "#1a2436",
        },
        electric: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        silver: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse at 70% 50%, rgba(14,165,233,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(14,165,233,0.04) 0%, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(10,14,26,0) 100%)",
        "blue-glow":
          "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
      },
      animation: {
        "ring-pulse": "ring-pulse 3s ease-in-out infinite",
        "core-glow": "core-glow 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "orbit": "orbit 8s linear infinite",
        "orbit-reverse": "orbit 12s linear infinite reverse",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "scan-line": "scan-line 4s linear infinite",
      },
      keyframes: {
        "ring-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "core-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(14,165,233,0.6), 0 0 40px rgba(14,165,233,0.25)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(14,165,233,0.9), 0 0 80px rgba(14,165,233,0.4)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(90px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(90px) rotate(-360deg)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(1000%)", opacity: "0" },
        },
      },
      boxShadow: {
        "blue-glow": "0 0 20px rgba(14,165,233,0.4)",
        "blue-glow-lg": "0 0 40px rgba(14,165,233,0.3)",
        "card": "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover":
          "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(14,165,233,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
