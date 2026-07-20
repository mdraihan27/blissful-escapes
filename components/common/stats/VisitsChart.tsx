"use client";

import { useMemo, useRef, useState } from "react";
import type { StatsRange, VisitsTimeseriesPoint } from "@/lib/statsApi";

export interface VisitsChartProps {
  points: VisitsTimeseriesPoint[];
  granularity: "hour" | "day";
  range: StatsRange;
  onRangeChange: (range: StatsRange) => void;
  isLoading: boolean;
}

const RANGE_OPTIONS: { value: StatsRange; label: string }[] = [
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "90d", label: "90 days" },
];

const CHART_HEIGHT = 260;
const CHART_PADDING = { top: 16, right: 12, bottom: 28, left: 12 };

function formatLabel(iso: string, granularity: "hour" | "day") {
  const date = new Date(iso);
  return granularity === "hour"
    ? date.toLocaleString(undefined, { weekday: "short", hour: "numeric" })
    : date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function VisitsChart({ points, granularity, range, onRangeChange, isLoading }: Readonly<VisitsChartProps>) {
  const [showTable, setShowTable] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const width = 900;
  const plotWidth = width - CHART_PADDING.left - CHART_PADDING.right;
  const plotHeight = CHART_HEIGHT - CHART_PADDING.top - CHART_PADDING.bottom;

  const maxCount = useMemo(() => Math.max(1, ...points.map((p) => p.count)), [points]);

  const coords = useMemo(() => {
    if (points.length === 0) return [];
    return points.map((point, index) => {
      const x = CHART_PADDING.left + (index / Math.max(points.length - 1, 1)) * plotWidth;
      const y = CHART_PADDING.top + plotHeight - (point.count / maxCount) * plotHeight;
      return { x, y, point };
    });
  }, [points, plotWidth, plotHeight, maxCount]);

  const linePath = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(2)} ${c.y.toFixed(2)}`).join(" ");
  const areaPath =
    coords.length > 0
      ? `${linePath} L ${coords[coords.length - 1].x.toFixed(2)} ${CHART_PADDING.top + plotHeight} L ${coords[0].x.toFixed(2)} ${CHART_PADDING.top + plotHeight} Z`
      : "";

  const totalVisits = points.reduce((sum, p) => sum + p.count, 0);

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!svgRef.current || coords.length === 0) return;
    const rect = svgRef.current.getBoundingClientRect();
    const relativeX = ((event.clientX - rect.left) / rect.width) * width;
    let nearest = 0;
    let nearestDist = Infinity;
    coords.forEach((c, i) => {
      const dist = Math.abs(c.x - relativeX);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    });
    setHoverIndex(nearest);
  };

  const hovered = hoverIndex !== null ? coords[hoverIndex] : null;

  // Show a tick roughly every ~6 points so labels don't collide
  const tickStep = Math.max(1, Math.ceil(points.length / 7));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary-brown/20 bg-primary-brown/[0.035] p-5 shadow-lg shadow-primary-brown/10 sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary-pink/20 blur-3xl"
      />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">Site visits</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-primary-brown sm:text-4xl">
              {totalVisits.toLocaleString()}
            </span>
            <span className="text-sm text-primary-brown/75">
              visits in the last {range === "7d" ? "7 days" : range === "30d" ? "30 days" : "90 days"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 self-start rounded-lg border border-primary-brown/20 bg-primary-brown/5 p-1">
          {RANGE_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onRangeChange(option.value)}
              className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown ${
                range === option.value
                  ? "bg-primary-brown text-white shadow-sm"
                  : "text-primary-brown/75 hover:text-primary-brown"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`relative mt-4 transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}>
        {points.length === 0 ? (
          <div className="flex h-[260px] items-center justify-center">
            <p className="text-sm text-primary-brown/75">No visit data yet</p>
          </div>
        ) : (
          <>
            <svg
              ref={svgRef}
              viewBox={`0 0 ${width} ${CHART_HEIGHT}`}
              className="w-full touch-none"
              role="img"
              aria-label={`Line chart of site visits over the selected range, totaling ${totalVisits} visits`}
              onPointerMove={handlePointerMove}
              onPointerLeave={() => setHoverIndex(null)}
            >
              <defs>
                <linearGradient id="visits-area-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#372222" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#372222" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Gridlines */}
              {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
                const y = CHART_PADDING.top + plotHeight * fraction;
                return (
                  <line
                    key={fraction}
                    x1={CHART_PADDING.left}
                    x2={width - CHART_PADDING.right}
                    y1={y}
                    y2={y}
                    stroke="#d4d1c8"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Area + line */}
              <path d={areaPath} fill="url(#visits-area-fill)" />
              <path d={linePath} fill="none" stroke="#372222" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

              {/* X axis labels */}
              {coords.map((c, i) =>
                i % tickStep === 0 ? (
                  <text
                    key={i}
                    x={c.x}
                    y={CHART_HEIGHT - 8}
                    textAnchor="middle"
                    className="fill-primary-brown/70 text-[10px]"
                  >
                    {formatLabel(c.point.timestamp, granularity)}
                  </text>
                ) : null
              )}

              {/* Crosshair + hover marker */}
              {hovered && (
                <>
                  <line
                    x1={hovered.x}
                    x2={hovered.x}
                    y1={CHART_PADDING.top}
                    y2={CHART_PADDING.top + plotHeight}
                    stroke="#372222"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                  />
                  <circle cx={hovered.x} cy={hovered.y} r="4" fill="#372222" stroke="#fff" strokeWidth="2" />
                </>
              )}
            </svg>

            {hovered && (
              <div
                className="pointer-events-none absolute top-2 -translate-x-1/2 rounded-lg border border-white/10 bg-primary-brown px-3 py-2 text-white shadow-xl shadow-primary-brown/40"
                style={{ left: `${(hovered.x / width) * 100}%` }}
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                  {formatLabel(hovered.point.timestamp, granularity)}
                </p>
                <p className="text-sm font-semibold">{hovered.point.count.toLocaleString()} visits</p>
              </div>
            )}
          </>
        )}
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
                <th className="px-3 py-2 font-semibold">Time</th>
                <th className="px-3 py-2 font-semibold">Visits</th>
              </tr>
            </thead>
            <tbody>
              {points.map((point) => (
                <tr key={point.timestamp} className="border-b border-primary-brown/18 last:border-b-0">
                  <td className="px-3 py-2 text-primary-brown/70">{formatLabel(point.timestamp, granularity)}</td>
                  <td className="px-3 py-2 font-medium text-primary-brown">{point.count.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
