import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { AppPreview } from "@/components/sections/AppPreview";
import { Statistics } from "@/components/sections/Statistics";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { GymOwners } from "@/components/sections/GymOwners";
import { DownloadApp } from "@/components/sections/DownloadApp";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Features />
        <AppPreview />
        <Statistics />
        <Pricing />
        <Testimonials />
        <GymOwners />
        <DownloadApp />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
