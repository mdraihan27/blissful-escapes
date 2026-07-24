import Link from "next/link";
import type { ReactNode } from "react";

export interface SidebarNavItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
  badge?: number;
}

export function SidebarNavItem({ href, label, icon, active = false, badge = 0 }: Readonly<SidebarNavItemProps>) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy ${
        active
          ? "border border-primary-navy bg-primary-navy text-white shadow-md shadow-primary-navy/25"
          : "border border-transparent text-primary-sky hover:border-primary-navy/20 hover:bg-primary-cream hover:text-primary-navy"
      }`}
    >
      <span className={`flex h-5 w-5 shrink-0 items-center justify-center ${active ? "text-primary-gold" : ""}`}>
        {icon}
      </span>
      <span className="flex-1">{label}</span>
      {badge > 0 && (
        <span
          aria-label={`${badge} unread`}
          className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
            active ? "bg-primary-gold text-primary-navy" : "bg-primary-navy text-white"
          }`}
        >
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </Link>
  );
}
