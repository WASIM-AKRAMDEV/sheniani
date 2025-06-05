import Image from "next/image";
import React from "react";
import { Container } from "../shared/Container";

interface StepProps {
  icon: string;
  title: string;
  description: string;
}

const steps = [
  {
    icon: "/icons/project.svg",
    title: " Vetted Professionals",
    description:
      "We carefully screen service providers to ensure you get only the best.",
  },
  {
    icon: "/icons/compare.svg",
    title: "Transparent Pricing",
    description: "Get competitive quotes upfront with no hidden surprises.",
  },
  {
    icon: "/icons/job-done.svg",
    title: "User-Friendly Experience",
    description:
      "Our intuitive platform makes it easy to browse, compare, and book services.",
  },
  {
    icon: "/icons/job-done.svg",
    title: "Customer Reviews & Ratings",
    description:
      "Make informed decisions with honest feedback from past clients.",
  },
];

const Step = ({ icon, title, description }: StepProps) => {
  return (
    <div className="flex gap-4 relative">
      <div className="sm:w-16 sm:h-16 h-10 w-10 rounded-full flex items-center justify-center  bg-primary border-1 z-9">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="sm:w-9 make-white sm:h-9 w-6 h-6"
        />
      </div>
      <div className="flex-1 text-primary-foreground">
        <h3 className="xl:text-2xl md:text-xl text-lg font-bold">{title}</h3>
        <p className="sm:mt-2 mt-1 max-w-[406px] sm:text-base text-sm opacity-60">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <section className="w-full bg-primary py-16">
      <Container>
        <div className="flex text-primary-foreground gap-8 max-lg:flex-col max-lg:gap-4">
          <h2 className="flex-6 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
            Why Choose Sheniani?
          </h2>
          <p className="flex-6 xl:text-base sm:text-base text-sm font-lato lg:max-w-[514px] opacity-60 ">
            Ensuring process reliability is essential in industrial
            manufacturing. Integrated systems must work consistently
            otherwisecosting production losses threaten to occur
          </p>
        </div>
        <div className="flex gap-16 lg:flex-row flex-col-reverse mt-9">
          <div className="flex-6 w-full lg:w-1/2">
            <Image
              src="/images/why-choose-sheniani.png"
              alt="Why Choose Sheniani illustration"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full max-lg:max-w-[683px] mx-auto w-full object-contain object-center"
            />
          </div>
          <div className="flex flex-col space-y-4 md:space-y-10 flex-6 items-start w-full  lg:max-w-[514px]">
            {steps.map((step, index) => (
              <Step
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
