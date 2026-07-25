"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface StoryMilestone {
  year: string;
  title: string;
  description: string;
}

const milestones: StoryMilestone[] = [
  {
    year: "1989",
    title: "Where it began",
    description:
      "Decades in corporate travel taught us how the industry really works, and where it usually lets people down.",
  },
  {
    year: "2014",
    title: "Going personal",
    description:
      "We stepped away from volume sales to focus on one client, one trip, one honest conversation at a time.",
  },
  {
    year: "Today",
    title: "600+ trusted partners",
    description:
      "A book of contacts across luxury, adventure and fully inclusive stays, used to match you rather than a quota.",
  },
];

export function AboutStorySection() {
  return (
    <section className="bg-white py-14 sm:py-16.75 lg:py-22.5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="relative mb-4 inline-block pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-sky">
            Our story
            <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
          </p>
          <Heading as="h2" size="lg">
            Built on relationships, not a script.
          </Heading>
          <Text size="lg" className="mt-5 text-primary-navy">
            No call centres and no handovers between departments. From the first message to the moment you land, you are talking to the same person who planned the trip.
          </Text>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
            >
              <p className="text-4xl font-semibold italic leading-none text-primary-gold sm:text-5xl">
                {milestone.year}
              </p>
              <p className="mt-4 text-lg font-semibold text-primary-navy">{milestone.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-sky sm:text-base">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
