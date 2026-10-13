import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, BookOpen, Tag } from "lucide-react";
import { getGuideBySlug, guides } from "@/lib/data/guides";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: `${guide.title} | MATRYNEX Guides`,
    description: guide.excerpt,
  };
}

const difficultyColor: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10 border-green-400/20",
  Intermediate: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Advanced: "text-red-400 bg-red-400/10 border-red-400/20",
};

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let tableBuffer: string[] = [];

  const flushTable = () => {
    if (tableBuffer.length < 2) { tableBuffer = []; return; }
    const headers = tableBuffer[0].split("|").filter(Boolean).map(s => s.trim());
    const rows = tableBuffer.slice(2).map(r => r.split("|").filter(Boolean).map(s => s.trim()));
    elements.push(
      <div key={`table-${i}`} className="overflow-x-auto my-6 rounded-lg border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-electric-500/10">
              {headers.map((h, hi) => (
                <th key={hi} className="px-4 py-2.5 text-left text-electric-300 font-semibold border-b border-white/10">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white/2" : ""}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-2.5 text-silver-300 border-b border-white/5 last:border-0">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
  };

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={`code-${i}`} className="my-5 rounded-lg overflow-hidden border border-white/10">
          {lang && (
            <div className="px-4 py-1.5 bg-navy-700 border-b border-white/10 text-xs font-mono text-electric-400">
              {lang}
            </div>
          )}
          <pre className="bg-navy-800 p-4 overflow-x-auto text-sm">
            <code className="text-silver-200 font-mono leading-relaxed">
              {codeLines.join("\n")}
            </code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // Table
    if (line.startsWith("|")) {
      tableBuffer.push(line);
      i++;
      continue;
    } else if (tableBuffer.length > 0) {
      flushTable();
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-xl font-bold text-white mt-8 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="text-base font-bold text-electric-300 mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith("**") && line.endsWith(":")) {
      elements.push(<p key={i} className="font-semibold text-white mt-4 mb-1">{line.replace(/\*\*/g, "")}</p>);
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-silver-300 text-sm ml-4 list-disc leading-relaxed">
          {line.slice(2)}
        </li>
      );
    } else if (line.match(/^\d+\. /)) {
      elements.push(
        <li key={i} className="text-silver-300 text-sm ml-4 list-decimal leading-relaxed">
          {line.replace(/^\d+\. /, "")}
        </li>
      );
    } else if (line.startsWith("- [ ]") || line.startsWith("- [x]")) {
      const checked = line.startsWith("- [x]");
      elements.push(
        <li key={i} className="text-silver-300 text-sm ml-4 list-none flex items-center gap-2 leading-relaxed">
          <span className={`text-xs ${checked ? "text-green-400" : "text-silver-500"}`}>{checked ? "☑" : "☐"}</span>
          {line.slice(6)}
        </li>
      );
    } else if (line.trim() && !line.startsWith("#")) {
      elements.push(<p key={i} className="text-silver-300 text-sm leading-relaxed my-2">{line}</p>);
    }

    i++;
  }

  if (tableBuffer.length > 0) flushTable();
  return elements;
}

export default function GuideDetailPage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-silver-500 mb-8">
          <Link href="/guides" className="hover:text-electric-400 flex items-center gap-1 transition-colors">
            <ArrowLeft size={14} />
            Guides
          </Link>
          <span>/</span>
          <span className="text-electric-400 truncate">{guide.title}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <span className="text-electric-400 text-xs font-mono tracking-wider">{guide.category}</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">{guide.title}</h1>
          <p className="text-silver-400 leading-relaxed mb-5">{guide.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-silver-500">
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {guide.readTime}
            </span>
            <span className={`flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border ${difficultyColor[guide.difficulty]}`}>
              <BookOpen size={11} /> {guide.difficulty}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={11} /> {guide.tags.join(", ")}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent mb-10" />

        {/* Content */}
        <article className="prose-custom">
          {renderContent(guide.content)}
        </article>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* Related guides */}
        <div>
          <h3 className="text-white font-bold mb-6">More Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="card-glass rounded-lg p-4 hover:border-electric-500/30 transition-all duration-200 group"
              >
                <span className="text-electric-400 text-[10px] font-mono">{g.category}</span>
                <p className="text-white text-sm font-medium mt-1 group-hover:text-electric-300 transition-colors leading-snug">
                  {g.title}
                </p>
                <p className="text-silver-500 text-xs mt-1">{g.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
