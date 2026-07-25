"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function AboutCtaSection() {
  return (
    <section className="bg-primary-cream py-14 sm:py-16.75 lg:py-22.5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <Heading as="h2" size="lg">
            Tell us where you would like to go.
          </Heading>
          <Text size="lg" className="mt-5 text-primary-navy">
            No commitment, just a conversation about what matters most to you and how we can help you get there.
          </Text>

          <div className="mt-8 flex justify-center">
            <Link
              href="/#contact"
              className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap bg-primary-gold px-8 py-4 text-sm font-semibold tracking-wide text-black transition-transform duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy sm:text-base"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-300 ease-in-out group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-primary-gold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none"
              />
              <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
                Start planning my trip
              </span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
