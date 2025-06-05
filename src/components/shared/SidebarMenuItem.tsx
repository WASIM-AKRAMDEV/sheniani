"use client";
import Image from "next/image";
import React from "react";

interface SidebarMenuItemProps {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  label,
  active = false,
  badge,
}) => {
  const baseClasses =
    "flex gap-4 items-center px-4 py-3 mt-2 w-full text-base leading-loose";
  const activeClasses = active
    ? "font-bold text-white whitespace-nowrap bg-amber-500 rounded-lg"
    : "text-neutral-400 whitespace-nowrap rounded-lg";

  return (
    <div
      className={`${baseClasses} ${activeClasses} ${
        label === "Home" ? "mt-0" : ""
      }`}
    >
      <Image
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        width={24}
        height={24}
      />
      <div className="flex-1 shrink self-stretch my-auto basis-0">{label}</div>
      {badge && (
        <div className="self-stretch pr-2 pl-2 my-auto w-6 h-6 text-sm leading-6 text-white bg-red-500 rounded-md min-h-6">
          {badge}
        </div>
      )}
    </div>
  );
};

export default SidebarMenuItem;
