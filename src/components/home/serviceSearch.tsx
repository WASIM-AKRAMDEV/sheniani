"use client";

import type * as React from "react";
import { useState } from "react";
import {
  Check,
  ChevronDown,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import * as flags from "country-flag-icons/react/3x2";
import { getCountries } from "libphonenumber-js";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

// Generate country list with proper names
const countries = getCountries().map((code) => {
  return {
    code,
    name: new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code,
  };
});

export function ServiceSearch() {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "in country:", selectedCountry);
    // Implement your search functionality here
  };

  // Function to render flag component
  const renderFlag = (countryCode: string) => {
    // Get the flag component from the flags object
    const FlagComponent = flags[countryCode as keyof typeof flags];

    // If the flag component exists, render it
    if (FlagComponent) {
      return <FlagComponent className="h-4 w-5 rounded-sm object-cover" />;
    }

    // Fallback if flag component doesn't exist
    return <div className="h-4 w-5 bg-muted rounded-sm" />;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center rounded-md border relative bg-white overflow-hidden h-12">
          {/* Search icon visible only on small screens */}
          <div className="md:hidden pl-3">
            <Search className="h-5 w-5 text-light-para" />
          </div>

          <Input
            type="text"
            placeholder="What service do you need?"
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-light-black text-lg pl-6 md:pl-6 placeholder:font-lato placeholder:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="h-6 w-px bg-gray-300 mx-2" aria-hidden="true" />

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                aria-expanded={open}
                className="flex items-center gap-1 px-3 py-6 text-light-para hover:bg-transparent hover:text-gray-800 focus:ring-0"
              >
                <span className="md:hidden">
                  <SlidersHorizontal className="h-5 w-6 text-light-para" />
                </span>
                <span className="hidden md:flex items-center gap-1">
                  <MapPin className="h-5 w-5 text-light-para" />
                  {selectedCountry ? (
                    <div className="flex items-center gap-2">
                      {renderFlag(selectedCountry)}
                      <span className="text-base font-normal font-lato text-theme-silver">
                        {
                          countries.find(
                            (country) => country.code === selectedCountry
                          )?.name
                        }
                      </span>
                    </div>
                  ) : (
                    <span className="text-base font-normal font-lato text-theme-silver">
                      Select Country
                    </span>
                  )}
                  <ChevronDown className="h-4 w-4 text-theme-silver ml-1" />
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="p-4 rounded-lg overflow-hidden"
              align="end"
              side="bottom"
              sideOffset={5}
              alignOffset={0}
            >
              <Command>
                <CommandInput placeholder="Search countries..." />
                <CommandList className="max-h-[300px] mt-2">
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup>
                    {countries.map((country) => (
                      <CommandItem
                        key={country.code}
                        value={country.name}
                        onSelect={() => {
                          setSelectedCountry(country.code);
                          setOpen(false);
                        }}
                      >
                        {renderFlag(country.code)}
                        <span className="flex-1 text-xs">{country.name}</span>
                        <Check
                          className={cn(
                            "h-4 w-4",
                            selectedCountry === country.code
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </form>
    </div>
  );
}
