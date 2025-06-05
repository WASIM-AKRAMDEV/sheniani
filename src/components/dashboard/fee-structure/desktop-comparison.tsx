"use client";

import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { renderFeatureValue } from "@/utils/fee-structure-utils";
import type { Plan, Feature } from "@/data/fee-structure-data";

interface DesktopComparisonProps {
  plans: Plan[];
  allFeatures: Feature[];
}

export function DesktopComparison({
  plans,
  allFeatures,
}: DesktopComparisonProps) {
  return (
    <div className="hidden lg:block">
      <div
        className="grid grid-cols-4 items-end mb-8 gap-x-6"
        style={{ gridTemplateColumns: "460px 1fr 1fr 1fr" }}
      >
        <div className="col-span-1">
          <h1 className="text-3xl font-bold">Compare features across plans</h1>
        </div>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "rounded-xl border border-theme-gray space-y-5 h-full justify-center p-5 flex flex-col items-center"
            )}
          >
            <h2 className="text-lg font-bold">{plan.name}</h2>
            {plan.id !== "enterprise" && (
              <p className="text-sm  font-bold">{plan.price}</p>
            )}
            <Button>{plan.buttonText}</Button>
          </div>
        ))}
      </div>

      {/* Features comparison with perfect alignment */}
      <div
        className="grid grid-cols-4 gap-x-6"
        style={{ gridTemplateColumns: "460px 1fr 1fr 1fr" }}
      >
        {allFeatures.map((item, index) => (
          <Fragment key={index}>
            {/* First column - Feature names */}
            <div
              className={cn(
                "py-4 flex items-center relative",
                item.type === "category"
                  ? "font-bold text-lg first:mt-0 text-black mt-3"
                  : "text-sm font-semibold text-para"
              )}
            >
              {item.name}
              <div
                className={cn(
                  "bg-theme-gray -bottom-2 absolute h-px w-full hidden",
                  index < allFeatures.length - 1 &&
                    item.type === "feature" &&
                    allFeatures[index + 1]?.type === "category" &&
                    "block"
                )}
              ></div>
            </div>

            {/* Plan columns - each row must have corresponding cells */}
            {["marketplace", "businessPlus", "enterprise"].map(
              (planKey, planIndex) => (
                <div
                  key={`${planKey}-${index}`}
                  className={cn(
                    "flex items-center justify-center",
                    // Border styling
                    planIndex === 0 && "border-x border-theme-gray", // First plan column
                    "border-x border-theme-gray", // Right border for all plan columns
                    index === 0 && "border-t border-theme-gray rounded-t-xl", // Top border for first row
                    index === allFeatures.length - 1 &&
                      "border-b border-theme-gray rounded-b-xl", // Bottom border for last row
                    item.type === "category" ? "first:mt-0" : ""
                  )}
                >
                  <div className="flex flex-col w-full relative">
                    {item.type === "category"
                      ? ""
                      : renderFeatureValue(item[planKey as keyof typeof item])}

                    <div
                      className={cn(
                        "bg-theme-gray -bottom-5.5 absolute h-px w-[80%] left-[10%] hidden",
                        index < allFeatures.length - 1 &&
                          item.type === "feature" &&
                          allFeatures[index + 1]?.type === "category" &&
                          "block"
                      )}
                    ></div>
                  </div>
                </div>
              )
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
