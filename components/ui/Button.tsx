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
      ? "bg-primary-gold text-black active:scale-[0.98]"
      : "bg-transparent text-primary-navy hover:bg-primary-navy hover:text-white active:scale-[0.98]";

  if (variant === "ghost") {
    return (
      <button
        type="button"
        className={`inline-flex cursor-pointer items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy ${
          fullWidthOnMobile ? "w-full sm:w-auto" : ""
        } ${variantClasses} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold tracking-wide transition-transform duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy ${
        fullWidthOnMobile ? "w-full sm:w-auto" : ""
      } ${variantClasses} ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-300 ease-in-out group-hover:scale-x-100 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-primary-gold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none"
      />
      <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
        {children}
      </span>
    </button>
  );
}

