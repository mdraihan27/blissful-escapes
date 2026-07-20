import type { Metadata } from "next";
import { AdminAuthProvider } from "@/lib/AdminAuthContext";

export const metadata: Metadata = {
  title: "Admin | Blissful Escapes",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AdminAuthProvider>{children}</AdminAuthProvider>;
}
