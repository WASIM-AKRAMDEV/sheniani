"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items with updated icons
const items = [
  {
    title: "Home",
    url: "/dashboard/service-provider/home",
    icon: "/icons/home.svg",
  },
  {
    title: "Manage Proposal",
    url: "/dashboard/service-provider/manage-proposal",
    icon: "/icons/documenttext.svg",
  },
  {
    title: "Messages",
    url: "/dashboard/service-provider/messages",
    icon: "/icons/message.svg",
  },
  {
    title: "Payments",
    url: "/dashboard/service-provider/payments",
    icon: "/icons/Payments.svg",
  },
  {
    title: "Earnings",
    url: "/dashboard/service-provider/earnings",
    icon: "/icons/Earnings.svg",
  },
  {
    title: "Payout",
    url: "/dashboard/service-provider/payout",
    icon: "/icons/Earnings.svg",
  },
  {
    title: "Fee Structure",
    url: "/dashboard/service-provider/fee-structure",
    icon: "/icons/Earnings.svg",
  },
  {
    title: "Dispute Management",
    url: "/dashboard/service-provider/dispute-management",
    icon: "/icons/warning.svg",
  },
  {
    title: "Ads Management",
    url: "/dashboard/service-provider/ads-management",
    icon: "/icons/ads.svg",
  },
  {
    title: "Milestones",
    url: "/dashboard/service-provider/milestones",
    icon: "/icons/Milestones.svg",
  },
  {
    title: "Settings",
    url: "/dashboard/service-provider/settings",
    icon: "/icons/setting2.svg",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="h-full !bg-white p-8 flex flex-col justify-between border-r border-theme-gray-two w-[320px] shrink-0">
      <div className="mb-12">
        <Image src="/images/logo.png" alt="SHENIANI" width={237} height={37} />
      </div>

      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup className="p-0">
          <SidebarGroupContent className="p-0">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname.includes(item.url);
                return (
                  <SidebarMenuItem key={item.title} className="w-full">
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center group sidebar-item gap-4 py-3 px-4 min-h-[50px] rounded-lg transition-colors
                          ${
                            isActive
                              ? "bg-theme-orange !text-white"
                              : "text-theme-silver hover:!bg-theme-orange hover:!text-white"
                          }
                        `}
                      >
                        <Image
                          src={item.icon}
                          alt={`${item.title} Icon`}
                          width={24}
                          height={24}
                          className={`w-6 h-6 transition-transform ${
                            isActive ? "make-white" : ""
                          } group-hover:make-white`}
                        />
                        <span className="font-medium text-base">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Connects and User Profile */}
      <div className="mt-5">
        <div className="border-2 border-primary-500/10 p-5 rounded-[12px]">
          <p className="font-medium text-base text-theme-silver">Connects</p>
          <p className="text-xl my-3 text-black font-bold">611</p>
          <Link href={"/dashboard/service-provider/contact-history"}>
            <Button variant="secondary" className="w-full">
              View Detail
            </Button>
          </Link>
        </div>
        <div className="flex items-center mt-6 gap-3 py-4">
          <Avatar className="size-12">
            <AvatarImage src="" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="flex-1 w-full">
            <p className="text-black text-base font-bold">Sebastian Nelson</p>
            <p className="text-sm  text-theme-silver w-[200px] truncate">
              sebastiannelson@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
