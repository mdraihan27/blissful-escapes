"use client";

import Image from "next/image";

export interface TestimonialCardProps {
  name: string;
  destination: string;
  quote: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function TestimonialCard({
  name,
  destination,
  quote,
  imageSrc,
  imageAlt,
}: Readonly<TestimonialCardProps>) {
  return (
    <div className="flex h-full min-w-[300px] max-w-[360px] flex-col justify-between bg-primary-pink/12 p-7 sm:min-w-[340px] sm:p-8">
      {imageSrc && imageAlt && (
        <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 300px, 360px"
            className="object-cover"
          />
        </div>
      )}

      <blockquote className="flex-1">
        <p className="text-base leading-relaxed text-primary-brown/80 sm:text-[0.95rem]">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-6">
        <p className="font-semibold text-primary-brown">{name}</p>
        <p className="mt-0.5 text-sm text-primary-pink">{destination}</p>
      </footer>
    </div>
  );
}
