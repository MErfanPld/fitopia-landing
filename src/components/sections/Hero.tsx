"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Download, MapPin } from "lucide-react";

const FloatingPhoneScene = dynamic(
  () =>
    import("@/components/three/FloatingPhone").then((m) => m.FloatingPhoneScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-56 rounded-[2rem] bg-white/5 animate-pulse" />
      </div>
    ),
  }
);

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF6A00]/10 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FF6A00]/05 blur-[80px]" />
      </div>

      <div className="container-wide section-padding relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-0">
        {/* Text */}
        <div className="flex flex-col items-start gap-6 order-2 lg:order-1 text-right">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6A00]/12 border border-[#FF6A00]/25 text-[#FF6A00] text-xs font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              پلتفرم هوشمند باشگاه
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.15] tracking-tight text-balance"
          >
            همه باشگاه‌های شهر،{" "}
            <span className="text-gradient">در یک اپلیکیشن</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-white/55 max-w-lg leading-relaxed"
          >
            جستجو، مقایسه، خرید اشتراک و شروع تمرین در چند ثانیه
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button size="xl" className="gap-2">
              <Download size={20} />
              دانلود اپلیکیشن
            </Button>
            <Button variant="outline" size="xl" className="gap-2">
              <MapPin size={20} />
              مشاهده باشگاه‌ها
            </Button>
          </motion.div>
        </div>

        {/* 3D Phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[420px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2"
        >
          <FloatingPhoneScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs">اسکرول کنید</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
