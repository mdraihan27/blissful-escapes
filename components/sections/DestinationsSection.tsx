"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { DestinationIndexRow } from "@/components/common/DestinationIndexRow";
import { destinationDetails } from "@/lib/destinationDetails";

export function DestinationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = destinationDetails[activeIndex];

  return (
    <section id="destinations" className="py-14 sm:py-16.75 lg:py-22.5">
      <Container>
        <div className="mb-12 sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-brown/70">
            Where in the world?
          </p>
          <Heading as="h2" size="lg">
            Four regions, known inside out
          </Heading>
          <Text size="lg" className="mt-5 max-w-2xl text-primary-brown/70">
            We plan across a handful of places we know really well, rather than offering everywhere and knowing nowhere properly. Hover a region to get a feel for it, then click through to see how we would shape the trip.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          {/* Sticky synced preview, desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <Link
                href={`/destinations/${active.slug}`}
                aria-label={`Explore ${active.name}`}
                className="group relative block aspect-4/5 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-brown"
              >
                <AnimatePresence>
                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.heroImage}
                      alt={active.heroImageAlt}
                      fill
                      sizes="45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-primary-brown/85 via-primary-brown/15 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-beige">
                      {active.region}
                    </p>
                    <p className="mt-3 text-4xl font-semibold italic tracking-tight text-white">
                      {active.name}
                    </p>
                  </motion.div>
                </div>
              </Link>
            </div>
          </div>

          {/* Numbered index list */}
          <div className="flex flex-col">
            {destinationDetails.map((destination, index) => (
              <DestinationIndexRow
                key={destination.slug}
                slug={destination.slug}
                name={destination.name}
                region={destination.region}
                tagline={destination.tagline}
                imageSrc={destination.heroImage}
                imageAlt={destination.heroImageAlt}
                displayIndex={index}
                isActive={index === activeIndex}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
