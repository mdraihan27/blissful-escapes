"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-100 items-center justify-center overflow-hidden sm:min-h-110 lg:min-h-125">
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/images/banner/site-header-banner.jpg"
          alt="Peaceful ocean view sunset at a luxury resort"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/60 via-primary-navy/40 to-primary-navy/85" />

      {/* Oversized watermark text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[22vw] font-semibold italic leading-none text-white/10 uppercase"
      >
        CONTACT
      </span>

      <Container className="relative py-20 text-center sm:py-24 lg:py-28">
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative mb-5 inline-block pb-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary-gold sm:text-sm"
        >
          Get In Touch
          <span className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-primary-gold" aria-hidden="true" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-4xl font-semibold italic leading-tight tracking-tight text-white xs:text-5xl sm:text-6xl lg:text-7xl"
        >
          We would love to hear about the trip you have in mind.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-cream sm:text-lg lg:text-xl"
        >
          Whether you have exact dates and a hotel in mind or just a rough idea of the mood you are looking for, we are here to make it happen effortlessly.
        </motion.p>
      </Container>
    </section>
  );
}
