"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "@/i18n/navigation"

type LanguageContextType = {
  currentLocale: string
  changeLocale: (locale: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = useState(initialLocale)

  // Initialize from localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("NEXT_LOCALE")
      if (savedLocale && savedLocale !== currentLocale) {
        setCurrentLocale(savedLocale)
      }
    }
  }, [])

  // Update when initialLocale changes
  useEffect(() => {
    setCurrentLocale(initialLocale)
  }, [initialLocale])

  const changeLocale = (newLocale: string) => {
    setCurrentLocale(newLocale)

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("NEXT_LOCALE", newLocale)
    }

    // Navigate to the same page with new locale
    router.push(pathname, { locale: newLocale })
  }

  return <LanguageContext.Provider value={{ currentLocale, changeLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
