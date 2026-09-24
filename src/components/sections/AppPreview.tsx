"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { cn } from "@/lib/utils";

const previews = [
  { title: "خانه", src: "home-mobile.webp", desc: "دسترسی سریع به باشگاه‌ها و میانبرها" },
  { title: "جستجوی باشگاه", src: "all-gyms-mobile.webp", desc: "لیست و فیلتر هوشمند" },
  { title: "جزئیات باشگاه", src: "gym-detail-mobile.webp", desc: "امکانات، قیمت و نظرات" },
  { title: "نقشه", src: "gym-map-mobile.webp", desc: "باشگاه‌های نزدیک روی نقشه" },
  { title: "پرداخت", src: "payment-mobile.webp", desc: "خرید امن اشتراک" },
  { title: "پروفایل", src: "profile-mobile.webp", desc: "مدیریت حساب و بلیت" },
  { title: "بلیت‌ها", src: "tokens-mobile.webp", desc: "اعتبار ورود به باشگاه" },
];

export function AppPreview() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setActive((i) => (i + 1) % previews.length);
  const prev = () => setActive((i) => (i - 1 + previews.length) % previews.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resume = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
  };

  const current = previews[active];
  const leftIdx = (active - 1 + previews.length) % previews.length;
  const rightIdx = (active + 1) % previews.length;

  return (
    <section id="preview" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-[#FF6A00] text-sm font-semibold">پیش‌نمایش اپلیکیشن</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight">
            صفحات واقعی فیتوپیا
          </h2>
          <p className="mt-4 text-white/50 text-base sm:text-lg">
            ورق بزنید و هر صفحه را واضح ببینید
          </p>
        </motion.div>

        <div
          className="relative flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 min-h-[380px] sm:min-h-[460px]"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <button
            type="button"
            onClick={prev}
            className="hidden sm:block shrink-0 opacity-40 hover:opacity-70 transition-opacity scale-75 origin-center"
            aria-label="قبلی"
          >
            <PhoneFrame src={previews[leftIdx].src} alt={previews[leftIdx].title} />
          </button>

          <div className="relative z-10 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.src}
                initial={{ opacity: 0, y: 24, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <PhoneFrame
                  src={current.src}
                  alt={current.title}
                  priority
                  className="!w-[min(260px,72vw)] sm:!w-[280px] drop-shadow-[0_28px_60px_rgba(255,106,0,0.18)]"
                />
              </motion.div>
            </AnimatePresence>
            <motion.div
              key={current.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center"
            >
              <h3 className="text-lg font-bold">{current.title}</h3>
              <p className="mt-1 text-sm text-white/45">{current.desc}</p>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={next}
            className="hidden sm:block shrink-0 opacity-40 hover:opacity-70 transition-opacity scale-75 origin-center"
            aria-label="بعدی"
          >
            <PhoneFrame src={previews[rightIdx].src} alt={previews[rightIdx].title} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-[#FF6A00]/50 transition-colors"
            aria-label="قبلی"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex gap-2">
            {previews.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === active ? "w-6 bg-[#FF6A00]" : "w-2 bg-white/20 hover:bg-white/40"
                )}
                aria-label={p.title}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-[#FF6A00]/50 transition-colors"
            aria-label="بعدی"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
