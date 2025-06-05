import { Logo } from "@/components/auth/logo"
import { PhoneVerificationForm } from "@/components/auth/phone-verification/phone-verification-form"

export default function PhoneVerificationPage() {
  return (
       <div className="space-y-10">
        <div className="mb-6">
          <Logo />
        </div>
        <div>
          <h1 className="text-[28px] mb-2 font-bold text-black">Phone Verification</h1>
          <p className="text-para leading-tight font-medium text-lg font-lato">
            Add your phone number. We will send you a verification code so we know you are real.
          </p>
        </div>

        <PhoneVerificationForm />
      </div>
  )
}
