"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { Ad } from "@/types/ads"
import { Eye, MoreVertical, Pause, PenLine, Play, RefreshCw, Trash } from "lucide-react"

interface AdsTableProps {
  ads: Ad[]
  onDeleteAd: (id: string) => void
}

export function AdsTable({ ads, onDeleteAd }: AdsTableProps) {
  // Get status badge color
  const getStatusBadge = (status: Ad["status"]) => {
    switch (status) {
      case "Active":
        return "bg-success/10 text-success"
      case "Pending":
        return "bg-warning/10 text-warning"
      case "Expired":
        return "bg-error/10 text-error"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ads Title</TableHead>
            <TableHead>Business Name</TableHead>
            <TableHead>Placement</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ads.length === 0 && (
            <TableRow>
              <TableCell className="text-sm text-center font-medium text-theme-silver" colSpan={6}>
                No data
              </TableCell>
            </TableRow>
          )}

          {ads.map((ad) => (
            <AdRow key={ad.id} ad={ad} onDeleteAd={onDeleteAd} getStatusBadge={getStatusBadge} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

interface AdRowProps {
  ad: Ad
  onDeleteAd: (id: string) => void
  getStatusBadge: (status: Ad["status"]) => string
}

function AdRow({ ad, onDeleteAd, getStatusBadge }: AdRowProps) {
  // Action handlers
  const handleViewDetails = (id: string) => {
    console.log(`Viewing details for ad ${id}`)
    // TODO: Implement view details functionality
  }

  const handleEditAd = (id: string) => {
    console.log(`Editing ad ${id}`)
    // TODO: Implement edit functionality
  }

  const handleToggleStatus = (id: string, action: string) => {
    console.log(`${action} ad ${id}`)
    // TODO: Implement status toggle functionality
  }

  const handleDeleteAd = (id: string) => {
    console.log(`Deleting ad ${id}`)
    onDeleteAd(id)
  }

  return (
    <TableRow>
      <TableCell>{ad.title}</TableCell>
      <TableCell>{ad.businessName}</TableCell>
      <TableCell>
      {ad.placement}
      </TableCell>
      <TableCell>
        <p className="font-bold">
          {typeof ad.amount === "number" ? `$${ad.amount.toLocaleString()}` : ad.clicks.toLocaleString()}
        </p>
      </TableCell>
      <TableCell>
        <span
          className={cn("inline-block px-3 py-0.5 rounded-sm font-lato text-xs font-bold", getStatusBadge(ad.status))}
        >
          {ad.status}
        </span>
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-6 w-6 border-1 rounded-md !p-0">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem onClick={() => handleViewDetails(ad.id)}>
              <Eye className="mr-2 h-4 w-4" />
              View details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleEditAd(ad.id)}>
              <PenLine className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            {ad.status === "Active" ? (
              <DropdownMenuItem onClick={() => handleToggleStatus(ad.id, "Pause")}>
                <Pause className="mr-2 h-4 w-4" />
                Pause
              </DropdownMenuItem>
            ) : ad.status === "Pending" ? (
              <DropdownMenuItem onClick={() => handleToggleStatus(ad.id, "Activate")}>
                <Play className="mr-2 h-4 w-4" />
                Activate
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={() => handleToggleStatus(ad.id, "Renew")}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Renew
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleDeleteAd(ad.id)} className="text-error">
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
