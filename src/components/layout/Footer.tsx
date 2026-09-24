import { Instagram, Twitter, Linkedin, Send } from "lucide-react";

const links = {
  about: [
    { label: "درباره فیتوپیا", href: "#problem-solution" },
    { label: "ویژگی‌ها", href: "#features" },
    { label: "پلن‌ها", href: "#pricing" },
  ],
  support: [
    { label: "تماس با ما", href: "mailto:support@fitopia.app" },
    { label: "سوالات متداول", href: "#faq" },
    { label: "ثبت باشگاه", href: "#gym-owners" },
  ],
  legal: [
    { label: "قوانین و مقررات", href: "#" },
    { label: "حریم خصوصی", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6A00] to-[#FF8533] flex items-center justify-center">
                <span className="text-xs font-black text-white">F</span>
              </div>
              <span className="text-base font-bold">فیتوپیا</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[220px]">
              پلتفرم هوشمند کشف باشگاه و مدیریت عضویت ورزشی.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "اینستاگرام" },
                { Icon: Twitter, href: "https://x.com", label: "توییتر" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "لینکدین" },
                { Icon: Send, href: "https://t.me", label: "تلگرام" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">درباره</h4>
            <ul className="space-y-2.5">
              {links.about.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">پشتیبانی</h4>
            <ul className="space-y-2.5">
              {links.support.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">قانونی</h4>
            <ul className="space-y-2.5">
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} فیتوپیا. تمامی حقوق محفوظ است.
          </p>
          <p className="text-xs text-white/25">ساخته‌شده با دقت برای ورزشکاران</p>
        </div>
      </div>
    </footer>
  );
}
