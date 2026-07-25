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

export function ContactFormSection() {
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
      <section id="contact-form" className="py-20 sm:py-24 lg:py-28 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center bg-primary-cream p-10 sm:p-14 border border-primary-navy/5 shadow-sm"
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
              We have received your travel details and will be in touch within 24 to 48 hours. In the meantime, if anything changes or you would like to speak sooner, feel free to call us on{" "}
              <a href="tel:07789652136" className="font-semibold text-primary-navy underline-offset-2 hover:underline">
                07789 652 136
              </a>
              .
            </Text>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm(emptyForm);
              }}
              className="mt-8 cursor-pointer text-sm font-semibold text-primary-navy underline-offset-2 hover:text-primary-sky hover:underline"
            >
              Send another enquiry
            </button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 sm:py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="relative mb-4 inline-block pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-sky">
              Start Planning Your Escape
              <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gold" aria-hidden="true" />
            </p>
            <Heading as="h2" size="lg">
              Tell us what you have in mind
            </Heading>
            <Text size="lg" className="mt-5 text-primary-navy">
              No commitment, just a conversation about where you want to go and what matters most. Fill in as much or as little as you like, and we will get back to you with ideas.
            </Text>

            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" noValidate>
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
                <FormField id="contact-message" label="Anything else we should know?">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit about the trip. Who you are travelling with, what matters most, any specific hotels or ideas you already have..."
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    className="w-full bg-primary-cream/50 px-4 py-3.5 text-base text-primary-navy placeholder:text-primary-sky outline-none transition-shadow duration-200 shadow-[inset_0_-2px_0_0_#70a7bf] focus:shadow-[inset_0_-2px_0_0_#274957] resize-none"
                  />
                </FormField>
              </div>

              <div className="sm:col-span-2 flex flex-col items-center justify-center gap-3 text-center pt-2">
                {showPrompt && (
                  <p aria-live="polite" className="text-sm text-primary-navy">
                    Could you pop in your name and email? We just need those two to get back to you.
                  </p>
                )}
                <Button type="submit" className="mx-auto">
                  Send my travel details
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-8 self-start bg-primary-cream p-8 sm:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-navy">
                Why Book With Us
              </p>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-primary-navy">
                  <span className="h-1.5 w-1.5 mt-2 bg-primary-gold shrink-0" aria-hidden="true" />
                  <span><strong>Personal Consultancy:</strong> Single point of contact from initial plan through to returning home.</span>
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-primary-navy">
                  <span className="h-1.5 w-1.5 mt-2 bg-primary-gold shrink-0" aria-hidden="true" />
                  <span><strong>600+ Trusted Suppliers:</strong> Access to exclusive rates across luxury resorts, safaris, and boutique hotels.</span>
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-primary-navy">
                  <span className="h-1.5 w-1.5 mt-2 bg-primary-gold shrink-0" aria-hidden="true" />
                  <span><strong>Zero Planning Fees:</strong> All advice, quote iterations, and bespoke planning are completely free.</span>
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-primary-sky/30" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-navy">
                Trust & Credentials
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-navy border border-primary-navy/10">
                  ABTA Protected
                </span>
                <span className="bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-navy border border-primary-navy/10">
                  ATOL Bonded
                </span>
                <span className="bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-navy border border-primary-navy/10">
                  Hays Travel Independence Group
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
