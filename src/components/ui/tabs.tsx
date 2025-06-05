"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

// Base tab item interface
export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  count?: number;
  disabled?: boolean;
}

// Tab component props
interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  variant?: "pills" | "underlined";
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Main Tabs component
export function Tabs({
  items,
  defaultTab,
  onTabChange,
  variant = "pills",
  className,
  size = "md",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id || "");

  const handleTabChange = (tabId: string) => {
    const item = items.find((item) => item.id === tabId);
    if (item?.disabled) return;

    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  if (variant === "underlined") {
    return (
      <div className={cn("border-b border-theme-gray", className)}>
        <div className="flex">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              disabled={item.disabled}
              className={cn(
                "flex items-center gap-2 py-3 px-5 cursor-pointer border-b-2 border-transparent text-sm font-medium transition-colors relative",
                activeTab === item.id
                  ? "text-dark-primary font-semibold border-dark-primary"
                  : "text-theme-silver hover:text-dark-primary",
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Pills variant (default)
  const sizeClasses = {
    sm: "px-4 h-10 text-sm",
    md: "px-7 h-14 text-base",
    lg: "px-8 h-16 text-lg",
  };

  return (
    <div className={cn("flex space-x-4", className)}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleTabChange(item.id)}
          disabled={item.disabled}
          className={cn(
            "rounded-full cursor-pointer font-medium transition-colors flex items-center gap-2",
            sizeClasses[size],
            activeTab === item.id
              ? "bg-dark-primary text-white"
              : "bg-smoke text-para hover:bg-smoke-dark",
            item.disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {item.icon}
          {item.label}
          {item.count !== undefined && (
            <span
              className={cn(
                "ml-1 text-xs px-1.5 py-0.5 rounded-full",
                activeTab === item.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-200 text-gray-600"
              )}
            >
              {item.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// Tab content wrapper component
interface TabContentProps {
  activeTab: string;
  children: ReactNode;
  className?: string;
}

export function TabContent({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  activeTab,
  children,
  className,
}: TabContentProps) {
  return <div className={cn("mt-6", className)}>{children}</div>;
}

// Individual tab panel component
interface TabPanelProps {
  tabId: string;
  activeTab: string;
  children: ReactNode;
  className?: string;
}

export function TabPanel({
  tabId,
  activeTab,
  children,
  className,
}: TabPanelProps) {
  if (tabId !== activeTab) return null;

  return <div className={className}>{children}</div>;
}
