import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { TestimonialsPageHero } from "@/components/sections/testimonials/TestimonialsPageHero";
import { TestimonialsPageContent } from "@/components/sections/testimonials/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Client Stories & Reviews | Blissful Escapes",
  description:
    "Read real client stories and reviews for Blissful Escapes luxury travel consultancy. 5.0 rating on Google & Hays Travel. 100% ABTA & ATOL protected.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TestimonialsPageHero />
        <TestimonialsPageContent />
      </main>
      <Footer />
    </>
  );
}
