import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LeadCardProps {
  lead: {
    id: number;
    title: string;
    location: string;
    distance: string;
    category: string;
    daysAgo: number;
    image: string;
  };
}

export function LeadCard({ lead }: LeadCardProps) {
  return (
    <div className="bg-[linear-gradient(90deg,_rgba(255,246,230,0.3)_0%,_rgba(255,255,255,0.3)_100%)] rounded-[12px] py-4 px-3 border border-theme-gray-two">
      <div className="flex gap-4">
        <div className="size-[60px] relative rounded-md overflow-hidden">
          <Image
            src={lead.image || "/placeholder.svg"}
            alt={lead.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-black text-base">{lead.title}</h3>
          <div className="flex items-center text-sm text-para mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>
              {lead.location} ({lead.distance})
            </span>
          </div>
        </div>

        <Link
          href={`/dashboard/service-provider/service-detail/${lead.id}`}
          passHref
        >
          <Button
            variant="ghost"
            size={"lg"}
            className="text-theme-orange font-normal hover:text-theme-orange/90 text-sm hover:bg-orange-50 px-2"
          >
            View Profile
          </Button>
        </Link>
      </div>

      <div className="mt-3">
        <h3 className="font-medium flex items-center gap-2 text-black text-xl">
          {lead.category}{" "}
          <Image
            src={"/icons/settings.svg"}
            alt={lead.title}
            width={0}
            height={0}
            className="size-4"
          />
        </h3>
        <div className="text-sm text-gray-600 mt-1">
          {lead.daysAgo} Days ago
        </div>
      </div>
    </div>
  );
}
