import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  fullWidthOnMobile?: boolean;
}

export function Button({
  children,
  variant = "primary",
  fullWidthOnMobile = false,
  className = "",
  ...rest
}: Readonly<ButtonProps>) {
  const variantClasses =
    variant === "primary"
      ? "bg-primary-beige text-primary-brown hover:bg-primary-brown hover:text-white active:scale-[0.98]"
      : "bg-transparent text-primary-brown hover:bg-primary-brown/10 active:scale-[0.98]";

  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown ${
        fullWidthOnMobile ? "w-full sm:w-auto" : ""
      } ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
