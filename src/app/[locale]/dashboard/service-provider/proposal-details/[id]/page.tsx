import ProposalDetailsView from "@/components/dashboard/proposals/proposal-details-view"
import { notFound } from "next/navigation"

// Sample proposal data - in a real app, this would come from an API or database
const proposalData = {
  id: 1,
  jobTitle: "Bathroom Renovation in London",
  jobDescription: `Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellen tesque eget maximus tellus. Duis et
  est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu
  commodo sollicitudin. Integer finibus blandit condimentum. Vivamus it amet ligula ullamcorper, pulvinar ante id,
  tristique erat.`,
  responsibilities: [
    "Quisque semper gravida est et consectetur.",
    "Curabitur blandit lorem velit, vitae pretium leo placerat eget.",
    "Morbi mattis in ipsum ac tempus...",
  ],
  skills: ["Ac Repair", "Handyman", "Electrician", "Plumber"],
  profile: "Handyman",
  hourlyRate: 4.5,
  clientBudget: {
    min: 10.0,
    max: 25.0,
  },
  coverLetter: [
    "Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellen tesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus it amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.",
    "Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in ne ue sit amet orci interdum tincidunt.",
    "Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in ne ue sit amet orci interdum tincidunt.",
    "Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in ne ue sit amet orci interdum tincidunt.",
    "Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in ne ue sit amet orci interdum tincidunt.",
  ],
  client: {
    phoneVerified: true,
    paymentVerified: true,
    rating: 5.0,
    reviewCount: 2,
    location: "UK",
    locationDetails: "Purchase, 12:52 pm",
    jobsPosted: 5,
    hireRate: "80%",
    openJobs: 2,
    totalSpent: "$648",
    hires: 4,
    activeHires: 0,
    companySize: "Small company (2-9 people)",
  },
}

export default function ProposalDetailsPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  // In a real app, you would fetch the proposal data based on the ID
  if (isNaN(id) || id < 1) {
    notFound()
  }

  // For demo purposes, we're using the same proposal data for all IDs
  return <ProposalDetailsView proposal={proposalData} />
}
