"use client";

import { useState, type SubmitEvent } from "react";
import { FormField } from "@/components/common/FormField";
import { DatePicker } from "@/components/common/DatePicker";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useTripPlan } from "@/lib/TripPlanContext";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

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

export function HeroContactForm() {
  const { submitPlan } = useTripPlan();
  const [from, setFrom] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [duration, setDuration] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!from.trim() && !where && !when.trim() && !duration.trim()) {
      setShowPrompt(true);
      return;
    }

    setShowPrompt(false);
    submitPlan({ from: from.trim(), where, when: when.trim(), duration: duration.trim() });
    smoothScrollTo("contact");
  };

  return (
    <div className="mx-auto max-w-5xl">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:items-end lg:grid-cols-5"
      >
        <FormField id="hero-from" label="Traveling from" tone="onImage">
          <Input
            id="hero-from"
            name="from"
            type="text"
            tone="onImage"
            autoComplete="address-level2"
            placeholder="e.g. Manchester, UK"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </FormField>

        <FormField id="hero-where" label="Destination" tone="onImage">
          <Select
            id="hero-where"
            name="where"
            options={destinationOptions}
            value={where}
            onChange={(event) => setWhere(event.target.value)}
            tone="onImage"
          />
        </FormField>

        <FormField id="hero-when" label="Departure date" tone="onImage">
          <DatePicker
            id="hero-when"
            name="when"
            placeholder="Pick a date"
            value={when}
            onChange={setWhen}
            tone="onImage"
          />
        </FormField>

        <FormField id="hero-duration" label="Trip length (days)" tone="onImage">
          <Input
            id="hero-duration"
            name="duration"
            type="number"
            min={1}
            max={365}
            inputMode="numeric"
            tone="onImage"
            placeholder="e.g. 10"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormField>

        <Button type="submit" fullWidthOnMobile className="xs:col-span-2 lg:col-span-1">
          Start planning
        </Button>
      </form>

      <p
        aria-live="polite"
        className={`mt-4 text-sm text-primary-cream transition-opacity duration-200 ${
          showPrompt ? "opacity-100" : "opacity-0"
        }`}
      >
        Let us know roughly where you are coming from, where you would like to go, and we will take it from there.
      </p>
    </div>
  );
}
