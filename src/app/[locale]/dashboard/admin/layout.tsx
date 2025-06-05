"use client";

import type React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/layout/AppSidebar/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader/DashboardHeader";

export default function ServiceProviderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Improved title extraction logic
  const getPageTitle = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];
    const secondLastSegment = pathSegments[pathSegments.length - 2];

    if (secondLastSegment === "submit-proposal") return "Submit a Proposal";
    if (secondLastSegment === "proposal-details") return "Proposal Detail";
    if (secondLastSegment === "service-detail") return "Dashboard";
    if (secondLastSegment === "home") return "Dashboard";

    // Default: Convert the last segment to title case
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />
        <div className="flex-1 flex w-full flex-col overflow-hidden">
          <DashboardHeader title={getPageTitle()} />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
