import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";

export function DestinationPageHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex items-center justify-between py-5 sm:py-6">
        <Logo tone="cream" />
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
            <path d="M10 3L5 8L10 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>
      </Container>
    </header>
  );
}
