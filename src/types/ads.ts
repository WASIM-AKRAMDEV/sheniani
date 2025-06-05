export type Ad = {
    id: string
    title: string
    businessName: string
    placement: string | number
    clicks: number
    status: "Active" | "Pending" | "Expired"
    amount?: number
  }
  
  export type AdsSummaryStats = {
    totalActiveAds: number
    pendingApproval: number
    adRevenue: number
    topPerformingAd: string
  }
  