import { StatTile } from "@/components/common/stats/StatTile";
import type { VisitCounts } from "@/lib/statsApi";

export interface ClickStatsPanelProps {
  counts: VisitCounts;
}

export function ClickStatsPanel({ counts }: Readonly<ClickStatsPanelProps>) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
      <StatTile label="Total clicks" value={counts.total} accent />
      <StatTile label="Last hour" value={counts.lastHour} />
      <StatTile label="Last day" value={counts.lastDay} />
      <StatTile label="Last week" value={counts.lastWeek} />
      <StatTile label="Last month" value={counts.lastMonth} />
    </div>
  );
}
