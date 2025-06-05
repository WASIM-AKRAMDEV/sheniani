"use client";

import { Pagination } from "@/components/ui/pagination";
import { Invoice } from "@/types/messaging-and-alerts";
import { useState } from "react";
import { MessagingTable } from "./messaging-table";

interface MessageInvoiceProps {
  invoices: Invoice[];
}

export function MessageInvoice({ invoices }: MessageInvoiceProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  // Get current page invoices
  const currentInvoices = invoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <MessagingTable invoices={currentInvoices} />
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
