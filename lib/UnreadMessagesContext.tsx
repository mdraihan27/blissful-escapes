"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { getUnreadCount } from "@/lib/tripEnquiryAdminApi";

interface UnreadMessagesContextValue {
  unreadCount: number;
  refresh: () => void;
}

const UnreadMessagesContext = createContext<UnreadMessagesContextValue | null>(null);

export function UnreadMessagesProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    getUnreadCount()
      .then((count) => {
        if (!cancelled) setUnreadCount(count);
      })
      .catch(() => {
        // A failed count just leaves the badge as-is — never blocks the UI.
      });

    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  const refresh = useCallback(() => setRefreshKey((key) => key + 1), []);

  return (
    <UnreadMessagesContext.Provider value={{ unreadCount, refresh }}>
      {children}
    </UnreadMessagesContext.Provider>
  );
}

export function useUnreadMessages() {
  const context = useContext(UnreadMessagesContext);
  if (!context) {
    throw new Error("useUnreadMessages must be used within an UnreadMessagesProvider");
  }
  return context;
}
