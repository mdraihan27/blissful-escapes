export interface MessageGroupDividerProps {
  label: string;
  count?: number;
  tone: "new" | "older";
}

export function MessageGroupDivider({ label, count, tone }: Readonly<MessageGroupDividerProps>) {
  const isNew = tone === "new";

  return (
    <div className="relative flex items-center gap-3 py-1" role="separator" aria-label={label}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${
          isNew
            ? "bg-primary-navy text-white"
            : "bg-primary-cream text-primary-sky"
        }`}
      >
        {isNew && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-gold" />}
        {label}
        {typeof count === "number" && <span className={isNew ? "text-primary-gold" : "text-primary-sky"}>{count}</span>}
      </span>
      <span className={`h-px flex-1 ${isNew ? "bg-primary-sky" : "bg-primary-cream"}`} />
    </div>
  );
}
