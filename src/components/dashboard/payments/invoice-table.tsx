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
import { Invoice } from "@/types/payment";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import { useState } from "react";

interface InvoiceTableProps {
  invoices: Invoice[];
  className?: string;
}

export function InvoiceTable({ invoices, className }: InvoiceTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter invoices based on search term
  const filteredInvoices = searchTerm
    ? invoices.filter(
        (invoice) =>
          invoice.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
          invoice.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          invoice.charges.toString().includes(searchTerm) ||
          invoice.total.toString().includes(searchTerm)
      )
    : invoices;

  return (
    <div
      className={cn(
        "rounded-lg p-6 border-2 border-primary-500/10 bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Latest Invoices</h2>
        <div className="relative">
          <Image
            src={"/icons/search.svg"}
            alt="search"
            width={24}
            height={24}
            className="absolute left-3 top-1/2 make-gray -translate-y-1/2"
          />
          <Input
            placeholder="Search"
            className="pl-12 w-[305px] bg-gray-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Charges</TableHead>
                <TableHead>Refund</TableHead>
                <TableHead>Fees</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.length <= 1 && (
                <TableRow>
                  <TableCell
                    className="text-sm text-center font-medium text-theme-silver"
                    colSpan={6}
                  >
                    No data
                  </TableCell>
                </TableRow>
              )}

              {filteredInvoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-block px-3 py-[2px] rounded-sm font-lato text-xs font-bold",
                        invoice.status === "Paid"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      )}
                    >
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold">
                      {formatCurrency(invoice.charges)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className={cn(invoice.refund < 0 ? "text-error" : "")}>
                      {invoice.refund === 0
                        ? "$0.00"
                        : formatCurrency(invoice.refund)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className={cn(invoice.fees < 0 ? "text-error" : "")}>
                      {invoice.fees === 0
                        ? "$0.00"
                        : formatCurrency(invoice.fees)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold">{formatCurrency(invoice.total)}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
