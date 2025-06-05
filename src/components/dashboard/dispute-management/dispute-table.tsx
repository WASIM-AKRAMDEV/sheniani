"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Dispute } from "@/types/dispute";
import {
  AlertCircle,
  CheckCircle,
  Eye,
  MessageCircle,
  MoreVertical,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DisputeTableProps {
  disputes: Dispute[];
}

export function DisputeTable({ disputes }: DisputeTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Jobs</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Applications</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {disputes.length === 0 && (
            <TableRow>
              <TableCell
                className="text-sm text-center font-medium text-theme-silver"
                colSpan={4}
              >
                No disputes found
              </TableCell>
            </TableRow>
          )}

          {disputes.map((dispute) => (
            <DisputeRow key={dispute.id} dispute={dispute} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

interface DisputeRowProps {
  dispute: Dispute;
}

function DisputeRow({ dispute }: DisputeRowProps) {
  const router = useRouter();

  const handleViewDispute = (id: string) => {
    router.push(`/dashboard/service-provider/dispute-management/${id}`);
  };

  return (
    <TableRow className="hover:bg-transparent group hover:border-primary">
      <TableCell className="!py-5">
        <p className="font-montserrat text-base font-medium text-black">
          {dispute.jobTitle}
        </p>
      </TableCell>
      <TableCell className="!py-5">
        <div className="flex items-center gap-1">
          <Image
            src="/icons/circle-check.svg"
            alt="check"
            width={20}
            height={20}
            className="make-black"
          />
          <p className="font-montserrat text-black font-medium">
            {dispute.clientName}
          </p>
        </div>
      </TableCell>
      <TableCell className="!py-5">
        <div className="flex items-center gap-1">
          <Image
            src="/icons/profile2user.svg"
            alt="user"
            width={24}
            height={24}
          />
          <p className="font-montserrat text-gray-600">
            {dispute.applicationId}
          </p>
        </div>
      </TableCell>
      <TableCell className="!py-5">
        <div className="flex items-center gap-10">
          <Button
            variant="secondary"
            className="w-[150px] group-hover:bg-dark-primary group-hover:text-white hover:bg-dark-primary hover:text-white"
            onClick={() => handleViewDispute(dispute.id)}
          >
            View Dispute
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <MoreVertical className="h-6 w-6 cursor-pointer" />
                <span className="sr-only">Open menu</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem onClick={() => handleViewDispute(dispute.id)}>
                <Eye className="mr-1 h-4 w-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageCircle className="mr-1 h-4 w-4" />
                Send message
              </DropdownMenuItem>
              <DropdownMenuItem>
                <AlertCircle className="mr-1 h-4 w-4" />
                Escalate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <CheckCircle className="mr-1 h-4 w-4" />
                Mark as resolved
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
}
