import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactFaqSection } from "@/components/sections/contact/ContactFaqSection";

export const metadata: Metadata = {
  title: "Contact Us | Blissful Escapes",
  description:
    "Get in touch with Blissful Escapes personal travel consultancy in Ormskirk, Lancashire. Call 07789 652 136 or send an enquiry for bespoke trip planning with ABTA & ATOL protection.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactFormSection />
        <ContactFaqSection />
      </main>
      <Footer />
    </>
  );
}
