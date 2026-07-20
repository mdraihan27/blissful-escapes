import { API_URL } from "@/lib/apiConfig";

export type StatsRange = "7d" | "30d" | "90d";

export interface VisitsTimeseriesPoint {
  timestamp: string;
  count: number;
}

export interface VisitsTimeseries {
  range: StatsRange;
  granularity: "hour" | "day";
  points: VisitsTimeseriesPoint[];
}

export interface VisitCounts {
  total: number;
  lastHour: number;
  lastDay: number;
  lastWeek: number;
  lastMonth: number;
}

export interface EnquiryConversion {
  totalVisits: number;
  totalEnquiries: number;
  conversionRate: number;
}

export interface LocationSlice {
  label: string;
  count: number;
}

export interface LocationBreakdown {
  scope: "country" | "city";
  country: string | null;
  breakdown: LocationSlice[];
  availableCountries: string[];
}

export class StatsApiError extends Error {}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new StatsApiError(body?.message ?? `Request failed with status ${response.status}`);
  }

  const body = await response.json();
  return body.data as T;
}

export function getVisitsTimeseries(range: StatsRange): Promise<VisitsTimeseries> {
  return getJson<VisitsTimeseries>(`/stats/visits-timeseries?range=${range}`);
}

export function getVisitCounts(): Promise<VisitCounts> {
  return getJson<VisitCounts>("/stats/visit-counts");
}

export function getEnquiryConversion(): Promise<EnquiryConversion> {
  return getJson<EnquiryConversion>("/stats/enquiry-conversion");
}

export function getLocationBreakdown(country?: string): Promise<LocationBreakdown> {
  const query = country ? `?country=${encodeURIComponent(country)}` : "";
  return getJson<LocationBreakdown>(`/stats/locations${query}`);
}
