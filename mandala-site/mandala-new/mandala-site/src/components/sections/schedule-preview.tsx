"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const scheduleData = [
  {
    day: "Lunes",
    shortDay: "LUN",
    classes: [
      { time: "10:00 - 11:30", name: "Hatha Yoga", level: "Todos los niveles", color: "border-l-brand-teal" },
      { time: "18:00 - 19:30", name: "Daoyin Yoga", level: "Principiantes", color: "border-l-brand-amber" },
      { time: "20:00 - 21:15", name: "Yoga Nidra", level: "Todos los niveles", color: "border-l-brand-purple" },
    ]
  },
  {
    day: "Martes",
    shortDay: "MAR",
    classes: [
      { time: "11:00 - 12:30", name: "Hatha Yoga", level: "Avanzado", color: "border-l-brand-teal" },
      { time: "19:00 - 20:30", name: "Meditación", level: "Todos los niveles", color: "border-l-brand-purple" },
    ]
  },
  {
    day: "Miércoles",
    shortDay: "MIÉ",
    classes: [
      { time: "10:00 - 11:30", name: "Daoyin Yoga", level: "Intermedio", color: "border-l-brand-amber" },
      { time: "18:00 - 19:30", name: "Hatha Yoga", level: "Principiantes", color: "border-l-brand-teal" },
      { time: "20:00 - 21:15", name: "Yoga Nidra", level: "Todos los niveles", color: "border-l-brand-purple" },
    ]
  }
]

export function SchedulePreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-beige/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl -z-10"></div>
      <div className="absolute -top-10 left-1/4 w-72 h-72 rounded-full bg-brand-amber/5 blur-3xl -z-10"></div>

      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-brand-teal uppercase tracking-wider">Clases semanales</span>
          <h2 className="heading-2 text-brand-purple mt-2 mb-4 text-balance">
            Encuentra el Momento Perfecto para Tu Práctica
          </h2>
          <p className="text-gray-600 text-balance">
            Vista previa de nuestro horario semanal. Ofrecemos diferentes opciones de clases durante el día para adaptarnos a tu rutina.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8 mb-12 overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Desktop Schedule View */}
            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-1 py-2 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-brand-purple mr-2" />
                  <span className="font-medium text-brand-purple">Día</span>
                </div>
                <div className="col-span-3 py-2 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-brand-purple mr-2" />
                  <span className="font-medium text-brand-purple">Clases</span>
                </div>
              </div>
              
              {scheduleData.map((day, idx) => (
                <motion.div 
                  key={day.day}
                  variants={itemVariants}
                  className="grid grid-cols-4 gap-4 mb-6"
                >
                  {/* Day Column */}
                  <div className="col-span-1 bg-brand-beige/40 rounded-lg p-4 flex flex-col items-center justify-center">
                    <span className="font-heading text-brand-purple text-lg font-medium">{day.day}</span>
                  </div>

                  {/* Classes Column */}
                  <div className="col-span-3 space-y-2">
                    {day.classes.map((cls, classIdx) => (
                      <div 
                        key={classIdx}
                        className={cn(
                          "bg-white border-l-4 rounded-lg shadow-sm p-3 hover:shadow-md transition-all duration-300",
                          cls.color
                        )}
                      >
                        <div className="flex flex-wrap justify-between items-center gap-2">
                          <span className="font-medium text-brand-purple">{cls.name}</span>
                          <div className="flex items-center">
                            <div className="text-sm text-gray-600 flex items-center mr-3">
                              <Clock className="h-3.5 w-3.5 mr-1 text-brand-teal/70" />
                              {cls.time}
                            </div>
                            <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-700">
                              {cls.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Schedule View */}
            <div className="md:hidden space-y-6">
              {scheduleData.map((day, idx) => (
                <motion.div 
                  key={day.day}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm"
                >
                  <div className="bg-brand-purple p-3 text-center">
                    <h3 className="text-white font-medium">{day.day}</h3>
                  </div>
                  <div className="p-3 space-y-3">
                    {day.classes.map((cls, classIdx) => (
                      <div 
                        key={classIdx}
                        className={cn(
                          "bg-white border-l-4 rounded-md p-3",
                          cls.color
                        )}
                      >
                        <p className="font-medium text-brand-purple">{cls.name}</p>
                        <div className="flex justify-between mt-1 items-center">
                          <div className="text-sm text-gray-600 flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1 text-brand-teal/70" />
                            {cls.time}
                          </div>
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-700">
                            {cls.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="/horarios-precios"
            className="btn-primary group"
          >
            Ver Horario Completo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center text-gray-600">
            <div className="h-10 w-px bg-gray-200 hidden md:block mr-8"></div>
            <span className="text-sm">Primera clase de prueba gratuita para nuevos alumnos</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}