import Image from "next/image";
import { Container } from "@/components/shared/Container";

interface HowItWorkItemProps {
  idx: number;
  title: string;
  description: string;
}

const howItWorksItems = [
  {
    title: "Post Your Project",
    description:
      "Describe what you need, and we'll match you with top-rated professionals.",
  },
  {
    title: "Compare & Choose",
    description:
      "Browse detailed profiles, read reviews, and get competitive quotes.",
  },
  {
    title: "Hire with Confidence",
    description:
      "Select the best pro for the job and enjoy a hassle-free experience.",
  },
];

const HowItWorkItem = ({ idx, title, description }: HowItWorkItemProps) => {
  return (
    <div className="flex gap-4 xl:gap-6 h-full">
      <div className="relative min-w-24 sm:min-w-20 lg:min-w-24">
        <Image
          src="/icons/large-arrow.svg"
          width={0}
          height={0}
          alt={title}
          sizes="100vw"
          className="max-sm:h-32 h-full w-full"
        />
        <div className="absolute rounded-full bg-[#FB991C] flex items-center justify-center w-9 h-9 border-4 border-[#f9b257] top-2 left-10 sm:left-6">
          <span className="text-secondary font-bold">
            0{idx + 1}
          </span>
        </div>
      </div>
      <div className="sm:py-3 py-1">
        <h3 className="xl:text-2xl md:text-xl text-lg font-bold mb-3 sm:mb-4 md:mb-6">
          {title}
        </h3>
        <p className="xl:text-lg sm:text-base text-sm font-lato text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <Container>
        <div>
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
            How It Works
          </h2>

          {/* Grid layout for responsive behavior */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {howItWorksItems.map((item, index) => (
              <div key={index} className="h-full">
                <HowItWorkItem
                  idx={index}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
