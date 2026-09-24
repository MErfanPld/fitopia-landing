"use client";

import { motion } from "framer-motion";
import { Building2, BarChart3, Users, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const benefits = [
  {
    icon: Users,
    title: "جذب عضو جدید",
    desc: "باشگاه شما در معرض هزاران ورزشکار فعال قرار می‌گیرد.",
  },
  {
    icon: BarChart3,
    title: "گزارش و آنالیز",
    desc: "آمار حضور، درآمد و محبوبیت کلاس‌ها در یک داشبورد.",
  },
  {
    icon: CalendarCheck,
    title: "مدیریت کلاس‌ها",
    desc: "برنامه مربیان و رزرو جلسات را به‌سادگی مدیریت کنید.",
  },
  {
    icon: Building2,
    title: "برندینگ حرفه‌ای",
    desc: "صفحه اختصاصی باشگاه با گالری، نظرات و امکانات.",
  },
];

export function GymOwners() {
  return (
    <section id="gym-owners" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#FF6A00]/06 blur-[100px]" />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#FF6A00] text-sm font-semibold"
            >
              برای صاحبان باشگاه
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              باشگاه خود را به{" "}
              <span className="text-gradient">هزاران ورزشکار</span> معرفی کنید
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-white/50 text-lg leading-relaxed max-w-md"
            >
              با ثبت باشگاه در فیتوپیا، عضوگیری، مدیریت اشتراک و گزارش‌گیری را
              یکپارچه کنید.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="mt-8"
            >
              <Button size="xl" className="gap-2">
                <Building2 size={20} />
                ثبت باشگاه
              </Button>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="glass rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/12 border border-[#FF6A00]/20 flex items-center justify-center mb-3">
                  <b.icon className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <h3 className="font-bold text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
