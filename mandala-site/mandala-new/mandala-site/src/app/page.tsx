import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { YogaStylesSection } from "@/components/yoga-styles-section"

// Simple Hero Section
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-brand-purple/5 to-brand-beige/20 pt-20 pb-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-heading font-medium tracking-tight text-brand-purple sm:text-5xl md:text-6xl">
            Encuentra tu equilibrio interior en Mandala Ourense
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Centro de yoga y terapias holísticas para el bienestar físico, mental y espiritual
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
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
    </main>
  )
}