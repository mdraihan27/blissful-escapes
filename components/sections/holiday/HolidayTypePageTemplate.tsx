import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { HolidayTypeHero } from "@/components/sections/holiday/HolidayTypeHero";
import { HolidayTypeIntro } from "@/components/sections/holiday/HolidayTypeIntro";
import { HolidayTypeFeatures } from "@/components/sections/holiday/HolidayTypeFeatures";
import { HolidayTypeCta } from "@/components/sections/holiday/HolidayTypeCta";
import { OtherHolidayTypes } from "@/components/sections/holiday/OtherHolidayTypes";
import type { HolidayTypeDetail } from "@/lib/holidayTypeDetails";

export interface HolidayTypePageTemplateProps {
  holidayType: HolidayTypeDetail;
}

export function HolidayTypePageTemplate({ holidayType }: Readonly<HolidayTypePageTemplateProps>) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HolidayTypeHero
          name={holidayType.name}
          tagline={holidayType.tagline}
          watermark={holidayType.watermark}
          imageSrc={holidayType.heroImage}
          imageAlt={holidayType.heroImageAlt}
        />
        <HolidayTypeIntro
          intro={holidayType.intro}
          idealFor={holidayType.idealFor}
        />
        <HolidayTypeFeatures
          features={holidayType.features}
          images={holidayType.galleryImages}
        />
        <HolidayTypeCta
          name={holidayType.name}
          imageSrc={holidayType.secondaryImage || holidayType.heroImage}
          imageAlt={holidayType.secondaryImageAlt || holidayType.heroImageAlt}
        />
        <OtherHolidayTypes currentSlug={holidayType.slug} />
      </main>
      <Footer />
    </>
  );
}
