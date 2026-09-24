import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "فیتوپیا | همه باشگاه‌های شهر در یک اپلیکیشن",
    template: "%s | فیتوپیا",
  },
  description:
    "جستجو، مقایسه، خرید اشتراک و شروع تمرین در چند ثانیه. فیتوپیا پلتفرم هوشمند کشف باشگاه و مدیریت عضویت ورزشی.",
  keywords: [
    "فیتوپیا",
    "باشگاه ورزشی",
    "اشتراک باشگاه",
    "بدنسازی",
    "اپلیکیشن ورزشی",
    "Fitopia",
  ],
  authors: [{ name: "Fitopia" }],
  metadataBase: new URL("https://fitopia.app"),
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://fitopia.app",
    siteName: "فیتوپیا",
    title: "فیتوپیا | همه باشگاه‌های شهر در یک اپلیکیشن",
    description: "جستجو، مقایسه، خرید اشتراک و شروع تمرین در چند ثانیه.",
  },
  twitter: {
    card: "summary_large_image",
    title: "فیتوپیا | همه باشگاه‌های شهر در یک اپلیکیشن",
    description: "جستجو، مقایسه، خرید اشتراک و شروع تمرین در چند ثانیه.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07070A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} antialiased`}>
      <body
        className="bg-[#07070A] text-white font-sans min-h-dvh"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <LoadingScreen />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
