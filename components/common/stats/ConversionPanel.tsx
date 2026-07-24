import type { EnquiryConversion } from "@/lib/statsApi";

export interface ConversionPanelProps {
  conversion: EnquiryConversion;
}

export function ConversionPanel({ conversion }: Readonly<ConversionPanelProps>) {
  const { totalVisits, totalEnquiries, conversionRate } = conversion;
  const fillWidth = Math.min(100, Math.max(conversionRate, totalEnquiries > 0 ? 1.5 : 0));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary-navy/20 bg-primary-navy/[0.035] p-5 shadow-lg shadow-primary-navy/10 sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary-gold/20 blur-3xl"
      />

      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-primary-sky">
        Enquiry conversion
      </p>

      <div className="relative mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-primary-navy sm:text-4xl">{conversionRate}%</span>
        <span className="text-sm text-primary-sky">of visitors sent a message</span>
      </div>

      <div className="relative mt-6 h-2.5 w-full overflow-hidden rounded-full border border-primary-navy/15 bg-primary-navy/10">
        <div
          className="h-full bg-primary-navy transition-[width] duration-500 ease-out"
          style={{ width: `${fillWidth}%` }}
        />
      </div>

      <div className="relative mt-6 flex flex-col gap-4 border-t border-primary-navy/18 pt-5 xs:flex-row xs:items-center xs:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-sky">Messages sent</p>
          <p className="mt-1 text-xl font-semibold text-primary-navy">{totalEnquiries.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-sky">Total visits</p>
          <p className="mt-1 text-xl font-semibold text-primary-navy">{totalVisits.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
