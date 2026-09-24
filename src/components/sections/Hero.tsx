"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { ArrowDown, ExternalLink, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { LINKS } from "@/lib/links";

const FloatingPhoneScene = dynamic(
  () =>
    import("@/components/three/FloatingPhone").then((m) => m.FloatingPhoneScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-36 h-64 sm:w-40 sm:h-72 rounded-[2rem] bg-white/5 animate-pulse" />
      </div>
    ),
  }
);

export function Hero() {
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => setUse3d(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full bg-[#FF6A00]/10 blur-[110px]" />
      </div>

      <div className="container-wide section-padding relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-8 items-center py-10 sm:py-14 lg:py-0">
        <div className="flex flex-col items-stretch sm:items-start gap-4 sm:gap-5 order-2 lg:order-1 text-right w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6A00]/12 border border-[#FF6A00]/25 text-[#FF6A00] text-xs font-medium mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              وب‌اپلیکیشن هوشمند باشگاه
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-balance"
          >
            همه باشگاه‌های شهر،{" "}
            <span className="text-gradient">در یک اپلیکیشن</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg lg:text-xl text-white/55 max-w-lg leading-relaxed"
          >
            جستجو، مقایسه، خرید اشتراک و شروع تمرین — بدون نصب، کاملاً تحت وب
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1 w-full sm:w-auto"
          >
            <a href={LINKS.app} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="xl" className="w-full sm:w-auto gap-2">
                ورود به اپلیکیشن
                <ExternalLink size={18} />
              </Button>
            </a>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto gap-2"
              onClick={() =>
                document.getElementById("gym-owners")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Building2 size={20} />
              ثبت باشگاه
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center order-1 lg:order-2 min-h-[280px] sm:min-h-[340px] lg:min-h-[520px]"
        >
          {use3d ? (
            <div className="absolute inset-0">
              <FloatingPhoneScene />
            </div>
          ) : (
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[min(220px,70vw)] sm:w-[260px]"
            >
              <PhoneFrame
                src="home-mobile.webp"
                alt="صفحه اصلی فیتوپیا"
                scale={1}
                priority
                className="!w-full drop-shadow-[0_30px_60px_rgba(255,106,0,0.12)]"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] sm:text-xs">اسکرول کنید</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
