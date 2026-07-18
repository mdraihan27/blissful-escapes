import type { Metadata } from "next";
import { DestinationPageTemplate } from "@/components/sections/destination/DestinationPageTemplate";
import { getDestinationDetail } from "@/lib/destinationDetails";

const destination = getDestinationDetail("caribbean")!;

export const metadata: Metadata = {
  title: `${destination.name} | Blissful Escapes`,
  description: destination.tagline,
};

export default function CaribbeanPage() {
  return <DestinationPageTemplate destination={destination} />;
}
