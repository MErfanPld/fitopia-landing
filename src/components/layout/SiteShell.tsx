import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
