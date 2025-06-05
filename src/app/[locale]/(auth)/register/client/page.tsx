import { Logo } from "@/components/auth/logo";
import { ClientRegistrationForm } from "@/components/auth/register/client/client-registration-form";

export default function ClientRegistrationPage() {
  return (
    <div className="space-y-10">
      <div className="mb-6">
        <Logo />
      </div>
      <div>
        <h1 className="text-[28px] mb-2 font-bold text-black">Get started</h1>
        <p className="text-para leading-tight font-medium text-lg font-lato">
          Join Sheniani.ge and start your Project
        </p>
      </div>

      <ClientRegistrationForm />
    </div>
  );
}
