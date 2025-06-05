"use client";

import { InvoiceSection } from "@/components/dashboard/payments/invoice-section";
import { PaymentSummary } from "@/components/dashboard/payments/payment-summary";
import { Button } from "@/components/ui/button";
import { Invoice } from "@/types/payment";
import Image from "next/image";

export default function PaymentPage() {
  // Sample data for the dashboard
  const invoiceData: Invoice[] = [
    {
      id: "1",
      date: "March 22, 2025",
      status: "Pending",
      charges: 2987,
      refund: 0,
      fees: -145.16,
      total: 2801,
    },
    {
      id: "2",
      date: "March 26, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "3",
      date: "March 28, 2025",
      status: "Pending",
      charges: 2987,
      refund: 0,
      fees: -145.16,
      total: 2801,
    },
    {
      id: "4",
      date: "March 30, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "5",
      date: "April 01, 2025",
      status: "Pending",
      charges: 2987,
      refund: 0,
      fees: -145.16,
      total: 2801,
    },
    {
      id: "6",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "7",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "8",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "9",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "10",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "11",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "12",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "13",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "14",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "15",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "16",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "17",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "18",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "19",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
    {
      id: "20",
      date: "April 02, 2025",
      status: "Paid",
      charges: 5987,
      refund: -145.16,
      fees: 0,
      total: 5801,
    },
  ];

  return (
    <div>
      <div className="flex gap-2 mb-8">
        <Button
          variant="secondary"
          size={'2xl'}
          className="text-para   font-medium rounded-full bg-smoke"
        >
          <Image
            src={"/icons/document.svg"}
            alt="document"
            width={24}
            height={24}
          />
          <span>Document</span>
        </Button>
        <Button
          variant="secondary"
          size={'2xl'}
          className="text-para   font-medium rounded-full bg-smoke"
        >
          <Image
            src={"/icons/export.svg"}
            alt="Export"
            width={24}
            height={24}
          />
          <span>Export</span>
        </Button>
      </div>
      <PaymentSummary />
      <InvoiceSection invoices={invoiceData} />
    </div>
  );
}
