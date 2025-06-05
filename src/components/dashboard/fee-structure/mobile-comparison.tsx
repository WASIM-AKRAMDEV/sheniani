"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { renderFeatureValue } from "@/utils/fee-structure-utils"
import type { Plan, Feature } from "@/data/fee-structure-data"

interface MobileComparisonProps {
  plans: Plan[]
  allFeatures: Feature[]
  selectedPlan: number
  nextPlan: () => void
  prevPlan: () => void
  setSelectedPlan: (plan: number) => void
}

export function MobileComparison({
  plans,
  allFeatures,
  selectedPlan,
  nextPlan,
  prevPlan,
  setSelectedPlan,
}: MobileComparisonProps) {
  // Group features by category for mobile display
  const groupedFeatures = allFeatures.reduce(
    (acc, item) => {
      if (item.type === "category") {
        acc.push({ category: item.name, features: [] })
      } else if (item.type === "feature" && acc.length > 0) {
        acc[acc.length - 1].features.push(item)
      }
      return acc
    },
    [] as Array<{ category: string; features: Feature[] }>,
  )

  return (
    <div className="lg:hidden">
      <h2 className="text-[28px] font-semibold mb-6">Compare features across plans</h2>

      {/* Mobile Plan Selector */}
      <div className="relative mb-6">
        <div className="bg-white p-4 rounded-lg border border-theme-gray text-center">
          <h3 className="font-bold text-lg">{plans[selectedPlan].name}</h3>
          <p className="text-sm font-bold mt-2 mb-4">{plans[selectedPlan].price}</p>
          <Button size="sm" className="bg-[#002B41] hover:bg-[#002B41]/90">
            {plans[selectedPlan].buttonText}
          </Button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevPlan}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-theme-gray shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextPlan}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-theme-gray shadow-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mb-6">
        {plans.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPlan(idx)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              idx === selectedPlan ? "bg-[#FF9800]" : "bg-gray-300",
            )}
          />
        ))}
      </div>

      {/* Mobile Features List using allFeatures */}
      <div className="space-y-6">
        {groupedFeatures.map((categoryGroup) => (
          <div key={categoryGroup.category}>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{categoryGroup.category}</h3>
            <div className="border border-theme-gray rounded-lg overflow-hidden bg-white">
              {categoryGroup.features.map((feature, idx) => {
                const currentPlan =
                  selectedPlan === 0 ? "marketplace" : selectedPlan === 1 ? "businessPlus" : "enterprise"
                const featureValue = feature[currentPlan as keyof typeof feature]

                return (
                  <div
                    key={idx}
                    className={cn(
                      "flex items-center justify-between p-4",
                      idx !== categoryGroup.features.length - 1 && "",
                    )}
                  >
                    <div className="text-sm font-medium flex-1 pr-4">{feature.name}</div>
                    <div className="flex-shrink-0">{renderFeatureValue(featureValue)}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
