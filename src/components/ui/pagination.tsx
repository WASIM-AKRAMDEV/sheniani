"use client"

import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  return (
    <div className={cn("flex items-center justify-center mt-9 gap-1", className)}>
      {/* Previous button */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={cn(
          "h-12 w-12 flex items-center justify-center rounded-full text-gray-400",
          currentPage === 1 ? "bg-transparent" : "bg-gray-100 hover:bg-gray-200",
        )}
      >
        <ArrowLeft className="size-6" />
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "h-12 w-12 rounded-full flex items-center justify-center text-sm font-medium font-lato ",
            currentPage === page
              ? "bg-theme-orange text-white font-bold"
              : "text-light-para hover:bg-smoke hover:text-black hover:font-bold",
          )}
        >
          {page < 10 ? `0${page}` : page}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={cn(
          "h-12 w-12 flex items-center justify-center rounded-full text-black",
          currentPage === totalPages ? "bg-transparent" : "bg-gray-100 hover:bg-gray-200",
        )}
      >
        <ArrowRight className="size-6" />
      </button>
    </div>
  )
}

export const PaginationContent = () => null
export const PaginationItem = () => null
export const PaginationLink = () => null
export const PaginationEllipsis = () => null
export const PaginationPrevious = () => null
export const PaginationNext = () => null
