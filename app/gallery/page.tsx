import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GalleryPageHero } from "@/components/sections/gallery/GalleryPageHero";
import { GalleryHolidayTypeSection } from "@/components/sections/gallery/GalleryHolidayTypeSection";
import { holidayTypeDetails } from "@/lib/holidayTypeDetails";

export const metadata: Metadata = {
  title: "Gallery | Memories You Can Make With Us | Blissful Escapes",
  description:
    "Explore our visual gallery of memories. From luxury overwater villas and beach bays to safari game drives and scenic rail journeys, discover what your next holiday could look like.",
};

export default function GalleryPage() {
  const total = holidayTypeDetails.length;

  return (
    <>
      <Header />
      <main className="flex-1">
        <GalleryPageHero />
        {holidayTypeDetails.map((ht, index) => (
          <GalleryHolidayTypeSection
            key={ht.slug}
            holidayType={ht}
            index={index}
            totalCount={total}
            tone={index % 2 === 0 ? "dark" : "light"}
            reverse={index % 2 === 1}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
