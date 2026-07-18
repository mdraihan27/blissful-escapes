"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export interface DestinationIntroProps {
  intro: string[];
  countries: string[];
  bestTime: string;
}

export function DestinationIntro({ intro, countries, bestTime }: Readonly<DestinationIntroProps>) {
  const [lead, ...rest] = intro;

  return (
    <section className="bg-primary-brown py-24 sm:py-32 lg:py-40">
      <Container>
        {/* Oversized lead statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {lead}
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-white/70">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-beige">
                Where we plan
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {countries.map((country) => (
                  <li key={country} className="text-lg font-medium text-white">
                    {country}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-white/15" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-beige">
                Best time to go
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">{bestTime}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
