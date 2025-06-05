import type { ProjectData } from "@/types/milestone"

export const mockProjectData: ProjectData = {
  title: "Bathroom Renovation in London",
  freelancer: {
    name: "Ronald Richards",
    role: "Handyman",
    avatar: "/images/user1.png",
  },
  price: 500,
  escrow: 90,
  milestones: [
    { title: "Website", amount: 170, status: "paid" },
    { title: "Dashboard Panel", amount: 120, status: "paid" },
    { title: "Client Panel", amount: 120, status: "paid" },
    { title: "Admin Panel", amount: 120, status: "active" },
  ],
}
