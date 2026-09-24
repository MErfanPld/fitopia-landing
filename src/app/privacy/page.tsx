import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "حریم خصوصی",
  description: "سیاست حفظ حریم خصوصی فیتوپیا",
};

const sections = [
  {
    title: "۱. مقدمه",
    body: "فیتوپیا به حریم خصوصی کاربران احترام می‌گذارد. این سند توضیح می‌دهد چه داده‌هایی جمع‌آوری می‌شود، چگونه استفاده می‌گردد و چه حقوقی دارید.",
  },
  {
    title: "۲. اطلاعاتی که جمع‌آوری می‌کنیم",
    body: "ممکن است شامل نام، شماره تماس، ایمیل، اطلاعات حساب، تاریخچه اشتراک و پرداخت، ترجیحات ورزشی و داده‌های فنی مانند نوع دستگاه و مرورگر باشد. پرداخت‌ها معمولاً از طریق درگاه معتبر انجام می‌شود و جزئیات کارت بانکی نزد فیتوپیا ذخیره نمی‌شود.",
  },
  {
    title: "۳. نحوه استفاده از اطلاعات",
    body: "از داده‌ها برای ارائه خدمات (ورود، خرید اشتراک، نمایش باشگاه‌ها)، بهبود تجربه کاربری، پشتیبانی، اطلاع‌رسانی‌های ضروری و رعایت الزامات قانونی استفاده می‌شود.",
  },
  {
    title: "۴. اشتراک‌گذاری با اشخاص ثالث",
    body: "اطلاعات شما بدون رضایت به فروش نمی‌رسد. در حد لازم ممکن است با باشگاه طرف قرارداد، ارائه‌دهندگان زیرساخت، درگاه پرداخت یا مراجع قانونی (در صورت الزام) به اشتراک گذاشته شود.",
  },
  {
    title: "۵. نگهداری و امنیت",
    body: "اقدامات متعارف فنی و سازمانی برای محافظت از داده‌ها انجام می‌شود. با این حال هیچ سامانه‌ای مطلقاً بدون ریسک نیست؛ انتخاب رمز عبور قوی و عدم اشتراک‌گذاری آن با دیگران توصیه می‌شود.",
  },
  {
    title: "۶. کوکی و فناوری‌های مشابه",
    body: "ممکن است از کوکی یا ذخیره‌سازی محلی برای نشست ورود، ترجیحات و آمار استفاده شود. می‌توانید تنظیمات مرورگر را برای محدودیت کوکی تغییر دهید؛ بخشی از قابلیت‌ها ممکن است مختل شود.",
  },
  {
    title: "۷. حقوق شما",
    body: "می‌توانید درخواست دسترسی، اصلاح یا حذف داده‌های شخصی قابل اعمال را از طریق پشتیبانی مطرح کنید، مگر در مواردی که نگهداری به دلایل قانونی یا قراردادی لازم باشد.",
  },
  {
    title: "۸. کودکان",
    body: "خدمات فیتوپیا برای افراد زیر سن قانونی بدون رضایت ولی یا سرپرست در نظر گرفته نشده است.",
  },
  {
    title: "۹. تغییرات این سیاست",
    body: "در صورت تغییر، نسخه به‌روز در همین صفحه منتشر می‌شود. ادامه استفاده به معنای آگاهی از نسخه جدید است.",
  },
  {
    title: "۱۰. تماس",
    body: "برای پرسش درباره حریم خصوصی با support@fitopia.app در ارتباط باشید.",
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <article className="container-narrow section-padding pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FF6A00] text-sm font-semibold mb-3">قانونی</p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            حریم خصوصی
          </h1>
          <p className="mt-3 text-white/45 text-sm">آخرین به‌روزرسانی: شهریور ۱۴۰۳</p>

          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-white/90 mb-2">{s.title}</h2>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                  {s.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-[#FF6A00] hover:underline">
              قوانین و مقررات
            </Link>
            <Link href="/" className="text-white/40 hover:text-white">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
