"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/lib/AdminAuthContext";

export function AdminDashboardGuard({ children }: Readonly<{ children: ReactNode }>) {
  const router = useRouter();
  const { user, isLoading } = useAdminAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/admin/login");
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-white">
        <p className="text-sm uppercase tracking-[0.2em] text-primary-brown/75">Loading...</p>
      </main>
    );
  }

  return <>{children}</>;
}
