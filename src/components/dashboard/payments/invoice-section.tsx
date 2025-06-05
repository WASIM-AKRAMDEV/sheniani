"use client";

import { Pagination } from "@/components/ui/pagination";
import { Invoice } from "@/types/payment";
import { useState } from "react";
import { InvoiceTable } from "./invoice-table";

interface InvoiceSectionProps {
  invoices: Invoice[];
}

export function InvoiceSection({ invoices }: InvoiceSectionProps) {
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
      <InvoiceTable invoices={currentInvoices} />
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
