import type { Metadata } from "next";
import { AdminLoginPageContent } from "@/components/common/AdminLoginPageContent";

export const metadata: Metadata = {
  title: "Sign in | Blissful Escapes Admin",
};

export default function AdminLoginPage() {
  return <AdminLoginPageContent />;
}
