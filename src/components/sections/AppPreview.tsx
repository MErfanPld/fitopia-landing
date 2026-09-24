"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const previews = [
  { title: "خانه", src: "home-mobile.webp" },
  { title: "جستجوی باشگاه", src: "all-gyms-mobile.webp" },
  { title: "جزئیات باشگاه", src: "gym-detail-mobile.webp" },
  { title: "نقشه", src: "gym-map-mobile.webp" },
  { title: "پرداخت", src: "payment-mobile.webp" },
  { title: "پروفایل", src: "profile-mobile.webp" },
  { title: "بلیت‌ها", src: "tokens-mobile.webp" },
];

export function AppPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-48%"]);

  return (
    <section id="preview" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container-wide section-padding mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[#FF6A00] text-sm font-semibold">پیش‌نمایش اپلیکیشن</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight">
            تجربه‌ای که احساس می‌شود
          </h2>
          <p className="mt-4 text-white/50 text-base sm:text-lg">
            هر صفحه از وب‌اپلیکیشن واقعی فیتوپیا
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative">
        <motion.div style={{ x }} className="flex gap-5 sm:gap-8 md:gap-10 px-4 sm:px-[6vw]">
          {previews.map((p) => (
            <div key={p.src} className="shrink-0 w-[180px] sm:w-[230px] md:w-[270px]">
              <PhoneFrame src={p.src} alt={p.title} scale={1} className="!max-w-full !w-full" />
              <p className="mt-4 sm:mt-5 text-center text-xs sm:text-sm text-white/50 font-medium">
                {p.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
