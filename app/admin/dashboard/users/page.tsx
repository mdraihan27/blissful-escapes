import type { Metadata } from "next";
import { UsersPageContent } from "@/components/common/users/UsersPageContent";

export const metadata: Metadata = {
  title: "Users | Blissful Escapes Admin",
};

export default function UsersPage() {
  return <UsersPageContent />;
}
