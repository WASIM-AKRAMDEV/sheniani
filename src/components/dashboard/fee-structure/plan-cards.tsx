"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Plan } from "@/data/fee-structure-data";
import { CircleCheck } from "lucide-react";

interface PlanCardsProps {
  plans: Plan[];
}

export function PlanCards({ plans }: PlanCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          className="border border-theme-gray gap-7 rounded-xl shadow-none py-[18px] px-[15px]"
        >
          <CardHeader className="pb-6 p-0">
            <CardTitle className="text-lg leading-tight font-bold text-black">
              {plan.name}
            </CardTitle>
            <p className="text-xs text-para font-lato">{plan.description}</p>
            <p className="text-sm font-bold text-black mt-6">{plan.price}</p>
            <Button className="mt-6 w-fit px-10">{plan.buttonText}</Button>
          </CardHeader>

          <Separator className="!bg-theme-gray" />

          <CardContent className="p-0">
            <p className="font-medium text-base text-black mb-3.5">
              {plan.id === "marketplace"
                ? "Marketplace plan includes:"
                : `Everything in ${
                    plan.id === "business-plus"
                      ? "Marketplace"
                      : "Business Plus"
                  }, and also:`}
            </p>
            <ul className="space-y-4">
              {plan.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <CircleCheck className="size-4.5 text-success" />
                  </div>

                  <span className="text-sm font-medium leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
