"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { useSiteSettings } from "@/lib/settings-context"

interface GoogleSitesEmbedProps {
  siteUrl?: string
  title?: string
  description?: string
  height?: string
  className?: string
}

export function GoogleSitesEmbed({
  siteUrl,
  title = "Noticias y Actualizaciones",
  description = "Mantente informado sobre nuestras actividades, eventos y artículos sobre yoga y bienestar",
  height = "800px",
  className = "",
}: GoogleSitesEmbedProps) {
  const [iframeUrl, setIframeUrl] = useState("")
  const { settings, isLoaded } = useSiteSettings()
  
  // Use the siteUrl from props if provided, otherwise use from settings
  const effectiveSiteUrl = siteUrl || (isLoaded ? settings.googleSiteUrl : "")

  useEffect(() => {
    // Clean and set the URL for the iframe
    if (effectiveSiteUrl) {
      setIframeUrl(effectiveSiteUrl)
    }
  }, [effectiveSiteUrl])

  return (
    <section className={`py-12 ${className}`}>
      <Container>
        {title && (
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-gray-600">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          {iframeUrl && (
            <iframe
              src={iframeUrl}
              width="100%"
              height={height}
              frameBorder="0"
              scrolling="auto"
              title="Mandala Noticias"
              className="bg-white"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          )}
        </div>
      </Container>
    </section>
  )
}