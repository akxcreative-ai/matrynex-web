import React from "react";
import { AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MATRYNEX Electronics",
  description: "Privacy Policy for MATRYNEX Electronics.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">// Legal</p>
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mb-10">
          <AlertCircle size={15} className="text-yellow-400 mt-0.5 flex-shrink-0" />
          <p className="text-yellow-300/80 text-sm">
            <span className="font-semibold">Draft for Review: </span>
            This is starter text. Review with a legal professional before publishing publicly.
          </p>
        </div>

        <div className="prose-custom space-y-8 text-silver-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-3">1. Introduction</h2>
            <p>
              MATRYNEX Electronics (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
              your personal information. This Privacy Policy explains how we collect,
              use, and protect information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc ml-5 space-y-1.5 mt-3">
              <li>Information you voluntarily provide via the contact form (name, email, message)</li>
              <li>Technical data automatically collected by web servers (IP address, browser type, pages visited)</li>
              <li>Cookies necessary for site functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc ml-5 space-y-1.5">
              <li>To respond to enquiries submitted via the contact form</li>
              <li>To improve website content and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">4. Cookies</h2>
            <p>
              This website may use cookies for essential functionality. We do not
              currently use advertising or tracking cookies. Third-party services
              integrated into this website (such as analytics tools, if enabled in
              future) may set their own cookies subject to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">5. Third-Party Links</h2>
            <p>
              Our website contains links to external supplier websites. We are not
              responsible for the privacy practices of those sites. We encourage you
              to read the privacy policy of every site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">6. Data Retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to
              respond to your enquiry. We do not sell or share your personal
              information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access,
              correct, or delete personal information we hold about you. To exercise
              these rights, contact us via the Contact page.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with a revised effective date.
            </p>
          </section>

          <p className="text-silver-500 text-xs border-t border-white/10 pt-6">
            Last updated: [DATE — update before publishing] · MATRYNEX Electronics
          </p>
        </div>
      </div>
    </div>
  );
}
