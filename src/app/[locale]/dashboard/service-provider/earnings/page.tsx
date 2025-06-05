"use client"

import { EarningsSection } from "@/components/dashboard/earnings/earnings-section"
import { EarningsSummary } from "@/components/dashboard/earnings/earnings-summary"
import { Earning } from "@/types/earnings"


const earningsData: Earning[] = [
  {
    id: "1",
    referralName: "John Doe",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 2801,
  },
  {
    id: "2",
    referralName: "Vickey Foley",
    signupDate: "March 22, 2025",
    status: "Inactive",
    earnings: 5801,
  },
  {
    id: "3",
    referralName: "Jennifer White",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 280,
  },
  {
    id: "4",
    referralName: "William Johnson",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 180,
  },
  {
    id: "5",
    referralName: "Johnny Bravo",
    signupDate: "March 22, 2025",
    status: "Inactive",
    earnings: 3201,
  },
  {
    id: "6",
    referralName: "Jimmy Neutron",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 4801,
  },
  {
    id: "7",
    referralName: "Sarah Connor",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 1250,
  },
  {
    id: "8",
    referralName: "Michael Scott",
    signupDate: "March 22, 2025",
    status: "Inactive",
    earnings: 3500,
  },
  {
    id: "9",
    referralName: "Pam Beesly",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 2100,
  },
  {
    id: "10",
    referralName: "Jim Halpert",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 2300,
  },
  {
    id: "11",
    referralName: "Dwight Schrute",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 4200,
  },
  {
    id: "12",
    referralName: "Angela Martin",
    signupDate: "March 22, 2025",
    status: "Inactive",
    earnings: 1800,
  },
  {
    id: "13",
    referralName: "Kevin Malone",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 950,
  },
  {
    id: "14",
    referralName: "Oscar Martinez",
    signupDate: "March 22, 2025",
    status: "Active",
    earnings: 3100,
  },
]

export default function EarningsPage() {
  return (
    <div>
      {/* Summary Cards */}
      <EarningsSummary />

      {/* Earnings Table Section */}
      <EarningsSection earnings={earningsData} />
    </div>
  )
}
