"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Smartphone, Map, CreditCard, UserRound, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { LINKS } from "@/lib/links";
import { Button } from "@/components/ui/Button";

const tabs = [
  {
    id: "home",
    label: "شروع و خانه",
    icon: Smartphone,
    title: "آشنایی با صفحه اصلی",
    desc: "از صفحه خوش‌آمد تا خانه: عضویت، جستجو و میانبرهای سریع را در چند ثانیه یاد بگیرید.",
    src: "home-mobile.webp",
  },
  {
    id: "gyms",
    label: "جستجوی باشگاه",
    icon: Map,
    title: "پیدا کردن باشگاه مناسب",
    desc: "نقشه، فیلتر و جزئیات باشگاه — مقایسه امکانات و انتخاب نزدیک‌ترین گزینه.",
    src: "all-gyms-mobile.webp",
  },
  {
    id: "pay",
    label: "خرید اشتراک",
    icon: CreditCard,
    title: "خرید و فعال‌سازی اشتراک",
    desc: "پلن‌ها را ببینید، پرداخت کنید و بلافاصله به باشگاه دسترسی داشته باشید.",
    src: "payment-mobile.webp",
  },
  {
    id: "profile",
    label: "پروفایل",
    icon: UserRound,
    title: "مدیریت حساب و بلیت",
    desc: "وضعیت اشتراک، بلیت‌ها و تنظیمات شخصی را از پروفایل کنترل کنید.",
    src: "profile-mobile.webp",
  },
];

export function Tutorial3D() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="tutorial" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container-wide section-padding">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[#FF6A00] text-sm font-semibold">آموزش سریع</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight">
            در چند دقیقه با اپ آشنا شوید
          </h2>
          <p className="mt-4 text-white/50 text-base sm:text-lg">
            با انتخاب هر بخش، صفحه واقعی اپ را ببینید و مسیر استفاده را یاد بگیرید.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all border",
                  isActive
                    ? "bg-[#FF6A00] border-[#FF6A00] text-white shadow-[0_0_24px_rgba(255,106,0,0.35)]"
                    : "bg-white/[0.03] border-white/10 text-white/55 hover:text-white hover:border-white/20"
                )}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-[#FF6A00]/12 blur-[80px]" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, rotateY: -18, scale: 0.94 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 18, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ perspective: 1000 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="drop-shadow-[0_30px_60px_rgba(255,106,0,0.15)]"
                >
                  <PhoneFrame
                    src={current.src}
                    alt={current.title}
                    scale={1}
                    className="!w-[min(240px,70vw)] sm:!w-[280px]"
                  />
                </motion.div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong text-xs text-white/70">
                  <Play size={12} className="text-[#FF6A00] fill-[#FF6A00]" />
                  نمای زنده اپ
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-2 lg:order-1 text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-text"}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[#FF6A00] text-sm font-semibold">{current.label}</span>
                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
                  {current.title}
                </h3>
                <p className="mt-4 text-white/50 text-sm sm:text-base leading-relaxed max-w-md">
                  {current.desc}
                </p>
                <a
                  href={LINKS.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6"
                >
                  <Button size="lg" className="gap-2">
                    امتحان در اپلیکیشن
                    <ExternalLink size={18} />
                  </Button>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
