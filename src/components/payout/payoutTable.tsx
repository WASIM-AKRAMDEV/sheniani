"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Paylot } from "@/types/paylot";
import { formatCurrency } from "@/utils/format";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

interface PayoutTableProps {
  earnings: Paylot[];
  className?: string;
}

export function PayoutTable({ earnings, className }: PayoutTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter earnings based on search term
  const filteredEarnings = searchTerm
    ? earnings.filter((earning) =>
        earning.clientName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : earnings;

  return (
    <div
      className={cn(
        "rounded-lg p-6 border-2 border-primary-500/10 bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Latest Invoices</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/icons/search.svg"
              alt="search"
              width={24}
              height={24}
              className="absolute left-3 top-1/2 make-gray -translate-y-1/2"
            />
            <Input
              placeholder="Search"
              className="pl-12 w-[305px] bg-smoke"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant={"secondary"} size={"lg"} className="bg-smoke px-7">
            {" "}
            <Image
              src="/icons/Frame.svg"
              alt="search"
              width={24}
              height={24}
              className=" make-gray"
            />
            <span className="text-theme-silver font-montserrat font-medium">Export</span>
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead>Earnings</TableHead>
              <TableHead>Added</TableHead>
              <TableHead>Finished</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEarnings.length === 0 && (
              <TableRow>
                <TableCell
                  className="text-sm text-center font-medium text-theme-silver"
                  colSpan={4}
                >
                  No data
                </TableCell>
              </TableRow>
            )}

            {filteredEarnings.map((earning) => (
              <EarningRow key={earning.id} earning={earning} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

interface EarningRowProps {
  earning: Paylot;
}

function EarningRow({ earning }: EarningRowProps) {
  return (
    <TableRow>
      <TableCell>{earning.clientName}</TableCell>
      <TableCell>{earning.type}</TableCell>
      <TableCell>{earning.hours}</TableCell>
      <TableCell>
        <p className="font-bold">{formatCurrency(earning.earnings)}</p>
      </TableCell>
      <TableCell>{earning.added}</TableCell>
      <TableCell>{earning.finished}</TableCell>
    </TableRow>
  );
}
