"use client";

import { MessageInvoice } from "@/components/dashboard/messaging-and-alerts/messaging-invoice";
import { PaymentControl } from "@/components/dashboard/messaging-and-alerts/payment-control";
import { Invoice } from "@/types/messaging-and-alerts";

export default function MessageAndAlerts() {
   // Sample data for the dashboard
   const invoiceData: Invoice[] = [
  {
    id: "1",
    service: "Bathroom Renovation in London",
    date: "March 22, 2025",
    status: "Pending",
    charges: 2987,
    escrowAmount: 145.16,
    total: 2801,
  },
  {
    id: "2",
    service: "Bathroom Renovation in London",
    date: "March 26, 2025",
    status: "Paid",
    charges: 5987,
    escrowAmount: 0.0,
    total: 5801,
  },
  {
    id: "3",
    service: "Bathroom Renovation in London",
    date: "March 28, 2025",
    status: "Pending",
    charges: 2987,
    escrowAmount: 145.16,
    total: 2801,
  },
  {
    id: "4",
    service: "Bathroom Renovation in London",
    date: "March 30, 2025",
    status: "Paid",
    charges: 5987,
    escrowAmount: 0.0,
    total: 5801,
  },
  {
    id: "5",
    service: "Bathroom Renovation in London",
    date: "April 01, 2025",
    status: "Pending",
    charges: 2987,
    escrowAmount: 145.16,
    total: 2801,
  },
  {
    id: "6",
    service: "Bathroom Renovation in London",
    date: "April 02, 2025",
    status: "Paid",
    charges: 5987,
    escrowAmount: 0.0,
    total: 5801,
  },
];
  return (
   <div>
   <PaymentControl/>
   <MessageInvoice invoices={invoiceData}/>
  </div>
  );

}
