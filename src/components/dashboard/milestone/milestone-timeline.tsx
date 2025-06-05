"use client";

import { Button } from "@/components/ui/button";
import type { Milestone } from "@/types/milestone";
import { CircleCheck } from "lucide-react";

interface MilestoneTimelineProps {
  milestones: Milestone[];
}

export function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-7.5">Milestone Timeline</h2>
      <div className="relative border-theme-gray ml-6">
        <span className="absolute -left-0.5 top-0.5 w-[2px] h-[90%] bg-black"></span>
        {milestones.map((milestone, index) => (
          <MilestoneItem key={index} milestone={milestone} />
        ))}
      </div>
      <Button className="px-10 mt-6">Submit Work</Button>
    </div>
  );
}

interface MilestoneItemProps {
  milestone: Milestone;
}

function MilestoneItem({ milestone }: MilestoneItemProps) {
  return (
    <div className="relative pl-8 mb-7.5">
      <div className="absolute -left-5.5 top-0 rounded-full bg-white flex items-center justify-center">
        <CircleCheck className="text-black size-10" />
      </div>

      <div className="space-y-1">
        <p className="font-bold text-lg mb-2">{milestone.title}</p>
        <div className="flex items-center gap-7.5">
          <h4 className="text-1xl font-lato font-bold text-para">
            ${milestone.amount}
          </h4>
          {milestone.status === "paid" && (
            <span className="text-base font-medium text-para bg-smoke rounded-md h-8 flex items-center justify-center px-7">
              Paid
            </span>
          )}
          {milestone.status === "active" && (
            <span className="text-base font-semibold text-white bg-success rounded-md h-8 flex items-center justify-center px-7">
              Active & Funded
            </span>
          )}
          {milestone.status === "pending" && (
            <span className="text-base font-medium text-warning bg-warning/10 rounded-md h-8 flex items-center justify-center px-7">
              Pending
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
