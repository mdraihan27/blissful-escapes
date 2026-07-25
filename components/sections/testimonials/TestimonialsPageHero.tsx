"use client";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";

export function TestimonialsPageHero() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-primary-navy/10">
      <Container className="text-center">
        <Heading as="h1" size="lg" className="text-primary-navy text-4xl xs:text-5xl sm:text-6xl lg:text-7xl">
          Verified Client Stories
        </Heading>

        {/* Rating Badge */}
        <div className="mt-6 sm:mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-primary-cream/50 px-5 py-2.5 rounded-full border border-primary-navy/10">
          <div className="flex items-center gap-1 text-primary-gold text-sm font-bold">
            ★★★★★ <span className="text-primary-navy text-xs font-semibold ml-1">5.0 / 5.0</span>
          </div>
          <span className="h-3 w-px bg-primary-navy/20" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-sky">
            Verified Google & Hays Travel Reviews
          </span>
        </div>
      </Container>
    </section>
  );
}
