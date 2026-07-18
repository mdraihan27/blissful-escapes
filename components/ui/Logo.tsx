import Link from "next/link";

export interface LogoProps {
  tone?: "brown" | "cream";
  className?: string;
}

export function Logo({ tone = "brown", className = "" }: Readonly<LogoProps>) {
  const textColor = tone === "brown" ? "text-primary-brown" : "text-white";
  const taglineColor = tone === "brown" ? "text-primary-brown/70" : "text-white/70";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span
        className={`text-xl sm:text-2xl italic font-medium ${textColor} transition-colors duration-200`}
      >
        Blissful Escapes
      </span>
      <span
        className={`text-[0.6rem] sm:text-xs tracking-[0.25em] uppercase ${taglineColor}`}
      >
        Personally Planned Travel
      </span>
    </Link>
  );
}
