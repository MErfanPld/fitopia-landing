import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { Features } from "@/components/sections/Features";
import { WhyFitopia } from "@/components/sections/WhyFitopia";
import { Statistics } from "@/components/sections/Statistics";
import { AppPreview } from "@/components/sections/AppPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollStory />
        <Features />
        <WhyFitopia />
        <Statistics />
        <AppPreview />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
