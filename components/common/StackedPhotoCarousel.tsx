"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export interface StackedPhotoItem {
  src: string;
  alt: string;
  title?: string;
}

export interface StackedPhotoCarouselProps {
  photos: StackedPhotoItem[];
  tone?: "dark" | "light";
}

export function StackedPhotoCarousel({ photos, tone = "dark" }: Readonly<StackedPhotoCarouselProps>) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const shouldReduceMotion = useReducedMotion();

  if (!photos || photos.length === 0) return null;

  const total = photos.length;

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // Calculate stack positions for the top 4 cards
  const getCardStyle = (offsetIndex: number) => {
    if (offsetIndex === 0) {
      return {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
        zIndex: 30,
        opacity: 1,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
      };
    }
    if (offsetIndex === 1) {
      return {
        scale: 0.95,
        rotate: 5,
        x: 20,
        y: 10,
        zIndex: 20,
        opacity: 0.92,
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.35)",
      };
    }
    if (offsetIndex === 2) {
      return {
        scale: 0.9,
        rotate: -6,
        x: -20,
        y: 16,
        zIndex: 10,
        opacity: 0.82,
        boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.3)",
      };
    }
    return {
      scale: 0.85,
      rotate: 8,
      x: 32,
      y: 24,
      zIndex: 5,
      opacity: 0.65,
      boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.25)",
    };
  };

  // Text color tokens based on section tone
  const textColor = tone === "dark" ? "text-white" : "text-primary-navy";
  const subTextColor = tone === "dark" ? "text-primary-cream" : "text-primary-sky";
  const controlHover = tone === "dark" ? "hover:text-primary-gold" : "hover:text-primary-navy";
  const controlIdle = tone === "dark" ? "text-white/60" : "text-primary-navy/60";

  return (
    <div className="relative mx-auto w-full max-w-lg py-6 sm:py-8">
      {/* 3D Stack Container */}
      <div className="relative aspect-[4/3] w-full items-center justify-center">
        {photos.map((photo, i) => {
          // Calculate relative position in current stack
          const offsetIndex = (i - index + total) % total;

          // Only render top 4 visible stacked cards
          if (offsetIndex > 3) return null;

          const cardStyle = getCardStyle(offsetIndex);
          const isTop = offsetIndex === 0;

          return (
            <motion.div
              key={`${photo.src}-${i}`}
              initial={false}
              animate={{
                scale: cardStyle.scale,
                rotate: cardStyle.rotate,
                x: cardStyle.x,
                y: cardStyle.y,
                opacity: cardStyle.opacity,
                zIndex: cardStyle.zIndex,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => {
                if (!isTop) {
                  setDirection(1);
                  setIndex(i);
                }
              }}
              className={`absolute inset-0 cursor-pointer overflow-hidden rounded-lg bg-white p-2 sm:p-3 border border-white/20 transition-shadow duration-300 ${
                isTop ? "pointer-events-auto" : "pointer-events-auto hover:brightness-105"
              }`}
              style={{
                boxShadow: cardStyle.boxShadow,
                transformOrigin: "center center",
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-md bg-primary-navy/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 480px"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {isTop && photo.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-4 text-white"
                  >
                    <p className="text-xs uppercase tracking-widest text-primary-gold font-semibold">
                      Photo {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </p>
                    <p className="mt-0.5 text-base font-semibold drop-shadow-sm sm:text-lg">{photo.title}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Clean controls with NO background boxes */}
      <div className="mt-8 flex items-center justify-between px-2">
        {/* Counter */}
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${subTextColor}`}>
            {String(index + 1).padStart(2, "0")} <span className="opacity-40">/</span> {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Step Dots */}
        <div className="flex items-center gap-1.5">
          {photos.map((p, dotIdx) => (
            <button
              key={`${p.src}-dot-${dotIdx}`}
              type="button"
              aria-label={`Go to photo ${dotIdx + 1}`}
              onClick={() => {
                setDirection(dotIdx > index ? 1 : -1);
                setIndex(dotIdx);
              }}
              className="cursor-pointer p-1 transition-transform duration-200 hover:scale-125 focus:outline-none"
            >
              <span
                className={`block h-1.5 transition-all duration-300 rounded-full ${
                  dotIdx === index
                    ? tone === "dark"
                      ? "w-6 bg-primary-gold"
                      : "w-6 bg-primary-navy"
                    : tone === "dark"
                    ? "w-1.5 bg-white/30"
                    : "w-1.5 bg-primary-navy/20"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Clean minimal arrow controls */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous stacked photo"
            className={`cursor-pointer p-1.5 transition-colors duration-200 ${controlIdle} ${controlHover} focus:outline-none`}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
              <path d="M12.5 15L7.5 10L12.5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next stacked photo"
            className={`cursor-pointer p-1.5 transition-colors duration-200 ${controlIdle} ${controlHover} focus:outline-none`}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
              <path d="M7.5 15L12.5 10L7.5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
