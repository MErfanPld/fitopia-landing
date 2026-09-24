"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { User, Building2, Dumbbell, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { useEffect, useState } from "react";

const EcosystemScene = dynamic(
  () => import("@/components/three/EcosystemScene").then((m) => m.EcosystemScene),
  { ssr: false, loading: () => <div className="w-full h-full bg-white/[0.03] animate-pulse rounded-2xl" /> }
);

const products = [
  {
    id: "users",
    icon: User,
    badge: "ورزشکاران",
    title: "اپلیکیشن فیتوپیا",
    desc: "جستجوی باشگاه، مقایسه اشتراک، خرید آنلاین و مدیریت بلیت — همه در یک وب‌اپ سریع و موبایل‌فرندلی.",
    points: ["نقشه و لیست باشگاه‌ها", "خرید اشتراک آنلاین", "بلیت و کلاس‌ها", "پروفایل ورزشی"],
    href: LINKS.app,
    cta: "ورود به اپلیکیشن",
    accent: "#FF6A00",
  },
  {
    id: "owners",
    icon: Building2,
    badge: "صاحبان باشگاه",
    title: "پنل مدیریت باشگاه",
    desc: "داشبورد کامل برای عضوگیری، مالی، کلاس‌ها، مربیان و گزارش حضور — مخصوص مدیران باشگاه.",
    points: ["مدیریت اعضا و اشتراک", "گزارش مالی", "کلاس و حضور", "برندینگ باشگاه"],
    href: "#gym-owners",
    cta: "ثبت باشگاه",
    accent: "#FF8533",
  },
  {
    id: "coaches",
    icon: Dumbbell,
    badge: "مربیان",
    title: "پنل مربی",
    desc: "برنامه کلاس‌ها، شاگردان و جلسات تمرینی را در یک پنل اختصاصی مدیریت کنید.",
    points: ["برنامه هفتگی", "لیست شاگردان", "جلسات و حضور", "پروفایل مربی"],
    href: LINKS.app,
    cta: "مشاهده پنل",
    accent: "#FF9A4D",
  },
];

export function Products() {
  const [show3d, setShow3d] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => setShow3d(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="products" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(90vw,600px)] h-[300px] rounded-full bg-[#FF6A00]/06 blur-[100px]" />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#FF6A00] text-sm font-semibold">محصولات فیتوپیا</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight">
            یک اکوسیستم، سه تجربه
          </h2>
          <p className="mt-4 text-white/50 text-base sm:text-lg">
            برای ورزشکار، صاحب باشگاه و مربی — هر کدام پنل و مسیر خودش را دارد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative glass rounded-3xl p-6 sm:p-7 flex flex-col group hover:border-[#FF6A00]/25 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-white/10"
                style={{ background: `${p.accent}18` }}
              >
                <p.icon className="w-6 h-6" style={{ color: p.accent }} />
              </div>

              <span className="text-xs font-semibold text-[#FF6A00]/90 mb-2">{p.badge}</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-5 flex-1">{p.desc}</p>

              <ul className="space-y-2 mb-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-xs sm:text-sm text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              {p.href.startsWith("http") ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <Button variant={i === 0 ? "primary" : "outline"} size="md" className="w-full gap-2">
                    {p.cta}
                    <ExternalLink size={16} />
                  </Button>
                </a>
              ) : (
                <Button
                  variant="outline"
                  size="md"
                  className="w-full gap-2 mt-auto"
                  onClick={() =>
                    document.getElementById(p.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {p.cta}
                  <ArrowLeft size={16} />
                </Button>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 relative h-[240px] sm:h-[320px] lg:h-[380px] rounded-3xl overflow-hidden border border-white/[0.06] bg-[#0a0a10]"
        >
          {show3d ? (
            <EcosystemScene />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center">
                <span className="text-2xl font-black text-[#FF6A00]">F</span>
              </div>
              <p className="text-sm text-white/40">اکوسیستم فیتوپیا — ورزشکار · باشگاه · مربی</p>
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07070A] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
