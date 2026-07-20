import { API_URL } from "@/lib/apiConfig";

export interface SiteVisitPayload {
  path: string;
  referrer: string;
  language: string;
  timezone: string;
  screen: string;
}

export async function recordSiteVisit(payload: SiteVisitPayload): Promise<void> {
  const response = await fetch(`${API_URL}/site-visits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  });

  if (!response.ok) {
    throw new Error(`Site visit recording failed with status ${response.status}`);
  }
}
