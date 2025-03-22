"use client"

import { useEffect } from 'react'
import { useSiteSettings } from '@/lib/settings-context'
import { useCookieConsent } from '@/lib/cookie-consent'
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from '@/components/google-tag-manager'

export function GoogleTagManagerClient() {
  const { settings, isLoaded } = useSiteSettings()
  const { preferences, consentGiven } = useCookieConsent()
  
  // Client-side only code to initialize dataLayer
  useEffect(() => {
    // Only load GTM if analytics cookies are accepted
    if (isLoaded && settings.gtmId && consentGiven && preferences.analytics) {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || []
      
      // Push page view event
      window.dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_title: document.title
      })
    }
  }, [isLoaded, settings.gtmId, consentGiven, preferences.analytics])
  
  // Only render GTM if analytics cookies are accepted
  if (!isLoaded || !settings.gtmId || !consentGiven || !preferences.analytics) {
    return null
  }
  
  return (
    <>
      <GoogleTagManagerScript gtmId={settings.gtmId} />
      <GoogleTagManagerNoScript gtmId={settings.gtmId} />
    </>
  )
}

declare global {
  interface Window {
    dataLayer: any[]
  }
}