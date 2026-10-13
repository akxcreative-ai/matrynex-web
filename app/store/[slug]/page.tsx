import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, FileText, ArrowLeft, Package, AlertCircle } from "lucide-react";
import { getProductBySlug, products } from "@/lib/data/products";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | MATRYNEX Store`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-silver-500 mb-8">
          <Link href="/store" className="hover:text-electric-400 flex items-center gap-1 transition-colors">
            <ArrowLeft size={14} />
            Component Catalog
          </Link>
          <span>/</span>
          <span className="text-electric-400">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: image + buy panel */}
          <div className="lg:col-span-2 space-y-5">
            {/* Placeholder image */}
            <div
              className="w-full aspect-square rounded-xl flex items-center justify-center border border-white/10"
              style={{ backgroundColor: product.imagePlaceholder }}
            >
              <div className="text-center">
                <Package size={48} className="text-white/20 mx-auto mb-2" />
                <span className="text-white/30 text-xs font-mono">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Buy panel */}
            <div className="card-glass rounded-xl p-5 space-y-4">
              {/* Price */}
              <div>
                {product.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-electric-400">
                      ~${product.price.toFixed(2)}
                    </span>
                    <span className="text-yellow-500 text-xs font-mono">
                      Illustrative estimate
                    </span>
                  </div>
                ) : (
                  <p className="text-silver-400">Contact supplier for pricing</p>
                )}
              </div>

              {/* Price disclaimer */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/15">
                <AlertCircle size={13} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-yellow-300/70 text-xs">
                  Price not verified. Check supplier for current pricing.
                </p>
              </div>

              {/* Buy button */}
              <a
                href={product.affiliateUrl || product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-electric-600 hover:bg-electric-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-blue-glow"
              >
                Buy from Supplier
                <ExternalLink size={15} />
              </a>

              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 border border-electric-500/30 text-electric-400 hover:bg-electric-500/10 font-medium rounded-lg transition-colors text-sm"
                >
                  <FileText size={14} />
                  View Datasheet
                </a>
              )}

              {/* Supplier info */}
              <div className="space-y-2 pt-2 border-t border-white/5 text-sm">
                <div className="flex justify-between">
                  <span className="text-silver-500">Manufacturer</span>
                  <span className="text-silver-300">{product.manufacturer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-silver-500">Supplier(s)</span>
                  <span className="text-silver-300 text-right max-w-[60%]">
                    {product.supplier}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-silver-500">Availability</span>
                  <span
                    className={
                      product.availability === "in-stock"
                        ? "text-green-400"
                        : product.availability === "discontinued"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }
                  >
                    {product.availability === "in-stock"
                      ? "In Stock"
                      : product.availability === "discontinued"
                      ? "Discontinued"
                      : "Check Supplier"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Category + name */}
            <div>
              <span className="text-electric-400 text-xs font-mono tracking-wider">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {product.name}
              </h1>
              <p className="text-silver-400 mt-2">{product.shortDescription}</p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-white font-semibold mb-3">Overview</h2>
              <p className="text-silver-400 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-white font-semibold mb-4">
                Technical Specifications
              </h2>
              <div className="rounded-xl border border-white/8 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val], i) => (
                      <tr
                        key={key}
                        className={i % 2 === 0 ? "bg-white/2" : "bg-transparent"}
                      >
                        <td className="px-4 py-2.5 text-silver-400 font-medium border-r border-white/5 w-1/2">
                          {key}
                        </td>
                        <td className="px-4 py-2.5 text-silver-200 font-mono text-xs">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Affiliate disclosure */}
            <div className="p-4 rounded-lg border border-electric-500/10 bg-electric-500/5 text-xs text-silver-500">
              <span className="text-electric-400 font-semibold">
                Affiliate Disclosure:{" "}
              </span>
              The &quot;Buy from Supplier&quot; link above is a placeholder URL. When verified
              affiliate partnerships are established, this link may earn MATRYNEX
              Electronics a small commission at no extra cost to you.{" "}
              <Link href="/legal/affiliate-disclosure" className="text-electric-400 hover:underline">
                Full disclosure →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
