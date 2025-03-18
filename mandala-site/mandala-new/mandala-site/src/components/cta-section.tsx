import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-purple/90 to-brand-teal/90 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold mb-4">
            Comienza Tu Viaje Hacia el Bienestar
          </h2>
          <p className="text-white/90 mb-8">
            Descubre los beneficios del yoga y nuestras terapias holísticas. Primera clase de prueba gratuita para nuevos alumnos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="amber" size="lg">
              <Link href="/contacto">Reservar Primera Clase</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link href="/horarios-precios">Ver Horarios y Precios</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}