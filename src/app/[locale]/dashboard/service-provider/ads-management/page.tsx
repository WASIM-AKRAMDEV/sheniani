"use client"

import { useState } from "react"
import { AdsSummary } from "@/components/dashboard/ads-management/ads-summary"
import { AdsSection } from "@/components/dashboard/ads-management/ads-section"
import type { Ad } from "@/types/ads"

// Sample data
const adsData: Ad[] = [
  {
    id: "1",
    title: "20% Off Home Renovation",
    businessName: "BuildPro Ltd.",
    placement: "Homepage",
    clicks: 2500,
    status: "Active",
  },
  {
    id: "2",
    title: "Plumbing Discounts",
    businessName: "Quickfix Services",
    placement: "Dashboard",
    clicks: 1200,
    status: "Pending",
  },
  {
    id: "3",
    title: "Premium Interior Design",
    businessName: "Elegant Homes",
    placement: "Category Page",
    clicks: 3800,
    status: "Expired",
  },
  {
    id: "4",
    title: "William Johnson",
    businessName: "Lawn Care",
    placement: "6",
    clicks: 0,
    status: "Pending",
    amount: 180,
  },
  {
    id: "5",
    title: "Johnny Bravo",
    businessName: "Handyman",
    placement: "16",
    clicks: 0,
    status: "Active",
    amount: 3201,
  },
  {
    id: "6",
    title: "Jimmy Neutron",
    businessName: "Electrician",
    placement: "27",
    clicks: 0,
    status: "Expired",
    amount: 4801,
  },
  {
    id: "7",
    title: "Jimmy Neutron",
    businessName: "Electrician",
    placement: "27",
    clicks: 0,
    status: "Expired",
    amount: 4801,
  },
  {
    id: "8",
    title: "Jimmy Neutron",
    businessName: "Electrician",
    placement: "27",
    clicks: 0,
    status: "Expired",
    amount: 4801,
  },
  {
    id: "9",
    title: "Summer Special",
    businessName: "Cool Air Inc.",
    placement: "Homepage",
    clicks: 1850,
    status: "Active",
  },
  {
    id: "10",
    title: "Fall Cleanup",
    businessName: "Garden Masters",
    placement: "Category Page",
    clicks: 920,
    status: "Pending",
  },
  {
    id: "11",
    title: "Holiday Deals",
    businessName: "Festive Decor",
    placement: "Dashboard",
    clicks: 3100,
    status: "Active",
  },
  {
    id: "12",
    title: "New Year Sale",
    businessName: "Time Pieces",
    placement: "Homepage",
    clicks: 2700,
    status: "Pending",
  },
]

export default function AdsManagementPage() {
  const [ads, setAds] = useState<Ad[]>(adsData)

  // Handle ad deletion
  const handleDeleteAd = (id: string) => {
    setAds(ads.filter((ad) => ad.id !== id))
  }

  return (
    <div>
      {/* Summary Cards */}
      <AdsSummary />

      {/* Ads Table Section */}
      <AdsSection ads={ads} onDeleteAd={handleDeleteAd} />
    </div>
  )
}
