import HeroSection from "@/components/shared/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ServiceSearch } from "@/components/home/serviceSearch";
import { Container } from "@/components/shared/Container";
import Card from "@/components/handyman/Card";

export default function Handyman() {
  return (
    <>
      <HeroSection
        heading="Check out 25 Handyman Professionals near you"
        backgroundImage="/images/young-craftsman-building-house.png"
        className="w-[857px]"
      >
        <div className="flex flex-wrap gap-3 mt-8 w-full">
          <div className="flex flex-1">
            <ServiceSearch />
          </div>
          <Button size="xl" className="max-sm:hidden bg-theme-orange">
            <Image
              src="/icons/magnifying-glass.svg"
              width="24"
              height="24"
              alt="magnifying-glass"
              className="make-white"
            />
            Find Pro
          </Button>
        </div>
      </HeroSection>

      <section className="w-full py-17.5">
        <Container>
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">25+ Handyman Found</h1>
          <p className="xl:text-base sm:text-base text-sm text-subheading-200 mt-5 max-sm:mt-3">
            A smooth and straightforward way to get what you need.
          </p>
          <div className="grid grid-cols-2 gap-4 my-10 max-sm:my-6 max-md:grid-cols-1">
            {Array.from({ length: 4 }, (_, i) => (
              <Card key={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
