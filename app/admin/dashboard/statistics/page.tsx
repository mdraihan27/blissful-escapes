import type { Metadata } from "next";
import { StatisticsPageContent } from "@/components/common/stats/StatisticsPageContent";

export const metadata: Metadata = {
  title: "Statistics | Blissful Escapes Admin",
};

export default function StatisticsPage() {
  return <StatisticsPageContent />;
}
