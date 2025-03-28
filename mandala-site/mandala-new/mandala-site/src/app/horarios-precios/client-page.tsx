"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight, ArrowLeft } from "lucide-react"
import { GoogleCalendar } from "@/components/google-calendar"

export default function ClientPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-purple mb-6">
              Horarios y Precios
            </h1>
            <p className="text-lg text-gray-700">
              Consulta los horarios de nuestras clases y las diferentes opciones de pago disponibles.
              Ofrecemos flexibilidad para adaptarnos a tus necesidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Calendar Schedule Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GoogleCalendar 
          calendarId="mandalaourense@gmail.com" 
          title="Horario de Clases" 
          description="Consulta la disponibilidad y reserva tu plaza en nuestras clases de yoga" 
        />
      </motion.div>

      <motion.div 
        className="container-custom mt-6 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="inline-block bg-brand-beige/30 rounded-lg px-4 py-2 text-sm text-gray-700">
          * Puedes añadir clases a tu calendario personal haciendo clic en el evento y utilizando el botón "Añadir a mi calendario".
        </div>
      </motion.div>

      {/* Pricing Section */}
      <section className="py-16 bg-brand-beige/30">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-4">
              Nuestras Tarifas
            </h2>
            <p className="text-gray-600">
              Ofrecemos diferentes opciones para adaptarnos a tus necesidades. Elige la que mejor se ajuste a tu rutina y presupuesto.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Price option 1 */}
            <div className="rounded-xl overflow-hidden flex flex-col bg-white shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-medium text-brand-purple">Yoga 1 Día por Semana</h3>
                  <div className="bg-brand-teal/10 text-brand-teal text-xs font-medium py-1 px-2 rounded">
                    Flexible
                  </div>
                </div>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">35€</span>
                  <span className="text-gray-500 text-sm">/mes</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Cualquier modalidad de yoga</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Material incluido</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Reserva con 24h de antelación</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link 
                  href="/contacto" 
                  className="w-full py-3 px-4 rounded-md bg-white border border-brand-purple text-brand-purple font-medium flex items-center justify-center transition-colors hover:bg-brand-purple/5"
                >
                  Reservar clase
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Price option 2 - Popular */}
            <div className="rounded-xl overflow-hidden flex flex-col bg-white shadow-md border border-brand-teal relative transition-shadow hover:shadow-lg">
              <div className="absolute top-0 left-0 right-0 bg-brand-teal text-white text-sm font-medium py-1.5 px-4 text-center">
                Más popular
              </div>
              <div className="p-8 pt-12 flex-grow">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Yoga 2 Días por Semana</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">60€</span>
                  <span className="text-gray-500 text-sm">/mes</span>
                  <p className="text-sm text-gray-500 mt-1">Acceso a clases 2 días por semana</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Cualquier modalidad de yoga</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Material incluido</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Flexibilidad de horarios</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Reserva preferente</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link 
                  href="/contacto" 
                  className="w-full py-3 px-4 rounded-md bg-brand-teal text-white font-medium flex items-center justify-center transition-colors hover:bg-brand-teal/90"
                >
                  Adquirir bono
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Price option 3 */}
            <div className="rounded-xl overflow-hidden flex flex-col bg-white shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-medium text-brand-purple">Acceso Ilimitado</h3>
                  <div className="bg-brand-purple/10 text-brand-purple text-xs font-medium py-1 px-2 rounded">
                    Mejor valor
                  </div>
                </div>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">80€</span>
                  <span className="text-gray-500 text-sm">/mes</span>
                  <p className="text-sm text-gray-500 mt-1">Acceso ilimitado a todas las clases</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Todas las clases que desees</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Todas las modalidades</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Material incluido</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">Reserva prioritaria</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-600">10% descuento en eventos</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link 
                  href="/contacto" 
                  className="w-full py-3 px-4 rounded-md bg-white border border-brand-purple text-brand-purple font-medium flex items-center justify-center transition-colors hover:bg-brand-purple/5"
                >
                  Suscribirme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                ¿Tienes alguna pregunta sobre nuestras tarifas o horarios?
              </h3>
              <p className="text-gray-600 mb-6">
                No dudes en contactarnos para resolver cualquier duda. También ofrecemos descuentos para estudiantes, 
                jubilados y sesiones privadas personalizadas.
              </p>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-purple text-white font-medium transition-colors hover:bg-brand-purple/90"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-white">
        <div className="container-custom text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Inicio
          </Link>
        </div>
      </section>
    </div>
  )
}