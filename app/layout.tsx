import type { Metadata } from "next";
import "./globals.css";
import { PageScrollbar } from "@/components/common/PageScrollbar";
import { woodland } from "@/lib/fonts";
import { TripPlanProvider } from "@/lib/TripPlanContext";

export const metadata: Metadata = {
  title: "Blissful Escapes | Luxury Travel, Personally Planned",
  description:
    "Boutique travel planning with a single point of contact. Tell us when and where you want to go, and we'll take it from there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${woodland.variable}`}>
      <body className="min-h-full flex flex-col font-sans">
        <TripPlanProvider>
          {children}
          <PageScrollbar />
        </TripPlanProvider>
      </body>
    </html>
  );
}
