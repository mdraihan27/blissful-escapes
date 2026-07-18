"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ParallaxImage } from "@/components/common/ParallaxImage";

export interface ExperiencePanelProps {
  index: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  align: "left" | "right";
}

export function ExperiencePanel({
  index,
  title,
  description,
  imageSrc,
  imageAlt,
  align,
}: Readonly<ExperiencePanelProps>) {
  const alignSelf = align === "right" ? "sm:ml-auto sm:text-right sm:items-end" : "";
  /*
    Below sm the text spans the full width, so a horizontal gradient leaves
    half of it over a barely dimmed photo. Mobile uses a bottom anchored
    vertical gradient; sm and up keeps the directional one.
  */
  const gradient =
    align === "right"
      ? "bg-gradient-to-t from-primary-brown/90 via-primary-brown/45 to-primary-brown/10 sm:bg-gradient-to-l sm:from-primary-brown/90 sm:via-primary-brown/40 sm:to-transparent"
      : "bg-gradient-to-t from-primary-brown/90 via-primary-brown/45 to-primary-brown/10 sm:bg-gradient-to-r sm:from-primary-brown/90 sm:via-primary-brown/40 sm:to-transparent";

  return (
    <section className="relative flex h-dvh min-h-150 items-end overflow-hidden sm:items-center">
      <ParallaxImage src={imageSrc} alt={imageAlt} strength={16} />
      <div className={`absolute inset-0 ${gradient}`} />

      <Container className="relative pb-14 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`flex max-w-xl flex-col ${alignSelf}`}
        >
          <span className="text-5xl font-semibold italic leading-none text-primary-beige/90 xs:text-6xl sm:text-7xl lg:text-8xl">
            {String(index).padStart(2, "0")}
          </span>
          <h3 className="mt-5 text-2xl font-semibold leading-tight text-white xs:text-3xl sm:mt-6 sm:text-4xl lg:text-5xl">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/80 xs:text-lg sm:mt-5 sm:text-xl">{description}</p>
        </motion.div>
      </Container>
    </section>
  );
}
