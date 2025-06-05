import { Logo } from "@/components/auth/logo";
import { CompanyInfoForm } from "@/components/auth/register/company-info/company-info-form";

export default function CompanyInfoPage() {
  return (
    <div className="space-y-10">
      <div className="mb-6">
        <Logo />
      </div>
      <div>
        <h2 className="text-xl font-bold text-black">Step 2:</h2>
        <h1 className="text-[28px] font-bold text-black">
          Company Information
        </h1>
      </div>

      <CompanyInfoForm />
    </div>
  );
}
