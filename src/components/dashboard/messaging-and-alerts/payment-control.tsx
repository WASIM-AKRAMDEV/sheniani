"use client";

import Link from "next/link";

// Summary card data
const controlData = {
  previousPayout: {
    title: "Previous Payout",
    date: "March 22, 2025",
    amount: 4987,
    status: "Paid" as const,
  },
  nextPayout: {
    title: "Next Payout",
    date: "March 26, 2025",
    amount: 4987,
    status: "Pending" as const,
  },
  balance: {
    title: "Balance",
    date: "Est. by March 28, 2025",
    amount: 4987,
  },
};

export function PaymentControl() {
  return (
    <div className="flex flex-row gap-4 mb-8">
      <div className="flex-1 rounded-lg border-2 border-primary-500/10 bg-white px-12.5 py-8">
        <div className="grid grid-cols-2 gap-6">
          <PayoutControlItem
            title={controlData.previousPayout.title}
            date={controlData.previousPayout.date}
            amount={controlData.previousPayout.amount}
            status={controlData.previousPayout.status}
            className="border-r border-primary-500/10"
          />

          <PayoutControlItem
            title={controlData.nextPayout.title}
            date={controlData.nextPayout.date}
            amount={controlData.nextPayout.amount}
            status={controlData.nextPayout.status}
            className="pl-17"
          />
        </div>
      </div>

      <div className="rounded-lg border-2 border-primary-500/10 bg-white p-8 w-[316px]">
        <div className="flex items-baseline gap-10.5">
          <h4 className="text-sm text-theme-silver font-medium mb-1">
            {controlData.balance.title}
          </h4>
          <span className="text-[10px] text-theme-silver -translate-y-1">
            {controlData.balance.date}
          </span>
        </div>
        <p className="text-xl font-bold font-lato text-black">
          ${controlData.balance.amount.toLocaleString()}
        </p>
        <div className="mt-4">
          <Link
            href="#"
            className="text-theme-orange text-sm font-semibold font-lato"
          >
            View Transactions
          </Link>
        </div>
      </div>
    </div>
  );
}

interface PayoutControlItemProps {
  title: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
  className?: string;
}

function PayoutControlItem({
  title,
  date,
  amount,
  status,
  className = "",
}: PayoutControlItemProps) {
  return (
    <div className={className}>
      <div className="flex items-baseline gap-10.5 mb-2">
        <h4 className="text-sm text-para font-medium">{title}</h4>
        <span className="text-[10px] text-para -translate-y-1">
          {date}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <h4 className="text-xl font-bold font-lato text-black">
          ${amount.toLocaleString()}
        </h4>
        <span
          className={`text-xs ${
            status === "Paid"
              ? "bg-success/10 text-success"
              : "bg-warning/10 text-warning"
          } font-lato font-bold px-3.5 py-1 rounded-sm`}
        >
          {status}
        </span>
      </div>
      <div className="mt-2">
        <Link
          href="#"
          className="text-theme-orange text-xs font-semibold font-lato"
        >
          View Transactions
        </Link>
      </div>
    </div>
  );
}
