// Existing types from previous implementation
export type Dispute = {
  id: string
  jobTitle: string
  clientName: string
  applicationId: string
  status: "Open" | "In Progress" | "Resolved" | "Closed"
  dateCreated: string
  priority: "Low" | "Medium" | "High"
}

export type DisputeSummaryStats = {
  totalDisputes: number
  openDisputes: number
  resolvedDisputes: number
  averageResolutionTime: string
}

// New types for dispute details page
export type ProofFile = {
  filename: string
  type: "pdf" | "image" | "doc"
  url?: string
}

export type HistoryEntry = {
  name: string
  initials: string
  avatarUrl: string
  date: string
  action: string
}

export type DisputeResolutionData = {
  disputeId: string
  expiredOn: string
  status: "Resolved" | "Pending" | "In Progress" | "Rejected"
  resolutionReached: string
  amountRefunded: string
  history: HistoryEntry[]
}

export type DisputeData = {
  id: string
  serviceDetails: string
  orderId: string
  buyer: string
  transactionAmount: string
  disputeReason: string
  disputeType: string
  requestDetail: string
  proofUploaded: ProofFile[]
  additionalProofCount: number
  resolution: DisputeResolutionData
}
