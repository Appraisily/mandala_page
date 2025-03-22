import { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { ArrowLeft } from "lucide-react"
import { GoogleSitesEmbed } from "@/components/google-sites-embed"

export const metadata: Metadata = {
  title: "Cursos y Eventos | Mandala Ourense",
  description: "Descubre nuestros próximos cursos, talleres y eventos especiales de yoga y bienestar en Mandala Ourense.",
}

export default function CoursesEventsPage() {
  return (
    <main className="pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-purple mb-8">
            Cursos y Eventos
          </h1>
          
          <div className="prose max-w-none mb-10">
            <p className="text-lg text-gray-700">
              Descubre nuestras próximas formaciones, talleres y eventos especiales. 
              Mandala Ourense te ofrece oportunidades únicas para profundizar en tu 
              práctica de yoga y expandir tus conocimientos sobre bienestar integral.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 mb-12">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-heading font-medium text-brand-purple">
                Próximos Eventos y Cursos
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Contenido administrado por Google Sites para fácil actualización
              </p>
            </div>
            
            <div className="p-6">
              <GoogleSitesEmbed height="800px" />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Inicio
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}