"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { useSiteSettings } from "@/lib/settings-context"

interface GoogleCalendarProps {
  calendarId?: string
  title?: string
  description?: string
  height?: string
  className?: string
  showFullCalendar?: boolean
}

export function GoogleCalendar({
  calendarId,
  title = "Horario de Clases",
  description = "Consulta nuestras clases y reserva tu plaza",
  height = "600px",
  className = "",
  showFullCalendar = true
}: GoogleCalendarProps) {
  const [calendarUrl, setCalendarUrl] = useState("")
  const { settings, isLoaded } = useSiteSettings()
  
  // Use the calendarId from props if provided, otherwise use the one from settings
  const effectiveCalendarId = calendarId || (isLoaded ? settings.calendarId : "primary")

  useEffect(() => {
    // Create the Google Calendar URL with the provided calendarId
    const baseUrl = "https://calendar.google.com/calendar/embed"
    const params = new URLSearchParams({
      src: effectiveCalendarId,
      ctz: "Europe/Madrid",
      wkst: "2", // Week starts on Monday (2)
      bgcolor: "%23ffffff",
      showTitle: "0",
      showNav: "1",
      showDate: "1",
      showPrint: "0",
      showTabs: "1",
      showCalendars: "0",
      showTz: "1",
      mode: showFullCalendar ? "WEEK" : "AGENDA"
    })
    
    setCalendarUrl(`${baseUrl}?${params.toString()}`)
  }, [effectiveCalendarId, showFullCalendar])

  return (
    <section className={`py-12 ${className}`}>
      <Container>
        {title || description ? (
          <div className="text-center max-w-3xl mx-auto mb-8">
            {title && (
              <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-gray-600">
                {description}
              </p>
            )}
          </div>
        ) : null}

        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          {calendarUrl && (
            <iframe
              src={calendarUrl}
              style={{ borderWidth: 0 }}
              width="100%"
              height={height}
              frameBorder="0"
              scrolling="no"
              title="Mandala Yoga Schedule"
              className="bg-white"
            ></iframe>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            * Para reservar una clase, haz clic en el evento y utiliza el botón "Añadir a mi calendario". 
            Si tienes dudas, contacta con nosotros.
          </p>
        </div>
      </Container>
    </section>
  )
}