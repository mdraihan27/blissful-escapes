import type { TripEnquiryRecord } from "@/lib/tripEnquiryAdminApi";

export interface MessageCardProps {
  enquiry: TripEnquiryRecord;
  isNew?: boolean;
}

const UNFILLED = "unfilled";

function displayOrFallback(value: string, fallback: string) {
  return value && value !== UNFILLED ? value : fallback;
}

function formatSentAt(iso: string) {
  const date = new Date(iso);
  return date.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatRelative(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.round(diffMs / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.round(days / 30);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}

function localTimeForTimezone(timezone: string) {
  if (!timezone || timezone === UNFILLED) return null;
  try {
    return new Intl.DateTimeFormat(undefined, {
      timeZone: timezone,
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date());
  } catch {
    return null;
  }
}

// "Europe/London" -> "Europe / London"; shown as-is otherwise (e.g. "UTC").
function formatTimezoneLabel(timezone: string) {
  return timezone.replace(/_/g, " ").replace(/\//g, " / ");
}

export function MessageCard({ enquiry, isNew = false }: Readonly<MessageCardProps>) {
  const city = displayOrFallback(enquiry.location?.city, "");
  const country = displayOrFallback(enquiry.location?.country, "");
  const locationLabel = [city, country].filter(Boolean).join(", ") || "Location unknown";
  const localTime = localTimeForTimezone(enquiry.timezone);

  const where = displayOrFallback(enquiry.where, "Not sure yet");
  const when = displayOrFallback(enquiry.when, "No date given");
  const message = displayOrFallback(enquiry.message, "");
  const phone = displayOrFallback(enquiry.phone, "");
  const hasTimezone = Boolean(enquiry.timezone) && enquiry.timezone !== UNFILLED;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-5 shadow-lg shadow-primary-brown/10 sm:p-6 ${
        isNew
          ? "border border-primary-beige bg-primary-beige/[0.08] ring-1 ring-primary-beige/40"
          : "border border-primary-brown/20 bg-primary-brown/[0.035]"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary-pink/15 blur-3xl"
      />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-brown/15 bg-primary-pink/25 text-lg font-semibold text-primary-brown">
            {enquiry.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-base font-semibold text-primary-brown">{enquiry.name}</p>
            <p className="text-sm text-primary-brown/75">{enquiry.email}</p>
            {phone && <p className="text-sm text-primary-brown/75">{phone}</p>}
          </div>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-sm font-medium text-primary-brown">{formatRelative(enquiry.createdAt)}</p>
          <p className="text-xs text-primary-brown/70">{formatSentAt(enquiry.createdAt)}</p>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-1 gap-3 border-t border-primary-brown/18 pt-5 xs:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-brown/70">Wants to go</p>
          <p className="mt-1 text-sm font-medium text-primary-brown">{where}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-brown/70">Travel time</p>
          <p className="mt-1 text-sm font-medium text-primary-brown">{when}</p>
        </div>
      </div>

      <div className="relative mt-4 rounded-xl border border-primary-brown/18 bg-primary-brown/4 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-brown/70">Message</p>
        <p className="mt-1.5 text-sm leading-relaxed text-primary-brown/80">
          {message ? <>&ldquo;{message}&rdquo;</> : "No message left."}
        </p>
      </div>

      <div className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-primary-brown/18 pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-primary-brown/75">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
            <circle cx="10" cy="8" r="3" strokeWidth="1.4" />
            <path d="M3 8C3 4.13 6.13 1 10 1s7 3.13 7 7c0 5-7 12-7 12S3 13 3 8Z" strokeWidth="1.4" />
          </svg>
          {locationLabel} <span className="text-primary-brown/65">(based on IP)</span>
        </span>
        {hasTimezone && (
          <span className="inline-flex items-center gap-1.5 text-xs text-primary-brown/75">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
              <circle cx="10" cy="10" r="8" strokeWidth="1.4" />
              <path d="M10 5.5V10L13 12" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {formatTimezoneLabel(enquiry.timezone)}
            {localTime && ` — ${localTime} there now`} <span className="text-primary-brown/65">(based on time zone)</span>
          </span>
        )}
      </div>
    </div>
  );
}
