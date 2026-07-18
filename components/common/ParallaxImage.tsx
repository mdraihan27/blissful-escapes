"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  /** How far (in %) the image drifts across the scroll. Higher is more dramatic. */
  strength?: number;
  className?: string;
}

export function ParallaxImage({
  src,
  alt,
  priority = false,
  strength = 14,
  className = "",
}: Readonly<ParallaxImageProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div style={{ y: shouldReduceMotion ? 0 : y }} className="absolute -inset-y-[18%] inset-x-0">
        <Image src={src} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
