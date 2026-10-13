"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, Code2, Share2, Globe } from "lucide-react";

const CONTACT_EMAIL_PLACEHOLDER = "[YOUR-EMAIL@DOMAIN.COM]";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => { const n = { ...er }; delete n[e.target.name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setState("submitting");
    // Simulate submission — replace with real API call when backend is ready
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
            // Contact
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-silver-400 max-w-xl">
            Have a question about a project, want to discuss component sourcing, or
            interested in collaborating? Send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact form */}
          <div className="lg:col-span-2">
            {state === "success" ? (
              <div className="card-glass rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Message Sent!</h2>
                <p className="text-silver-400 text-sm max-w-sm">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-2 px-5 py-2 border border-electric-500/40 text-electric-400 hover:bg-electric-500/10 rounded-lg text-sm transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 space-y-5" noValidate>
                {/* Name + email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-silver-300 text-sm font-medium mb-1.5" htmlFor="name">
                      Name <span className="text-electric-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-2.5 bg-navy-800 border rounded-lg text-white placeholder-silver-600 text-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-electric-500/60 focus:ring-electric-500/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-silver-300 text-sm font-medium mb-1.5" htmlFor="email">
                      Email <span className="text-electric-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-2.5 bg-navy-800 border rounded-lg text-white placeholder-silver-600 text-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                          : "border-white/10 focus:border-electric-500/60 focus:ring-electric-500/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-silver-300 text-sm font-medium mb-1.5" htmlFor="subject">
                    Subject <span className="text-electric-400">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-navy-800 border rounded-lg text-sm focus:outline-none focus:ring-1 transition-colors ${
                      form.subject ? "text-white" : "text-silver-600"
                    } ${
                      errors.subject
                        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                        : "border-white/10 focus:border-electric-500/60 focus:ring-electric-500/20"
                    }`}
                  >
                    <option value="" disabled>Select a subject…</option>
                    <option value="Engineering question">Engineering question</option>
                    <option value="Component inquiry">Component inquiry</option>
                    <option value="Project collaboration">Project collaboration</option>
                    <option value="Technical guide suggestion">Technical guide suggestion</option>
                    <option value="Affiliate / partnership">Affiliate / partnership enquiry</option>
                    <option value="General">General enquiry</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-silver-300 text-sm font-medium mb-1.5" htmlFor="message">
                    Message <span className="text-electric-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your question or project in detail…"
                    className={`w-full px-4 py-2.5 bg-navy-800 border rounded-lg text-white placeholder-silver-600 text-sm focus:outline-none focus:ring-1 transition-colors resize-y min-h-[120px] ${
                      errors.message
                        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
                        : "border-white/10 focus:border-electric-500/60 focus:ring-electric-500/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {state === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-electric-600 hover:bg-electric-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-blue-glow"
                >
                  {state === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-silver-600 text-xs text-center">
                  By submitting this form you agree to our{" "}
                  <a href="/legal/privacy" className="text-electric-400 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Email placeholder */}
            <div className="card-glass rounded-xl p-5 space-y-3">
              <h3 className="text-white font-semibold flex items-center gap-2 text-sm">
                <Mail size={15} className="text-electric-400" />
                Direct Email
              </h3>
              <p className="text-silver-500 text-xs leading-relaxed">
                Email contact will be available once the contact address is configured.
              </p>
              <div className="px-3 py-2 rounded-lg bg-yellow-500/5 border border-yellow-500/15">
                <p className="text-yellow-400/70 text-xs font-mono">
                  {CONTACT_EMAIL_PLACEHOLDER}
                </p>
                <p className="text-silver-600 text-[10px] mt-0.5">
                  Placeholder — replace before publishing
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="card-glass rounded-xl p-5 space-y-3">
              <h3 className="text-white font-semibold text-sm">Find Us Online</h3>
              <div className="space-y-2">
                {[
                  { icon: Code2, label: "GitHub", href: "#github-placeholder" },
                  { icon: Share2, label: "Twitter / X", href: "#twitter-placeholder" },
                  { icon: Globe, label: "LinkedIn", href: "#linkedin-placeholder" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-silver-400 hover:text-white transition-colors text-sm"
                  >
                    <s.icon size={15} className="text-electric-400" />
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="text-silver-600 text-xs">
                Social profiles are placeholders — update links before publishing.
              </p>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-xl border border-electric-500/10 bg-electric-500/5">
              <p className="text-silver-400 text-xs leading-relaxed">
                <span className="text-electric-400 font-medium">Response time: </span>
                We aim to respond to all enquiries within 2–5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
