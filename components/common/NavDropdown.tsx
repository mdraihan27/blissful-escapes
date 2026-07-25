"use client";

import { useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

export interface NavDropdownItem {
  href: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export interface NavDropdownProps {
  label: string;
  /** Hash target scrolled to when the label itself is clicked, e.g. "#destinations" */
  href: string;
  items: NavDropdownItem[];
  /** Panel columns, use 2 for long text only lists */
  columns?: 1 | 2;
  tone?: "brown" | "cream";
}

export function NavDropdown({
  label,
  href,
  items,
  columns = 1,
  tone = "brown",
}: Readonly<NavDropdownProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const resolvedHref = href.startsWith("#") && !isHomepage ? `/${href}` : href;
  const idleColor = tone === "brown" ? "text-primary-navy" : "text-white";
  const hoverColor = tone === "brown" ? "hover:text-primary-sky" : "hover:text-primary-gold";
  const underlineColor = tone === "brown" ? "bg-primary-navy" : "bg-primary-gold";

  const open = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), 120);
  };

  const handleLabelClick = (event: MouseEvent<HTMLAnchorElement>) => {
    /*
      Touch devices showing the desktop nav have no hover, so the first tap
      opens the panel instead of navigating. Mouse users are unaffected:
      hovering has already opened it, so their click falls through to the scroll.
    */
    if (!isOpen) {
      event.preventDefault();
      open();
      return;
    }
    if (href.startsWith("#") && isHomepage) {
      event.preventDefault();
      smoothScrollTo(href.slice(1));
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={scheduleClose}>
      <Link
        href={resolvedHref}
        onClick={handleLabelClick}
        onFocus={open}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`group relative inline-flex items-center gap-1 py-1 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy ${idleColor} ${hoverColor}`}
      >
        {label}
        <svg
          viewBox="0 0 12 8"
          aria-hidden="true"
          className={`h-2 w-3 fill-none stroke-current transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L6 6L11 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className={`pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${underlineColor}`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={open}
            onMouseLeave={scheduleClose}
            className={`absolute left-1/2 top-[calc(100%+0.75rem)] z-40 -translate-x-1/2 bg-white p-2 shadow-[0_20px_60px_rgba(39,73,87,0.18)] ${
              columns === 2 ? "grid w-120 grid-cols-2 gap-x-2" : "w-72"
            }`}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 p-2 transition-colors duration-150 hover:bg-primary-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
              >
                {item.imageSrc && (
                  <span className="relative h-12 w-16 shrink-0 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-primary-navy">{item.title}</span>
                  {item.subtitle && (
                    <span className="block truncate text-xs text-primary-sky">{item.subtitle}</span>
                  )}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
