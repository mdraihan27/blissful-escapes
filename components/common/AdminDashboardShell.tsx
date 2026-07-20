import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/common/AdminSidebar";

export function AdminDashboardShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-dvh flex-col bg-white md:flex-row">
      <AdminSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
