"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { testimonials, type Testimonial } from "@/lib/testimonials";

const categories = ["All Stories", "Multi-Stop Safari", "Family Adventure", "Winter Adventure", "Luxury Break", "Two-Centre Holiday", "Bespoke Journey"];

export function TestimonialsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const shouldReduceMotion = useReducedMotion();

  const filteredTestimonials =
    selectedCategory === "All Stories"
      ? testimonials
      : testimonials.filter((t) => t.tripType.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary-cream/20 overflow-hidden">
      <Container>
        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-4.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary-navy text-white shadow-sm"
                  : "bg-white text-primary-navy/70 hover:bg-primary-cream hover:text-primary-navy border border-primary-navy/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials List */}
        <div className="space-y-16 sm:space-y-20">
          <AnimatePresence mode="wait">
            {filteredTestimonials.map((item, idx) => {
              const isDark = idx % 2 === 1;
              const isReversed = idx % 2 === 1;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative overflow-hidden p-8 sm:p-12 lg:p-16 border border-primary-navy/10 ${
                    isDark ? "bg-primary-navy text-white" : "bg-white text-primary-navy"
                  }`}
                >
                  {/* Watermark Quote Symbol */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-6 top-0 select-none text-[180px] font-serif leading-none italic ${
                      isDark ? "text-white/5" : "text-primary-navy/5"
                    }`}
                  >
                    “
                  </span>

                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
                    {/* Text Column */}
                    <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                      {/* Rating Stars & Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-primary-gold text-base tracking-widest" aria-label="5 stars out of 5">
                          ★★★★★
                        </div>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 ${
                            isDark ? "bg-white/10 text-primary-gold" : "bg-primary-cream text-primary-navy"
                          }`}
                        >
                          {item.tripType} · {item.destination}
                        </span>
                      </div>

                      {/* Main Quote */}
                      <blockquote className="text-2xl sm:text-3xl font-semibold italic leading-snug tracking-tight">
                        "{item.quote}"
                      </blockquote>

                      {/* Extended Story Detail */}
                      <p className={`mt-5 text-base sm:text-lg leading-relaxed ${isDark ? "text-primary-cream/90" : "text-primary-navy/80"}`}>
                        {item.storyDetail}
                      </p>

                      {/* Client Info Footer */}
                      <div className="mt-8 pt-6 border-t border-current/10 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold">{item.name}</p>
                          <p className={`text-xs ${isDark ? "text-primary-cream/70" : "text-primary-sky"}`}>
                            Planned by {item.consultant} · {item.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dual Photo Feature Frame (Visual Pairing Vibe) */}
                    <div className={`lg:col-span-5 relative min-h-72 sm:min-h-96 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                      {/* Main Hero Photo */}
                      <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-md shadow-lg border-2 border-white/80">
                        <Image
                          src={item.heroImage}
                          alt={item.heroImageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs text-white font-medium drop-shadow-md">
                          {item.destination}
                        </span>
                      </div>

                      {/* Overlapping Inset Secondary Photo */}
                      {item.secondaryImage && (
                        <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 h-36 w-36 sm:h-44 sm:w-44 overflow-hidden rounded-md border-4 border-white shadow-xl rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                          <Image
                            src={item.secondaryImage}
                            alt={item.secondaryImageAlt || item.destination}
                            fill
                            sizes="200px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
