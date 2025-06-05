export type Earning = {
    id: string
    referralName: string
    signupDate: string
    status: "Active" | "Inactive"
    earnings: number
  }
  
  export type EarningsSummaryStats = {
    totalReferrals: number
    activeReferrals: number
    pendingReferrals: number
    totalEarnings: number
  }
  