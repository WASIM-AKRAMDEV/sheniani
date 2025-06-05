import { Logo } from "@/components/auth/logo";
import { PortfolioForm } from "@/components/auth/register/portfolio/portfolio-form";

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <div className="mb-6">
        <Logo />
      </div>
      <div>
        <h2 className="text-xl font-bold text-black">Step 4:</h2>
        <h1 className="text-[28px] font-bold text-black">
          Portfolio & Certification
        </h1>
      </div>

      <PortfolioForm />
    </div>
  );
}
