import { ForgotPasswordForm } from "@/components/auth/forgot-password/forgot-password-form";
import { Logo } from "@/components/auth/logo";

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-10">
      <div className="mb-6">
        <Logo />
      </div>
      <div>
        <h1 className="text-[28px] mb-2 font-bold text-black">Forget Password</h1>
        <p className="text-para leading-tight font-medium text-lg font-lato">
          Enter the email address associated with your account, and we&apos;ll
          email you a link to reset your password.
        </p>
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
