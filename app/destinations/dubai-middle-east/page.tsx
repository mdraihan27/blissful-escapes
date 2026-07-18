import type { Metadata } from "next";
import { DestinationPageTemplate } from "@/components/sections/destination/DestinationPageTemplate";
import { getDestinationDetail } from "@/lib/destinationDetails";

const destination = getDestinationDetail("dubai-middle-east")!;

export const metadata: Metadata = {
  title: `${destination.name} | Blissful Escapes`,
  description: destination.tagline,
};

export default function DubaiMiddleEastPage() {
  return <DestinationPageTemplate destination={destination} />;
}
