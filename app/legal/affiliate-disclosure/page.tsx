import React from "react";
import { AlertCircle, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | MATRYNEX Electronics",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">// Legal</p>
          <h1 className="text-3xl font-bold text-white">Affiliate Disclosure</h1>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mb-10">
          <AlertCircle size={15} className="text-yellow-400 mt-0.5 flex-shrink-0" />
          <p className="text-yellow-300/80 text-sm">
            <span className="font-semibold">Draft for Review: </span>
            This is starter text to be updated when real affiliate partnerships are established.
          </p>
        </div>

        <div className="space-y-8 text-silver-300 text-sm leading-relaxed">
          {/* Summary box */}
          <div className="flex items-start gap-4 p-5 rounded-xl card-glass border-electric-500/15">
            <Zap size={20} className="text-electric-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">In Plain Language</p>
              <p className="text-silver-300 text-sm">
                Some links on this website may earn MATRYNEX Electronics a small
                commission if you click them and make a purchase. This costs you
                nothing extra. We only link to products we believe are relevant to
                our engineering content.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">1. What is an Affiliate Link?</h2>
            <p>
              An affiliate link is a special URL that includes a tracking identifier.
              When you click an affiliate link and complete a qualifying purchase on
              the supplier&apos;s website, MATRYNEX Electronics may receive a small
              referral commission from that supplier. The price you pay is the same
              whether or not you use an affiliate link.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">2. Current Status of Affiliate Partnerships</h2>
            <p>
              As of the current date, MATRYNEX Electronics has{" "}
              <span className="text-yellow-400 font-semibold">
                no active verified affiliate partnerships
              </span>
              . All &quot;Buy from Supplier&quot; links in the component catalog are
              placeholder URLs. These will be updated to verified affiliate or
              supplier links once partnerships are established.
            </p>
            <p className="mt-3">
              This page will be updated to identify all active affiliate
              relationships clearly, including the name of the supplier and the
              commission structure (where permitted for disclosure).
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">3. Our Editorial Independence</h2>
            <p>
              Affiliate relationships do not influence which components we list,
              review, or recommend. Components are selected based on their technical
              merit, community usage, and relevance to embedded systems and IoT
              engineering — not on commission rates.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">4. Identification of Affiliate Content</h2>
            <p>
              When active affiliate links are in use, they will be clearly identified
              with an &quot;Affiliate Link&quot; label or similar disclosure at the point of
              use. The affiliate disclosure banner in the component catalog and footer
              will also apply.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">5. Questions</h2>
            <p>
              If you have questions about our affiliate practices, please use the{" "}
              <a href="/contact" className="text-electric-400 hover:underline">
                Contact page
              </a>{" "}
              to get in touch.
            </p>
          </section>

          <p className="text-silver-500 text-xs border-t border-white/10 pt-6">
            Last updated: [DATE — update when partnerships are established] · MATRYNEX Electronics
          </p>
        </div>
      </div>
    </div>
  );
}
