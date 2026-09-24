"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

const FloatingPhoneScene = dynamic(
  () =>
    import("@/components/three/FloatingPhone").then((m) => m.FloatingPhoneScene),
  { ssr: false }
);

const screens = [
  {
    title: "صفحه جستجوی باشگاه",
    desc: "باشگاه‌های اطراف را روی نقشه یا لیست پیدا کنید. فیلتر هوشمند بر اساس فاصله، امتیاز و امکانات.",
  },
  {
    title: "صفحه جزئیات باشگاه",
    desc: "گالری، قیمت‌ها، مربیان، امکانات و نظرات واقعی کاربران را در یک نگاه ببینید.",
  },
  {
    title: "صفحه خرید اشتراک",
    desc: "پلن‌های مختلف را مقایسه کنید و در چند ثانیه اشتراک خود را فعال کنید.",
  },
  {
    title: "صفحه پروفایل ورزشی",
    desc: "پیشرفت، بلیت‌ها و باشگاه‌های منتخب خود را در یک داشبورد شخصی مدیریت کنید.",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const texts = textRefs.current.filter(Boolean);

      texts.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      if (phoneRef.current) {
        gsap.to(phoneRef.current, {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-40"
      id="story"
    >
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          <div className="hidden lg:block sticky top-28 h-[520px]">
            <div ref={phoneRef} className="w-full h-full relative">
              <FloatingPhoneScene />
            </div>
          </div>

          <div className="flex flex-col gap-28 lg:gap-40 lg:pt-16">
            {screens.map((screen, i) => (
              <div
                key={i}
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="opacity-0"
              >
                <span className="text-[#FF6A00] text-sm font-semibold tracking-wide">
                  ۰{i + 1}
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold leading-snug">
                  {screen.title}
                </h3>
                <p className="mt-4 text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
                  {screen.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
