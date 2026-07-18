"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NavLink } from "@/components/ui/NavLink";
import { IconButton } from "@/components/ui/IconButton";
import { navLinks } from "@/lib/navLinks";
import { destinationDetails } from "@/lib/destinationDetails";

export interface MobileMenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuPanel({ isOpen, onClose }: Readonly<MobileMenuPanelProps>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: shouldReduceMotion ? 0 : "100%", opacity: shouldReduceMotion ? 0 : 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: shouldReduceMotion ? 0 : "100%", opacity: shouldReduceMotion ? 0 : 1 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex h-dvh w-full flex-col bg-primary-brown px-6 py-5 sm:px-10 sm:py-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <span className="text-xl italic font-medium text-white">Blissful Escapes</span>
            <IconButton label="Close menu" tone="light" onClick={onClose}>
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
                <path d="M4 4L16 16M16 4L4 16" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </IconButton>
          </div>

          <nav className="mt-8 flex-1 overflow-y-auto sm:mt-12">
            {/* min-h-full + justify-center keeps short menus centred while letting tall menus scroll from the top */}
            <div className="flex min-h-full flex-col justify-center gap-6 py-4 xs:gap-7">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.08 + index * 0.05, duration: 0.3 }}
              >
                <NavLink href={link.href} label={link.label} tone="cream" className="text-2xl" onNavigate={onClose} />

                {link.href === "#destinations" && (
                  <ul className="mt-4 flex flex-col gap-3 pl-4">
                    {destinationDetails.map((destination) => (
                      <li key={destination.slug}>
                        <Link
                          href={`/destinations/${destination.slug}`}
                          onClick={onClose}
                          className="text-base text-white/60 transition-colors duration-150 hover:text-primary-pink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {destination.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
            </div>
          </nav>

          <p className="mt-4 text-sm text-white/60">
            Prefer to talk it through? Call us on 07789 652 136.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
