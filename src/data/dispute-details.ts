import { DisputeData } from "@/types/dispute";

// Sample data for the dispute details page
export const disputeData: DisputeData = {
  id: "1",
  serviceDetails: "Premium Home Cleaning Service",
  orderId: "SHN-2025-00123",
  buyer: "David Johnson",
  transactionAmount: "₦75,000.00",
  disputeReason: "Service not delivered",
  disputeType: "Chargeback",
  requestDetail: "The customer claims that the booked cleaning service was not provided as scheduled. They attempted to contact the service provider but received no response. The customer is seeking a full or partial refund for the service.",
  proofUploaded: [
    {
      filename: "contract_agreement.pdf",
      type: "pdf",
      url: "/files/contract_agreement.pdf"
    },
    {
      filename: "screenshot_chat.png",
      type: "image",
      url: "/files/screenshot_chat.png"
    }
  ],
  additionalProofCount: 4,
  resolution: {
    disputeId: "DSH-2025-45678",
    expiredOn: "Expired On",
    status: "Resolved",
    resolutionReached: "Partial Refund to Client",
    amountRefunded: "₦40,000.00",
    history: [
      {
        name: "Emma Roberts",
        initials: "ER",
        avatarUrl: "/images/user1.png",
        date: "March 25, 2025",
        action: "(Emma Roberts) initiated a dispute for transaction ID #SVC-2025-87412"
      },
      {
        name: "Emma Roberts",
        initials: "ER",
        avatarUrl: "/images/user2.png",
        date: "March 25, 2025",
        action: "(Emma Roberts) initiated a dispute for transaction ID #SVC-2025-87412"
      },
      {
        name: "Emma Roberts",
        initials: "ER",
        avatarUrl: "/images/user3.png",
        date: "March 25, 2025",
        action: "(Emma Roberts) initiated a dispute for transaction ID #SVC-2025-87412"
      },
      {
        name: "Emma Roberts",
        initials: "ER",
        avatarUrl: "/images/user1.png",
        date: "March 25, 2025",
        action: "(Emma Roberts) initiated a dispute for transaction ID #SVC-2025-87412"
      },
      {
        name: "Emma Roberts",
        initials: "ER",
        avatarUrl: "/images/user2.png",
        date: "March 25, 2025",
        action: "(Emma Roberts) initiated a dispute for transaction ID #SVC-2025-87412"
      },
      {
        name: "Emma Roberts",
        initials: "ER",
        avatarUrl: "/images/user3.png",
        date: "March 25, 2025",
        action: "(Emma Roberts) initiated a dispute for transaction ID #SVC-2025-87412"
      }
    ]
  }
}
