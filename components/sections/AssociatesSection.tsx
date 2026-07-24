"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";

interface Associate {
  name: string;
  src: string;
  widthClass: string;
}

const associates: Associate[] = [
  { name: "Emirates", src: "/assets/images/logo-banner/Emirates-Logo.png", widthClass: "w-28 sm:w-32 lg:w-36" },
  {
    name: "Jumeirah",
    src: "/assets/images/logo-banner/Jumeirah-Logo-Vector.svg-.png",
    widthClass: "w-32 sm:w-36 lg:w-40",
  },
  { name: "Qatar Airways", src: "/assets/images/logo-banner/Qatar-Airways-Logo.png", widthClass: "w-32 sm:w-36 lg:w-40" },
  { name: "One&Only Resorts", src: "/assets/images/logo-banner/one-and-only-logo.png", widthClass: "w-28 sm:w-32 lg:w-36" },
  {
    name: "Singapore Airlines",
    src: "/assets/images/logo-banner/Singapore_Airlines_Logo_2.svg.webp",
    widthClass: "w-32 sm:w-36 lg:w-40",
  },
];

export function AssociatesSection() {
  return (
    <section className="bg-primary-cream py-14 sm:py-16.75 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <Heading as="h2" size="sm">
            Our Associates
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:mt-14 sm:gap-x-14 lg:mt-16 lg:gap-x-20"
        >
          {associates.map((associate) => (
            <div key={associate.name} className={`relative h-12 sm:h-14 lg:h-16 ${associate.widthClass}`}>
              <Image
                src={associate.src}
                alt={associate.name}
                fill
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
