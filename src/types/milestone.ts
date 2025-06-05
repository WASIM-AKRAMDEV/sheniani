export interface Milestone {
    title: string
    amount: number
    status: "paid" | "active" | "pending"
  }
  
  export interface ProjectData {
    title: string
    freelancer: {
      name: string
      role: string
      avatar: string
    }
    price: number
    escrow: number
    milestones: Milestone[]
  }
  
  export type MilestoneTabType = "Overview" | "Message" | "Contract Details"
  