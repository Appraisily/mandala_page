"use client"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Save, X, Check } from "lucide-react"
import Link from "next/link"

// Define the site settings type
interface SiteSettings {
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

// Password to access the admin panel (this is a simple implementation)
// In a real production app, you'd use a more secure authentication method
const ADMIN_PASSWORD = "mandala2024"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [settings, setSettings] = useState<SiteSettings>({
    calendarId: "mandalaourense@gmail.com",
    instagramUsername: "mandalaourense",
    facebookPageId: "mandalaourense",
    contactEmail: "info@mandalaourense.com",
    contactPhone: "+34 605 66 68 30",
    contactAddress: "C/ Dr. Marañón 2, entresuelo. 32005 Ourense",
    googleSiteUrl: "https://sites.google.com/view/mandalaourense/inicio",
    gtmId: "GTM-XXXXXXX", // Replace with real GTM ID when provided
    businessHours: {
      weekdays: "9:30 - 21:00",
      saturday: "10:00 - 14:00",
      sunday: "Cerrado"
    }
  })
  const [savedSettings, setSavedSettings] = useState<SiteSettings | null>(null)
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle")

  // Load saved settings from localStorage on component mount
  useEffect(() => {
    const savedSettingsJSON = localStorage.getItem("mandala-site-settings")
    if (savedSettingsJSON) {
      try {
        const parsedSettings = JSON.parse(savedSettingsJSON)
        setSettings(parsedSettings)
        setSavedSettings(parsedSettings)
      } catch (e) {
        console.error("Error parsing saved settings:", e)
      }
    }
  }, [])

  // Handle password submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Contraseña incorrecta")
    }
  }

  // Handle settings form submission
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault()
    setSaveStatus("saving")
    
    // Save settings to localStorage (in a real app, you'd save to a database)
    try {
      localStorage.setItem("mandala-site-settings", JSON.stringify(settings))
      setSavedSettings(settings)
      setSaveStatus("success")
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSaveStatus("idle")
      }, 3000)
    } catch (e) {
      console.error("Error saving settings:", e)
      setSaveStatus("error")
    }
  }

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    section?: string, 
    field?: string
  ) => {
    const { name, value } = e.target
    
    if (section && field) {
      // Handle nested objects (like businessHours)
      setSettings(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof SiteSettings],
          [field]: value
        }
      }))
    } else {
      // Handle top-level fields
      setSettings(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-heading font-semibold text-brand-purple">
              Panel de Administración
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Introduce la contraseña para acceder
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative">
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-brand-purple focus:border-brand-purple focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-purple hover:bg-brand-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple"
              >
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // If authenticated, show the admin panel
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-heading font-semibold text-brand-purple">
            Panel de Administración
          </h1>
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="text-brand-purple hover:text-brand-purple/80 font-medium"
            >
              Volver al sitio
            </Link>
            <button
              type="button"
              onClick={() => setIsAuthenticated(false)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-teal hover:bg-brand-teal/90"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Configuración del Sitio
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Configura los servicios externos y datos de contacto de tu sitio web
              </p>
            </div>
            <div className="border-t border-gray-200">
              <form onSubmit={handleSaveSettings}>
                <dl>
                  {/* Google Services Section */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Google Calendar ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="calendarId"
                        value={settings.calendarId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="ejemplo@gmail.com"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        ID del calendario que se mostrará en la sección de horarios (normalmente tu correo de Google).
                      </p>
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      URL de Google Sites
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="googleSiteUrl"
                        value={settings.googleSiteUrl}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="https://sites.google.com/view/tusitio"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        URL completa de tu sitio de Google Sites con información de cursos y eventos.
                      </p>
                    </dd>
                  </div>

                  {/* Social Media Section */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Usuario de Instagram
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="instagramUsername"
                        value={settings.instagramUsername}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="tuusuario"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Nombre de usuario de Instagram sin el símbolo @.
                      </p>
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      ID de Página de Facebook
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="facebookPageId"
                        value={settings.facebookPageId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="tupagina"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Nombre de usuario o ID de tu página de Facebook.
                      </p>
                    </dd>
                  </div>

                  {/* Contact Information Section */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Email de Contacto
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="email"
                        name="contactEmail"
                        value={settings.contactEmail}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="info@ejemplo.com"
                      />
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Teléfono de Contacto
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="contactPhone"
                        value={settings.contactPhone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="+34 XXX XX XX XX"
                      />
                    </dd>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Dirección
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="contactAddress"
                        value={settings.contactAddress}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="Calle, número, código postal, ciudad"
                      />
                    </dd>
                  </div>

                  {/* Analytics Section */}
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Google Tag Manager ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        type="text"
                        name="gtmId"
                        value={settings.gtmId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                        placeholder="GTM-XXXXXXX"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        ID de Google Tag Manager para el seguimiento de Google Analytics.
                      </p>
                    </dd>
                  </div>

                  {/* Business Hours Section */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Horario de Apertura
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Lunes a Viernes</label>
                          <input
                            type="text"
                            name="businessHours.weekdays"
                            value={settings.businessHours.weekdays}
                            onChange={(e) => handleChange(e, "businessHours", "weekdays")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                            placeholder="9:00 - 20:00"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Sábado</label>
                          <input
                            type="text"
                            name="businessHours.saturday"
                            value={settings.businessHours.saturday}
                            onChange={(e) => handleChange(e, "businessHours", "saturday")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                            placeholder="10:00 - 14:00"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Domingo</label>
                          <input
                            type="text"
                            name="businessHours.sunday"
                            value={settings.businessHours.sunday}
                            onChange={(e) => handleChange(e, "businessHours", "sunday")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                            placeholder="Cerrado"
                          />
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>

                <div className="px-4 py-5 sm:px-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={saveStatus === "saving"}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-purple hover:bg-brand-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple"
                  >
                    {saveStatus === "saving" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Guardando...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Guardar Cambios
                      </>
                    )}
                  </button>
                </div>

                {saveStatus === "success" && (
                  <div className="mx-4 mb-5 p-4 rounded-md bg-green-50 border border-green-200">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Configuración guardada correctamente
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {saveStatus === "error" && (
                  <div className="mx-4 mb-5 p-4 rounded-md bg-red-50 border border-red-200">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <X className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          Error al guardar la configuración
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}