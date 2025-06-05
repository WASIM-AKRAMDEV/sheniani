import { Logo } from "@/components/auth/logo"
import { OtpVerificationForm } from "@/components/auth/verify-otp/otp-verification-form"

export default function VerifyOtpPage() {
  return (
       <div className="space-y-10">
        <div className="mb-6">
          <Logo />
        </div>
        <div>
          <h1 className="text-[28px] mb-2 font-bold text-black">Verify Your Phone Number</h1>
          <p className="text-para leading-tight font-medium text-lg font-lato">Enter your OTP here</p>
        </div>

        <OtpVerificationForm />
      </div>
  )
}
