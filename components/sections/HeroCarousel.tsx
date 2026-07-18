"use client";

import { useEffect, useState } from "react";
import { CrossfadeBackground } from "@/components/common/CrossfadeBackground";

const AUTO_ADVANCE_MS = 7000;

const slides = [
  { src: "/assets/images/hero/maldives-atoll-aerial.jpeg" },
  { src: "/assets/images/hero/capri-clifftop-terrace.jpg" },
  { src: "/assets/images/hero/st-lucia-pitons-pool.jpg" },
  { src: "/assets/images/hero/croatia-coastal-village.jpg" },
  { src: "/assets/images/hero/dubai-palm-jumeirah-aerial.jpg" },
  { src: "/assets/images/hero/antalya-coast-paraglider.jpeg" },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <CrossfadeBackground src={slides[activeIndex].src} priority />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-brown/90 via-primary-brown/30 to-primary-brown/10" />
    </div>
  );
}
