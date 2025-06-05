export type Invoice = {
  id: string;
  date: string;
  status: "Paid" | "Pending";
  charges: number;
  refund: number;
  fees: number;
  total: number;
};

export type PaymentSummaryItem = {
  title: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
};
