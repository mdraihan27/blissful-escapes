import type { EnquiryConversion } from "@/lib/statsApi";

export interface ConversionPanelProps {
  conversion: EnquiryConversion;
}

export function ConversionPanel({ conversion }: Readonly<ConversionPanelProps>) {
  const { totalVisits, totalEnquiries, conversionRate } = conversion;
  const fillWidth = Math.min(100, Math.max(conversionRate, totalEnquiries > 0 ? 1.5 : 0));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary-brown/20 bg-primary-brown/[0.035] p-5 shadow-lg shadow-primary-brown/10 sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary-beige/20 blur-3xl"
      />

      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">
        Enquiry conversion
      </p>

      <div className="relative mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-primary-brown sm:text-4xl">{conversionRate}%</span>
        <span className="text-sm text-primary-brown/75">of visitors sent a message</span>
      </div>

      <div className="relative mt-6 h-2.5 w-full overflow-hidden rounded-full border border-primary-brown/15 bg-primary-brown/10">
        <div
          className="h-full bg-primary-brown transition-[width] duration-500 ease-out"
          style={{ width: `${fillWidth}%` }}
        />
      </div>

      <div className="relative mt-6 flex flex-col gap-4 border-t border-primary-brown/18 pt-5 xs:flex-row xs:items-center xs:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-brown/75">Messages sent</p>
          <p className="mt-1 text-xl font-semibold text-primary-brown">{totalEnquiries.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-brown/75">Total visits</p>
          <p className="mt-1 text-xl font-semibold text-primary-brown">{totalVisits.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
