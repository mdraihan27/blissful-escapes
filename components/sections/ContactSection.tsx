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
  when: string;
  where: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  when: "",
  where: "",
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
      when: plan.when || prev.when,
      where: plan.where || prev.where,
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
      <section id="contact" className="py-14 sm:py-16.75 lg:py-22.5 bg-primary-pink/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center bg-primary-pink/30 p-5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-primary-brown">
                <path d="M4 12L9 17L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <Heading as="h2" size="md">
              Thanks, {form.name.split(" ")[0]}!
            </Heading>
            <Text size="lg" className="mt-5 text-primary-brown/75">
              We have got your message and will be in touch within a day or two. In the meantime, if anything changes or you would rather just call, you can reach us on{" "}
              <a href="tel:07789652136" className="font-semibold text-primary-brown underline-offset-2 hover:underline">
                07789 652 136
              </a>
              . Looking forward to hearing more about the trip you have in mind.
            </Text>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setForm(emptyForm); }}
              className="mt-8 cursor-pointer text-sm text-primary-brown/60 underline-offset-2 hover:text-primary-brown hover:underline focus-visible:outline-2 focus-visible:outline-primary-brown"
            >
              Send another enquiry
            </button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-14 sm:py-16.75 lg:py-22.5 bg-primary-pink/30">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-brown/70">
              Ready when you are
            </p>
            <Heading as="h2" size="lg">
              Let us start planning your trip
            </Heading>
            <Text size="lg" className="mt-5 text-primary-brown/70">
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

            <FormField id="contact-where" label="Where do you want to go?">
              <Select
                id="contact-where"
                name="where"
                options={destinationOptions}
                value={form.where}
                onChange={(e) => set("where")(e.target.value)}
              />
            </FormField>

            <div className="sm:col-span-2">
              <FormField id="contact-when" label="When are you thinking?">
                <DatePicker
                  id="contact-when"
                  name="when"
                  placeholder="e.g. next spring, or June 2027"
                  value={form.when}
                  onChange={set("when")}
                />
              </FormField>
            </div>

            <div className="sm:col-span-2">
              <FormField id="contact-message" label="Anything else I should know?">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me a bit about the trip. Who you are travelling with, what matters most, any ideas you already have..."
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  className="w-full bg-primary-brown/4 px-4 py-3.5 text-base text-primary-brown placeholder:text-primary-brown/40 outline-none transition-shadow duration-200 shadow-[inset_0_-2px_0_0_rgba(55,34,34,0.15)] focus:shadow-[inset_0_-2px_0_0_rgba(55,34,34,1)] resize-none"
                />
              </FormField>
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-start sm:justify-between">
              <p
                aria-live="polite"
                className={`text-sm text-primary-brown/70 transition-opacity duration-200 ${showPrompt ? "opacity-100" : "opacity-0"}`}
              >
                Could you pop in your name and email? I just need those two to get back to you.
              </p>
              <Button type="submit" fullWidthOnMobile className="sm:shrink-0">
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
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-10"
          >
            <a
              href="mailto:enquiries@blissfulescapes.co.uk"
              className="flex items-center gap-2.5 text-sm text-primary-brown/70 transition-colors hover:text-primary-brown focus-visible:outline-2 focus-visible:outline-primary-brown"
            >
              <svg viewBox="0 0 20 16" aria-hidden="true" className="h-4 w-5 fill-none stroke-current">
                <path d="M1 1H19V15H1V1Z M1 1L10 9L19 1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              enquiries@blissfulescapes.co.uk
            </a>
            <a
              href="tel:07789652136"
              className="flex items-center gap-2.5 text-sm text-primary-brown/70 transition-colors hover:text-primary-brown focus-visible:outline-2 focus-visible:outline-primary-brown"
            >
              <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
                <path d="M3 1H7L9 5L7 7C8.1 9.2 8.8 9.9 11 11L13 9L17 11V15C17 16.1 16.1 17 15 17C7.3 17 1 10.7 1 3C1 1.9 1.9 1 3 1Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              07789 652 136
            </a>
            <span className="flex items-center gap-2.5 text-sm text-primary-brown/70">
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
