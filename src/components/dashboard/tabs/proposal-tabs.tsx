"use client";

import { Tabs, type TabItem } from "@/components/ui/tabs";

type TabType = "Active" | "Referrals" | "Archived";

interface ProposalTabsProps {
  defaultTab?: TabType;
  onTabChange?: (tab: TabType) => void;
  className?: string;
}

export function ProposalTabs({
  defaultTab = "Active",
  onTabChange,
  className,
}: ProposalTabsProps) {
  const tabItems: TabItem[] = [
    { id: "Active", label: "Active" },
    { id: "Referrals", label: "Referrals" },
    { id: "Archived", label: "Archived" },
  ];

  return (
    <Tabs
      items={tabItems}
      defaultTab={defaultTab}
      onTabChange={(tabId) => onTabChange?.(tabId as TabType)}
      variant="pills"
      size="md"
      className={className}
    />
  );
}
