import type { ReactNode } from "react";

export interface IconButtonProps {
  onClick?: () => void;
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  disabled?: boolean;
}

export function IconButton({
  onClick,
  label,
  children,
  tone = "light",
  className = "",
  disabled = false,
}: Readonly<IconButtonProps>) {
  const toneClasses =
    tone === "light"
      ? "bg-white text-primary-navy hover:bg-primary-gold focus-visible:outline-white"
      : "bg-primary-cream text-primary-navy hover:bg-primary-sky focus-visible:outline-primary-navy";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 cursor-pointer items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none ${toneClasses} ${className}`}
    >
      {children}
    </button>
  );
}
