import Image from "next/image";
import { Container } from "@/components/shared/Container";

interface TrustFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const trustedFeatures = [
  {
    icon: "/icons/verified-thumb.svg",
    title: "Verified Pros",
    description: "Background-checked and licensed professionals",
  },
  {
    icon: "/icons/secure-payment.svg",
    title: "Secure Payments",
    description: "Safe transactions through our platform",
  },
  {
    icon: "/icons/customer-support.svg",
    title: "Customer Support",
    description: "24/7 assistance for any issues",
  },
];

const TrustFeature = ({ icon, title, description }: TrustFeatureProps) => {
  return (
    <div className="h-full px-6 py-6 bg-white rounded-2xl shadow-two hover:shadow-lg transition-shadow">
      <div className="rounded-full bg-white shadow-lg w-12 h-12 flex items-center justify-center mb-4">
        <Image
          src={icon || ""}
          width={24}
          height={24}
          alt={title}
          className="text-theme-orange"
        />
      </div>
      <h3 className="lg:text-2xl sm:text-xl text-lg font-semibold">{title}</h3>
      <p className="lg:text-xl md:text-lg sm:text-base text-sm font-medium text-gray-600">
        {description}
      </p>
    </div>
  );
};

const TrustFeatures = () => {
  return (
    <section className="w-full pb-12 md:pb-16 lg:pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustedFeatures.map((feature, index) => (
            <TrustFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustFeatures;
