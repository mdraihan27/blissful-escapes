import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { HeroContactForm } from "@/components/sections/HeroContactForm";

export function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="relative min-h-[86dvh] overflow-hidden sm:min-h-[90dvh] lg:min-h-[92dvh]">
        <HeroCarousel />

        <div className="relative z-10 flex h-full min-h-[86dvh] flex-col justify-end pb-8 sm:min-h-[90dvh] sm:pb-10 lg:min-h-[92dvh] lg:pb-12">
          <Container>
            <div className="max-w-xl lg:max-w-2xl">
              <Heading as="h1" size="xl" italic className="text-white">
                Plan your next escape with us.
              </Heading>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12">
              <HeroContactForm />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
