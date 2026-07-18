"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

const PIXELS_PER_SECOND = 22;
const RESUME_DELAY_MS = 300;

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hasInitializedRef = useRef(false);
  const [setWidth, setSetWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const width = track.scrollWidth / 2;
      setSetWidth(width);
      if (!hasInitializedRef.current && width > 0) {
        x.set(0);
        hasInitializedRef.current = true;
      }
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [x]);

  useEffect(() => {
    if (shouldReduceMotion || isDragging || isPaused || setWidth === 0) return;

    let active = true;
    let controls: ReturnType<typeof animate>;

    const step = () => {
      if (!active) return;

      let current = x.get();
      if (current <= -setWidth) current += setWidth;
      if (current > 0) current -= setWidth;
      x.set(current);

      const target = current - setWidth;
      const duration = Math.abs(target - current) / PIXELS_PER_SECOND;

      controls = animate(x, target, {
        duration,
        ease: "linear",
        onComplete: () => {
          if (!active) return;
          x.set(x.get() + setWidth);
          step();
        },
      });
    };

    step();

    return () => {
      active = false;
      controls?.stop();
    };
  }, [isDragging, isPaused, shouldReduceMotion, setWidth, x]);

  const handleDragEnd = () => {
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsDragging(false), RESUME_DELAY_MS);
  };

  const handleDrag = () => {
    if (setWidth === 0) return;
    const current = x.get();
    if (current > 0) x.set(current - setWidth);
    else if (current < -setWidth) x.set(current + setWidth);
  };

  return (
    <section
      id="testimonials"
      className="py-14 sm:py-16.75 lg:py-22.5 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <div className="mb-12 sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-brown/70">
            Happy customers
          </p>
          <Heading as="h2" size="lg">
            The trips they came home talking about
          </Heading>
        </div>
      </Container>

      {/* Full-bleed carousel: auto-slides slowly right to left, draggable to browse manually */}
      <div className="relative overflow-hidden">
        <motion.div
          ref={trackRef}
          drag={shouldReduceMotion ? false : "x"}
          dragMomentum={false}
          onDragStart={() => {
            clearTimeout(resumeTimeoutRef.current);
            setIsDragging(true);
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          className={`flex gap-4 px-4 sm:px-6 lg:px-8 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ x, width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.07 }}
            >
              <TestimonialCard
                name={testimonial.name}
                destination={testimonial.destination}
                quote={testimonial.quote}
                imageSrc={testimonial.imageSrc}
                imageAlt={testimonial.imageAlt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
