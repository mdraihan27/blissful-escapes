"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { GalleryLightbox } from "@/components/common/GalleryLightbox";
import { galleryImages } from "@/lib/galleryImages";

const PAGE_SIZE = 12;

const aspectSpanClasses: Record<"tall" | "wide" | "square", string> = {
  tall: "col-span-1",
  wide: "col-span-2",
  square: "col-span-1",
};

export function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;
  const isExpanded = visibleCount > PAGE_SIZE;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((current) =>
      current !== null ? (current - 1 + galleryImages.length) % galleryImages.length : null
    );
  const nextImage = () =>
    setLightboxIndex((current) =>
      current !== null ? (current + 1) % galleryImages.length : null
    );

  return (
    <section id="gallery" className="py-14 sm:py-16.75 lg:py-22.5 bg-primary-pink/30">
      <Container>
        <div className="mb-12 sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-brown/70">
            A glimpse of what awaits
          </p>
          <Heading as="h2" size="lg">
            Gallery
          </Heading>
          <Text size="lg" className="mt-5 max-w-2xl text-primary-brown/70">
            A small selection from the trips we have helped plan. Every photograph represents a real journey, a real client, a real moment.
          </Text>
        </div>

        {/* Bento grid: uniform row height, column-span variety only, so dense packing always fully backfills gaps */}
        <div className="grid grid-flow-row-dense grid-cols-2 auto-rows-35 gap-3 sm:grid-cols-3 sm:auto-rows-42.5 sm:gap-4 lg:grid-cols-4 lg:auto-rows-47.5 lg:gap-5">
          {visibleImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.07, ease: "easeOut" }}
              onClick={() => openLightbox(index)}
              aria-label={`View photo: ${image.alt}`}
              className={`group relative block cursor-pointer overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown ${aspectSpanClasses[image.aspectRatio]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-primary-brown/0 transition-colors duration-300 group-hover:bg-primary-brown/15" />
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {hasMore && (
            <Button
              variant="primary"
              onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, galleryImages.length))}
            >
              Show more photos
            </Button>
          )}
          {isExpanded && (
            <Button variant="ghost" onClick={() => setVisibleCount(PAGE_SIZE)} className="text-primary-brown">
              Show less
            </Button>
          )}
        </div>
      </Container>

      <GalleryLightbox
        images={galleryImages}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}
