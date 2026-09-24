"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Building2 } from "lucide-react";
import { LINKS } from "@/lib/links";

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6A00]/5 to-transparent" />
        <motion.div
          animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,640px)] h-[280px] sm:h-[360px] rounded-full bg-[#FF6A00]/12 blur-[110px]"
        />
      </div>

      <div className="container-narrow section-padding relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-balance px-2"
        >
          ورزش حرفه‌ای از همین امروز شروع می‌شود
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-5 sm:mt-6 text-base sm:text-lg text-white/50 max-w-xl mx-auto px-2"
        >
          بدون نصب — مستقیم وارد وب‌اپلیکیشن شوید یا باشگاه خود را ثبت کنید.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4"
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
    </section>
  );
}
