"use client";

import { useMemo, useState } from "react";
import type { LocationSlice } from "@/lib/statsApi";

export interface LocationsPieChartProps {
  scope: "country" | "city";
  country: string | null;
  breakdown: LocationSlice[];
  availableCountries: string[];
  onSelectCountry: (country: string) => void;
  onClearCountry: () => void;
  isLoading: boolean;
}

// Fixed categorical order, first 4 slots only. A pie chart is an "all pairs"
// form (any two wedges can sit next to each other after sorting/filtering),
// which validates only up to 4 slots at the CVD target — see the dataviz
// skill's palette reference. Slices beyond the cap fold into "Other".
const CATEGORICAL_COLORS = [
  "#2a78d6", // blue
  "#008300", // green
  "#e87ba4", // magenta
  "#eda100", // yellow
];
const OTHER_COLOR = "#898781"; // muted gray — de-emphasis / "Other"
const MAX_SLICES = CATEGORICAL_COLORS.length;

const SIZE = 240;
const CENTER = SIZE / 2;
const RADIUS = 96;
const INNER_RADIUS = 52;

function polarToCartesian(angleDeg: number, radius: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(angleRad), y: CENTER + radius * Math.sin(angleRad) };
}

function wedgePath(startAngle: number, endAngle: number) {
  // A full-circle slice (single category, 100% share) has identical start
  // and end points, which collapses a single SVG arc command to nothing —
  // split it into two half-arcs so the donut ring still renders.
  if (endAngle - startAngle >= 359.999) {
    const midAngle = startAngle + 180;
    const outerStart = polarToCartesian(startAngle, RADIUS);
    const outerMid = polarToCartesian(midAngle, RADIUS);
    const innerStart = polarToCartesian(startAngle, INNER_RADIUS);
    const innerMid = polarToCartesian(midAngle, INNER_RADIUS);

    return [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${RADIUS} ${RADIUS} 0 1 1 ${outerMid.x} ${outerMid.y}`,
      `A ${RADIUS} ${RADIUS} 0 1 1 ${outerStart.x} ${outerStart.y}`,
      `L ${innerStart.x} ${innerStart.y}`,
      `A ${INNER_RADIUS} ${INNER_RADIUS} 0 1 0 ${innerMid.x} ${innerMid.y}`,
      `A ${INNER_RADIUS} ${INNER_RADIUS} 0 1 0 ${innerStart.x} ${innerStart.y}`,
      "Z",
    ].join(" ");
  }

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  const outerStart = polarToCartesian(startAngle, RADIUS);
  const outerEnd = polarToCartesian(endAngle, RADIUS);
  const innerStart = polarToCartesian(startAngle, INNER_RADIUS);
  const innerEnd = polarToCartesian(endAngle, INNER_RADIUS);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

function foldToSlices(breakdown: LocationSlice[]) {
  const sorted = [...breakdown].sort((a, b) => b.count - a.count);
  if (sorted.length <= MAX_SLICES) return sorted;

  const kept = sorted.slice(0, MAX_SLICES - 1);
  const rest = sorted.slice(MAX_SLICES - 1);
  const otherCount = rest.reduce((sum, s) => sum + s.count, 0);
  return [...kept, { label: "Other", count: otherCount }];
}

export function LocationsPieChart({
  scope,
  country,
  breakdown,
  availableCountries,
  onSelectCountry,
  onClearCountry,
  isLoading,
}: Readonly<LocationsPieChartProps>) {
  const [showTable, setShowTable] = useState(false);
  const [hoverKey, setHoverKey] = useState<string | null>(null);

  const slices = useMemo(() => foldToSlices(breakdown), [breakdown]);
  const total = slices.reduce((sum, s) => sum + s.count, 0);

  const wedges = useMemo(() => {
    const cumulativeFractions = slices.reduce<number[]>((acc, slice) => {
      const previous = acc.length > 0 ? acc[acc.length - 1] : 0;
      const fraction = total > 0 ? slice.count / total : 0;
      return [...acc, previous + fraction];
    }, []);

    return slices.map((slice, index) => {
      const fraction = total > 0 ? slice.count / total : 0;
      const startFraction = cumulativeFractions[index] - fraction;
      const endFraction = cumulativeFractions[index];
      const startAngle = startFraction * 360;
      const endAngle = endFraction * 360;
      const color = slice.label === "Other" ? OTHER_COLOR : CATEGORICAL_COLORS[index % CATEGORICAL_COLORS.length];
      const midAngle = (startAngle + endAngle) / 2;
      const labelPos = polarToCartesian(midAngle, (RADIUS + INNER_RADIUS) / 2 + 4);
      return { ...slice, startAngle, endAngle, color, fraction, labelPos };
    });
  }, [slices, total]);

  const hovered = wedges.find((w) => w.label === hoverKey) ?? null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary-brown/20 bg-primary-brown/[0.035] p-5 shadow-lg shadow-primary-brown/10 sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-primary-pink/20 blur-3xl"
      />

      <div className="relative flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">Critical</p>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-semibold text-primary-brown sm:text-3xl">Where visitors come from</h2>
          {country && (
            <button
              type="button"
              onClick={onClearCountry}
              className="inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-lg border border-primary-brown/15 bg-primary-brown/5 px-3 py-1.5 text-xs font-semibold text-primary-brown transition-colors duration-200 hover:bg-primary-brown/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3 fill-none stroke-current">
                <path d="M11 3L5 8L11 13" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all countries
            </button>
          )}
        </div>
        <p className="text-sm text-primary-brown/75">
          {scope === "city" ? `Cities in ${country}` : "By country"}, based on visitor IP address
        </p>
      </div>

      <div
        className={`relative mt-6 grid grid-cols-1 gap-8 transition-opacity duration-300 lg:grid-cols-[auto_1fr_auto] lg:items-center ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
        {/* Pie chart */}
        <div className="relative mx-auto">
          {total === 0 ? (
            <div className="flex h-[240px] w-[240px] items-center justify-center">
              <p className="text-center text-sm text-primary-brown/75">No location data yet</p>
            </div>
          ) : (
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              width={SIZE}
              height={SIZE}
              role="img"
              aria-label={`Pie chart of visits by ${scope}, ${total} total`}
            >
              {wedges.map((wedge) => (
                <path
                  key={wedge.label}
                  d={wedgePath(wedge.startAngle, wedge.endAngle)}
                  fill={wedge.color}
                  stroke="#fff"
                  strokeWidth={2}
                  className="cursor-pointer transition-opacity duration-150"
                  opacity={hoverKey && hoverKey !== wedge.label ? 0.45 : 1}
                  onPointerEnter={() => setHoverKey(wedge.label)}
                  onPointerLeave={() => setHoverKey(null)}
                  onFocus={() => setHoverKey(wedge.label)}
                  onBlur={() => setHoverKey(null)}
                  tabIndex={0}
                  role="img"
                  aria-label={`${wedge.label}: ${wedge.count.toLocaleString()} visits, ${(wedge.fraction * 100).toFixed(1)}%`}
                />
              ))}

              {/* Direct labels on wedges large enough to hold them */}
              {wedges
                .filter((w) => w.fraction >= 0.08)
                .map((wedge) => (
                  <text
                    key={`label-${wedge.label}`}
                    x={wedge.labelPos.x}
                    y={wedge.labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-none fill-white text-[11px] font-semibold"
                  >
                    {Math.round(wedge.fraction * 100)}%
                  </text>
                ))}

              <text
                x={CENTER}
                y={CENTER - 6}
                textAnchor="middle"
                className="fill-primary-brown text-xl font-semibold"
              >
                {total.toLocaleString()}
              </text>
              <text
                x={CENTER}
                y={CENTER + 14}
                textAnchor="middle"
                className="fill-primary-brown/75 text-[10px] uppercase tracking-[0.15em]"
              >
                visits
              </text>
            </svg>
          )}

          {hovered && (
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[calc(100%+8px)] whitespace-nowrap rounded-lg border border-white/10 bg-primary-brown px-3 py-2 text-white shadow-xl shadow-primary-brown/40">
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/60">{hovered.label}</p>
              <p className="text-sm font-semibold">
                {hovered.count.toLocaleString()} visits &middot; {(hovered.fraction * 100).toFixed(1)}%
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <ul className="flex flex-col gap-2">
          {wedges.map((wedge) => {
            const isCountryScope = scope === "country" && wedge.label !== "Other" && wedge.label !== "Unknown";
            return (
              <li key={wedge.label}>
                <button
                  type="button"
                  disabled={!isCountryScope}
                  onClick={() => isCountryScope && onSelectCountry(wedge.label)}
                  onPointerEnter={() => setHoverKey(wedge.label)}
                  onPointerLeave={() => setHoverKey(null)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown ${
                    hoverKey === wedge.label ? "border-primary-brown/20 bg-primary-brown/5" : "border-transparent"
                  } ${isCountryScope ? "cursor-pointer hover:border-primary-brown/15 hover:bg-primary-brown/5" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: wedge.color }}
                  />
                  <span className="flex-1 truncate text-sm font-medium text-primary-brown">{wedge.label}</span>
                  <span className="text-sm font-semibold text-primary-brown/70">
                    {(wedge.fraction * 100).toFixed(1)}%
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Country filter */}
        <div className="w-full rounded-xl border border-primary-brown/20 bg-primary-brown/5 p-4 lg:w-56">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">Filter by country</p>
          <div className="mt-3 flex max-h-64 flex-col gap-1 overflow-auto">
            <button
              type="button"
              onClick={onClearCountry}
              className={`cursor-pointer rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown ${
                !country
                  ? "bg-primary-brown text-white"
                  : "text-primary-brown/70 hover:bg-primary-brown/10 hover:text-primary-brown"
              }`}
            >
              All countries
            </button>
            {availableCountries.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onSelectCountry(option)}
                className={`cursor-pointer truncate rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown ${
                  country === option
                    ? "bg-primary-brown text-white"
                    : "text-primary-brown/70 hover:bg-primary-brown/10 hover:text-primary-brown"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          className="cursor-pointer text-xs font-semibold text-primary-brown/75 underline-offset-2 hover:text-primary-brown hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
        >
          {showTable ? "Hide data table" : "View as table"}
        </button>
      </div>

      {showTable && (
        <div className="relative mt-3 max-h-64 overflow-auto rounded-lg border border-primary-brown/20">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-primary-brown/20 bg-primary-brown/5 text-xs uppercase tracking-wide text-primary-brown/75">
                <th className="px-3 py-2 font-semibold">{scope === "city" ? "City" : "Country"}</th>
                <th className="px-3 py-2 font-semibold">Visits</th>
                <th className="px-3 py-2 font-semibold">Share</th>
              </tr>
            </thead>
            <tbody>
              {wedges.map((wedge) => (
                <tr key={wedge.label} className="border-b border-primary-brown/18 last:border-b-0">
                  <td className="px-3 py-2 text-primary-brown/70">{wedge.label}</td>
                  <td className="px-3 py-2 font-medium text-primary-brown">{wedge.count.toLocaleString()}</td>
                  <td className="px-3 py-2 text-primary-brown/70">{(wedge.fraction * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
