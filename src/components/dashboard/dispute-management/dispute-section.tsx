"use client";

import { useState } from "react";
import { DisputeTable } from "./dispute-table";
import { Pagination } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import type { Dispute } from "@/types/dispute";

interface DisputeSectionProps {
  disputes: Dispute[];
}

export function DisputeSection({ disputes }: DisputeSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter disputes based on search term
  const filteredDisputes = disputes.filter(
    (dispute) =>
      dispute.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dispute.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dispute.applicationId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredDisputes.length / itemsPerPage);
  const currentDisputes = filteredDisputes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col mb-7">
          <h2 className="text-3xl mb-7 font-semibold">All Disputes</h2>
          <div className="relative">
            <Image
              src="/icons/search.svg"
              alt="search"
              width={24}
              height={24}
              className="absolute left-3 top-1/2 make-gray -translate-y-1/2"
            />
            <Input
              placeholder="Search by job title, client name"
              className="pl-12 bg-smoke"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <DisputeTable disputes={currentDisputes} />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
