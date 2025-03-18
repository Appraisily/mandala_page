"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Wind, Flame } from "lucide-react"

export default function HathaYogaPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hatha Yoga practice"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Hatha Yoga
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              El camino clásico hacia el equilibrio físico y mental a través de posturas (asanas), respiración (pranayama) y meditación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                ¿Qué es el Hatha Yoga?
              </h2>
              <p className="text-gray-700">
                El Hatha Yoga es una de las formas más tradicionales y practicadas de yoga en occidente. La palabra "Hatha" 
                proviene del sánscrito: "Ha" significa sol y "Tha" significa luna, simbolizando la unión de opuestos y el 
                equilibrio entre energías.
              </p>
              <p className="text-gray-700">
                Esta práctica combina posturas físicas (asanas), técnicas de respiración (pranayama), gestos energéticos (mudras) 
                y meditación para desarrollar fuerza, flexibilidad y equilibrio, tanto en el cuerpo como en la mente. El Hatha Yoga 
                es ideal para todos los niveles, desde principiantes hasta practicantes avanzados.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Práctica Completa</h3>
                <p className="text-gray-600">
                  Combinación equilibrada de posturas físicas, técnicas de respiración y meditación para un desarrollo integral.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                  <Wind className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Control Respiratorio</h3>
                <p className="text-gray-600">
                  Desarrollo de técnicas de pranayama que aumentan la energía vital y mejoran la capacidad respiratoria.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-amber/10 rounded-full flex items-center justify-center mb-6">
                  <Flame className="w-8 h-8 text-brand-amber" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Equilibrio Energético</h3>
                <p className="text-gray-600">
                  Armonización de las energías opuestas (sol y luna) para un estado de bienestar físico, mental y espiritual.
                </p>
              </div>
            </motion.div>

            {/* Benefits Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-teal/5 to-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Beneficios Físicos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Aumenta la flexibilidad y fortalece los músculos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la postura y alineación corporal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Fortalece el sistema inmunológico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Incrementa la energía y vitalidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la respiración y oxigenación</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-purple/5 to-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Beneficios Mentales</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Reduce el estrés y la ansiedad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la concentración y enfoque</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Promueve el equilibrio emocional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Aumenta la claridad mental</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la calidad del sueño</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-amber/5 to-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Beneficios Espirituales</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Profundiza la conexión mente-cuerpo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Desarrolla la autoconciencia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Favorece la paz interior</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Cultiva la presencia y el momento presente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Desarrolla una perspectiva más amplia de la vida</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                Nuestras Clases de Hatha Yoga
              </h2>
              <p className="text-gray-700 mb-6">
                Nuestras sesiones de Hatha Yoga están diseñadas para todos los niveles, con especial atención a la correcta alineación 
                y a la adaptación de las posturas según las necesidades individuales. Cada clase incluye:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Calentamiento</h4>
                  <p className="text-sm text-gray-700">Preparación del cuerpo para la práctica con movimientos suaves</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Asanas</h4>
                  <p className="text-sm text-gray-700">Secuencia de posturas físicas adaptadas a todos los niveles</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Pranayama</h4>
                  <p className="text-sm text-gray-700">Técnicas de respiración para aumentar la energía vital</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Relajación y Meditación</h4>
                  <p className="text-sm text-gray-700">Práctica de relajación profunda y meditación guiada</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  ¿Preparado para experimentar los beneficios del Hatha Yoga?
                </h3>
                <p className="text-gray-700 mb-6">
                  Consulta nuestros horarios y precios, o contacta con nosotros para resolver cualquier duda.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/horarios-precios" 
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Ver Horarios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    href="/contacto" 
                    className="bg-white hover:bg-gray-50 text-brand-purple border border-gray-200 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}