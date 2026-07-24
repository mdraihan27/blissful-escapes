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
  const labelClasses = tone === "onImage" ? "text-white" : "text-primary-navy";

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className={`whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] ${labelClasses}`}>
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-primary-gold">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
