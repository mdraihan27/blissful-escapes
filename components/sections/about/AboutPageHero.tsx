"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function AboutPageHero() {
  return (
    <section className="relative flex h-dvh min-h-140 items-end overflow-hidden sm:items-center">
      <Image
        src="/assets/images/banner/pacific-coast-highway-california-banner.jpg"
        alt="A winding coastal highway along the California coastline at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/55 to-primary-navy/20" />

      <Container className="relative pb-14 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="relative mb-6 inline-block pb-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-gold sm:text-sm">
            The people behind the plans
            <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white xs:text-5xl sm:text-6xl lg:text-7xl">
            Travel planned around you, not a brochure.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-cream sm:text-xl">
            Blissful Escapes started with a simple idea: a single point of contact who actually listens, and a network of contacts built over 35 years to make it happen.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

