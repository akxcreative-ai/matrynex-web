"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ExternalLink, AlertCircle, SlidersHorizontal } from "lucide-react";
import { products, PRODUCT_CATEGORIES } from "@/lib/data/products";

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

export default function StorePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("name-asc");

  const filtered = useMemo(() => {
    let list = [...products];

    // Category filter
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.manufacturer.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    list.sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "price-asc") return (a.price ?? 999) - (b.price ?? 999);
      if (sort === "price-desc") return (b.price ?? 0) - (a.price ?? 0);
      return 0;
    });

    return list;
  }, [query, category, sort]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
            // Component Catalog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Electronic Components
          </h1>
          <p className="text-silver-400 max-w-xl">
            A curated catalog of components for embedded systems and IoT
            engineering. Prices are illustrative estimates — verify with your
            supplier before purchasing.
          </p>
        </div>

        {/* Affiliate notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl border border-electric-500/15 bg-electric-500/5 mb-8">
          <AlertCircle size={15} className="text-electric-400 mt-0.5 flex-shrink-0" />
          <p className="text-silver-400 text-sm">
            <span className="text-electric-400 font-semibold">Affiliate Disclosure: </span>
            Some &quot;Buy from Supplier&quot; links may be affiliate links. Prices shown are
            <span className="text-yellow-400 font-medium"> illustrative estimates only</span> and
            are not verified against current supplier prices.
            Supplier links are placeholders until verified partnerships are
            established.{" "}
            <Link href="/legal/affiliate-disclosure" className="text-electric-400 hover:underline">
              Read full disclosure →
            </Link>
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-500" />
            <input
              type="text"
              placeholder="Search components, manufacturers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-silver-500 text-sm focus:outline-none focus:border-electric-500/60 focus:ring-1 focus:ring-electric-500/30 transition-colors"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={15} className="text-silver-500 flex-shrink-0" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-navy-800 border border-white/10 rounded-lg text-white text-sm px-3 py-2.5 focus:outline-none focus:border-electric-500/60 cursor-pointer"
            >
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                category === cat
                  ? "bg-electric-600 text-white shadow-blue-glow"
                  : "border border-white/10 text-silver-400 hover:text-white hover:border-electric-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-silver-500 text-sm mb-6">
          {filtered.length === 0
            ? "No components found"
            : `${filtered.length} component${filtered.length !== 1 ? "s" : ""} found`}
        </p>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-silver-500">
            <Search size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium text-white mb-2">No results found</p>
            <p className="text-sm">Try a different search term or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="card-glass rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                {/* Placeholder image */}
                <div
                  className="h-32 w-full relative flex items-center justify-center"
                  style={{ backgroundColor: product.imagePlaceholder }}
                >
                  <span className="text-white/20 text-xs font-mono">
                    {product.category.toUpperCase()}
                  </span>
                  <div className="absolute top-2 right-2">
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/50 text-silver-400 border border-white/10">
                      {product.availability === "in-stock"
                        ? "✓ In Stock"
                        : "Check Supplier"}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-2.5 flex-1">
                  <span className="text-[10px] text-electric-400 font-mono tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-electric-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-silver-500 text-xs leading-relaxed flex-1">
                    {product.shortDescription}
                  </p>
                  <p className="text-silver-600 text-[10px]">
                    {product.manufacturer}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5">
                    {product.price ? (
                      <>
                        <span className="text-electric-400 font-bold">
                          ~${product.price.toFixed(2)}
                        </span>
                        <span className="text-yellow-500/70 text-[10px] font-mono">
                          est.
                        </span>
                      </>
                    ) : (
                      <span className="text-silver-500 text-xs">
                        Contact supplier
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    <Link
                      href={`/store/${product.slug}`}
                      className="flex-1 text-center text-xs py-1.5 rounded border border-electric-500/30 text-electric-400 hover:bg-electric-500/10 transition-colors"
                    >
                      View Details
                    </Link>
                    <a
                      href={product.affiliateUrl || product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs px-3 py-1.5 rounded bg-electric-600/80 hover:bg-electric-600 text-white transition-colors"
                    >
                      Buy
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
