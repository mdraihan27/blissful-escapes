import type { Metadata } from "next";
import "./globals.css";
import { PageScrollbar } from "@/components/common/PageScrollbar";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        {children}
        <PageScrollbar />
      </body>
    </html>
  );
}
