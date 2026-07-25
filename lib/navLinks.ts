export interface NavLinkItem {
  href: string;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { href: "#home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#holiday-types", label: "Types of Holiday" },
  { href: "#destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];
