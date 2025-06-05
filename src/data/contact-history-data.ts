import type { Transaction } from "@/types/contact-history"

export const sampleTransactions: Transaction[] = [
  {
    id: "1",
    date: new Date("2025-03-22"),
    action: "Availability Badge",
    connects: -1,
  },
  {
    id: "2",
    date: new Date("2025-03-26"),
    action: "Applied to Job",
    details: "Bathroom Renovation in London",
    connects: -21,
  },
  {
    id: "3",
    date: new Date("2025-03-28"),
    action: "Availability Badge",
    connects: -20,
  },
  {
    id: "4",
    date: new Date("2025-03-30"),
    action: "Availability Badge",
    connects: -1,
  },
  {
    id: "5",
    date: new Date("2025-04-01"),
    action: "Availability Badge",
    connects: -1,
  },
  {
    id: "6",
    date: new Date("2025-04-02"),
    action: "Availability Badge",
    connects: -1,
  },
  {
    id: "7",
    date: new Date("2025-04-05"),
    action: "Applied to Job",
    details: "Kitchen Remodel in Manchester",
    connects: -15,
  },
  {
    id: "8",
    date: new Date("2025-04-07"),
    action: "Availability Badge",
    connects: -1,
  },
  {
    id: "9",
    date: new Date("2025-04-10"),
    action: "Applied to Job",
    details: "Office Renovation in Birmingham",
    connects: -18,
  },
  {
    id: "10",
    date: new Date("2025-04-12"),
    action: "Availability Badge",
    connects: -1,
  },
  {
    id: "11",
    date: new Date("2025-04-15"),
    action: "Purchased Connects",
    connects: 100,
  },
  {
    id: "12",
    date: new Date("2025-04-18"),
    action: "Applied to Job",
    details: "Basement Conversion in Leeds",
    connects: -25,
  },
]
