import React from "react";
import { AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | MATRYNEX Electronics",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">// Legal</p>
          <h1 className="text-3xl font-bold text-white">Terms &amp; Conditions</h1>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mb-10">
          <AlertCircle size={15} className="text-yellow-400 mt-0.5 flex-shrink-0" />
          <p className="text-yellow-300/80 text-sm">
            <span className="font-semibold">Draft for Review: </span>
            This is starter text. Review with a legal professional before publishing publicly.
          </p>
        </div>

        <div className="space-y-8 text-silver-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the MATRYNEX Electronics website, you accept
              and agree to be bound by these Terms and Conditions. If you do not
              agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">2. Nature of Content</h2>
            <p>
              The content on this website is provided for educational and
              informational purposes only. Technical guides, project descriptions,
              and component specifications are shared in good faith. MATRYNEX
              Electronics makes no warranties regarding the accuracy, completeness,
              or suitability of any content for a particular purpose.
            </p>
            <p className="mt-3">
              Projects marked as &quot;Concept&quot; or &quot;In Development&quot; have not been
              commercially tested, certified, or deployed. Do not rely solely on
              information from this website for safety-critical applications.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">3. Component Prices and Links</h2>
            <p>
              Prices shown in the component catalog are illustrative estimates only
              and have not been verified against current supplier pricing. Product
              availability and pricing are subject to change without notice.
              MATRYNEX Electronics is not a direct retailer and does not process
              orders or payments.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">4. Affiliate Links</h2>
            <p>
              Some links on this website may be affiliate links. MATRYNEX Electronics
              may earn a commission if you make a purchase through these links, at no
              additional cost to you. See our{" "}
              <a href="/legal/affiliate-disclosure" className="text-electric-400 hover:underline">
                Affiliate Disclosure
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">5. Intellectual Property</h2>
            <p>
              All original content on this website, including text, designs, and
              graphics, is the property of MATRYNEX Electronics unless otherwise
              stated. You may share links to our content, but reproduction of
              substantial portions without permission is not permitted.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">6. Limitation of Liability</h2>
            <p>
              MATRYNEX Electronics shall not be liable for any damages arising from
              your use of, or inability to use, this website or any information
              contained within it. This includes damages to hardware resulting from
              following any guide or project documentation.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">7. External Links</h2>
            <p>
              This website contains links to third-party websites. MATRYNEX
              Electronics is not responsible for the content, accuracy, or practices
              of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">8. Changes to Terms</h2>
            <p>
              These Terms may be updated at any time. Continued use of the website
              constitutes acceptance of the revised Terms.
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
