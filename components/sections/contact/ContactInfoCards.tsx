"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export function ContactInfoCards() {
  const cards = [
    {
      title: "Call or WhatsApp",
      detail: "07789 652 136",
      href: "tel:07789652136",
      subtext: "Available 7 days a week, 8:00 AM – 8:00 PM. Speak directly with your travel consultant.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-primary-navy">
          <path
            d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21C10.1634 21 3 13.8366 3 5Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Email Us",
      detail: "enquiries@blissfulescapes.co.uk",
      href: "mailto:enquiries@blissfulescapes.co.uk",
      subtext: "Send us your travel ideas. We aim to respond with initial thoughts within 24 to 48 hours.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-primary-navy">
          <path
            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Consultancy Office",
      detail: "Ormskirk, Lancashire",
      href: "#office-info",
      subtext: "Personal travel consultancy based in Lancashire. In-person and phone appointments available.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-primary-navy">
          <path
            d="M12 21C16 17 20 13.4183 20 9.5C20 5.08172 16.4183 1.5 12 1.5C7.58172 1.5 4 5.08172 4 9.5C4 13.4183 8 17 12 21Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9.5" r="3" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Financial Protection",
      detail: "100% ABTA & ATOL Bonded",
      href: "#financial-protection",
      subtext: "Independent member of Hays Travel Independence Group. Full financial protection guaranteed.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-primary-navy">
          <path
            d="M12 3L20 7.5V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V7.5L12 3Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 12L11 14L15 10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-primary-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="flex flex-col justify-between bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md border border-primary-navy/5"
            >
              <div>
                <div className="mb-5 inline-flex items-center justify-center bg-primary-cream p-3.5">
                  {card.icon}
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-sky">
                  {card.title}
                </h3>
                <a
                  href={card.href}
                  className="mt-2 block text-lg font-semibold text-primary-navy transition-colors hover:text-primary-sky"
                >
                  {card.detail}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-primary-navy/75">{card.subtext}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-primary-cream">
                <a
                  href={card.href}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-navy transition-colors hover:text-primary-sky"
                >
                  Connect
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="h-3 w-3 fill-none stroke-current transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M3 8H13M9 4L13 8L9 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
