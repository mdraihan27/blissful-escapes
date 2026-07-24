"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface DestinationIndexRowProps {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  displayIndex: number;
  isActive: boolean;
  onActivate: () => void;
}

export function DestinationIndexRow({
  slug,
  name,
  region,
  tagline,
  imageSrc,
  imageAlt,
  displayIndex,
  isActive,
  onActivate,
}: Readonly<DestinationIndexRowProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: displayIndex * 0.06, ease: "easeOut" }}
    >
      <Link
        href={`/destinations/${slug}`}
        aria-label={`Explore ${name}`}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className="group block py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy sm:py-7"
      >
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="text-sm font-semibold tabular-nums text-primary-sky transition-colors duration-300">
            {String(displayIndex + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3
                className={`text-3xl font-semibold tracking-tight transition-transform duration-300 ease-out sm:text-4xl lg:text-5xl ${
                  isActive ? "text-primary-navy sm:translate-x-2" : "text-primary-sky"
                }`}
              >
                {name}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-sky">
                {region}
              </span>
            </div>

            {/* Mobile only: inline image + tagline preview */}
            <div className="mt-4 lg:hidden">
              <div className="relative aspect-16/9 w-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/70 to-transparent" />
              </div>
              <p className="mt-3 text-sm text-primary-sky">{tagline}</p>
            </div>

            {/* Desktop: tagline reveals on active */}
            <div
              className={`hidden grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out lg:grid ${
                isActive ? "lg:grid-rows-[1fr]" : ""
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-3 max-w-md text-base text-primary-sky">{tagline}</p>
              </div>
            </div>
          </div>

          <span
            className={`hidden shrink-0 items-center gap-2 self-center text-sm font-semibold text-primary-navy transition-opacity duration-300 lg:inline-flex ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            Discover
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="h-3.5 w-3.5 fill-none stroke-current transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="M6 3L11 8L6 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* Divider via spacing + subtle contrast, not a border */}
        <div
          className={`mt-6 h-px w-full origin-left scale-x-100 transition-transform duration-500 ease-out sm:mt-7 ${
            isActive ? "bg-primary-navy" : "bg-primary-sky"
          }`}
        />
      </Link>
    </motion.div>
  );
}
