import type { Metadata } from "next";
import { MessagesPageContent } from "@/components/common/messages/MessagesPageContent";

export const metadata: Metadata = {
  title: "Messages | Blissful Escapes Admin",
};

export default function MessagesPage() {
  return <MessagesPageContent />;
}
