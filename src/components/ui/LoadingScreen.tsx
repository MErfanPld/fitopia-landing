"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07070A]"
        >
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FF8533] flex items-center justify-center shadow-[0_0_32px_rgba(255,106,0,0.35)]">
              <span className="text-xl font-black text-white">F</span>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/45 font-medium tracking-wide">
            فیتوپیا
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
