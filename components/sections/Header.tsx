"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { NavDropdown } from "@/components/common/NavDropdown";
import { IconButton } from "@/components/ui/IconButton";
import { MobileMenuPanel } from "@/components/common/MobileMenuPanel";
import { navLinks } from "@/lib/navLinks";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-primary-navy">
        <Container className="flex items-center justify-between py-4 sm:py-5">
          <Logo tone="cream" />

          <nav className="hidden md:flex md:items-center md:gap-7 lg:gap-9">
            {navLinks.map((link) =>
              link.href === "#destinations" ? (
                <NavDropdown key={link.href} href={link.href} label={link.label} tone="cream" />
              ) : (
                <NavLink key={link.href} href={link.href} label={link.label} tone="cream" />
              )
            )}
          </nav>

          <IconButton
            label="Open menu"
            tone="light"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden"
          >
            <svg viewBox="0 0 20 14" aria-hidden="true" className="h-4 w-5 fill-none stroke-current">
              <path d="M0 1H20M0 7H20M0 13H20" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </IconButton>
        </Container>
      </header>

      <MobileMenuPanel isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
