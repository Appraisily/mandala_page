import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Facebook, ArrowRight } from "lucide-react"

// Components for homepage
import { HeroSection } from "@/components/sections/hero-section"
import { ClassesSection } from "@/components/sections/classes-section"
import { TherapiesSection } from "@/components/sections/therapies-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { SchedulePreview } from "@/components/sections/schedule-preview"
import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  // Fallback content if we need to render a basic page first
  return (
    <>
      <HeroSection />
      <ClassesSection />
      <TherapiesSection />
      <SchedulePreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

// A fallback simpler HomePage component we can use if needed
function SimpleHomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-purple/5 to-brand-beige/20 pt-20 pb-32">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              className="mb-6 text-4xl font-heading font-medium tracking-tight text-brand-purple sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Encuentra tu equilibrio interior en Mandala Ourense
            </motion.h1>
            <motion.p 
              className="mx-auto mt-4 max-w-xl text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Centro de yoga y terapias holísticas para el bienestar físico, mental y espiritual
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col gap-4 sm:flex-row justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/horarios-precios" 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
              >
                Ver horarios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contacto" 
                className="bg-white hover:bg-gray-50 text-brand-purple border border-gray-200 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
              >
                Contactar
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Pages Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-medium text-brand-purple mb-4">
              Descubre nuestras actividades
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestra selección de clases de yoga, terapias y eventos diseñados para mejorar tu bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/yoga/hatha-yoga" className="group">
              <div className="overflow-hidden rounded-xl shadow-sm border transition-all duration-300 group-hover:shadow-md h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Hatha Yoga"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-heading font-medium text-brand-purple">Hatha Yoga</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-grow">
                    La práctica tradicional de posturas físicas que equilibran cuerpo y mente
                  </p>
                  <p className="mt-4 text-brand-teal font-medium text-sm flex items-center">
                    Más información <ArrowRight className="ml-1 h-3 w-3" />
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/horarios-precios" className="group">
              <div className="overflow-hidden rounded-xl shadow-sm border transition-all duration-300 group-hover:shadow-md h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
                    alt="Horarios y Precios"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-heading font-medium text-brand-purple">Horarios y Precios</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-grow">
                    Consulta nuestros horarios de clases y las diferentes opciones de tarifas disponibles
                  </p>
                  <p className="mt-4 text-brand-teal font-medium text-sm flex items-center">
                    Ver horarios <ArrowRight className="ml-1 h-3 w-3" />
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/contacto" className="group">
              <div className="overflow-hidden rounded-xl shadow-sm border transition-all duration-300 group-hover:shadow-md h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Contacto"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-heading font-medium text-brand-purple">Contacto</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-grow">
                    Ponte en contacto con nosotros para resolver cualquier duda o reservar tu clase
                  </p>
                  <p className="mt-4 text-brand-teal font-medium text-sm flex items-center">
                    Contactar <ArrowRight className="ml-1 h-3 w-3" />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-teal text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-medium mb-4">
              Comienza Tu Viaje Hacia el Bienestar
            </h2>
            <p className="text-white/90 mb-8">
              Descubre los beneficios del yoga y nuestras terapias holísticas. Primera clase de prueba gratuita para nuevos alumnos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contacto" 
                className="bg-brand-amber hover:bg-brand-amber/90 text-brand-purple px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
              >
                Reservar Primera Clase
              </Link>
              <Link 
                href="/horarios-precios" 
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
              >
                Ver Horarios y Precios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-brand-purple font-medium mb-4">Síguenos en nuestras redes sociales</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com/mandalaourense" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-teal transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/mandalaourense" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-brand-teal transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}