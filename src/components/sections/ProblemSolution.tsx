"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  "جستجوی پراکنده بین چند اپ و سایت",
  "عدم شفافیت قیمت و امکانات",
  "تمدید دستی و فراموشی اشتراک",
  "نداشتن دسترسی یکپارچه به کلاس‌ها",
];

const solutions = [
  "همه باشگاه‌ها در یک اپلیکیشن",
  "مقایسه لحظه‌ای قیمت و امکانات",
  "مدیریت هوشمند اشتراک و یادآوری",
  "رزرو کلاس و بلیت در چند ثانیه",
];

export function ProblemSolution() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ps-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="problem-solution" className="relative py-24 lg:py-32">
      <div className="container-wide section-padding">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#FF6A00] text-sm font-semibold">مشکل و راه‌حل</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            از سردرگمی تا تمرین
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            فیتوپیا مسیر پیدا کردن باشگاه و مدیریت عضویت را ساده کرده است.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="ps-card opacity-0 glass rounded-3xl p-8 border border-red-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white/90">قبل از فیتوپیا</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="ps-card opacity-0 glass rounded-3xl p-8 border border-[#FF6A00]/15 glow-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#FF6A00]" />
              </div>
              <h3 className="text-xl font-bold text-white/90">با فیتوپیا</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A00] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
