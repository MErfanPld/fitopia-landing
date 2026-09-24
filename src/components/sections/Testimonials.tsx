"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "سارا محمدی",
    role: "عضو باشگاه فیت‌لایف",
    text: "با فیتوپیا دیگه نیازی به گشتن بین چند اپ و سایت نیست. همه باشگاه‌ها رو یکجا می‌بینم و اشتراک می‌گیرم.",
    rating: 5,
  },
  {
    name: "علی رضایی",
    role: "ورزشکار کراس‌فیت",
    text: "مقایسه قیمت و امکانات باشگاه‌ها فوق‌العاده است. رابط کاربری تمیز و سریع. پیشنهاد می‌کنم.",
    rating: 5,
  },
  {
    name: "مریم حسینی",
    role: "مربی یوگا",
    text: "هم به عنوان مربی و هم به عنوان کاربر از فیتوپیا راضی هستم. مدیریت کلاس‌ها خیلی راحت شده.",
    rating: 5,
  },
  {
    name: "رضا کریمی",
    role: "عضو باشگاه آیرون",
    text: "از روزی که فیتوپیا رو نصب کردم، دیگه نگران تمدید اشتراک یا پیدا کردن باشگاه جدید نیستم.",
    rating: 4,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="container-narrow section-padding">
        <div className="text-center mb-14">
          <span className="text-[#FF6A00] text-sm font-semibold">نظرات کاربران</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
            آنچه ورزشکاران می‌گویند
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="glass-strong rounded-3xl p-8 sm:p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#FF6A00] text-[#FF6A00]"
                  />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-medium">
                «{t.text}»
              </p>
              <div className="mt-8">
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-white/40 mt-1">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-colors"
              aria-label="قبلی"
            >
              <ChevronRight size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? "bg-[#FF6A00] w-5" : "bg-white/20"
                  }`}
                  aria-label={`نظر ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-colors"
              aria-label="بعدی"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
