"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  /** Filename under /screenshots e.g. "home-mobile.webp" */
  src: string;
  alt?: string;
  className?: string;
  scale?: number;
  priority?: boolean;
}

/**
 * Realistic dark device frame displaying a real Fitopia app screenshot.
 */
export function PhoneFrame({
  src,
  alt = "فیتوپیا",
  className,
  scale = 1,
  priority = false,
}: PhoneFrameProps) {
  const screenshot = src.startsWith("/") ? src : `/screenshots/${src}`;

  return (
    <div
      className={cn("relative mx-auto select-none", className)}
      style={{ width: `${280 * scale}px`, maxWidth: "100%" }}
    >
      <div className="relative rounded-[2.4rem] bg-[#1a1a1f] p-[10px] shadow-[0_25px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)]">
        <div className="relative rounded-[1.9rem] overflow-hidden bg-[#07070A] aspect-[9/19.5]">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-[90px] h-[26px] bg-black rounded-full flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#1a1a1f] mr-6" />
          </div>

          <Image
            src={screenshot}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 400px) 280px, 320px"
            priority={priority}
            quality={85}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
        </div>

        <div className="absolute -left-[3px] top-[100px] w-[3px] h-8 rounded-l-sm bg-[#2a2a30]" />
        <div className="absolute -left-[3px] top-[140px] w-[3px] h-12 rounded-l-sm bg-[#2a2a30]" />
        <div className="absolute -right-[3px] top-[130px] w-[3px] h-14 rounded-r-sm bg-[#2a2a30]" />
      </div>
    </div>
  );
}
