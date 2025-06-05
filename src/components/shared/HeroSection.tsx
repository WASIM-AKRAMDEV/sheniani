import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import React from "react";

interface HeroSectionProps {
  heading: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  className?: string;
}

const HeroSectionContainer = ({
  backgroundImage,
  children,
}: {
  backgroundImage?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className="w-full bg-cover bg-center relative"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "url('/images/young-craftsman-building-house.png')",
      }}
    >
      <Container>{children}</Container>
    </section>
  );
};

const HeroSection = ({
  heading,
  backgroundImage,
  children,
  className,
}: HeroSectionProps) => {
  return (
    <HeroSectionContainer backgroundImage={backgroundImage}>
      <div
        className={cn(
          "max-w-full bg-custom-gradient backdrop-blur-lg pl-19 max-sm:px-6 pr-10 py-14 max-sm:pt-4.5 max-sm:pb-9.5 rounded-xl my-32.5 max-sm:mb-10",
          className
        )}
      >
        <h1 className="text-7xl max-sm:text-[36px]! leading-tight font-extrabold text-neutral-200 max-md:max-w-full max-md:text-4xl">
          {heading}
        </h1>
        {children}
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;
