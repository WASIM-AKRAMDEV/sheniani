import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Container } from "../shared/Container";

const CallToAction = () => {
  return (
    <section className="w-full bg-primary">
      <Container>
      <div className="flex pt-17 pb-16 gap-5 md:flex-row flex-col-reverse items-center">
          <div className="flex-8 max-md:ml-0 max-md:w-full">
            <div className="text-white">
              <h3 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
                Pick our Middleman Sheniani Service
              </h3>
              <p className="mt-5 text-lg sm:text-xl md:text-1xl lg:text-2xl font-medium font-lato max-w-2xl">
                We&apos;ll be your eyes on the ground, ensuring your project runs
                smoothly while you focus on what matters.
              </p>
              <Button variant="secondary" size="2xl" className="mt-8 font-bold md:w-auto">
                Hire Sheniani Middleman
              </Button>
            </div>
          </div>
          <div className="flex-4 max-sm:w-[115px]">
            <Image src="/images/middleman-service.png" alt="Middleman service illustration" width={311} height={315} className="object-contain" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
