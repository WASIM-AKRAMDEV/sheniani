"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { format } from "date-fns"
import type { Transaction } from "@/types/contact-history"

interface TransactionsTableProps {
  transactions: Transaction[]
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="bg-white border-2 border-primary-500/10 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Connects</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{format(transaction.date, "MMMM dd, yyyy")}</TableCell>
                <TableCell>
                  <div>
                    {transaction.action && <p className="font-semibold font-lato text-sm ">{transaction.action}</p>}
                    {transaction.details && <p className="font-semibold font-lato text-xs ">{transaction.details}</p>}
                  </div>
                </TableCell>
                <TableCell className="">
                  {transaction.connects > 0 ? "+" : ""}
                  {transaction.connects && <p className="font-bold">{transaction.connects}</p>}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3}>No transactions found matching your filters.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
