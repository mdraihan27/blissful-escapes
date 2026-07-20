"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { VisitsChart } from "@/components/common/stats/VisitsChart";
import { ClickStatsPanel } from "@/components/common/stats/ClickStatsPanel";
import { ConversionPanel } from "@/components/common/stats/ConversionPanel";
import { LocationsPieChart } from "@/components/common/stats/LocationsPieChart";
import {
  getVisitsTimeseries,
  getVisitCounts,
  getEnquiryConversion,
  getLocationBreakdown,
  type StatsRange,
  type VisitsTimeseries,
  type VisitCounts,
  type EnquiryConversion,
  type LocationBreakdown,
} from "@/lib/statsApi";

export function StatisticsPageContent() {
  const [range, setRange] = useState<StatsRange>("7d");
  const [timeseries, setTimeseries] = useState<VisitsTimeseries | null>(null);
  const [counts, setCounts] = useState<VisitCounts | null>(null);
  const [conversion, setConversion] = useState<EnquiryConversion | null>(null);
  const [isChartLoading, setIsChartLoading] = useState(true);
  const [locations, setLocations] = useState<LocationBreakdown | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isLocationsLoading, setIsLocationsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    getVisitsTimeseries(range)
      .then((data) => {
        if (!cancelled) setTimeseries(data);
      })
      .catch(() => {
        if (!cancelled) setError("Unable to load visit statistics right now.");
      })
      .finally(() => {
        if (!cancelled) setIsChartLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [range]);

  const handleRangeChange = (nextRange: StatsRange) => {
    setIsChartLoading(true);
    setRange(nextRange);
  };

  useEffect(() => {
    let cancelled = false;

    Promise.all([getVisitCounts(), getEnquiryConversion()])
      .then(([countsData, conversionData]) => {
        if (cancelled) return;
        setCounts(countsData);
        setConversion(conversionData);
      })
      .catch(() => {
        if (!cancelled) setError("Unable to load visit statistics right now.");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    getLocationBreakdown(selectedCountry ?? undefined)
      .then((data) => {
        if (!cancelled) setLocations(data);
      })
      .catch(() => {
        if (!cancelled) setError("Unable to load visit statistics right now.");
      })
      .finally(() => {
        if (!cancelled) setIsLocationsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedCountry]);

  const handleSelectCountry = (nextCountry: string) => {
    setIsLocationsLoading(true);
    setSelectedCountry(nextCountry);
  };

  const handleClearCountry = () => {
    setIsLocationsLoading(true);
    setSelectedCountry(null);
  };

  return (
    <main className="relative min-h-dvh overflow-hidden px-4 py-10 xs:px-5 sm:px-6 sm:py-12 lg:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary-pink/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-primary-beige/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mb-8 sm:mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">Overview</p>
        <Heading as="h1" size="sm" className="mt-2">
          Statistics
        </Heading>
        <Text size="sm" className="mt-2 max-w-xl text-primary-brown/75">
          Live visit and enquiry activity across the site.
        </Text>
      </motion.div>

      {error && (
        <p
          role="alert"
          className="relative mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <div className="relative flex flex-col gap-6 sm:gap-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
          <VisitsChart
            points={timeseries?.points ?? []}
            granularity={timeseries?.granularity ?? "day"}
            range={range}
            onRangeChange={handleRangeChange}
            isLoading={isChartLoading}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          {counts && <ClickStatsPanel counts={counts} />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl"
        >
          {conversion && <ConversionPanel conversion={conversion} />}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          {locations && (
            <LocationsPieChart
              scope={locations.scope}
              country={locations.country}
              breakdown={locations.breakdown}
              availableCountries={locations.availableCountries}
              onSelectCountry={handleSelectCountry}
              onClearCountry={handleClearCountry}
              isLoading={isLocationsLoading}
            />
          )}
        </motion.div>
      </div>
    </main>
  );
}
