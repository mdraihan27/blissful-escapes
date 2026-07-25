"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import type { HolidayGalleryImage } from "@/lib/holidayTypeDetails";

export interface HolidayTypeGalleryProps {
  images?: HolidayGalleryImage[];
  holidayName: string;
}

export function HolidayTypeGallery({ images, holidayName }: Readonly<HolidayTypeGalleryProps>) {
  if (!images || images.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-14"
        >
          <p className="relative mb-3 inline-block pb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-sky sm:text-sm">
            Experience & Atmosphere
            <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
          </p>
          <h2 className="text-2xl font-semibold text-primary-navy sm:text-3xl lg:text-4xl">
            Moments from {holidayName}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <motion.div
              key={img.src + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="group relative aspect-[4/3] overflow-hidden bg-primary-navy/5 shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/85 via-primary-navy/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-sm font-semibold tracking-wider text-primary-gold uppercase mb-1">
                  Highlight {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-white sm:text-xl">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
