"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { ExperiencePanel } from "@/components/common/ExperiencePanel";
import type { DestinationExperience, DestinationGalleryImage } from "@/lib/destinationDetails";

export interface DestinationExperiencesProps {
  experiences: DestinationExperience[];
  images: DestinationGalleryImage[];
}

export function DestinationExperiences({ experiences, images }: Readonly<DestinationExperiencesProps>) {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="relative mb-5 inline-block pb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary-sky">
              What a trip looks like
              <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
            </p>
            <Heading as="h2" size="lg">
              The moments we build the whole trip around
            </Heading>
          </motion.div>
        </Container>
      </section>

      {experiences.map((experience, index) => {
        const image = images[index % images.length];
        return (
          <ExperiencePanel
            key={experience.title}
            index={index + 1}
            title={experience.title}
            description={experience.description}
            imageSrc={image.src}
            imageAlt={image.alt}
            align={index % 2 === 0 ? "left" : "right"}
          />
        );
      })}
    </>
  );
}
