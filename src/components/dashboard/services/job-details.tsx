"use client";

import type { LucideIcon } from "lucide-react";

interface JobDetailItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface JobDetailsProps {
  details: JobDetailItem[];
}

export function JobDetails({ details }: JobDetailsProps) {
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6">
      {details.map((item, index) => (
        <div key={index} className="space-y-4">
          <item.icon className="size-8 text-black" />
          <div className="space-y-1">
            <p className="text-xs text-para font-semibold">{item.label}:</p>
            <p className="text-sm text-black font-bold font-lato">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
