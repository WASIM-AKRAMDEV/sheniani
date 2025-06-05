"use client";

import * as flags from "country-flag-icons/react/3x2";
import {
  type CountryCallingCode,
  type CountryCode,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import { getExampleNumber } from "libphonenumber-js/mobile";
import { Check, ChevronDown } from "lucide-react";
import * as React from "react";

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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Generate country list with example numbers
const countries = getCountries().map((code) => {
  const exampleNumber =
    getExampleNumber(code as CountryCode, examples)?.nationalNumber ||
    "000 000 0000";
  return {
    code: code as CountryCode,
    label: new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code,
    dialCode: getCountryCallingCode(code as CountryCode),
    exampleNumber,
  };
});

export type CountryData = {
  code: CountryCode;
  label: string;
  dialCode: CountryCallingCode;
  exampleNumber: string;
};

interface PhoneInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  value: { countryCode: string; phoneNumber: string };
  onChange: (value: { countryCode: string; phoneNumber: string }) => void;
  error?: string;
}

export function PhoneInput({
  value,
  onChange,
  error,
  className,
  disabled,
  ...props
}: PhoneInputProps) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState<CountryData>(
    countries.find((c) => c.dialCode === value.countryCode.replace("+", "")) ||
      countries.find((c) => c.code === "US") ||
      countries[0]
  );

  const handleCountrySelect = (country: CountryData) => {
    setSelectedCountry(country);
    setOpen(false);
    onChange({
      countryCode: `+${country.dialCode}`,
      phoneNumber: value.phoneNumber,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    onChange({
      countryCode: `+${selectedCountry.dialCode}`,
      phoneNumber: input,
    });
  };

  const handleBlur = () => {
    const parsedPhoneNumber = parsePhoneNumberFromString(
      value.phoneNumber,
      selectedCountry.code
    );

    if (parsedPhoneNumber && parsedPhoneNumber.isValid()) {
      onChange({
        countryCode: `+${selectedCountry.dialCode}`,
        phoneNumber: parsedPhoneNumber.nationalNumber || value.phoneNumber,
      });
    }
  };

  const filteredCountries = searchQuery
    ? countries.filter(
        (country) =>
          country.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.dialCode.includes(searchQuery)
      )
    : countries;

  // Function to render flag component
  const renderFlag = (countryCode: string) => {
    // Get the flag component from the flags object
    const FlagComponent = flags[countryCode as keyof typeof flags];

    // If the flag component exists, render it
    if (FlagComponent) {
      return <FlagComponent className="h-4 w-6  rounded-sm object-cover" />;
    }

    // Fallback if flag component doesn't exist
    return <div className="h-4 w-6 bg-muted rounded-sm" />;
  };

  return (
    <div className="flex flex-col space-y-1.5 ">
      <div className="flex">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className="flex w-[140px] h-12 justify-center rounded-r-none border-r-0"
            >
              <div className="flex items-center gap-2">
                {renderFlag(selectedCountry.code)}
                <span>+{selectedCountry.dialCode}</span>
              </div>
              <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader className="px-4 pt-4">
              <DialogTitle>Select Country</DialogTitle>
            </DialogHeader>
            <Command>
              <div className="mb-4">
                <CommandInput
                  placeholder="Search country..."
                  value={searchQuery}
                  onValueChange={setSearchQuery}
                />
              </div>
              <CommandList className="max-h-[300px]">
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {filteredCountries.map((country) => (
                    <CommandItem
                      key={country.code}
                      value={`${country.label} ${country.dialCode}`}
                      onSelect={() => handleCountrySelect(country)}
                      className="group"
                    >
                      <div className="flex items-center gap-3">
                        {renderFlag(country.code)}
                        <span className="text-light-black font-medium group-hover:text-white">
                          {country.label}
                        </span>
                        <span className="text-muted-foreground group-hover:text-white/50">
                          +{country.dialCode}
                        </span>
                      </div>
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4 text-green-500 group-hover:text-white/50",
                          selectedCountry.code === country.code
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Input
          type="tel"
          value={value.phoneNumber}
          onChange={handlePhoneChange}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={selectedCountry.exampleNumber}
          className={cn("rounded-l-none", className)}
          {...props}
        />
      </div>
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}
