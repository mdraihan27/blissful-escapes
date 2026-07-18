"use client";

import Image from "next/image";

export interface HolidayTypeCarouselSlideProps {
  label: string;
  imageSrc: string;
  imageAlt: string;
  isFirst: boolean;
}

export function HolidayTypeCarouselSlide({
  label,
  imageSrc,
  imageAlt,
  isFirst,
}: Readonly<HolidayTypeCarouselSlideProps>) {
  return (
    <div className="relative aspect-[3/4] h-full w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 31vw"
        className="object-cover"
        priority={isFirst}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-brown/85 via-primary-brown/15 to-transparent" />
      <span className="absolute bottom-5 left-4 right-4 text-left text-lg font-semibold uppercase tracking-wide text-white sm:text-xl">
        {label}
      </span>
    </div>
  );
}
