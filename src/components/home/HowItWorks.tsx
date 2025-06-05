import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Container } from "../shared/Container";

interface StepProps {
  icon: string;
  title: string;
  description: string;
  hasBorder?: boolean;
}

const steps = [
  {
    icon: "/icons/project.svg",
    title: "Post Your Project",
    description:
      "Describe your job, set a budget, and get quotes from local experts.",
  },
  {
    icon: "/icons/compare.svg",
    title: "Compare & Choose",
    description:
      "Browse verified professionals, check reviews, and select the best fit.",
  },
  {
    icon: "/icons/job-done.svg",
    title: "Get the Job Done",
    description:
      "Hire with confidence, communicate easily, and complete your project.",
  },
];

const Step = ({ icon, title, description, hasBorder }: StepProps) => {
  return (
    <div className="flex gap-4 sm:gap-8 my-6 xl:my-8 relative">
      {hasBorder && (
        <div className="absolute border-1 border-theme-orange border-dashed h-full top-16 left-5 sm:left-8 transform scale-y-150" />
      )}
      <div className="sm:w-16 sm:h-16 w-10 h-10 bg-background flex items-center justify-center rounded-full shadow-lg z-9">
        <Image
          src={icon}
          alt={`${title} icon`}
          height={0}
          width={0}
          className="sm:w-6 sm:h-6 w-4 h-4"
        />
      </div>
      <div className="flex-1">
        <h3 className="xl:text-3xl lg:text-2xl sm:text-1xl text-xl font-semibold">
          {title}
        </h3>
        <p className="mt-2 lg:text-1xl md:text-lg sm:text-base font-lato text-sm font-medium text-subheading-200 ">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="w-full my-18 max-md:my-9">
      <Container>
        <div className="flex gap-10 xl:gap-18 max-lg:flex-col max-lg:gap-0">
          <div className="hidden max-lg:block mb-6">
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              How It Works
            </h2>
            <p className="mt-3 xl:text-2xl lg:text-1xl font-lato md:text-xl sm:text-lg text-base font-medium text-subheading-200">
              A smooth and straightforward way to get what you need.
            </p>
          </div>
          <div className="flex-6 w-full">
            <Image
              src="/images/how-it-works-illustration.png"
              alt="How it works illustration"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full max-lg:max-w-[543px] w-full object-cover object-bottom rounded-xl"
            />
          </div>
          <div className="flex-7">
            <div className="flex flex-col items-start w-full max-lg:mt-6 max-lg:max-w-full">
              <div className="max-lg:hidden">
                <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
                  How It Works
                </h2>
                <p className="mt-3 xl:text-2xl lg:text-1xl font-lato md:text-xl sm:text-lg text-base font-medium text-subheading-200">
                  A smooth and straightforward way to get what you need.
                </p>
              </div>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  hasBorder={index !== steps.length - 1}
                />
              ))}

              <Button className="bg-theme-orange" size={"2xl"}>
                Post a Job – It&apos;s Free!
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
