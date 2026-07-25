import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HolidayTypePageTemplate } from "@/components/sections/holiday/HolidayTypePageTemplate";
import { getHolidayTypeDetail, holidayTypeDetails } from "@/lib/holidayTypeDetails";

interface HolidayTypePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return holidayTypeDetails.map((holidayType) => ({ slug: holidayType.slug }));
}

export async function generateMetadata({ params }: HolidayTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const holidayType = getHolidayTypeDetail(slug);
  if (!holidayType) return {};
  return {
    title: `${holidayType.name} | Blissful Escapes`,
    description: holidayType.tagline,
  };
}

export default async function HolidayTypePage({ params }: HolidayTypePageProps) {
  const { slug } = await params;
  const holidayType = getHolidayTypeDetail(slug);
  if (!holidayType) notFound();

  return <HolidayTypePageTemplate holidayType={holidayType} />;
}
