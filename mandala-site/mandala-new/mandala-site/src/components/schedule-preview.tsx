import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GoogleCalendar } from "@/components/google-calendar"

export function SchedulePreview() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
            CLASES SEMANALES
          </h2>
          <p className="text-gray-600">
            Encuentra el Momento Perfecto para Tu Práctica
          </p>
          <p className="text-gray-600 mt-2">
            Vista previa de nuestro horario semanal. Ofrecemos diferentes opciones de clases durante el día para adaptarnos a tu rutina.
          </p>
        </div>

        {/* Google Calendar Integration */}
        <GoogleCalendar 
          height="500px"
          title="Horario Semanal"
          description="Vista previa de nuestro horario semanal. Ofrecemos diferentes opciones de clases durante el día para adaptarnos a tu rutina."
        />

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/horarios-precios">Ver Horario Completo</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}