import { Logo } from "@/components/auth/logo"
import { PersonalInfoForm } from "@/components/auth/register/personal-info/personal-info-form"

export default function PersonalInfoPage() {
  return (
      <div className="space-y-10">
        <div className="flex mb-6">
          <Logo />
        </div>
        <div>
          <h2 className="text-xl mb-2 font-bold text-black">Step 1:</h2>
          <h1 className="text-[28px] font-bold text-black">Personal Information</h1>
        </div>

        <PersonalInfoForm />
      </div>
  )
}
