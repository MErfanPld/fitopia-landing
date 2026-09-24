"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export function DownloadApp() {
  return (
    <section id="download" className="relative py-24 lg:py-28">
      <div className="container-narrow section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[#FF6A00]/10 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/25 mb-6">
              <Smartphone className="w-7 h-7 text-[#FF6A00]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              همین حالا دانلود کنید
            </h2>
            <p className="mt-3 text-white/50 max-w-md mx-auto">
              فیتوپیا روی iOS و Android در دسترس است. اسکن کنید یا از فروشگاه دانلود کنید.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-black hover:bg-white/90 transition-colors"
                aria-label="دانلود از App Store"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.32-2.48 3.96-2.51 1.21-.02 2.36.82 3.1.82.74 0 2.14-.99 3.6-.84 1.22.1 2.28.62 2.97 1.54-2.72 1.56-2.28 5.32.5 6.47-.5 1.27-1.13 2.52-1.92 3.63zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-right">
                  <div className="text-[10px] opacity-60 leading-none">دانلود از</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-black hover:bg-white/90 transition-colors"
                aria-label="دانلود از Google Play"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden>
                  <path d="M3.18 23.25c-.4.16-.84-.13-.84-.57V1.32c0-.44.44-.73.84-.57l17.4 10.34c.41.24.41.9 0 1.14L3.18 23.25z" />
                </svg>
                <div className="text-right">
                  <div className="text-[10px] opacity-60 leading-none">دریافت از</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </div>

            <div className="mt-8 inline-flex flex-col items-center gap-2">
              <div className="w-28 h-28 rounded-2xl bg-white p-2">
                <div className="w-full h-full rounded-xl bg-[repeating-conic-gradient(#111_0%_25%,#fff_0%_50%)] bg-[length:8px_8px] opacity-80" />
              </div>
              <span className="text-xs text-white/35">اسکن برای دانلود</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
