export interface StatTileProps {
  label: string;
  value: number;
  accent?: boolean;
}

function formatCompact(value: number): string {
  if (value < 1000) return value.toLocaleString();
  return new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export function StatTile({ label, value, accent = false }: Readonly<StatTileProps>) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-5 shadow-lg sm:p-6 ${
        accent
          ? "border border-primary-navy bg-primary-navy shadow-primary-navy/30"
          : "border border-primary-navy/20 bg-primary-navy/[0.035] shadow-primary-navy/10"
      }`}
    >
      {accent && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary-gold/25 blur-2xl"
        />
      )}
      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-primary-sky">
        {label}
      </p>
      <p
        className={`relative mt-2 text-3xl font-semibold sm:text-4xl ${accent ? "text-white" : "text-primary-navy"}`}
        title={value.toLocaleString()}
      >
        {formatCompact(value)}
      </p>
    </div>
  );
}
