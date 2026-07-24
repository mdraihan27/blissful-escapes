import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  tone?: "default" | "onImage";
}

export function Input({ tone = "default", className = "", ...rest }: Readonly<InputProps>) {
  const toneClasses =
    tone === "onImage"
      ? "bg-primary-navy/20 text-white placeholder:text-white/70 shadow-[inset_0_-2px_0_0_#70a7bf] focus:shadow-[inset_0_-2px_0_0_#ffffff]"
      : "bg-primary-cream text-primary-navy placeholder:text-primary-sky shadow-[inset_0_-2px_0_0_#70a7bf] focus:shadow-[inset_0_-2px_0_0_#274957]";

  return (
    <input
      className={`w-full px-4 py-3.5 text-base outline-none transition-shadow duration-200 ${toneClasses} ${className}`}
      {...rest}
    />
  );
}
