"use client"

import { Tabs, type TabItem } from "@/components/ui/tabs"

type MilestoneTabType = "Overview" | "Message" | "Contract Details"

interface MilestoneTabsProps {
  defaultTab?: MilestoneTabType
  onTabChange?: (tab: MilestoneTabType) => void
  className?: string
}

export function MilestoneTabs({ defaultTab = "Overview", onTabChange, className }: MilestoneTabsProps) {
  const tabItems: TabItem[] = [
    { id: "Overview", label: "Overview" },
    { id: "Message", label: "Message" },
    { id: "Contract Details", label: "Contract Details" },
  ]

  return (
    <Tabs
      items={tabItems}
      defaultTab={defaultTab}
      onTabChange={(tabId) => onTabChange?.(tabId as MilestoneTabType)}
      variant="pills"
      size="md"
      className={className}
    />
  )
}
