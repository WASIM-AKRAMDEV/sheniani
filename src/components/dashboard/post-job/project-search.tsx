"use client";

import { useState, useRef, useEffect } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { projectCategories, searchSuggestions } from "@/data/post-job";
import ProjectAccordion from "./project-accordion";
// import workerImage from "/images/Group.png";
import Image from "next/image";

export default function ProjectSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectCategories);
  const [hasSearched, setHasSearched] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(searchSuggestions);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    setHasSearched(true);
    setShowSuggestions(false);

    if (!searchQuery.trim()) {
      setFilteredProjects(projectCategories);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = projectCategories.filter((category) =>
      category.title.toLowerCase().includes(query)
    );

    setFilteredProjects(filtered);
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);

    // Reset projects when search is cleared
    if (!value.trim()) {
      setFilteredProjects(projectCategories);
      setHasSearched(false);
    }

    if (value.trim()) {
      const filtered = searchSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions(searchSuggestions);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Auto-search when suggestion is selected
    setTimeout(() => {
      const query = suggestion.toLowerCase();
      const filtered = projectCategories.filter((category) =>
        category.title.toLowerCase().includes(query)
      );
      setFilteredProjects(filtered);
      setHasSearched(true);
    }, 0);
  };

  return (
    <div className="w-full">
      <div className="relative bg-slate-900 text-white p-8 md:p-12 md:pt-20 overflow-hidden rounded-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 relative">
            {/* Combined Search Container */}
            <div className="relative" ref={searchRef}>
              <h1 className="text-[40px] md:text-4xl font-bold mb-7">
                Find a Service Provider
              </h1>
              <div className="flex gap-3 w-fit">
                <div className="flex bg-white rounded-md overflow-hidden w-[35vw]">
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Wall Painting"
                      value={searchQuery}
                      onChange={(e) => handleInputChange(e.target.value)}
                      className="bg-transparent text-black h-12 pl-4 pr-4 border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                      onFocus={() => {
                        if (searchQuery.trim()) {
                          setShowSuggestions(true);
                        }
                      }}
                    />
                  </div>

                  {/* Vertical Separator */}
                  <div className="w-px bg-gray-200"></div>

                  {/* Location Select */}
                  <div className="w-48">
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="bg-transparent text-black h-12 border-0 rounded-none focus:ring-0 focus:ring-offset-0">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          <SelectValue placeholder="Los Angeles" />
                          <ChevronDown className="h-4 w-4 ml-auto text-gray-500" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="los-angeles">Los Angeles</SelectItem>
                        <SelectItem value="san-francisco">
                          San Francisco
                        </SelectItem>
                        <SelectItem value="new-york">New York</SelectItem>
                        <SelectItem value="chicago">Chicago</SelectItem>
                        <SelectItem value="miami">Miami</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button
                  onClick={handleSearch}
                  className="h-12 !px-6 bg-orange-500 hover:bg-orange-600"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>

              {/* Search Suggestions Dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1">
                  {filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <Search className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="text-black">{suggestion}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-25 h-40 ">
              <Image
                src="/images/Group.png"
                alt=""
                width={100}
                height={100}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Decorative illustration */}
        <div className="absolute right-0 bottom-0 hidden md:block">
          <div className="w-120 h-70 relative">
            <Image
              src="/images/Group 1707479821.png"
              alt=""
              fill
              className=""
            />
          </div>
        </div>
      </div>

      <div className=" py-6 md:py-8">
        <h2 className="text-xl font-semibold mb-6">Select Your Project</h2>

        {hasSearched && filteredProjects.length === 0 ? (
          <div className="text-center py-8 border rounded-md bg-gray-50">
            <p className="text-gray-500">
              No projects found. Please try a different search term.
            </p>
          </div>
        ) : (
          <ProjectAccordion projects={filteredProjects} />
        )}
      </div>
    </div>
  );
}
