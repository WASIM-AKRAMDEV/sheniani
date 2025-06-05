import { Logo } from "@/components/auth/logo";
import { TradeDetailsForm } from "@/components/auth/register/trade-details/trade-details-form";

export default function TradeDetailsPage() {
  return (
      <div className="space-y-10">
        <div className="mb-6">
          <Logo />
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">Step 3:</h2>
          <h1 className="text-[28px] font-bold text-black">
            Trade Details
          </h1>
        </div>

        <TradeDetailsForm />
      </div>
  );
}
