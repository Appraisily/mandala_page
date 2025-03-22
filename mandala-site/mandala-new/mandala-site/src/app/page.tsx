"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { YogaStylesSection } from "@/components/yoga-styles-section"
import { TherapiesSection } from "@/components/therapies-section"
import { SchedulePreview } from "@/components/schedule-preview"
import { FirstClassCTA } from "@/components/first-class-cta"
import Image from "next/image"

// Hero Section with CSS fallback approach
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Encuentra tu equilibrio interior en Mandala Ourense</h1>
        <p className="hero-subtitle">Centro de yoga y terapias holísticas para el bienestar físico, mental y espiritual</p>
        <div className="hero-buttons">
          <Link href="/horarios-precios" className="hero-button hero-button-primary">
            Ver horarios
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/contacto" className="hero-button hero-button-secondary">
            Contactar
          </Link>
        </div>
      </div>
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