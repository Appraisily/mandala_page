"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// Define the site settings type
export interface SiteSettings {
  calendarId: string
  instagramUsername: string
  facebookPageId: string
  contactEmail: string
  contactPhone: string
  contactAddress: string
  googleSiteUrl: string
  gtmId: string
  businessHours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}

// Default settings
const defaultSettings: SiteSettings = {
  calendarId: "mandalaourense@gmail.com",
  instagramUsername: "mandalaourense",
  facebookPageId: "mandalaourense",
  contactEmail: "info@mandalaourense.com",
  contactPhone: "+34 605 66 68 30",
  contactAddress: "C/ Dr. Marañón 2, entresuelo. 32005 Ourense",
  googleSiteUrl: "https://sites.google.com/view/mandalaourense/inicio",
  gtmId: "GTM-XXXXXXX", // Replace with actual GTM ID when available
  businessHours: {
    weekdays: "9:30 - 21:00",
    saturday: "10:00 - 14:00",
    sunday: "Cerrado"
  }
}

// Context type
type SiteSettingsContextType = {
  settings: SiteSettings
  isLoaded: boolean
}

// Create context
const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: defaultSettings,
  isLoaded: false
})

// Hook to use the settings
export const useSiteSettings = () => useContext(SiteSettingsContext)

// Provider component
export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      try {
        const savedSettings = localStorage.getItem("mandala-site-settings")
        if (savedSettings) {
          setSettings(JSON.parse(savedSettings))
        }
      } catch (error) {
        console.error("Error loading settings:", error)
      } finally {
        setIsLoaded(true)
      }
    }
  }, [])

  return (
    <SiteSettingsContext.Provider value={{ settings, isLoaded }}>
      {children}
    </SiteSettingsContext.Provider>
  )
}