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
            ? "bg-primary-brown text-white"
            : "bg-primary-brown/15 text-primary-brown/75"
        }`}
      >
        {isNew && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-beige" />}
        {label}
        {typeof count === "number" && <span className={isNew ? "text-primary-beige" : "text-primary-brown/70"}>{count}</span>}
      </span>
      <span className={`h-px flex-1 ${isNew ? "bg-primary-brown/25" : "bg-primary-brown/15"}`} />
    </div>
  );
}
