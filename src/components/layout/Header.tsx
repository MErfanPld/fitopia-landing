"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "ویژگی‌ها" },
  { href: "#preview", label: "پیش‌نمایش" },
  { href: "#pricing", label: "پلن‌ها" },
  { href: "#gym-owners", label: "صاحبان باشگاه" },
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
          ? "bg-[#07070A]/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-wide section-padding flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FF8533] flex items-center justify-center shadow-[0_0_20px_rgba(255,106,0,0.3)] group-hover:shadow-[0_0_28px_rgba(255,106,0,0.5)] transition-shadow">
            <span className="text-sm font-black text-white">F</span>
          </div>
          <span className="text-lg font-bold tracking-tight">فیتوپیا</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
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
          <Button
            size="sm"
            onClick={() =>
              document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            دانلود اپ
          </Button>
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
            <nav className="section-padding py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-white/70 hover:text-white py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Button variant="outline" size="md" className="w-full">
                  ثبت باشگاه
                </Button>
                <Button size="md" className="w-full">
                  دانلود اپ
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
