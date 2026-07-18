"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export interface CrossfadeBackgroundProps {
  src: string;
  className?: string;
  priority?: boolean;
}

export function CrossfadeBackground({ src, className = "", priority = false }: Readonly<CrossfadeBackgroundProps>) {
  const [baseSrc, setBaseSrc] = useState(src);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image src={baseSrc} alt="" fill priority={priority} sizes="100vw" className="object-cover" />
      </div>

      {src !== baseSrc && (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 1.4, ease: "easeInOut" }}
          onAnimationComplete={() => setBaseSrc(src)}
          className="absolute inset-0"
        >
          <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
      )}
    </div>
  );
}
