"use client"

import { DisputeSection } from "@/components/dashboard/dispute-management/dispute-section"
import type { Dispute } from "@/types/dispute"
import { useState } from "react"

// Sample data
const disputesData: Dispute[] = [
  {
    id: "1",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Open",
    dateCreated: "2025-03-15",
    priority: "High",
  },
  {
    id: "2",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "In Progress",
    dateCreated: "2025-03-14",
    priority: "Medium",
  },
  {
    id: "3",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Open",
    dateCreated: "2025-03-13",
    priority: "High",
  },
  {
    id: "4",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Resolved",
    dateCreated: "2025-03-12",
    priority: "Low",
  },
  {
    id: "5",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Open",
    dateCreated: "2025-03-11",
    priority: "Medium",
  },
  {
    id: "6",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Closed",
    dateCreated: "2025-03-10",
    priority: "Low",
  },
  {
    id: "7",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "In Progress",
    dateCreated: "2025-03-09",
    priority: "High",
  },
  {
    id: "8",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Open",
    dateCreated: "2025-03-08",
    priority: "Medium",
  },
  {
    id: "9",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Resolved",
    dateCreated: "2025-03-07",
    priority: "Low",
  },
  {
    id: "10",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Open",
    dateCreated: "2025-03-06",
    priority: "High",
  },
  {
    id: "11",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "In Progress",
    dateCreated: "2025-03-05",
    priority: "Medium",
  },
  {
    id: "12",
    jobTitle: "Premium Home Cleaning Service",
    clientName: "David Johnson",
    applicationId: "SHN-2025-00123",
    status: "Closed",
    dateCreated: "2025-03-04",
    priority: "Low",
  },
]

export default function DisputeManagementPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [disputes, setDisputes] = useState<Dispute[]>(disputesData)

  return (
    <div>
      {/* Disputes Table Section */}
      <DisputeSection disputes={disputes} />
    </div>
  )
}
