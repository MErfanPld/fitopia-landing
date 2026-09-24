import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { articles } from "@/lib/articles";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "مقالات",
  description: "مقالات و راهنماهای فیتوپیا درباره باشگاه، اشتراک و تمرین",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <div className="container-wide section-padding pb-20 sm:pb-28">
        <div className="max-w-2xl mb-12">
          <p className="text-[#FF6A00] text-sm font-semibold mb-3">مجله فیتوپیا</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            مقالات و راهنماها
          </h1>
          <p className="mt-4 text-white/50 text-base sm:text-lg">
            نکات کاربردی برای ورزشکاران، مربیان و صاحبان باشگاه
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group glass rounded-3xl overflow-hidden flex flex-col hover:border-[#FF6A00]/30 transition-colors"
            >
              <div
                className={`h-36 sm:h-40 bg-gradient-to-br ${a.coverGradient} relative`}
              >
                <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 text-white/80 border border-white/10">
                  {a.category}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h2 className="text-base sm:text-lg font-bold leading-snug group-hover:text-[#FF6A00] transition-colors">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm text-white/45 leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-white/35">
                  <span>{a.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {a.readMinutes} دقیقه
                  </span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-[#FF6A00] font-medium">
                  مطالعه
                  <ArrowLeft size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
