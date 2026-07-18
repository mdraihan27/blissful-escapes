"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IconButton } from "@/components/ui/IconButton";
import { HolidayTypeCarouselSlide } from "@/components/common/HolidayTypeCarouselSlide";
import type { HolidayType } from "@/lib/holidayTypes";

export interface HolidayTypeCarouselProps {
  items: HolidayType[];
  onIndexChange?: (index: number) => void;
}

export function HolidayTypeCarousel({ items, onIndexChange }: Readonly<HolidayTypeCarouselProps>) {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1, duration: 26 },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      onIndexChange?.(index);
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onIndexChange]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((item, index) => (
            <div
              key={item.slug}
              className="mr-4 h-70 flex-[0_0_62%] sm:mr-5 sm:h-80 sm:flex-[0_0_34%] lg:h-85 lg:flex-[0_0_22%]"
            >
              <HolidayTypeCarouselSlide
                label={item.label}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                isFirst={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <IconButton
        label="Previous holiday type"
        tone="light"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-4"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
          <path d="M10 3L5 8L10 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconButton>

      <IconButton
        label="Next holiday type"
        tone="light"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-4"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
          <path d="M6 3L11 8L6 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconButton>

      <div className="mt-6 flex items-center justify-center gap-1">
        {items.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            aria-label={`Show ${item.label}`}
            aria-current={index === selectedIndex}
            onClick={() => scrollTo(index)}
            className="cursor-pointer p-1.5"
          >
            <span
              className={`block h-1 transition-all duration-300 ease-out ${
                index === selectedIndex ? "w-6 bg-white" : "w-1.5 bg-white/35"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
