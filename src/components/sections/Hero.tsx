"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { ArrowDown, Download, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF6A00]/10 blur-[100px]" />
      </div>

      <div className="container-wide section-padding relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center py-14 lg:py-0">
        <div className="flex flex-col items-start gap-5 order-2 lg:order-1 text-right">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6A00]/12 border border-[#FF6A00]/25 text-[#FF6A00] text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              پلتفرم هوشمند باشگاه
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.15] tracking-tight text-balance"
          >
            همه باشگاه‌های شهر،{" "}
            <span className="text-gradient">در یک اپلیکیشن</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-white/55 max-w-lg leading-relaxed"
          >
            جستجو، مقایسه، خرید اشتراک و شروع تمرین در چند ثانیه
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 pt-1"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneFrame
              src="home-mobile.webp"
              alt="صفحه اصلی فیتوپیا"
              scale={1.1}
              priority
              className="drop-shadow-[0_30px_60px_rgba(255,106,0,0.12)]"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs">اسکرول کنید</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
