"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const EcosystemScene = dynamic(
  () =>
    import("@/components/three/EcosystemScene").then((m) => m.EcosystemScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-[#FF6A00]/10 animate-pulse" />
      </div>
    ),
  }
);

export function WhyFitopia() {
  return (
    <section id="why" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF6A00]/08 blur-[100px]" />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#FF6A00] text-sm font-semibold"
            >
              اکوسیستم فیتوپیا
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              همه ورزش‌ها،{" "}
              <span className="text-gradient">یک پلتفرم</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-white/50 text-lg leading-relaxed max-w-md"
            >
              از بدنسازی تا یوگا، از کراس‌فیت تا بوکس — فیتوپیا تمام رشته‌های ورزشی
              را در یک تجربه یکپارچه کنار هم قرار داده است.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="mt-8 space-y-3"
            >
              {[
                "دسترسی به صدها باشگاه در سراسر شهر",
                "مقایسه قیمت و امکانات در لحظه",
                "تجربه کاربری طراحی‌شده برای ورزشکاران حرفه‌ای",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white/70 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 h-[360px] sm:h-[420px] lg:h-[480px]"
          >
            <EcosystemScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
