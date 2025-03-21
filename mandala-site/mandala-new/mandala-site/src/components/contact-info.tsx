"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useSiteSettings } from "@/lib/settings-context"

export function ContactInfo() {
  const { settings, isLoaded } = useSiteSettings()

  if (!isLoaded) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
          Información de Contacto
        </h2>
        <p className="text-gray-600 mb-8">
          Si tienes alguna pregunta sobre nuestras clases, horarios o servicios, 
          no dudes en ponerte en contacto con nosotros por cualquiera de estas vías.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-brand-beige/20 p-3 rounded-full">
          <MapPin className="h-6 w-6 text-brand-purple" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 text-lg">Dirección</h3>
          <p className="text-gray-600">{settings.contactAddress}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-brand-beige/20 p-3 rounded-full">
          <Phone className="h-6 w-6 text-brand-purple" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 text-lg">Teléfono</h3>
          <p className="text-gray-600">{settings.contactPhone}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-brand-beige/20 p-3 rounded-full">
          <Mail className="h-6 w-6 text-brand-purple" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 text-lg">Email</h3>
          <p className="text-gray-600">{settings.contactEmail}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-brand-beige/20 p-3 rounded-full">
          <Clock className="h-6 w-6 text-brand-purple" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 text-lg">Horario de Atención</h3>
          <p className="text-gray-600">Lunes a Viernes: {settings.businessHours.weekdays}</p>
          <p className="text-gray-600">Sábado: {settings.businessHours.saturday}</p>
          {settings.businessHours.sunday !== "Cerrado" && (
            <p className="text-gray-600">Domingo: {settings.businessHours.sunday}</p>
          )}
        </div>
      </div>
    </div>
  )
}