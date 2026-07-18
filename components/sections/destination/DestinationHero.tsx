"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export interface DestinationHeroProps {
  name: string;
  tagline: string;
  region: string;
  watermark: string;
  imageSrc: string;
  imageAlt: string;
}

export function DestinationHero({
  name,
  tagline,
  region,
  watermark,
  imageSrc,
  imageAlt,
}: Readonly<DestinationHeroProps>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex h-dvh min-h-160 items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary-brown/50 via-primary-brown/20 to-primary-brown/80" />

      {/* Oversized watermark word, centred behind the title */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[26vw] font-semibold italic leading-none text-white/10"
      >
        {watermark}
      </span>

      <Container className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-primary-beige sm:text-sm"
        >
          {region}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-5xl font-semibold italic leading-[0.98] tracking-tight text-white xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
        >
          {tagline}
        </motion.p>
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <motion.span
          animate={shouldReduceMotion ? {} : { scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-white/50"
        />
      </motion.div>
    </section>
  );
}
