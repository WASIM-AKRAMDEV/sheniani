"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

// Language options with their flags and codes
const languages = [
  { code: "en", flag: "en", name: "English" },
  { code: "ar", flag: "ar", name: "العربية" },
  { code: "ur", flag: "pk", name: "اردو" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4">
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="SHENIANI"
            width={238}
            height={40}
            className="h-auto w-auto sm:w-[180px] xl:w-[238px] max-h-[40px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <NavLink href="/post-a-job">Post a Job</NavLink>
            <NavLink href="/find-a-service-provider">
              Find a Service Provider
            </NavLink>
            <ExploreDropdown />
          </div>
          <Link href="/login">
            <Button className="w-[92px]" variant="secondary">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="w-[92px]">Sign Up</Button>
          </Link>
          <LanguageSelector />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="!h-6 !w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-screen p-5">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="SHENIANI"
                  width={238}
                  height={40}
                  className="h-auto w-auto sm:w-[180px] xl:w-[238px] max-h-[40px]"
                />
              </Link>
              <div className="flex flex-col space-y-2 mt-8">
                <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/post-a-job"
                  onClick={() => setIsOpen(false)}
                >
                  Post a Job
                </MobileNavLink>
                <MobileNavLink
                  href="/find-a-service-provider"
                  onClick={() => setIsOpen(false)}
                >
                  Find a Service Provider
                </MobileNavLink>
                <MobileExploreDropdown closeSheet={() => setIsOpen(false)} />
              </div>

              <div className="border-t border-gray-200 py-4 space-y-3">
                <LanguageSelector isMobile />
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <span className="text-sm font-medium px-3 text-black">{children}</span>
    </Link>
  );
};

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <span className="w-full justify-start text-sm font-medium text-black">
        {children}
      </span>
    </Link>
  );
};

const ExploreDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sm font-medium">
          Explore
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/" className="w-full">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/services" className="w-full">
            Our services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/about" className="w-full">
            About us
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact" className="w-full">
            Contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MobileExploreDropdown = ({ closeSheet }: { closeSheet: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Button
        variant="ghost"
        className="hover:bg-transparent w-fit !p-0 justify-start text-sm font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        Explore
        <ChevronDown
          className={cn(
            "ml-auto h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      {isOpen && (
        <div className="flex flex-col space-y-2 mt-1 mb-2">
          <MobileNavLink href="/" onClick={closeSheet}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/services" onClick={closeSheet}>
            Our services
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={closeSheet}>
            About us
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={closeSheet}>
            Contact
          </MobileNavLink>
        </div>
      )}
    </div>
  );
};

const LanguageSelector = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { currentLocale, changeLocale } = useLanguage()

  // Find the current language object
  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]
  return (
    <Select value={currentLocale} onValueChange={changeLocale}>
      <SelectTrigger
        className={cn(
          "text-black font-bold font-lato text-lg",
          isMobile ? "w-full" : "w-[160px] justify-between"
        )}
      >
        <SelectValue>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 overflow-hidden rounded-full">
              <Image
                src={`/images/${currentLanguage.flag}.svg`}
                alt={currentLanguage.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <span>{currentLanguage.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 overflow-hidden rounded-full">
                <Image
                  src={`/images/${lang.flag}.svg`}
                  alt={lang.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Navbar;
