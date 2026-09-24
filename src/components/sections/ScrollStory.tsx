"use client";

import { useRef, useEffect } from "react";
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
  const phoneRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      textRefs.current.filter(Boolean).forEach((el) => {
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
          y: -60,
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
    <section ref={sectionRef} className="relative py-24 lg:py-40" id="story">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          {/* Sticky phone showing progressive screens */}
          <div className="hidden lg:block sticky top-28">
            <div ref={phoneRef} className="flex flex-col gap-10">
              {screens.map((s, i) => (
                <div key={s.src} className="opacity-90">
                  <PhoneFrame src={s.src} alt={s.title} scale={0.95} />
                  <p className="mt-3 text-center text-xs text-white/30">
                    {String(i + 1).padStart(2, "۰")} — {s.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Story cards */}
          <div className="flex flex-col gap-28 lg:gap-40 lg:pt-16">
            {screens.map((screen, i) => (
              <div
                key={i}
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="opacity-0"
              >
                {/* Mobile-only phone */}
                <div className="lg:hidden mb-8 flex justify-center">
                  <PhoneFrame src={screen.src} alt={screen.title} scale={0.9} />
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
