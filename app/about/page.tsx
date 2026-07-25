import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { AboutPageHero } from "@/components/sections/about/AboutPageHero";
import { AboutStorySection } from "@/components/sections/about/AboutStorySection";
import { AboutValuesSection } from "@/components/sections/about/AboutValuesSection";
import { AboutCtaSection } from "@/components/sections/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About Us | Blissful Escapes",
  description:
    "Boutique travel planning with a single point of contact. Learn how Blissful Escapes plans holidays built around you, not a brochure.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutPageHero />
        <AboutStorySection />
        <AboutValuesSection />
        <AboutCtaSection />
      </main>
      <Footer />
    </>
  );
}
