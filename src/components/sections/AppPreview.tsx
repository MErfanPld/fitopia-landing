"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const previews = [
  { title: "خانه", color: "from-[#1a1a24] to-[#12121a]" },
  { title: "جزئیات باشگاه", color: "from-[#1c1c28] to-[#14141c]" },
  { title: "پرداخت", color: "from-[#1a1a22] to-[#101018]" },
  { title: "پروفایل", color: "from-[#1e1e2a] to-[#15151e]" },
  { title: "نقشه", color: "from-[#181820] to-[#0e0e14]" },
];

function PhoneMock({ title, color, index }: { title: string; color: string; index: number }) {
  return (
    <div className="shrink-0 w-[220px] sm:w-[260px]">
      <div className="relative rounded-[2rem] border border-white/10 bg-[#0a0a0e] p-2.5 shadow-2xl">
        <div
          className={`rounded-[1.5rem] aspect-[9/19] bg-gradient-to-b ${color} overflow-hidden relative`}
        >
          {/* Status bar */}
          <div className="absolute top-0 inset-x-0 h-7 flex items-center justify-center">
            <div className="w-16 h-1.5 rounded-full bg-white/15" />
          </div>
          {/* Fake content */}
          <div className="pt-10 px-4 space-y-3">
            <div className="h-3 w-20 rounded-full bg-[#FF6A00]/60" />
            <div className="h-2.5 w-full rounded-full bg-white/10" />
            <div className="h-2.5 w-3/4 rounded-full bg-white/8" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-xl bg-white/5 border border-white/5"
                />
              ))}
            </div>
            <div className="mt-3 h-16 rounded-2xl bg-white/5 border border-white/5" />
            <div className="h-10 rounded-xl bg-[#FF6A00]/20 border border-[#FF6A00]/20" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-white/50 font-medium">
        {title}
      </p>
    </div>
  );
}

export function AppPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);

  return (
    <section id="preview" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container-wide section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[#FF6A00] text-sm font-semibold">پیش‌نمایش اپلیکیشن</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            تجربه‌ای که احساس می‌شود
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            رابط کاربری مینیمال، سریع و طراحی‌شده برای استفاده روزمره.
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative">
        <motion.div style={{ x }} className="flex gap-6 sm:gap-8 px-[10vw]">
          {previews.map((p, i) => (
            <PhoneMock key={p.title} title={p.title} color={p.color} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
