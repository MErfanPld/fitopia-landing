"use client";

const partners = [
  "آیرون جیم",
  "فیت‌لایف",
  "پاور هاوس",
  "یوگا سنتر",
  "کراس‌فیت تهران",
  "باکس کلاب",
  "استیل بادی",
  "اکتیو اسپورت",
];

function PartnerChip({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 shrink-0 px-5 py-2.5 rounded-2xl border border-white/[0.06] bg-white/[0.03]">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6A00]/30 to-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] text-xs font-black">
        {name.charAt(0)}
      </div>
      <span className="text-sm text-white/50 font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow() {
  const track = partners.map((name, i) => (
    <PartnerChip key={`${name}-${i}`} name={name} />
  ));

  return (
    <div
      className="relative w-full overflow-hidden mask-fade"
      dir="ltr"
    >
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 px-3 py-2">
          {track}
        </div>
        <div
          className="flex shrink-0 items-center gap-6 sm:gap-10 px-3 py-2"
          aria-hidden
        >
          {track}
        </div>
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section
      id="partners"
      className="relative w-full py-12 border-y border-white/[0.04] overflow-hidden"
      aria-label="باشگاه‌های همکار"
    >
      <p className="text-center text-xs text-white/35 mb-6 tracking-wide px-4">
        مورد اعتماد باشگاه‌های برتر
      </p>
      <MarqueeRow />
    </section>
  );
}
