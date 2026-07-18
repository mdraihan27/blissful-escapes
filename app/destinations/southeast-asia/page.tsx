import type { Metadata } from "next";
import { DestinationPageTemplate } from "@/components/sections/destination/DestinationPageTemplate";
import { getDestinationDetail } from "@/lib/destinationDetails";

const destination = getDestinationDetail("southeast-asia")!;

export const metadata: Metadata = {
  title: `${destination.name} | Blissful Escapes`,
  description: destination.tagline,
};

export default function SoutheastAsiaPage() {
  return <DestinationPageTemplate destination={destination} />;
}
