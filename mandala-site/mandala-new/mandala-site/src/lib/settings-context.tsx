"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import siteConfig from './site-config.json'

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

// Default settings from site-config.json
// This provides a consistent source of defaults that can be updated at build time
const defaultSettings: SiteSettings = siteConfig as SiteSettings

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