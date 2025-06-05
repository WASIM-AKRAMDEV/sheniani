"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface FilterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterValues) => void;
}

export interface FilterValues {
  location: number;
  category: string;
}

const categories = ["Handyman", "Renovation", "Consturtion", "Plumbering"];

export function FilterDropdown({
  isOpen,
  onClose,
  onApply,
}: FilterDropdownProps) {
  const [locationMiles, setLocationMiles] = useState<number>(32);
  const [selectedCategory, setSelectedCategory] = useState<string>("Handyman");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleApply = () => {
    onApply({
      location: locationMiles,
      category: selectedCategory,
    });
    onClose();
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-14 z-50 w-[320px] bg-white border border-theme-gray-two rounded-lg shadow-lg p-5"
    >
      <h3 className="text-2xl   font-medium mb-4">Filter</h3>

      <Accordion
        type="multiple"
        defaultValue={["location", "category"]}
        className="space-y-4"
      >
        {/* Location Section */}
        <AccordionItem value="location" className="border-b border-gray-100">
          <AccordionTrigger className="p-0 hover:no-underline">
            <div className="flex items-center gap-2">
              <span className="text-base font-medium">Location:</span>
              <span className="text-theme-orange font-medium">
                {locationMiles} miles
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="py-4">
              <Slider
                defaultValue={[locationMiles]}
                value={[locationMiles]}
                max={50}
                step={1}
                onValueChange={(value) => setLocationMiles(value[0])}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Category Section */}
        <AccordionItem value="category" className="border-none">
          <AccordionTrigger className="p-0 hover:no-underline">
            <span className="text-base font-medium">Category</span>
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-3 py-4">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      className="sr-only"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />
                    <div
                      className={cn(
                        "h-5 w-5 rounded-full border flex items-center justify-center",
                        selectedCategory === category
                          ? "border-theme-orange"
                          : "border-theme-gray-two"
                      )}
                    >
                      {selectedCategory === category && (
                        <div className="h-2.5 w-2.5 rounded-full bg-theme-orange" />
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-para  ">{category}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Action Buttons */}
      <div className="space-y-4">
        <Button className="w-full" onClick={handleApply}>
          Apply
        </Button>
        <Button variant="secondary" className="w-full" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
