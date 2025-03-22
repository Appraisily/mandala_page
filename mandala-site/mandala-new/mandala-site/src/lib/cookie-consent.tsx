"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { getCookie, setCookie } from '@/lib/utils'

export type ConsentState = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export type CookieConsentContextType = {
  consentGiven: boolean
  preferences: ConsentState
  updatePreferences: (preferences: Partial<ConsentState>) => void
  acceptAll: () => void
  rejectAll: () => void
  acceptSelected: () => void
  showConsentManager: () => void
  hideConsentManager: () => void
  managerVisible: boolean
}

const defaultPreferences: ConsentState = {
  necessary: true, // Always true - these are required
  analytics: false,
  marketing: false,
  preferences: false,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ConsentState>(defaultPreferences)
  const [consentGiven, setConsentGiven] = useState<boolean>(false)
  const [managerVisible, setManagerVisible] = useState<boolean>(false)

  useEffect(() => {
    // Check if consent has been given on mount
    const cookieConsent = getCookie('cookie_consent')
    if (cookieConsent) {
      try {
        const parsedConsent = JSON.parse(cookieConsent)
        setPreferences(parsedConsent)
        setConsentGiven(true)
      } catch (e) {
        console.error('Error parsing cookie consent:', e)
      }
    } else {
      // If no consent cookie exists, show the banner
      setManagerVisible(true)
    }
  }, [])

  const savePreferences = (newPreferences: ConsentState) => {
    setCookie('cookie_consent', JSON.stringify(newPreferences))
    setPreferences(newPreferences)
    setConsentGiven(true)
  }

  const acceptAll = () => {
    const allAccepted: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    savePreferences(allAccepted)
    setManagerVisible(false)
  }

  const rejectAll = () => {
    // Still save necessary cookies
    const allRejected: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    savePreferences(allRejected)
    setManagerVisible(false)
  }

  const acceptSelected = () => {
    savePreferences(preferences)
    setManagerVisible(false)
  }

  const updatePreferences = (newPrefs: Partial<ConsentState>) => {
    setPreferences(prev => ({ ...prev, ...newPrefs }))
  }

  const showConsentManager = () => {
    setManagerVisible(true)
  }

  const hideConsentManager = () => {
    setManagerVisible(false)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consentGiven,
        preferences,
        updatePreferences,
        acceptAll,
        rejectAll,
        acceptSelected,
        showConsentManager,
        hideConsentManager,
        managerVisible,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}