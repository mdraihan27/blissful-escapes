"use client";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function GalleryPageHero() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-primary-navy/10">
      <Container className="text-center">
        <p className="relative mb-3 inline-block pb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-sky sm:text-sm">
          Visual Inspiration
          <span className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-primary-gold" aria-hidden="true" />
        </p>
        <Heading as="h1" size="lg" className="text-primary-navy">
          Memories you can make with us
        </Heading>
        <Text size="lg" className="mx-auto mt-4 max-w-2xl text-primary-navy/80">
          From quiet secluded bays and overwater villas to safari game drives and scenic rail journeys, explore what your next holiday could look like.
        </Text>
      </Container>
    </section>
  );
}
