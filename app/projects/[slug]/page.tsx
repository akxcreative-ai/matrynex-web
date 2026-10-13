import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, Package, Cpu } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import { getProductBySlug } from "@/lib/data/products";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | MATRYNEX Project Lab`,
    description: project.overview.slice(0, 155),
  };
}

const statusConfig: Record<string, { label: string; color: string; desc: string }> = {
  completed: {
    label: "Completed",
    color: "text-green-400 bg-green-400/10 border-green-400/20",
    desc: "This project has been built and tested.",
  },
  "in-development": {
    label: "In Development",
    color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    desc: "This project is actively being developed. Results are preliminary.",
  },
  concept: {
    label: "Concept",
    color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    desc: "This project has not been physically built or tested. Specifications are targets only.",
  },
};

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const status = statusConfig[project.status];
  const relatedProducts = project.relatedProductSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-silver-500 mb-8">
          <Link href="/projects" className="hover:text-electric-400 flex items-center gap-1 transition-colors">
            <ArrowLeft size={14} />
            Project Lab
          </Link>
          <span>/</span>
          <span className="text-electric-400">{project.title}</span>
        </div>

        {/* Status banner */}
        <div className={`flex items-start gap-3 p-4 rounded-xl border mb-8 ${status.color.split(" ").slice(1).join(" ")}`}>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${status.color} flex-shrink-0`}>
            {status.label}
          </span>
          <p className={`text-sm ${status.color.split(" ")[0]}`}>{status.desc}</p>
        </div>

        {/* Title */}
        <div className="mb-10">
          <span className="text-electric-400 text-xs font-mono tracking-wider">{project.subtitle}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">{project.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-white font-bold text-xl mb-4">Project Overview</h2>
              <p className="text-silver-300 leading-relaxed">{project.overview}</p>
            </section>

            {/* Objectives */}
            <section>
              <h2 className="text-white font-bold text-xl mb-4">Objectives</h2>
              <ul className="space-y-2.5">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-silver-300 text-sm">
                    <CheckCircle size={15} className="text-electric-400 mt-0.5 flex-shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </section>

            {/* Hardware */}
            <section>
              <h2 className="text-white font-bold text-xl mb-4">Hardware Components</h2>
              <ul className="space-y-2">
                {project.hardware.map((hw, i) => (
                  <li key={i} className="flex items-start gap-3 text-silver-300 text-sm">
                    <Package size={14} className="text-silver-500 mt-0.5 flex-shrink-0" />
                    {hw}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specs */}
            <div className="card-glass rounded-xl p-5">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Cpu size={16} className="text-electric-400" />
                Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(project.specs).map(([key, val]) => (
                  <div key={key}>
                    <div className="text-silver-500 text-xs mb-0.5">{key}</div>
                    <div className="text-silver-200 text-sm font-mono">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="card-glass rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3 text-sm">Technologies</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono text-silver-400 border border-white/10 bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related components */}
            {relatedProducts.length > 0 && (
              <div className="card-glass rounded-xl p-5">
                <h3 className="text-white font-semibold mb-4 text-sm">Related Components</h3>
                <div className="space-y-3">
                  {relatedProducts.map((prod) => prod && (
                    <Link
                      key={prod.id}
                      href={`/store/${prod.slug}`}
                      className="block p-3 rounded-lg border border-white/5 hover:border-electric-500/30 hover:bg-electric-500/5 transition-all duration-200"
                    >
                      <div className="text-white text-xs font-medium hover:text-electric-300 transition-colors">
                        {prod.name}
                      </div>
                      <div className="text-silver-500 text-[10px] mt-0.5">
                        {prod.category}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
