"use client";

import { Card } from "@/components/ui/card";
import type { ProjectData } from "@/types/milestone";

interface ProjectStatsProps {
  project: ProjectData;
}

export function ProjectStats({ project }: ProjectStatsProps) {
  const paidAmount = project.milestones
    .filter((m) => m.status === "paid")
    .reduce((acc, m) => acc + m.amount, 0);
  const remainingAmount = project.price - paidAmount;
  const paidCount = project.milestones.filter(
    (m) => m.status === "paid"
  ).length;
  const remainingCount = project.milestones.length - paidCount;

  return (
    <Card className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 shadow-none border-primary-500/10 border-2 mb-9.5">
      <div className="border-r">
        <h6 className="text-sm font-medium text-para mb-1">
          Project Price
        </h6>
        <p className="text-xl text-black font-bold font-lato">
          ${project.price}
        </p>
        <p className="text-xs text-semibold text-para font-lato">
          Fixed
        </p>
      </div>
      <div className="border-r flex flex-col items-center">
        <div>
          <h6 className="text-sm font-medium text-para mb-1">
            In Escrow
          </h6>
          <p className="text-xl text-black font-bold font-lato">
            ${project.escrow}
          </p>
        </div>
      </div>
      <div className="border-r flex flex-col items-center">
        <div>
          <h6 className="text-sm font-medium text-para mb-1">
            Milestone Paid ({paidCount})
          </h6>
          <p className="text-xl text-black font-bold font-lato">
            ${paidAmount}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h6 className="text-sm font-medium text-para mb-1">
            Milestone Remaining ({remainingCount})
          </h6>
          <p className="text-xl text-black font-bold font-lato">
            ${remainingAmount}
          </p>
        </div>
      </div>
    </Card>
  );
}
