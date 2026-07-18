import { Footer } from "@/components/sections/Footer";
import { DestinationPageHeader } from "@/components/sections/destination/DestinationPageHeader";
import { DestinationHero } from "@/components/sections/destination/DestinationHero";
import { DestinationIntro } from "@/components/sections/destination/DestinationIntro";
import { DestinationHighlights } from "@/components/sections/destination/DestinationHighlights";
import { DestinationExperiences } from "@/components/sections/destination/DestinationExperiences";
import { DestinationCta } from "@/components/sections/destination/DestinationCta";
import { OtherDestinations } from "@/components/sections/destination/OtherDestinations";
import type { DestinationDetail } from "@/lib/destinationDetails";

export interface DestinationPageTemplateProps {
  destination: DestinationDetail;
}

export function DestinationPageTemplate({ destination }: Readonly<DestinationPageTemplateProps>) {
  return (
    <>
      <DestinationPageHeader />
      <main className="flex-1">
        <DestinationHero
          name={destination.name}
          tagline={destination.tagline}
          region={destination.region}
          watermark={destination.heroWatermark}
          imageSrc={destination.heroImage}
          imageAlt={destination.heroImageAlt}
        />
        <DestinationIntro
          intro={destination.intro}
          countries={destination.countries}
          bestTime={destination.bestTime}
        />
        <DestinationHighlights highlights={destination.highlights} />
        <DestinationExperiences experiences={destination.experiences} images={destination.gallery} />
        <DestinationCta
          name={destination.name}
          imageSrc={destination.heroImage}
          imageAlt={destination.heroImageAlt}
        />
        <OtherDestinations currentSlug={destination.slug} />
      </main>
      <Footer />
    </>
  );
}
