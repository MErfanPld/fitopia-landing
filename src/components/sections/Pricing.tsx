"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "پایه",
    price: "۱۹۹,۰۰۰",
    period: "ماهانه",
    desc: "برای شروع مسیر ورزشی",
    features: ["دسترسی به ۱۰ باشگاه", "۱ بلیت رایگان ماهانه", "پشتیبانی پیامکی"],
    highlighted: false,
  },
  {
    name: "حرفه‌ای",
    price: "۳۴۹,۰۰۰",
    period: "ماهانه",
    desc: "انتخاب بیشتر ورزشکاران",
    features: [
      "دسترسی نامحدود به باشگاه‌ها",
      "۵ بلیت رایگان ماهانه",
      "رزرو کلاس‌های ویژه",
      "پشتیبانی اولویت‌دار",
    ],
    highlighted: true,
  },
  {
    name: "باشگاهی",
    price: "سفارشی",
    period: "",
    desc: "برای صاحبان باشگاه",
    features: [
      "پنل مدیریت کامل",
      "گزارش مالی و حضور",
      "مدیریت مربیان و کلاس‌ها",
      "پشتیبانی اختصاصی",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="container-wide section-padding">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#FF6A00] text-sm font-semibold">پلن‌ها</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            قیمت‌گذاری شفاف
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            پلنی متناسب با نیاز خود انتخاب کنید. قابل لغو در هر زمان.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-7 flex flex-col ${
                plan.highlighted
                  ? "glass-strong border-[#FF6A00]/40 shadow-[0_0_48px_rgba(255,106,0,0.12)]"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6A00] text-white text-xs font-semibold">
                  <Sparkles size={12} />
                  پیشنهادی
                </div>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/40">{plan.desc}</p>
              <div className="mt-5 mb-6">
                <span className="text-3xl font-black text-gradient">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-white/40 mr-1">/ {plan.period}</span>
                )}
              </div>
              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                    <Check size={16} className="text-[#FF6A00] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? "primary" : "outline"}
                size="md"
                className="w-full"
              >
                {plan.name === "باشگاهی" ? "تماس با ما" : "شروع کنید"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
