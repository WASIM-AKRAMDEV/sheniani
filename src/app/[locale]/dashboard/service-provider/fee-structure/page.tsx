"use client"

import { useState } from "react"
import { PlanCards } from "@/components/dashboard/fee-structure/plan-cards"
import { DesktopComparison } from "@/components/dashboard/fee-structure/desktop-comparison"
import { MobileComparison } from "@/components/dashboard/fee-structure/mobile-comparison"
import { plans, allFeatures } from "@/data/fee-structure-data"

export default function FeeStructurePage() {
  const [selectedPlan, setSelectedPlan] = useState(0)

  const nextPlan = () => {
    setSelectedPlan((prev) => (prev + 1) % plans.length)
  }

  const prevPlan = () => {
    setSelectedPlan((prev) => (prev - 1 + plans.length) % plans.length)
  }

  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-black mb-2">Client pricing plans</h1>
        <p className="text-para font-lato text-base">Choose the plan that&apos;s right for your needs</p>
      </div>

      {/* Plan Cards Section */}
      <PlanCards plans={plans} />

      <div>
        {/* Desktop View */}
        <DesktopComparison plans={plans} allFeatures={allFeatures} />

        {/* Mobile View */}
        <MobileComparison
          plans={plans}
          allFeatures={allFeatures}
          selectedPlan={selectedPlan}
          nextPlan={nextPlan}
          prevPlan={prevPlan}
          setSelectedPlan={setSelectedPlan}
        />
      </div>
    </div>
  )
}
