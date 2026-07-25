"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { FormField } from "@/components/common/FormField";
import { DatePicker } from "@/components/common/DatePicker";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useTripPlan } from "@/lib/TripPlanContext";

const destinationOptions = [
  { value: "", label: "Select a region" },
  { value: "southeast-asia", label: "Southeast Asia" },
  { value: "caribbean", label: "Caribbean" },
  { value: "dubai-middle-east", label: "Dubai & the Middle East" },
  { value: "europe", label: "Europe" },
  { value: "americas", label: "The Americas" },
  { value: "indian-ocean", label: "Indian Ocean" },
  { value: "not-sure", label: "Not sure yet" },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  from: string;
  where: string;
  when: string;
  duration: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  from: "",
  where: "",
  when: "",
  duration: "",
  message: "",
};

export function ContactSection() {
  const { plan, clearPlan } = useTripPlan();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [showPrompt, setShowPrompt] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!plan) return;
    setForm((prev) => ({
      ...prev,
      from: plan.from || prev.from,
      where: plan.where || prev.where,
      when: plan.when || prev.when,
      duration: plan.duration || prev.duration,
    }));
    clearPlan();
  }, [plan, clearPlan]);

  const set = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setShowPrompt(true);
      return;
    }

    setShowPrompt(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-14 sm:py-16.75 lg:py-22.5 bg-primary-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center bg-white p-5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-primary-navy">
                <path d="M4 12L9 17L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <Heading as="h2" size="md">
              Thanks, {form.name.split(" ")[0]}!
            </Heading>
            <Text size="lg" className="mt-5 text-primary-navy">
              We have got your message and will be in touch within a day or two. In the meantime, if anything changes or you would rather just call, you can reach us on{" "}
              <a href="tel:07789652136" className="font-semibold text-primary-navy underline-offset-2 hover:underline">
                07789 652 136
              </a>
              . Looking forward to hearing more about the trip you have in mind.
            </Text>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setForm(emptyForm); }}
              className="mt-8 cursor-pointer text-sm text-primary-sky underline-offset-2 hover:text-primary-navy hover:underline focus-visible:outline-2 focus-visible:outline-primary-navy"
            >
              Send another enquiry
            </button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-14 sm:py-16.75 lg:py-22.5 bg-primary-cream">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="relative mb-4 inline-block pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-sky">
              Ready when you are
              <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
            </p>
            <Heading as="h2" size="lg">
              Let us start planning your trip
            </Heading>
            <Text size="lg" className="mt-5 text-primary-navy">
              Tell us a little about what you have in mind. There is no commitment here, just a conversation about where you want to go and what matters most to you. We will come back with ideas within 48 hours.
            </Text>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
            noValidate
          >
            <FormField id="contact-name" label="Your name" required>
              <Input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => set("name")(e.target.value)}
              />
            </FormField>

            <FormField id="contact-email" label="Email address" required>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
              />
            </FormField>

            <FormField id="contact-phone" label="Phone (optional)">
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="07700 900000"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
              />
            </FormField>

            <FormField id="contact-from" label="Traveling from">
              <Input
                id="contact-from"
                name="from"
                type="text"
                autoComplete="address-level2"
                placeholder="e.g. Manchester, UK"
                value={form.from}
                onChange={(e) => set("from")(e.target.value)}
              />
            </FormField>

            <FormField id="contact-where" label="Destination">
              <Select
                id="contact-where"
                name="where"
                options={destinationOptions}
                value={form.where}
                onChange={(e) => set("where")(e.target.value)}
              />
            </FormField>

            <FormField id="contact-when" label="Departure date">
              <DatePicker
                id="contact-when"
                name="when"
                placeholder="e.g. next spring, or June 2027"
                value={form.when}
                onChange={set("when")}
              />
            </FormField>

            <FormField id="contact-duration" label="Trip length (days)">
              <Input
                id="contact-duration"
                name="duration"
                type="number"
                min={1}
                max={365}
                inputMode="numeric"
                placeholder="e.g. 10"
                value={form.duration}
                onChange={(e) => set("duration")(e.target.value)}
              />
            </FormField>

            <div className="sm:col-span-2">
              <FormField id="contact-message" label="Anything else I should know?">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me a bit about the trip. Who you are travelling with, what matters most, any ideas you already have..."
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  className="w-full bg-white px-4 py-3.5 text-base text-primary-navy placeholder:text-primary-sky outline-none transition-shadow duration-200 shadow-[inset_0_-2px_0_0_#70a7bf] focus:shadow-[inset_0_-2px_0_0_#274957] resize-none"
                />
              </FormField>
            </div>

            <div className="sm:col-span-2 flex flex-col items-center justify-center gap-3 text-center pt-2">
              {showPrompt && (
                <p aria-live="polite" className="text-sm text-primary-navy">
                  Could you pop in your name and email? I just need those two to get back to you.
                </p>
              )}
              <Button type="submit" className="mx-auto">
                Send my travel details
              </Button>
            </div>
          </motion.form>

          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-10 sm:justify-center"
          >
            <a
              href="mailto:enquiries@blissfulescapes.co.uk"
              className="flex items-center gap-2.5 text-sm text-primary-navy transition-colors hover:text-primary-sky focus-visible:outline-2 focus-visible:outline-primary-navy"
            >
              <svg viewBox="0 0 20 16" aria-hidden="true" className="h-4 w-5 fill-none stroke-current">
                <path d="M1 1H19V15H1V1Z M1 1L10 9L19 1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              enquiries@blissfulescapes.co.uk
            </a>
            <a
              href="tel:07789652136"
              className="flex items-center gap-2.5 text-sm text-primary-navy transition-colors hover:text-primary-sky focus-visible:outline-2 focus-visible:outline-primary-navy"
            >
              <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
                <path d="M3 1H7L9 5L7 7C8.1 9.2 8.8 9.9 11 11L13 9L17 11V15C17 16.1 16.1 17 15 17C7.3 17 1 10.7 1 3C1 1.9 1.9 1 3 1Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              07789 652 136
            </a>
            <span className="flex items-center gap-2.5 text-sm text-primary-navy">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
                <circle cx="10" cy="8" r="3" strokeWidth="1.4" />
                <path d="M3 8C3 4.13 6.13 1 10 1s7 3.13 7 7c0 5-7 12-7 12S3 13 3 8Z" strokeWidth="1.4" />
              </svg>
              Ormskirk, Lancashire
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
