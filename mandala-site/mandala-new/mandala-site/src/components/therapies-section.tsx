import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TherapiesSection() {
  return (
    <section className="py-16 bg-brand-beige/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Terapias Holísticas
            </h2>
            <p className="text-gray-600 mb-6">
              Nuestras terapias están diseñadas para tratar no solo los síntomas físicos, sino también los aspectos emocionales y energéticos de cada persona, promoviendo una curación integral.
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-brand-purple">Masaje Terapéutico</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Técnica manual que alivia tensiones musculares, reduce el estrés y mejora la circulación sanguínea.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-brand-purple">Tratamientos Ayurvédicos</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Terapias basadas en la medicina tradicional india para restaurar el equilibrio entre cuerpo, mente y espíritu.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium text-brand-purple">Constelaciones Familiares</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Método terapéutico que busca resolver conflictos y patrones heredados en el sistema familiar.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild variant="purple">
                <Link href="/terapias">Ver Todas las Terapias</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/therapy.jpg"
                alt="Terapias holísticas en Mandala Ourense"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-brand-teal/20 z-0"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-amber/20 z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}