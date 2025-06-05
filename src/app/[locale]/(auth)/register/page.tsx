import { Logo } from "@/components/auth/logo";
import { RegistrationForm } from "@/components/auth/register/registration-form";

export default function RegisterPage() {
  return (
    <div className="space-y-5">
      <div className="mb-6">
        <Logo />
      </div>
      <div>
        <h2 className="text-[28px] mb-2 font-bold text-black">
          Create An Account
        </h2>
        <p className="text-para leading-tight font-medium text-lg font-lato">
          Select Client or Service Provider and setup your profile in the next
          step
        </p>
      </div>

      <RegistrationForm />
    </div>
  );
}
