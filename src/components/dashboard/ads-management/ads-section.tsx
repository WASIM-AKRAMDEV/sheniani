"use client";

import { useState } from "react";
import { AdsTable } from "./ads-table";
import { Pagination } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Ad } from "@/types/ads";
import Link from "next/link";

interface AdsSectionProps {
  ads: Ad[];
  onDeleteAd: (id: string) => void;
}

export function AdsSection({ ads, onDeleteAd }: AdsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter ads based on search term
  const filteredAds = ads.filter(
    (ad) =>
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.businessName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredAds.length / itemsPerPage);
  const currentAds = filteredAds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="rounded-lg p-6 border-2 border-primary-500/10 bg-white">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Latest Ads</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/icons/search.svg"
                alt="search"
                width={24}
                height={24}
                className="absolute left-3 top-1/2 make-gray -translate-y-1/2"
              />
              <Input
                placeholder="Search"
                className="pl-12 w-[305px] bg-smoke"
                size="lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Link href={"/dashboard/service-provider/ads-management/create"}>
              <Button className="px-10" size={"xl"}>
                Create an Ad
              </Button>
            </Link>
          </div>
        </div>

        <AdsTable ads={currentAds} onDeleteAd={onDeleteAd} />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
