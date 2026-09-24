"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "آیا باید اپ را نصب کنم؟",
    a: "خیر. فیتوپیا کاملاً تحت وب است. از طریق مرورگر موبایل یا دسکتاپ به آدرس اپلیکیشن وارد شوید.",
  },
  {
    q: "فیتوپیا چیست؟",
    a: "فیتوپیا وب‌اپلیکیشن هوشمند کشف باشگاه، مقایسه اشتراک و مدیریت عضویت است. بدون نیاز به نصب از استور، از مرورگر وارد می‌شوید.",
  },
  {
    q: "آیا برای استفاده باید اشتراک بخرم؟",
    a: "جستجو و مشاهده باشگاه‌ها رایگان است. برای دسترسی به باشگاه و کلاس‌ها می‌توانید پلن مناسب را خریداری کنید.",
  },
  {
    q: "چطور باشگاه خود را ثبت کنم؟",
    a: "از بخش «ثبت باشگاه» درخواست دهید. پس از بررسی، پنل مدیریت در اختیار شما قرار می‌گیرد.",
  },
  {
    q: "آیا می‌توانم اشتراک را لغو کنم؟",
    a: "بله. لغو از داخل اپلیکیشن در هر زمان امکان‌پذیر است و طبق قوانین همان پلن اعمال می‌شود.",
  },
  {
    q: "در کدام شهرها فعال هستید؟",
    a: "در حال حاضر تمرکز روی تهران و شهرهای بزرگ است و به‌تدریج پوشش گسترش می‌یابد.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container-narrow section-padding">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[#FF6A00] text-sm font-semibold">سوالات متداول</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            پاسخ پرسش‌های شما
          </h2>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "glass rounded-2xl overflow-hidden transition-colors",
                  isOpen && "border-[#FF6A00]/25"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-white/90">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-white/40 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180 text-[#FF6A00]"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-white/50 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
