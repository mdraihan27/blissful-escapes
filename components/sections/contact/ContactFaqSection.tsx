"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";

export function ContactFaqSection() {
  const faqs = [
    {
      question: "How does working with Blissful Escapes work?",
      answer:
        "We start with a quick conversation about what you have in mind. We then check options across 600+ vetted suppliers to craft a bespoke itinerary built around your pace, preferences, and budget.",
    },
    {
      question: "Are there any fees for planning my trip?",
      answer:
        "No. Our consultancy, itinerary planning, and consultation services are 100% free with no obligation to book. We are paid by suppliers upon booking.",
    },
    {
      question: "Is my money safe when booking with you?",
      answer:
        "Yes, completely. As an independent member of Hays Travel Independence Group, every flight-inclusive package is ATOL protected, and non-flight bookings are ABTA protected.",
    },
    {
      question: "Can we meet in person or speak outside normal office hours?",
      answer:
        "Yes! We are based in Ormskirk, Lancashire and offer in-person consultations by appointment. We are available 7 days a week from 8am to 8pm by phone or WhatsApp.",
    },
  ];

  return (
    <section className="bg-primary-cream/40 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="relative mb-4 inline-block pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-sky">
              Common Questions
              <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
            </p>
            <Heading as="h2" size="md">
              Everything you need to know before getting in touch
            </Heading>

            <div className="mt-8 space-y-6">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="bg-white p-6 shadow-sm border border-primary-navy/5">
                  <h3 className="text-lg font-semibold text-primary-navy">{faq.question}</h3>
                  <p className="mt-2 text-base leading-relaxed text-primary-navy/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-between bg-primary-navy p-8 sm:p-12 text-white"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-gold">
                Company Details & Hours
              </p>
              <h3 className="mt-4 text-3xl font-semibold italic">Blissful Escapes</h3>
              <p className="mt-2 text-sm text-primary-cream">Personal Travel Consultancy</p>

              <div className="mt-8 space-y-6 text-sm text-primary-cream">
                <div>
                  <p className="font-semibold uppercase tracking-wider text-white text-xs">Registered Address</p>
                  <p className="mt-1 leading-relaxed">Ormskirk, Lancashire, United Kingdom</p>
                </div>

                <div className="h-px w-full bg-primary-sky/20" />

                <div>
                  <p className="font-semibold uppercase tracking-wider text-white text-xs">Direct Phone & WhatsApp</p>
                  <p className="mt-1 font-medium text-white text-base">
                    <a href="tel:07789652136" className="hover:text-primary-gold transition-colors">
                      07789 652 136
                    </a>
                  </p>
                </div>

                <div className="h-px w-full bg-primary-sky/20" />

                <div>
                  <p className="font-semibold uppercase tracking-wider text-white text-xs">Email Enquiries</p>
                  <p className="mt-1 font-medium text-white text-base">
                    <a href="mailto:enquiries@blissfulescapes.co.uk" className="hover:text-primary-gold transition-colors">
                      enquiries@blissfulescapes.co.uk
                    </a>
                  </p>
                </div>

                <div className="h-px w-full bg-primary-sky/20" />

                <div>
                  <p className="font-semibold uppercase tracking-wider text-white text-xs">Consultancy Hours</p>
                  <p className="mt-1 leading-relaxed">Monday – Sunday: 8:00 AM – 8:00 PM (7 Days a Week)</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-primary-sky/20">
              <p className="text-xs text-primary-cream">
                ABTA Protected · ATOL Bonded · Hays Travel Independence Group Member
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
