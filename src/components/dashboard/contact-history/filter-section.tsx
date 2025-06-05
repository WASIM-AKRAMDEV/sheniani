"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";
import type { ConnectType, Transaction } from "@/types/contact-history";

interface FilterSectionProps {
  connectType: ConnectType;
  setConnectType: (type: ConnectType) => void;
  setCurrentPage: (page: number) => void;
  dateRange: { from?: Date; to?: Date };
  setDateRange: (range: { from?: Date; to?: Date }) => void;
  actionFilters: string[];
  setActionFilters: (filters: string[]) => void;
  sampleTransactions: Transaction[];
}

export function FilterSection({
  connectType,
  setConnectType,
  setCurrentPage,
  dateRange,
  setDateRange,
  actionFilters,
  setActionFilters,
  sampleTransactions,
}: FilterSectionProps) {
  const [showFilterPopover, setShowFilterPopover] = useState(false);

  // Get unique action types for filter
  const actionTypes = Array.from(
    new Set(sampleTransactions.map((t) => t.action))
  );

  // Toggle action filter
  const toggleActionFilter = (action: string) => {
    setActionFilters(
      actionFilters.includes(action)
        ? actionFilters.filter((a) => a !== action)
        : [...actionFilters, action]
    );
  };

  return (
    <div className="flex items-end gap-4 w-[50%] h-full">
      <div className="flex-1">
        <label className="block text-sm font-bold  mb-2">Connect Type</label>
        <Select
          value={connectType}
          onValueChange={(value) => {
            setConnectType(value as ConnectType);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="border-smoke text-light-para bg-smoke !h-14">
            <SelectValue placeholder="All Connects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Connects">All Connects</SelectItem>
            <SelectItem value="Availability Badge">
              Availability Badge
            </SelectItem>
            <SelectItem value="Applied to Job">Applied to Job</SelectItem>
            <SelectItem value="Purchased Connects">
              Purchased Connects
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Popover open={showFilterPopover} onOpenChange={setShowFilterPopover}>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              size={"2xl"}
              className="bg-smoke text-light-para font-normal"
            >
              <Filter className="h-4 w-4 mr-1" />
              <span>Filter</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 p-4 rounded-lg overflow-hidden border border-theme-gray"
            align="end"
            side="bottom"
            sideOffset={5}
            alignOffset={0}
          >
            <div className="space-y-2">
              <h3 className="text-base  font-semibold">Filter Transactions</h3>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium ">Date Range</h4>
                <Calendar
                  mode="range"
                  selected={
                    dateRange.from && dateRange.to
                      ? { from: dateRange.from!, to: dateRange.to! }
                      : undefined
                  }
                  onSelect={(range) => {
                    setDateRange(range || {});
                    setCurrentPage(1);
                  }}
                  className="rounded-md border w-full"
                />
              </div>

              <div className="space-y-2 mb-7">
                <h4 className="text-sm font-medium">Action Type</h4>
                <div className="space-y-2">
                  {actionTypes.map((action) => (
                    <div key={action} className="flex items-center gap-2">
                      <Checkbox
                        id={`action-${action}`}
                        checked={actionFilters.includes(action)}
                        onCheckedChange={() => toggleActionFilter(action)}
                      />
                      <Label
                        htmlFor={`action-${action}`}
                        className="font-normal text-xs"
                      >
                        {action}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <Button
                  variant="outline"
                  size={"lg"}
                  onClick={() => {
                    setDateRange({});
                    setActionFilters([]);
                  }}
                >
                  Reset
                </Button>
                <Button size={"lg"} onClick={() => setShowFilterPopover(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
