import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { YogaStylesSection } from "@/components/yoga-styles-section"
import { TherapiesSection } from "@/components/therapies-section"
import { SchedulePreview } from "@/components/schedule-preview"
import { FirstClassCTA } from "@/components/first-class-cta"
import Image from "next/image"

// Hero Section with Image
function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-gray-900">
        <Image
          src="/images/yoga-meditation.jpg"
          alt="Yoga practice at Mandala Ourense"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30"></div>
      </div>
      
      <Container>
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-heading font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
            Encuentra tu equilibrio interior en Mandala Ourense
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-200">
            Centro de yoga y terapias holísticas para el bienestar físico, mental y espiritual
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link 
              href="/horarios-precios" 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              Ver horarios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/contacto" 
              className="bg-white hover:bg-gray-100 text-brand-purple border border-gray-200 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

// Simple CTA Section
function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-teal text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold mb-4">
            Comienza Tu Viaje Hacia el Bienestar
          </h2>
          <p className="text-white/90 mb-8">
            Descubre los beneficios del yoga y nuestras terapias holísticas. Primera clase de prueba gratuita para nuevos alumnos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contacto" 
              className="bg-amber-400 hover:bg-amber-500 text-brand-purple px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              Reservar Primera Clase
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/horarios-precios" 
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              Ver Horarios y Precios
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <YogaStylesSection />
      <SchedulePreview />
      <TherapiesSection />
      <FirstClassCTA />
      <CTASection />
    </main>
  )
}