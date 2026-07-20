"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { recordSiteVisit } from "@/lib/siteVisitApi";
import { getClientEnvironment } from "@/lib/clientEnvironment";

export function SiteVisitTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Admin traffic is staff using the dashboard, not a real site visit —
    // exclude it so click/visit stats reflect actual visitors.
    if (pathname.startsWith("/admin")) return;

    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    recordSiteVisit({ path, ...getClientEnvironment() }).catch((error) => {
      console.error("Failed to record site visit:", error);
    });
    // Re-fires whenever the route (path or query) changes, so every page
    // view is logged, not just the initial load.
  }, [pathname, searchParams]);

  return null;
}
