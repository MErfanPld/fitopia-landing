import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { articles, getArticle, getAllSlugs } from "@/lib/articles";
import { Clock, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "مقاله" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <article className="container-narrow section-padding pb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white mb-8"
          >
            <ArrowRight size={16} />
            همه مقالات
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/40 mb-4">
            <span className="px-2.5 py-1 rounded-full bg-[#FF6A00]/15 text-[#FF6A00] font-semibold">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {article.readMinutes} دقیقه مطالعه
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
            {article.title}
          </h1>
          <p className="mt-4 text-white/50 text-base sm:text-lg leading-relaxed">
            {article.excerpt}
          </p>

          <div
            className={`mt-8 h-44 sm:h-56 rounded-3xl bg-gradient-to-br ${article.coverGradient} border border-white/5`}
          />

          <div className="mt-10 space-y-5">
            {article.content.map((para, i) => (
              <p
                key={i}
                className="text-white/60 leading-[1.9] text-sm sm:text-base"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-wide section-padding pb-20 sm:pb-28">
          <h2 className="text-xl font-bold mb-6">مقالات مرتبط</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="glass rounded-2xl p-5 hover:border-[#FF6A00]/25 transition-colors"
              >
                <span className="text-xs text-[#FF6A00] font-semibold">
                  {a.category}
                </span>
                <h3 className="mt-2 font-bold text-sm leading-snug">{a.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteShell>
  );
}
