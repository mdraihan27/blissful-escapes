import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AssociatesSection } from "@/components/sections/AssociatesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HolidayTypesSection } from "@/components/sections/HolidayTypesSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { TripPlanProvider } from "@/lib/TripPlanContext";

export default function Home() {
  return (
    <TripPlanProvider>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AssociatesSection />
        <AboutSection />
        <HolidayTypesSection />
        <DestinationsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </TripPlanProvider>
  );
}
