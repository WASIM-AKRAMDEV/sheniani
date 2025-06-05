"use client";

import {
  FilterDropdown,
  FilterValues,
} from "@/components/dashboard/home/FilterDropdown";
import { LeadCard } from "@/components/dashboard/home/LeadCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Filter, Search } from "lucide-react";
import { useState } from "react";

// Sample lead data
const LEADS = [
  {
    id: 1,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Fencing",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 2,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 3,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Fencing",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 4,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 5,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Fencing",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 6,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Fencing",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 7,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 8,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Fencing",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 9,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Fencing",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 10,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 11,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 12,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 13,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 14,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 15,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
  {
    id: 16,
    title: "Installing fences & posts",
    location: "Leominster",
    distance: "16 miles",
    category: "Tiling",
    daysAgo: 2,
    image: "/images/new-lead.png",
  },
];

export default function ServiceProviderHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filters, setFilters] = useState<FilterValues>({
    location: 32,
    category: "Handyman",
  });

  const leadsPerPage = 12;

  // Filter leads based on search query and filters
  const filteredLeads = LEADS.filter((lead) => {
    const matchesSearch = lead.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // Additional filtering logic can be added here based on filters state
    return matchesSearch;
  });

  const totalLeads = filteredLeads.length;
  const totalPages = Math.ceil(totalLeads / leadsPerPage);
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterApply = (newFilters: FilterValues) => {
    setFilters(newFilters);
    // You can apply additional filtering logic here
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1 className="text-[28px] mb-5 font-semibold   text-black">New Leads</h1>

      <div className="flex items-center gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search by lead title, keywords"
            className="pl-10 h-12 bg-smoke border-theme-gray-two"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-[243px] h-12 bg-smoke border-theme-gray-two">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Anywhere">Anywhere</SelectItem>
            <SelectItem value="Within 5 miles">Within 5 miles</SelectItem>
            <SelectItem value="Within 10 miles">Within 10 miles</SelectItem>
            <SelectItem value="Within 20 miles">Within 20 miles</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <Button
            variant="outline"
            className="h-12 w-[211px] bg-smoke font-medium justify-between"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </div>

            <span className="flex items-center justify-center size-6 bg-dark-primary rounded-full text-white text-sm font-medium">
              2
            </span>
          </Button>

          <FilterDropdown
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApply={handleFilterApply}
          />
        </div>
      </div>

      <div className="text-lg mb-9 font-semibold   text-black">
        We have found{" "}
        <span className="text-theme-orange font-bold">{totalLeads}</span> Leads
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-9 w-9 rounded-full"
            >
              <ArrowLeft className="size-4" />
            </Button>

            {pageNumbers.map((number) => (
              <Button
                key={number}
                variant={currentPage === number ? "default" : "outline"}
                className={`h-9 w-9 font-medium rounded-full `}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="h-9 w-9 font-medium rounded-full"
            >
              <ArrowRight className="size-4" />
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
