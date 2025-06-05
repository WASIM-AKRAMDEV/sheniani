import { CircleCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { DisputeResolutionData } from "@/types/dispute";

interface DisputeResolutionProps {
  resolution: DisputeResolutionData;
}

export function DisputeResolution({ resolution }: DisputeResolutionProps) {
  return (
    <div className="border border-theme-gray rounded-md overflow-hidden w-full">
      <div className="px-5 py-6 font-semibold text-xl">
        <h2>Resolution</h2>
      </div>
      <Separator className={"!bg-theme-gray"} />
      <div className="py-4 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 px-5 pb-5 border-b border-theme-gray">
          <ResolutionItem label="Dispute ID" value={resolution.disputeId} />
          <ResolutionItem label="Expired On" value={resolution.expiredOn} />

          <div>
            <p className="text-lg text-para font-semibold mb-3">
              Resolution Status
            </p>
            <Badge
              variant="outline"
              className="border-success bg-white rounded-lg max-h-9.5 text-success text-base font-semibold px-3 py-2.5 flex items-center gap-2"
            >
              <div>
                <CircleCheck className="h-4.5 w-4.5 shrink-1 " />
              </div>
              {resolution.status}
            </Badge>
          </div>

          <ResolutionItem
            label="Resolution Reached"
            value={resolution.resolutionReached}
          />
          <ResolutionItem
            label="Amount Refunded"
            value={resolution.amountRefunded}
          />
        </div>

        <div className="pt-0 px-5 pb-6">
          <h3 className="text-lg text-black font-semibold">
            Resolution History
          </h3>
          <p className="text-lg text-para font-semibold mb-6">
            Here is the all details about disputes and their resolution
          </p>

          <div className="space-y-5 relative">
            {resolution.history.map((entry, index) => (
              <div key={index} className="flex gap-3 ml-3 relative">
                <div className="relative">
                  <Avatar className="h-10 w-10 z-10 relative">
                    <AvatarImage
                      src={entry.avatarUrl || "/placeholder.svg"}
                      alt={entry.name}
                    />
                    <AvatarFallback>{entry.initials}</AvatarFallback>
                  </Avatar>

                  {index !== resolution.history.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-full bg-theme-silver z-0" />
                  )}
                </div>

                <div>
                  <p className="text-xl mb-2 text-black font-semibold">
                    {entry.name}
                  </p>
                  <p className="text-base text-light-para font-medium max-w-[520px]">
                    {entry.date} - {entry.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ResolutionItemProps {
  label: string;
  value: string | number;
}

function ResolutionItem({ label, value }: ResolutionItemProps) {
  return (
    <div>
      <p className="text-lg leading-snug text-para font-semibold mb-2">
        {label}
      </p>
      <p className="text-lg text-black font-semibold">{value}</p>
    </div>
  );
}
