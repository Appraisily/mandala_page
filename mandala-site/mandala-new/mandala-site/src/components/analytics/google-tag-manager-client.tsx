"use client"

import { useEffect } from 'react'
import { useSiteSettings } from '@/lib/settings-context'
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from '@/components/google-tag-manager'

export function GoogleTagManagerClient() {
  const { settings, isLoaded } = useSiteSettings()
  
  // Client-side only code to initialize dataLayer
  useEffect(() => {
    if (isLoaded && settings.gtmId) {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || []
      
      // Push page view event
      window.dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_title: document.title
      })
    }
  }, [isLoaded, settings.gtmId])
  
  if (!isLoaded || !settings.gtmId) {
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