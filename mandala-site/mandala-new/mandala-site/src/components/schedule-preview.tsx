"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GoogleCalendar } from "@/components/google-calendar"
import { Clock } from "lucide-react"

// Sample class data for the visual layout
const classData = [
  {
    day: "Lunes",
    classes: [
      { time: "10:00 - 11:30", name: "Hatha Yoga", level: "Todos los niveles", color: "bg-teal-50 border-l-4 border-l-teal-400" },
      { time: "18:00 - 19:30", name: "Daoyin Yoga", level: "Principiantes", color: "bg-amber-50 border-l-4 border-l-amber-400" },
      { time: "20:00 - 21:15", name: "Yoga Nidra", level: "Todos los niveles", color: "bg-purple-50 border-l-4 border-l-purple-400" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "11:00 - 12:30", name: "Hatha Yoga", level: "Avanzado", color: "bg-teal-50 border-l-4 border-l-teal-400" },
      { time: "19:00 - 20:30", name: "Meditación", level: "Todos los niveles", color: "bg-purple-50 border-l-4 border-l-purple-400" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "10:00 - 11:30", name: "Daoyin Yoga", level: "Intermedio", color: "bg-amber-50 border-l-4 border-l-amber-400" },
      { time: "18:00 - 19:30", name: "Hatha Yoga", level: "Principiantes", color: "bg-teal-50 border-l-4 border-l-teal-400" },
      { time: "20:00 - 21:15", name: "Yoga Nidra", level: "Todos los niveles", color: "bg-purple-50 border-l-4 border-l-purple-400" },
    ],
  },
]

export function SchedulePreview() {
  return (
    <section className="py-16 bg-gray-50/80 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl -z-10"></div>

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-brand-teal uppercase tracking-wider">CLASES SEMANALES</span>
          <h2 className="text-3xl font-heading font-semibold text-brand-purple mt-2 mb-4">
            Encuentra el Momento Perfecto para Tu Práctica
          </h2>
          <p className="text-gray-600 mt-2">
            Vista previa de nuestro horario semanal. Ofrecemos diferentes opciones de clases durante el día para adaptarnos a tu rutina.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-8">
          {/* Full width: Google Calendar */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-medium text-center mb-6 text-brand-purple">Calendario de Clases</h3>
            
            {/* Today's Activities */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4 text-brand-teal border-b pb-2">Actividades de Hoy</h4>
              <GoogleCalendar 
                height="200px"
                title=""
                description=""
                showFullCalendar={false}
              />
            </div>
            
            {/* Monthly Calendar */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-brand-teal border-b pb-2">Calendario Mensual</h4>
              <GoogleCalendar 
                height="500px"
                title=""
                description=""
                showFullCalendar={true}
              />
            </div>
            
            <p className="text-sm text-center text-gray-500 mt-6">
              * Para reservar una clase, haz clic en el evento y contacta con nosotros
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="px-6 border-brand-purple text-brand-purple hover:bg-brand-purple/5">
            <Link href="/horarios-precios">Ver Horario Completo</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}