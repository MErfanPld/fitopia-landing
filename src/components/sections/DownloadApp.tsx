"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { LINKS } from "@/lib/links";
import { Button } from "@/components/ui/Button";

export function DownloadApp() {
  return (
    <section id="download" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-narrow section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(90vw,400px)] h-[180px] rounded-full bg-[#FF6A00]/10 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/25 mb-5 sm:mb-6">
              <Globe className="w-7 h-7 text-[#FF6A00]" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tight px-2">
              فیتوپیا کاملاً تحت وب است
            </h2>
            <p className="mt-3 text-white/50 max-w-md mx-auto text-sm sm:text-base px-2">
              نیازی به نصب از استور نیست. از هر گوشی یا دسکتاپ، مستقیم وارد وب‌اپلیکیشن شوید.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <a href={LINKS.app} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto gap-2">
                  <Smartphone size={20} />
                  ورود به اپلیکیشن
                  <ExternalLink size={18} />
                </Button>
              </a>
              <a href={LINKS.register} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto gap-2">
                  ثبت‌نام رایگان
                </Button>
              </a>
            </div>

            <p className="mt-6 text-xs text-white/30 break-all px-2" dir="ltr">
              {LINKS.app}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
