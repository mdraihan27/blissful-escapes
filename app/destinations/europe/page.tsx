import type { Metadata } from "next";
import { DestinationPageTemplate } from "@/components/sections/destination/DestinationPageTemplate";
import { getDestinationDetail } from "@/lib/destinationDetails";

const destination = getDestinationDetail("europe")!;

export const metadata: Metadata = {
  title: `${destination.name} | Blissful Escapes`,
  description: destination.tagline,
};

export default function EuropePage() {
  return <DestinationPageTemplate destination={destination} />;
}
