export type Invoice = {
  id: string;
  service: string;
  date: string;
  status: "Paid" | "Pending";
  charges: number;
  escrowAmount: number;
  total: number;
};

export type PaymentControlItem = {
  title: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
};
