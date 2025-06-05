"use client"

import { useState } from "react"
import { EarningsTable } from "./earning-table"
import { Pagination } from "@/components/ui/pagination"
import type { Earning } from "@/types/earnings"

interface EarningsSectionProps {
  earnings: Earning[]
}

export function EarningsSection({ earnings }: EarningsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Calculate pagination
  const totalPages = Math.ceil(earnings.length / itemsPerPage)
  const currentEarnings = earnings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <EarningsTable earnings={currentEarnings} />

      {/* Pagination */}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </div>
  )
}
