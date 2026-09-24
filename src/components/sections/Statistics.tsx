"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { formatPersianNumber } from "@/lib/utils";

const stats = [
  { value: 850, label: "باشگاه فعال", suffix: "+" },
  { value: 42000, label: "کاربر ثبت‌نام‌شده", suffix: "+" },
  { value: 18000, label: "اشتراک فعال", suffix: "+" },
  { value: 3200, label: "کلاس هفتگی", suffix: "+" },
];

function Counter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span>
      {formatPersianNumber(display)}
      {suffix}
    </span>
  );
}

export function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-24 lg:py-28">
      <div className="container-wide section-padding">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center glass rounded-3xl py-10 px-4"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient tabular-nums">
                <Counter value={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <p className="mt-3 text-sm text-white/45 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
