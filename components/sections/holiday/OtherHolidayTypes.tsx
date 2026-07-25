"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { holidayTypeDetails } from "@/lib/holidayTypeDetails";

export interface OtherHolidayTypesProps {
  currentSlug: string;
}

export function OtherHolidayTypes({ currentSlug }: Readonly<OtherHolidayTypesProps>) {
  const others = holidayTypeDetails.filter((holidayType) => holidayType.slug !== currentSlug);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Heading as="h2" size="md" className="mb-8 sm:mb-10">
          Explore other types of holiday
        </Heading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {others.map((holidayType, index) => (
            <motion.div
              key={holidayType.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08, ease: "easeOut" }}
            >
              <Link
                href={`/holidays/${holidayType.slug}`}
                className="group relative block aspect-4/5 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
                aria-label={`Explore ${holidayType.name}`}
              >
                <Image
                  src={holidayType.heroImage}
                  alt={holidayType.heroImageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-xl font-semibold text-white sm:text-2xl">{holidayType.name}</p>
                  <p className="mt-1 text-sm text-primary-cream line-clamp-1">{holidayType.tagline}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
