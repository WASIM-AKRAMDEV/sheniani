"use client"

import { Tabs, type TabItem } from "@/components/ui/tabs"
import { User, Pencil, Globe, Settings } from "lucide-react"

type SettingsTabType = "Personal" | "Profile" | "Social Links" | "Account Setting"

interface SettingsTabsProps {
  defaultTab?: SettingsTabType
  onTabChange?: (tab: SettingsTabType) => void
  className?: string
}

export function SettingsTabs({ defaultTab = "Personal", onTabChange, className }: SettingsTabsProps) {
  const tabItems: TabItem[] = [
    { id: "Personal", label: "Personal", icon: <User className="h-4 w-4" /> },
    { id: "Profile", label: "Profile", icon: <Pencil className="h-4 w-4" /> },
    { id: "Social Links", label: "Social Links", icon: <Globe className="h-4 w-4" /> },
    { id: "Account Setting", label: "Account Setting", icon: <Settings className="h-4 w-4" /> },
  ]

  return (
    <Tabs
      items={tabItems}
      defaultTab={defaultTab}
      onTabChange={(tabId) => onTabChange?.(tabId as SettingsTabType)}
      variant="underlined"
      className={className}
    />
  )
}
