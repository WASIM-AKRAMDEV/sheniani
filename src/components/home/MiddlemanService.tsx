import { Container } from "@/components/shared/Container";
import Image from "next/image";

interface ServiceFeatureProps {
  title: string;
  description: string;
}

const featureServices = [
  {
    title: "Project Oversight",
    description: "Monitoring service progress and ensuring quality.",
  },
  {
    title: "Expert Guidance",
    description: "Providing valid suggestions and recommendations.",
  },
  {
    title: "Material Assistance",
    description:
      "Visiting stores, helping select the right materials, and arranging deliveries.",
  },
  {
    title: "Custom Solutions",
    description:
      "Helping customers find unique ways to complete their projects efficiently.",
  },
];

const ServiceFeature = ({ title, description }: ServiceFeatureProps) => {
  return (
    <div className="px-5 py-6 bg-white rounded-xl shadow-two">
      <div className="flex gap-4 items-start">
        <div className="relative sm:w-17.5 sm:h-17.5 h-10 w-10 rounded-full flex items-center justify-center bg-secondary-light">
          <Image
            src="/icons/doubble-tick.svg"
            alt="doubble tick"
            width={24}
            height={24}
            className="sm:w-9 sm:h-9 w-6 h-6"
          />
        </div>
        <div className="flex-1">
          <h3 className="xl:text-2xl md:text-xl text-lg font-semibold">
            {title}
          </h3>
          <p className="sm:mt-2 mt-1 xl:text-lg sm:text-base text-sm font-medium text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MiddlemanService = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-10 xl:gap-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/middleman-service-illustration.png"
              alt="Construction professionals reviewing blueprints"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full max-lg:max-w-[630px] mx-auto w-full object-cover object-bottom rounded-xl"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mb-6">
              Middleman Service <br className="hidden md:block" /> (Sheniani)
            </h2>

            <div className="space-y-3">
              {featureServices.map((service, index) => (
                <ServiceFeature
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MiddlemanService;
