"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/links";

const navLinks = [
  { href: "#products", label: "محصولات" },
  { href: "#features", label: "ویژگی‌ها" },
  { href: "#tutorial", label: "آموزش" },
  { href: "#pricing", label: "پلن‌ها" },
  { href: "#faq", label: "سوالات" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#07070A]/85 backdrop-blur-xl border-b border-white/5 py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="container-wide section-padding flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/logo.svg"
            alt="فیتوپیا"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-[0_0_20px_rgba(255,106,0,0.25)] group-hover:shadow-[0_0_28px_rgba(255,106,0,0.4)] transition-shadow"
          />
          <span className="text-base sm:text-lg font-bold tracking-tight">فیتوپیا</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              document.getElementById("gym-owners")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ثبت باشگاه
          </Button>
          <a href={LINKS.app} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-1.5">
              ورود به اپ
              <ExternalLink size={14} />
            </Button>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white/80 hover:text-white"
          aria-label="منو"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#07070A]/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="section-padding py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-white/70 hover:text-white py-2.5"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2.5 pt-3">
                <Button variant="outline" size="md" className="w-full" onClick={() => setOpen(false)}>
                  ثبت باشگاه
                </Button>
                <a href={LINKS.app} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="md" className="w-full gap-2">
                    ورود به اپلیکیشن
                    <ExternalLink size={16} />
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
