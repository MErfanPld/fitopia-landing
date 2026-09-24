"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

gsap.registerPlugin(ScrollTrigger);

const screens = [
  {
    title: "صفحه جستجوی باشگاه",
    desc: "باشگاه‌های اطراف را روی نقشه یا لیست پیدا کنید. فیلتر هوشمند بر اساس فاصله، امتیاز و امکانات.",
    src: "all-gyms-mobile.webp",
  },
  {
    title: "صفحه جزئیات باشگاه",
    desc: "گالری، قیمت‌ها، مربیان، امکانات و نظرات واقعی کاربران را در یک نگاه ببینید.",
    src: "gym-detail-mobile.webp",
  },
  {
    title: "صفحه خرید اشتراک",
    desc: "پلن‌های مختلف را مقایسه کنید و در چند ثانیه اشتراک خود را فعال کنید.",
    src: "payment-mobile.webp",
  },
  {
    title: "صفحه پروفایل ورزشی",
    desc: "پیشرفت، بلیت‌ها و باشگاه‌های منتخب خود را در یک داشبورد شخصی مدیریت کنید.",
    src: "profile-mobile.webp",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      textRefs.current.filter(Boolean).forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none reverse",
              onEnter: () => setActiveIndex(i),
              onEnterBack: () => setActiveIndex(i),
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-36" id="story">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="hidden lg:flex sticky top-28 justify-center">
            <PhoneFrame
              src={screens[activeIndex].src}
              alt={screens[activeIndex].title}
              scale={1.05}
            />
          </div>

          <div className="flex flex-col gap-24 lg:gap-32 lg:pt-8">
            {screens.map((screen, i) => (
              <div
                key={screen.src}
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="opacity-0"
              >
                <div className="lg:hidden mb-6 flex justify-center">
                  <PhoneFrame src={screen.src} alt={screen.title} scale={0.85} />
                </div>
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
