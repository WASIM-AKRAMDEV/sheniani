import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-base font-lato text-gray-600 mb-8 ">
              Our mission is to empower homeowners and businesses in Georgia by
              providing a seamless platform where they can discover, compare,
              and hire top-rated contractors and service providers. We are
              committed to ensuring quality, efficiency, and affordability for
              every project, big or small.
            </p>
            <Button
              className="bg-theme-orange sm:w-[171px] text-white hover:bg-theme-orange/90"
            >
              Learn More
            </Button>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/our-mission-illustration.png"
                alt="Construction professionals at work"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full max-lg:max-w-[656px] mx-auto w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
