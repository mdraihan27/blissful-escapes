import { AdminDashboardGuard } from "@/components/common/AdminDashboardGuard";
import { AdminDashboardShell } from "@/components/common/AdminDashboardShell";
import { UnreadMessagesProvider } from "@/lib/UnreadMessagesContext";

export default function AdminDashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AdminDashboardGuard>
      <UnreadMessagesProvider>
        <AdminDashboardShell>{children}</AdminDashboardShell>
      </UnreadMessagesProvider>
    </AdminDashboardGuard>
  );
}
