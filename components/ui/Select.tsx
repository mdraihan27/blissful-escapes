import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  tone?: "default" | "onImage";
}

export function Select({ options, tone = "default", className = "", ...rest }: Readonly<SelectProps>) {
  const fieldClasses =
    tone === "onImage"
      ? "bg-white/12 text-white shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.35)] focus:shadow-[inset_0_-2px_0_0_rgba(255,255,255,1)]"
      : "bg-primary-brown/4 text-primary-brown shadow-[inset_0_-2px_0_0_rgba(55,34,34,0.15)] focus:shadow-[inset_0_-2px_0_0_rgba(55,34,34,1)]";
  const arrowClasses = tone === "onImage" ? "fill-white/70" : "fill-primary-brown/60";

  return (
    <div className="relative">
      <select
        className={`w-full appearance-none px-4 py-3.5 text-base outline-none transition-shadow duration-200 ${fieldClasses} ${className}`}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-primary-brown">
            {option.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 8"
        className={`pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 ${arrowClasses}`}
      >
        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
