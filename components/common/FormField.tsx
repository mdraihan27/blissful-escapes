import type { ReactNode } from "react";

export interface FormFieldProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
  required?: boolean;
  tone?: "default" | "onImage";
}

export function FormField({
  id,
  label,
  children,
  className = "",
  required = false,
  tone = "default",
}: Readonly<FormFieldProps>) {
  const labelClasses = tone === "onImage" ? "text-white/75" : "text-primary-brown/60";

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className={`text-xs font-semibold uppercase tracking-[0.15em] ${labelClasses}`}>
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-primary-pink">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
