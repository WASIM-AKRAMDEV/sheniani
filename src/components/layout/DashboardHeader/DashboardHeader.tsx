"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="min-h-[110px] border-b border-theme-gray-two bg-white px-[30px] flex items-center justify-between">
      <h1 className="text-3xl font-bold text-black">{title}</h1>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Image
            src={"/icons/search.svg"}
            alt="search"
            width={24}
            height={24}
            className="absolute left-3 top-1/2 make-gray -translate-y-1/2"
          />
          <Input
            placeholder="Search"
            className="pl-12 w-[507px] h-10 bg-smoke border border-theme-gray-two"
          />
        </div>
      </div>
    </header>
  );
}
