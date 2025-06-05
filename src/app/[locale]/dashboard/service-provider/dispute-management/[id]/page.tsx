"use client";

import { DisputeDetails } from "@/components/dashboard/dispute-management/dispute-details";
import { DisputeResolution } from "@/components/dashboard/dispute-management/dispute-resolution";
import { disputeData } from "@/data/dispute-details";

interface DisputeDetailsPageProps {
  params: {
    id: string;
  };
}

export default function DisputeDetailsPage({
  params,
}: DisputeDetailsPageProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = params;

  // In a real implementation, we would fetch the dispute data based on the ID
  // For now, we'll use static data
  const dispute = disputeData;

  return (
    <div className="space-y-7">
      <h2 className="text-3xl font-semibold">Dispute Details</h2>

      <div className="flex flex-col lg:flex-row justify-between gap-7 w-full">
        <div className="max-w-[388px]">
          <DisputeDetails dispute={dispute} />
        </div>
        <div className="flex-1">
          <DisputeResolution resolution={dispute.resolution} />
        </div>
      </div>
    </div>
  );
}
