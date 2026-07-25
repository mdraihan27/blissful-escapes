"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { ExperiencePanel } from "@/components/common/ExperiencePanel";
import type { HolidayTypeFeature, HolidayGalleryImage } from "@/lib/holidayTypeDetails";

export interface HolidayTypeFeaturesProps {
  features: HolidayTypeFeature[];
  images: HolidayGalleryImage[];
}

export function HolidayTypeFeatures({ features, images }: Readonly<HolidayTypeFeaturesProps>) {
  return (
    <>
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="relative mb-5 inline-block pb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary-sky">
              How we plan it
              <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
            </p>
            <Heading as="h2" size="lg">
              The moments we build the whole trip around
            </Heading>
          </motion.div>
        </Container>
      </section>

      {features.map((feature, index) => {
        const image = images[index % images.length];
        return (
          <ExperiencePanel
            key={feature.title}
            index={index + 1}
            title={feature.title}
            description={feature.description}
            imageSrc={image.src}
            imageAlt={image.alt}
            align={index % 2 === 0 ? "left" : "right"}
          />
        );
      })}
    </>
  );
}
