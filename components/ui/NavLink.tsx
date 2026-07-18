"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

export interface NavLinkProps {
  href: string;
  label: string;
  tone?: "brown" | "cream";
  className?: string;
  onNavigate?: () => void;
}

export function NavLink({ href, label, tone = "brown", className = "", onNavigate }: Readonly<NavLinkProps>) {
  const idleColor = tone === "brown" ? "text-primary-brown/80" : "text-white/80";
  const hoverColor = tone === "brown" ? "hover:text-primary-brown" : "hover:text-white";
  const underlineColor = tone === "brown" ? "bg-primary-brown" : "bg-primary-beige";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      smoothScrollTo(href.slice(1));
    }
    onNavigate?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`group relative inline-flex items-center py-1 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-brown ${idleColor} ${hoverColor} ${className}`}
    >
      {label}
      <span
        className={`pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${underlineColor}`}
      />
    </Link>
  );
}
