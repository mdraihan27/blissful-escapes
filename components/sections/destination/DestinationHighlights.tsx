"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import type { DestinationHighlight } from "@/lib/destinationDetails";

export interface DestinationHighlightsProps {
  highlights: DestinationHighlight[];
}

export function DestinationHighlights({ highlights }: Readonly<DestinationHighlightsProps>) {
  return (
    <section className="bg-primary-pink py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-5xl font-semibold italic leading-none text-primary-brown sm:text-6xl lg:text-7xl">
                {highlight.value}
              </p>
              <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-relaxed text-primary-brown/70">
                {highlight.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
