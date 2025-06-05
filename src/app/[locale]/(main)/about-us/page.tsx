import HeroSection from "@/components/shared/HeroSection";
import { Button } from "@/components/ui/button";
import OurMission from "@/components/about-us/OurMission";
import WhyChoose from "@/components/about-us/WhyChosose";
import HowItWorks from "@/components/about-us/HowItWorks";
import CallToAction from "@/components/home/CallToAction";

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center bg-white">
      <HeroSection
        heading="Building Trust, One Project at a Time"
        backgroundImage="/images/about-bg.png"
        className="max-w-[981px]"
      >
        <div>
          <p className="font-lato text-2xl max-sm:text-base! font-medium text-primary-foreground leading-normal mt-3">
            At Sheniani, we believe that finding reliable professionals for
            construction and renovation projects should be simple, transparent,
            and stress-free.
          </p>
          <Button size="xl" className="mt-7.5 bg-theme-orange">
            Get a Free Quotes
          </Button>
        </div>
      </HeroSection>

      <OurMission />
      <WhyChoose />
      <HowItWorks />
      <CallToAction />
    </main>
  );
}
