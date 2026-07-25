import { holidayTypeDetails } from "@/lib/holidayTypeDetails";

export interface HolidayType {
  slug: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
}

export const holidayTypes: HolidayType[] = holidayTypeDetails.map((detail) => ({
  slug: detail.slug,
  label: detail.name,
  imageSrc: detail.heroImage,
  imageAlt: detail.heroImageAlt,
}));
