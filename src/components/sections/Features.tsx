"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  CreditCard,
  Calendar,
  Star,
  Settings,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "جستجوی باشگاه‌های اطراف",
    desc: "باشگاه‌های نزدیک را با نقشه زنده و فیلترهای هوشمند پیدا کنید.",
  },
  {
    icon: CreditCard,
    title: "خرید اشتراک آنلاین",
    desc: "بدون مراجعه حضوری، اشتراک خود را در چند ثانیه فعال کنید.",
  },
  {
    icon: Calendar,
    title: "کلاس‌های ورزشی",
    desc: "برنامه کلاس‌ها را ببینید و برای جلسات محبوب رزرو کنید.",
  },
  {
    icon: Star,
    title: "باشگاه‌های منتخب",
    desc: "باشگاه‌های مورد علاقه‌تان را ذخیره و سریع دسترسی داشته باشید.",
  },
  {
    icon: Settings,
    title: "مدیریت اشتراک",
    desc: "وضعیت، تمدید و تاریخچه اشتراک‌ها را در یک جا مدیریت کنید.",
  },
  {
    icon: Wallet,
    title: "کیف پول و پرداخت",
    desc: "پرداخت امن، کیف پول داخلی و تاریخچه تراکنش‌ها.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="container-wide section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF6A00] text-sm font-semibold"
          >
            ویژگی‌ها
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
          >
            همه چیز برای زندگی ورزشی شما
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/50 text-lg"
          >
            از کشف تا تمرین، فیتوپیا تمام مسیر را ساده کرده است.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-7 glow-border transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,106,0,0.12)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6A00]/12 border border-[#FF6A00]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF6A00]/20 transition-colors">
                <f.icon className="w-5 h-5 text-[#FF6A00]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
