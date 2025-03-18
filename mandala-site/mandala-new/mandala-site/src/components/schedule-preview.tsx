import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const scheduleData = [
  {
    day: "Lunes",
    classes: [
      { time: "10:00 - 11:30", name: "Hatha Yoga", level: "Todos los niveles", color: "bg-brand-teal/20" },
      { time: "18:00 - 19:30", name: "Daoyin Yoga", level: "Principiantes", color: "bg-brand-amber/20" },
      { time: "20:00 - 21:15", name: "Yoga Nidra", level: "Todos los niveles", color: "bg-brand-purple/20" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "11:00 - 12:30", name: "Hatha Yoga", level: "Avanzado", color: "bg-brand-teal/20" },
      { time: "19:00 - 20:30", name: "Meditación", level: "Todos los niveles", color: "bg-brand-purple/20" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "10:00 - 11:30", name: "Daoyin Yoga", level: "Intermedio", color: "bg-brand-amber/20" },
      { time: "18:00 - 19:30", name: "Hatha Yoga", level: "Principiantes", color: "bg-brand-teal/20" },
      { time: "20:00 - 21:15", name: "Yoga Nidra", level: "Todos los niveles", color: "bg-brand-purple/20" },
    ],
  },
]

export function SchedulePreview() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
            Horario Semanal
          </h2>
          <p className="text-gray-600">
            Vista previa de nuestras clases. Descubre el horario completo y precios en nuestra página de horarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {scheduleData.map((day) => (
            <div key={day.day} className="rounded-lg border bg-white overflow-hidden shadow-sm">
              <div className="bg-brand-purple p-4">
                <h3 className="text-lg font-medium text-white">{day.day}</h3>
              </div>
              <div className="p-4 space-y-3">
                {day.classes.map((cls, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "p-3 rounded-md", 
                      cls.color
                    )}
                  >
                    <p className="font-medium text-brand-purple">{cls.name}</p>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{cls.time}</span>
                      <span>{cls.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/horarios-precios">Ver Horario Completo</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}