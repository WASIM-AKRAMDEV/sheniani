"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"


interface ComboboxProps {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  options: {
    value: string
    label: string
  }[]
  isSearchable?: boolean
  className?: string
  placeholder?: string
  size?: "sm" | "lg" | "xl"
}

const Combobox = ({variant, options, isSearchable, className, placeholder, size="lg"}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("en")

  React.useEffect(() => {
    console.log(value)
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          className="border-0 border-l rounded-none font-bold hover:bg-transparent h-fit text-base font-lato font-normal"
          size={size}
          role="combobox"
          aria-expanded={open}
        >
          {value
            ? options.find((framework) => framework.value === value)?.label
            : placeholder || "Select ..."
          }
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-3 border border-zinc-200", className)}>
        <Command className="">
          {isSearchable && <CommandInput placeholder="Search" className="font-medium text-sm font-lato" />}
          <CommandList>
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="font-medium text-sm font-lato h-10 mt-1"
                >
                  {opt.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === opt.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
};

export default Combobox;
