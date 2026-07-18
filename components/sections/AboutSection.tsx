"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface CredentialItem {
  value: string;
  label: string;
}

const credentials: CredentialItem[] = [
  { value: "35+", label: "Years of experience" },
  { value: "600+", label: "Trusted suppliers" },
  { value: "7 days", label: "A week, always available" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-16.75 lg:py-22.5">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Text, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-brown/70">
              About Us
            </p>
            <Heading as="h2" size="lg">
              We plan the holidays we would want to take ourselves.
            </Heading>

            <div className="mt-8 space-y-5">
              <Text size="base" className="text-primary-brown/80 leading-relaxed">
                Blissful Escapes has been in travel for over 35 years, built on corporate client relations and a decade of personal travel consultancy based in Ormskirk, Lancashire. We started because we were tired of watching people settle for holidays that almost matched what they had in mind.
              </Text>
              <Text size="base" className="text-primary-brown/80 leading-relaxed">
                Our speciality is honeymoons, safaris, and milestone trips, the ones where getting the details right really matters. We work with over 600 suppliers across luxury, adventure, wellbeing and fully inclusive stays, which means we can match you with the right hotel, the right route, and the right price without steering you toward whichever package pays the best commission.
              </Text>
              <Text size="base" className="text-primary-brown/80 leading-relaxed">
                The trips we are most proud of are the ones clients come home talking about for years. That is what we are aiming for every time. Tell us what matters to you, and we will take care of the rest.
              </Text>
            </div>

            {/* Credentials row */}
            <div className="mt-10 flex flex-wrap gap-8">
              {credentials.map((cred) => (
                <div key={cred.label}>
                  <p className="text-3xl font-semibold text-primary-brown">{cred.value}</p>
                  <p className="mt-1 text-sm text-primary-brown/60">{cred.label}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="bg-primary-pink/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-brown">
                ABTA Protected
              </span>
              <span className="bg-primary-pink/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-brown">
                ATOL Bonded
              </span>
              <span className="bg-primary-pink/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-brown">
                Hays Travel Independence Group
              </span>
            </div>
          </motion.div>

          {/* Image, right on desktop, video ready slot */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            {/*
              Video-ready slot: swap the inner <Image> for a <video> element
              and this wrapper stays the same. The aspect-[3/4] wrapper
              constrains both equally.
            */}
            <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/assets/images/banner/woman-maldives-jetty-banner.jpg"
                alt="A traveller walking along a jetty towards overwater bungalows in the Maldives"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Pink tint glassmorphism overlay card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary-pink/25 backdrop-blur-sm px-6 py-5">
                <p className="font-semibold text-primary-brown">Blissful Escapes</p>
                <p className="text-sm text-primary-brown/70">Personal Travel Consultancy · Ormskirk, Lancashire</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
