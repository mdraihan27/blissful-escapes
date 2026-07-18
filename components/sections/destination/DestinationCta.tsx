"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ParallaxImage } from "@/components/common/ParallaxImage";

export interface DestinationCtaProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export function DestinationCta({ name, imageSrc, imageAlt }: Readonly<DestinationCtaProps>) {
  return (
    <section className="relative flex h-dvh min-h-140 items-center justify-center overflow-hidden">
      <ParallaxImage src={imageSrc} alt={imageAlt} strength={14} />
      <div className="absolute inset-0 bg-primary-brown/70" />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary-beige sm:text-sm">
            Let us plan it for you
          </p>
          <h2 className="text-4xl font-semibold italic leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to talk {name}?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Tell us roughly when you want to travel and what matters most to you. No commitment, just a real conversation and ideas back within 48 hours.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex w-full cursor-pointer items-center justify-center bg-primary-beige px-8 py-4 text-sm font-semibold tracking-wide text-primary-brown transition-all duration-200 ease-out hover:bg-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:text-base"
            >
              Start planning my trip
            </Link>
            <a
              href="tel:07789652136"
              className="inline-flex w-full cursor-pointer items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:text-primary-beige focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:text-base"
            >
              Or call 07789 652 136
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
