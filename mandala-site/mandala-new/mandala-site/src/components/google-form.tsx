"use client"

import { useState, useEffect } from "react"
import { useSiteSettings } from "@/lib/settings-context"

interface GoogleFormProps {
  formId?: string
  title?: string
  description?: string
  height?: string
  className?: string
}

export function GoogleForm({
  formId = "1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // Default form ID
  title,
  description,
  height = "720px",
  className = "",
}: GoogleFormProps) {
  // The form ID isn't yet in the settings context but could be added in the future
  // For now we just use the provided formId or the default
  const [formUrl, setFormUrl] = useState("")

  useEffect(() => {
    // Create the Google Form URL with the provided formId
    const url = `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`
    setFormUrl(url)
  }, [formId])

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-2xl font-heading font-semibold text-brand-purple mb-4">
          {title}
        </h2>
      )}
      
      {description && (
        <p className="text-gray-600 mb-6">
          {description}
        </p>
      )}

      <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
        {formUrl && (
          <iframe
            src={formUrl}
            width="100%"
            height={height}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Mandala Contact Form"
            className="bg-white"
          >
            Cargando formulario...
          </iframe>
        )}
      </div>
    </div>
  )
}