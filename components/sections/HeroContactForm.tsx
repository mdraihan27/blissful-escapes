"use client";

import { useState, type SubmitEvent } from "react";
import { FormField } from "@/components/common/FormField";
import { DatePicker } from "@/components/common/DatePicker";
import { Select } from "@/components/ui/Select";
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
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (when.trim() === "" && where === "") {
      setShowPrompt(true);
      return;
    }

    setShowPrompt(false);
    submitPlan({ when: when.trim(), where });
    smoothScrollTo("contact");
  };

  return (
    <div className="mx-auto max-w-4xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:items-end sm:gap-6 lg:grid-cols-[1fr_1fr_auto]">
        <FormField id="hero-when" label="When do you want to travel?" tone="onImage">
          <DatePicker
            id="hero-when"
            name="when"
            placeholder="e.g. next spring, or 14th June 2026"
            value={when}
            onChange={setWhen}
            tone="onImage"
          />
        </FormField>

        <FormField id="hero-where" label="Where do you want to go?" tone="onImage">
          <Select
            id="hero-where"
            name="where"
            options={destinationOptions}
            value={where}
            onChange={(event) => setWhere(event.target.value)}
            tone="onImage"
          />
        </FormField>

        <Button type="submit" fullWidthOnMobile className="sm:col-span-2 lg:col-span-1">
          Start planning my trip
        </Button>
      </form>

      <p
        aria-live="polite"
        className={`mt-4 text-sm text-white/75 transition-opacity duration-200 ${
          showPrompt ? "opacity-100" : "opacity-0"
        }`}
      >
        Let us know roughly when and where, and we will take it from there.
      </p>
    </div>
  );
}
