"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/Text";
import { SidebarNavItem } from "@/components/common/SidebarNavItem";
import { StatisticsIcon } from "@/components/ui/icons/StatisticsIcon";
import { MessagesIcon } from "@/components/ui/icons/MessagesIcon";
import { UsersIcon } from "@/components/ui/icons/UsersIcon";
import { LogoutIcon } from "@/components/ui/icons/LogoutIcon";
import { useAdminAuth } from "@/lib/AdminAuthContext";
import { useUnreadMessages } from "@/lib/UnreadMessagesContext";

const MESSAGES_HREF = "/admin/dashboard/messages";

const navItems = [
  { href: "/admin/dashboard/statistics", label: "Statistics", icon: <StatisticsIcon /> },
  { href: MESSAGES_HREF, label: "Messages", icon: <MessagesIcon /> },
  { href: "/admin/dashboard/users", label: "Users", icon: <UsersIcon /> },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAdminAuth();
  const { unreadCount } = useUnreadMessages();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.replace("/admin/login");
  };

  const navList = (
    <nav className="flex flex-1 flex-col gap-1 px-3 py-6">
      {navItems.map((item) => (
        <SidebarNavItem
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={pathname === item.href}
          badge={item.href === MESSAGES_HREF ? unreadCount : 0}
        />
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-primary-brown/20 bg-primary-pink/15 px-4 py-4 xs:px-5 md:hidden">
        <Logo />
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-primary-brown/15 bg-primary-brown/10 text-primary-brown transition-colors duration-200 hover:bg-primary-brown/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
        >
          <svg viewBox="0 0 20 16" aria-hidden="true" className="h-4 w-5 fill-none stroke-current">
            <path d="M1 1H19M1 8H19M1 15H19" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:sticky md:top-0 md:flex md:h-dvh md:w-64 md:shrink-0 md:flex-col md:border-r md:border-primary-brown/20 md:bg-white lg:w-72">
        <div className="px-6 py-7">
          <Logo />
        </div>
        {navList}
        <div className="border-t border-primary-brown/20 px-3 py-6">
          {user && (
            <div className="mb-3 px-4">
              <Text size="sm" className="text-primary-brown/75">
                Signed in as
              </Text>
              <Text size="sm" className="font-semibold text-primary-brown">
                {user.userId}
              </Text>
            </div>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm font-semibold tracking-wide text-primary-brown/75 transition-colors duration-200 hover:bg-primary-pink/20 hover:text-primary-brown focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
              <LogoutIcon />
            </span>
            Sign out
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-primary-brown/40 md:hidden"
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col border-r border-primary-brown/20 bg-white shadow-2xl shadow-primary-brown/30 md:hidden"
            >
              <div className="flex items-center justify-between border-b border-primary-brown/20 px-6 py-7">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-primary-brown/15 bg-primary-brown/10 text-primary-brown transition-colors duration-200 hover:bg-primary-brown/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
                    <path d="M1 1L15 15M15 1L1 15" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div onClick={() => setMobileOpen(false)}>{navList}</div>
              <div className="mt-auto border-t border-primary-brown/20 px-3 py-6">
                {user && (
                  <div className="mb-3 px-4">
                    <Text size="sm" className="text-primary-brown/75">
                      Signed in as
                    </Text>
                    <Text size="sm" className="font-semibold text-primary-brown">
                      {user.userId}
                    </Text>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm font-semibold tracking-wide text-primary-brown/75 transition-colors duration-200 hover:bg-primary-pink/20 hover:text-primary-brown focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <LogoutIcon />
                  </span>
                  Sign out
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
