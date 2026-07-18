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
      ? "bg-white/15 text-white hover:bg-white/30 focus-visible:outline-white"
      : "bg-primary-brown/10 text-primary-brown hover:bg-primary-brown/20 focus-visible:outline-primary-brown";

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
