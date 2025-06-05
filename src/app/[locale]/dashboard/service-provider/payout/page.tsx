"use client"

import { useState } from "react"
import { Pagination } from "@/components/ui/pagination"
import { PayoutTable } from "@/components/payout/payoutTable"
import { Paylot } from "@/types/paylot"

const earningsData: Paylot[] = [
    {
      id: "1",
      clientName: "John Doe",
      type: "Electrician",
      hours: 4,
      earnings: 3200,
      added: "March 20, 2025",
      finished: "March 21, 2025",
    },
    {
      id: "2",
      clientName: "Jane Smith",
      type: "Plumber",
      hours: 3,
      earnings: 2500,
      added: "March 18, 2025",
      finished: "March 20, 2025",
    },
    {
      id: "3",
      clientName: "Mike Johnson",
      type: "Carpenter",
      hours: 5,
      earnings: 3600,
      added: "March 15, 2025",
      finished: "March 19, 2025",
    },
    {
      id: "4",
      clientName: "Emily Davis",
      type: "Painter",
      hours: 2,
      earnings: 1800,
      added: "March 10, 2025",
      finished: "March 12, 2025",
    },
    {
      id: "5",
      clientName: "Chris Lee",
      type: "Gardener",
      hours: 6,
      earnings: 4000,
      added: "March 14, 2025",
      finished: "March 16, 2025",
    },
    {
      id: "6",
      clientName: "Sophia Brown",
      type: "Mason",
      hours: 7,
      earnings: 4500,
      added: "March 11, 2025",
      finished: "March 13, 2025",
    },
    {
      id: "7",
      clientName: "Liam Wilson",
      type: "Mechanic",
      hours: 3,
      earnings: 2800,
      added: "March 9, 2025",
      finished: "March 10, 2025",
    },
    {
      id: "8",
      clientName: "Olivia Martinez",
      type: "Welder",
      hours: 5,
      earnings: 3500,
      added: "March 7, 2025",
      finished: "March 8, 2025",
    },
    {
      id: "9",
      clientName: "Noah Anderson",
      type: "Cleaner",
      hours: 2,
      earnings: 1500,
      added: "March 5, 2025",
      finished: "March 6, 2025",
    },
    {
      id: "10",
      clientName: "Ava Thomas",
      type: "Handyman",
      hours: 4,
      earnings: 3000,
      added: "March 3, 2025",
      finished: "March 4, 2025",
    },
  ]
  
const ITEMS_PER_PAGE = 5

export default function Payout() {
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentEarnings = earningsData.slice(startIndex, endIndex)
  const totalPages = Math.ceil(earningsData.length / ITEMS_PER_PAGE)

  return (
    <>
      <div className="p-6">
        <PayoutTable earnings={currentEarnings} />
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  )
}
