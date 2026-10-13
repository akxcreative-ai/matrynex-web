import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center mx-auto">
          <Cpu size={28} className="text-electric-400" />
        </div>
        <div>
          <p className="text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
            // Error 404
          </p>
          <h1 className="text-3xl font-bold text-white mb-2">
            Signal Not Found
          </h1>
          <p className="text-silver-400 text-sm">
            The requested engineering resource or component page does not exist.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-600 hover:bg-electric-500 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <Link
            href="/store"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-electric-500/40 text-silver-200 hover:text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
