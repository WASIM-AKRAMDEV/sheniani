import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Define the type for a service category
type ServiceCategoryProps = {
  imageSrc: string;
  name: string;
};

// Array of service categories
const serviceCategories: ServiceCategoryProps[] = [
  { imageSrc: "/icons/handyperson.svg", name: "Handyperson" },
  { imageSrc: "/icons/landscaping.svg", name: "Landscaping" },
  { imageSrc: "/icons/plumbing.svg", name: "Plumbing" },
  { imageSrc: "/icons/electrical.svg", name: "Electrical" },
  { imageSrc: "/icons/remodeling.svg", name: "Remodeling" },
  { imageSrc: "/icons/roofing.svg", name: "Roofing" },
  { imageSrc: "/icons/painting.svg", name: "Painting" },
  { imageSrc: "/icons/cleaning.svg", name: "Cleaning" },
  { imageSrc: "/icons/hvac.svg", name: "HVAC" },
  { imageSrc: "/icons/windows.svg", name: "Windows" },
  { imageSrc: "/icons/concrete.svg", name: "Concrete" },
];

const ServiceCategory = ({ imageSrc, name }: ServiceCategoryProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-2 transition-all hover:scale-105">
      <div className="flex items-center justify-center rounded-full shadow-xl size-14 md:size-16">
        <Image
          src={imageSrc || "/placeholder.svg"}
          className="size-7 md:size-8 make-blue"
          alt={`${name} icon`}
          width={45}
          height={45}
        />
      </div>
      <p className="text-sm md:text-base lg:text-lg font-medium text-center">
        {name}
      </p>
    </div>
  );
};

// Main ServiceCategories component
const ServiceCategories = () => {
  return (
    <section className="w-full py-8 md:py-14">
      <div className="mx-auto max-w-[1265px] px-5">
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-4 md:space-x-8 pb-2">
            {serviceCategories.map((category, index) => (
              <ServiceCategory
                key={index}
                imageSrc={category.imageSrc}
                name={category.name}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default ServiceCategories;
