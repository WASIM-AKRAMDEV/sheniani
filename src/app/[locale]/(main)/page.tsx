import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/shared/HeroSection";
import { ServiceSearch } from "@/components/home/serviceSearch";
import ServiceCategories from "@/components/home/ServiceCategories";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonial from "@/components/home/Testimonial";
import TrustFeatures from "@/components/home/TrustFeatures";
import MiddlemanService from "@/components/home/MiddlemanService";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white">
      <HeroSection
        heading="Find top-rated Certified pros in your area."
        backgroundImage="/images/young-craftsman-building-house.png"
        className="max-w-[827px]"
      >
        <div className="flex flex-wrap gap-3 mt-8 w-full">
          <div className="flex flex-1">
            <ServiceSearch />
          </div>
          <Button size="xl" className="max-sm:hidden bg-theme-orange">
            <Image
              src="/icons/magnifying-glass.svg"
              width={20}
              height={20}
              alt="magnifying-glass"
              className="make-white"
            />
            Search
          </Button>
        </div>
      </HeroSection>

      <ServiceCategories />
      <HowItWorks />
      <Testimonial />
      <TrustFeatures />
      <MiddlemanService />
      <CallToAction />
    </main>
  );
}
