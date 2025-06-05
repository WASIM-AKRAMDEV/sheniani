export type ConnectType = "All Connects" | "Availability Badge" | "Applied to Job" | "Purchased Connects"

export interface Transaction {
  id: string
  date: Date
  action: string
  details?: string
  connects: number
}
