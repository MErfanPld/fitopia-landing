"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt?: string;
  className?: string;
  scale?: number;
  priority?: boolean;
}

export function PhoneFrame({
  src,
  alt = "فیتوپیا",
  className,
  scale = 1,
  priority = false,
}: PhoneFrameProps) {
  const screenshot = src.startsWith("/") ? src : `/screenshots/${src}`;
  const width = Math.round(280 * scale);

  return (
    <div
      className={cn("relative mx-auto select-none", className)}
      style={{ width: `${width}px`, maxWidth: "min(100%, 280px)" }}
    >
      <div className="relative rounded-[2rem] sm:rounded-[2.4rem] bg-[#1a1a1f] p-[8px] sm:p-[10px] shadow-[0_25px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)]">
        <div className="relative rounded-[1.6rem] sm:rounded-[1.9rem] overflow-hidden bg-[#07070A] aspect-[9/19.5]">
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-20 w-[70px] sm:w-[90px] h-[20px] sm:h-[26px] bg-black rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1a1a1f] mr-4 sm:mr-6" />
          </div>

          <Image
            src={screenshot}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 220px, 280px"
            priority={priority}
            quality={85}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
