"use client";

import Image from "next/image";
import Link from "next/link";

export interface HolidayTypeCarouselSlideProps {
  label: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  isFirst: boolean;
}

export function HolidayTypeCarouselSlide({
  label,
  href,
  imageSrc,
  imageAlt,
  isFirst,
}: Readonly<HolidayTypeCarouselSlideProps>) {
  return (
    <Link
      href={href}
      aria-label={`Explore ${label}`}
      className="group relative block aspect-[3/4] h-full w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 31vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={isFirst}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/40 to-transparent" />
      <span className="absolute bottom-5 left-4 right-4 text-left text-lg font-semibold uppercase tracking-wide text-white transition-colors duration-200 group-hover:text-primary-gold sm:text-xl">
        {label}
      </span>
    </Link>
  );
}
