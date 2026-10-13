import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, AlertCircle } from "lucide-react";
import { products } from "@/lib/data/products";

const featured = products.slice(0, 6);

export function FeaturedComponents() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              // Component Catalog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured Components
            </h2>
          </div>
          <Link
            href="/store"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 text-sm font-medium transition-colors"
          >
            Browse full catalog
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Affiliate notice */}
        <div className="flex items-start gap-2 mb-10 p-3 rounded-lg border border-electric-500/10 bg-electric-500/5">
          <AlertCircle size={14} className="text-electric-400 mt-0.5 flex-shrink-0" />
          <p className="text-silver-500 text-xs">
            Prices shown are{" "}
            <span className="text-silver-300 font-medium">illustrative estimates</span>{" "}
            and have not been verified. Supplier links are placeholders.{" "}
            <Link href="/legal/affiliate-disclosure" className="text-electric-400 hover:underline">
              Affiliate disclosure
            </Link>
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((product) => (
            <div
              key={product.id}
              className="card-glass rounded-xl overflow-hidden group hover:scale-[1.01] transition-all duration-300"
            >
              {/* Color placeholder image */}
              <div
                className="h-36 w-full flex items-center justify-center relative"
                style={{ backgroundColor: product.imagePlaceholder }}
              >
                <span className="text-white/30 text-xs font-mono tracking-wider">
                  {product.category.toUpperCase()}
                </span>
                <div className="absolute top-2 right-2">
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-silver-400 font-mono border border-white/10">
                    {product.availability === "in-stock"
                      ? "✓ In Stock"
                      : "Check Supplier"}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {/* Category */}
                <span className="text-[10px] text-electric-400 font-mono tracking-wider">
                  {product.category}
                </span>
                {/* Name */}
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-electric-300 transition-colors">
                  {product.name}
                </h3>
                {/* Short description */}
                <p className="text-silver-500 text-xs leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Price + links */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    {product.price ? (
                      <div>
                        <span className="text-electric-400 font-bold">
                          ~${product.price.toFixed(2)}
                        </span>
                        <span className="text-silver-600 text-[10px] ml-1">
                          est.
                        </span>
                      </div>
                    ) : (
                      <span className="text-silver-500 text-xs">
                        Contact supplier
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/store/${product.slug}`}
                      className="text-xs px-2.5 py-1 rounded border border-electric-500/30 text-electric-400 hover:bg-electric-500/10 transition-colors"
                    >
                      Details
                    </Link>
                    <a
                      href={product.affiliateUrl || product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2.5 py-1 rounded bg-electric-600/80 hover:bg-electric-600 text-white flex items-center gap-1 transition-colors"
                    >
                      Buy
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
