import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    "یوگا",
    "کراس فیت",
    "اپلیکیشن ورزشی",
    "Fitopia",
  ],
  authors: [{ name: "Fitopia" }],
  creator: "Fitopia",
  publisher: "Fitopia",
  metadataBase: new URL("https://fitopia.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://fitopia.app",
    siteName: "فیتوپیا",
    title: "فیتوپیا | همه باشگاه‌های شهر در یک اپلیکیشن",
    description:
      "جستجو، مقایسه، خرید اشتراک و شروع تمرین در چند ثانیه.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "فیتوپیا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فیتوپیا | همه باشگاه‌های شهر در یک اپلیکیشن",
    description: "جستجو، مقایسه، خرید اشتراک و شروع تمرین در چند ثانیه.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <body className="bg-[#07070A] text-white font-sans min-h-dvh">
        <SmoothScrollProvider>
          <LoadingScreen />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
