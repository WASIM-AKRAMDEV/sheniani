"use client"

import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { formatCurrency } from "@/utils/format"
import type { Earning } from "@/types/earnings"
import Image from "next/image"
import { useState } from "react"

interface EarningsTableProps {
  earnings: Earning[]
  className?: string
}

export function EarningsTable({ earnings, className }: EarningsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter earnings based on search term
  const filteredEarnings = searchTerm
    ? earnings.filter((earning) => earning.referralName.toLowerCase().includes(searchTerm.toLowerCase()))
    : earnings

  return (
    <div className={cn("rounded-lg p-6 border-2 border-primary-500/10 bg-white", className)}>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Latest Earnings</h2>
        <div className="relative">
          <Image
            src="/icons/search.svg"
            alt="search"
            width={24}
            height={24}
            className="absolute left-3 top-1/2 make-gray -translate-y-1/2"
          />
          <Input
            placeholder="Search"
            className="pl-12 w-[305px] bg-smoke"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Referral Name</TableHead>
              <TableHead>Signup Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Earnings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEarnings.length === 0 && (
              <TableRow>
                <TableCell className="text-sm text-center font-medium text-theme-silver" colSpan={4}>
                  No data
                </TableCell>
              </TableRow>
            )}

            {filteredEarnings.map((earning) => (
              <EarningRow key={earning.id} earning={earning} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

interface EarningRowProps {
  earning: Earning
}

function EarningRow({ earning }: EarningRowProps) {
  return (
    <TableRow>
      <TableCell>{earning.referralName}</TableCell>
      <TableCell>{earning.signupDate}</TableCell>
      <TableCell>
        <span
          className={cn(
            "inline-block px-3 py-[2px] rounded-sm font-lato text-xs font-bold",
            earning.status === "Active" ? "bg-success/10 text-success" : "bg-error/10 text-error",
          )}
        >
          {earning.status}
        </span>
      </TableCell>
      <TableCell>
        <p className="font-bold">{formatCurrency(earning.earnings)}</p>
      </TableCell>
    </TableRow>
  )
}
