"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export interface HolidayTypeIntroProps {
  intro: string[];
  idealFor: string[];
}

export function HolidayTypeIntro({ intro, idealFor }: Readonly<HolidayTypeIntroProps>) {
  const [lead, ...rest] = intro;

  return (
    <section className="bg-primary-navy py-24 sm:py-32 lg:py-40">
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
              <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-primary-cream">
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
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-gold">
                Ideal for
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-medium text-white">
                    <span className="h-1.5 w-1.5 bg-primary-gold shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-primary-sky" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-gold">
                Personal Travel Consultancy
              </p>
              <p className="mt-3 text-base leading-relaxed text-primary-cream">
                Tailored itineraries with 100% ABTA & ATOL protection. Handled from start to finish by our team in Ormskirk.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
