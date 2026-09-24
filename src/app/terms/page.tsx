import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "قوانین و مقررات",
  description: "شرایط استفاده از خدمات فیتوپیا",
};

const sections = [
  {
    title: "۱. پذیرش شرایط",
    body: "با ورود به وب‌اپلیکیشن فیتوپیا و استفاده از خدمات، شما این قوانین و مقررات را می‌پذیرید. در صورت عدم موافقت، لطفاً از خدمات استفاده نکنید.",
  },
  {
    title: "۲. تعریف خدمات",
    body: "فیتوپیا پلتفرمی تحت وب برای کشف باشگاه‌های ورزشی، مقایسه اشتراک‌ها، خرید عضویت و مدیریت بلیت و کلاس است. خدمات ممکن است برای کاربران، صاحبان باشگاه و مربیان متفاوت باشد.",
  },
  {
    title: "۳. حساب کاربری",
    body: "مسئولیت حفظ اطلاعات ورود و فعالیت‌های انجام‌شده با حساب شما بر عهده خودتان است. اطلاعات ثبت‌شده باید صحیح و به‌روز باشد. فیتوپیا حق تعلیق حساب در صورت نقض قوانین را دارد.",
  },
  {
    title: "۴. اشتراک و پرداخت",
    body: "قیمت‌ها و شرایط هر پلن در زمان خرید نمایش داده می‌شود. پس از پرداخت موفق، دسترسی طبق شرایط همان پلن فعال می‌شود. بازگشت وجه مطابق سیاست لغو و قوانین مربوط به همان اشتراک اعمال می‌گردد.",
  },
  {
    title: "۵. تعهدات کاربر",
    body: "کاربر متعهد است از خدمات به‌صورت قانونی استفاده کند، به باشگاه‌ها و سایر کاربران احترام بگذارد و از هرگونه سوءاستفاده، تقلب یا اختلال در سامانه خودداری کند.",
  },
  {
    title: "۶. صاحبان باشگاه و محتوا",
    body: "اطلاعات، تصاویر و قیمت‌های منتشرشده توسط باشگاه‌ها مسئولیت همان مجموعه است. فیتوپیا تلاش می‌کند کیفیت اطلاعات را حفظ کند اما صحت کامل محتوای شخص ثالث را تضمین نمی‌کند.",
  },
  {
    title: "۷. محدودیت مسئولیت",
    body: "فیتوپیا واسطه معرفی و مدیریت اشتراک است و مسئول حوادث، آسیب‌های جسمی یا اختلافات رخ‌داده در محل باشگاه نیست. استفاده از امکانات باشگاه تحت قوانین همان مجموعه انجام می‌شود.",
  },
  {
    title: "۸. تغییرات قوانین",
    body: "ممکن است این متن به‌روزرسانی شود. نسخه جدید از طریق همین صفحه منتشر می‌شود و ادامه استفاده به معنای پذیرش نسخه به‌روز است.",
  },
  {
    title: "۹. تماس با ما",
    body: "برای سوالات مربوط به قوانین می‌توانید با support@fitopia.app در ارتباط باشید.",
  },
];

export default function TermsPage() {
  return (
    <SiteShell>
      <article className="container-narrow section-padding pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FF6A00] text-sm font-semibold mb-3">قانونی</p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            قوانین و مقررات
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
            <Link href="/privacy" className="text-[#FF6A00] hover:underline">
              حریم خصوصی
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
