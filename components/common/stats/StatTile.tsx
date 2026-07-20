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
          ? "border border-primary-brown bg-primary-brown shadow-primary-brown/30"
          : "border border-primary-brown/20 bg-primary-brown/[0.035] shadow-primary-brown/10"
      }`}
    >
      {accent && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary-beige/25 blur-2xl"
        />
      )}
      <p
        className={`relative text-xs font-semibold uppercase tracking-[0.2em] ${
          accent ? "text-white/70" : "text-primary-brown/75"
        }`}
      >
        {label}
      </p>
      <p
        className={`relative mt-2 text-3xl font-semibold sm:text-4xl ${accent ? "text-white" : "text-primary-brown"}`}
        title={value.toLocaleString()}
      >
        {formatCompact(value)}
      </p>
    </div>
  );
}
