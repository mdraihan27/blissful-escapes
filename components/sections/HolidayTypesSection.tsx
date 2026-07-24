"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { HolidayTypeCarousel } from "@/components/common/HolidayTypeCarousel";
import { CrossfadeBackground } from "@/components/common/CrossfadeBackground";
import { holidayTypes } from "@/lib/holidayTypes";

export function HolidayTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="holiday-types" className="relative overflow-hidden py-14 sm:py-16.75 lg:py-22.5">
      <CrossfadeBackground src={holidayTypes[activeIndex].imageSrc} />
      <div className="absolute inset-0 bg-primary-navy/80" />

      <Container className="relative">
        <div className="mb-12 sm:mb-16">
          <p className="relative mb-4 inline-block pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-gold">
            What kind of trip?
            <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
          </p>
          <Heading as="h2" size="lg" className="text-white">
            Types of Holiday
          </Heading>
          <Text size="lg" className="mt-5 max-w-2xl text-primary-cream">
            Whether you are planning the honeymoon of a lifetime or a family trip the kids will actually remember, I will put together something that fits you properly.
          </Text>
        </div>

        <HolidayTypeCarousel items={holidayTypes} onIndexChange={setActiveIndex} />
      </Container>
    </section>
  );
}
