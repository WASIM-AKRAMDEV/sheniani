"use client";

import { useState } from "react";
import { Pagination } from "@/components/ui/pagination";
import { sampleTransactions } from "@/data/contact-history-data";
import type { ConnectType } from "@/types/contact-history";
import { BalanceSection } from "@/components/dashboard/contact-history/balance-section";
import { FilterSection } from "@/components/dashboard/contact-history/filter-section";
import { TransactionsTable } from "@/components/dashboard/contact-history/transactions-table";

export default function ContactHistory() {
  const [connectType, setConnectType] = useState<ConnectType>("All Connects");
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [actionFilters, setActionFilters] = useState<string[]>([]);

  const itemsPerPage = 6;
  const totalBalance = 611;

  // Filter transactions based on selected filters
  const filteredTransactions = sampleTransactions.filter((transaction) => {
    // Filter by connect type
    if (connectType !== "All Connects" && transaction.action !== connectType) {
      return false;
    }

    // Filter by date range
    if (dateRange.from && transaction.date < dateRange.from) {
      return false;
    }
    if (dateRange.to) {
      const toDateEnd = new Date(dateRange.to);
      toDateEnd.setHours(23, 59, 59, 999);
      if (transaction.date > toDateEnd) {
        return false;
      }
    }

    // Filter by selected actions
    if (
      actionFilters.length > 0 &&
      !actionFilters.includes(transaction.action)
    ) {
      return false;
    }

    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full">
      {/* Balance and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-7.5 mb-10 w-full">
        <BalanceSection totalBalance={totalBalance} />
        <FilterSection
          connectType={connectType}
          setConnectType={setConnectType}
          setCurrentPage={setCurrentPage}
          dateRange={dateRange}
          setDateRange={setDateRange}
          actionFilters={actionFilters}
          setActionFilters={setActionFilters}
          sampleTransactions={sampleTransactions}
        />
      </div>

      {/* Transactions Table */}
      <TransactionsTable transactions={paginatedTransactions} />

      {/* Pagination */}
      {filteredTransactions.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
