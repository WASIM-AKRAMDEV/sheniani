import { Separator } from "@/components/ui/separator";
import type { DisputeData } from "@/types/dispute";
import { FileText, ImageIcon } from "lucide-react";

interface DisputeDetailsProps {
  dispute: DisputeData;
}

export function DisputeDetails({ dispute }: DisputeDetailsProps) {
  return (
    <div className="border border-theme-gray rounded-md overflow-hidden w-full">
      <div className="px-5 py-6 font-semibold text-xl">
        <h2>Dispute Details</h2>
      </div>
      <Separator className={"!bg-theme-gray"} />
      <div className="p-5 space-y-6">
        <DetailItem
          label="Service/Item Details"
          value={dispute.serviceDetails}
        />
        <DetailItem label="Order ID" value={dispute.orderId} />
        <DetailItem label="Buyer" value={dispute.buyer} />
        <DetailItem
          label="Transaction Amount"
          value={dispute.transactionAmount}
        />
        <DetailItem label="Dispute Reason" value={dispute.disputeReason} />
        <DetailItem label="Type of Dispute" value={dispute.disputeType} />

        <div>
          <p className="text-lg text-para font-semibold mb-2">
            Request Detail:
          </p>
          <p className="text-lg text-black font-semibold">
            {dispute.requestDetail}
          </p>
        </div>

        <div>
          <p className="text-lg text-muted-foreground font-semibold mb-2">
            Proof Uploaded
          </p>

          <div className="flex flex-col gap-2">
            {dispute.proofUploaded[0] && (
              <div className="flex items-center gap-2 px-4 py-2.5 border border-theme-gray min-h-12 rounded-md bg-white">
                {dispute.proofUploaded[0].type === "pdf" ? (
                  <FileText className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ImageIcon className="h-5 w-5 text-muted-foreground" />
                )}
                <span className="text-lg font-medium text-gray-900 truncate">
                  {dispute.proofUploaded[0].filename}
                </span>
              </div>
            )}

            {dispute.proofUploaded[1] && (
              <div className="flex gap-3">
                <div className="flex items-center flex-1 gap-2 px-4 py-2.5 border border-theme-gray min-h-12 rounded-md bg-white">
                  {dispute.proofUploaded[1].type === "pdf" ? (
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ImageIcon className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className="text-lg font-medium text-gray-900 truncate">
                    {dispute.proofUploaded[1].filename}
                  </span>
                </div>

                {dispute.additionalProofCount > 0 && (
                  <span className="px-4 py-2.5 text-lg font-medium border border-theme-gray min-h-12 rounded-md bg-white">
                    +{dispute.additionalProofCount}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface DetailItemProps {
  label: string;
  value: string | number;
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div>
      <p className="text-lg leading-snug text-para font-semibold mb-2">
        {label}
      </p>
      <p className="text-lg text-black font-semibold">{value}</p>
    </div>
  );
}
