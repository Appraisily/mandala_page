"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function DaoyinYogaPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
            alt="Daoyin Yoga practice"
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
              Daoyin Yoga
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Fusión ancestral de yoga con principios de medicina china tradicional, que fortalece el cuerpo y equilibra la energía vital.
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
                ¿Qué es el Daoyin Yoga?
              </h2>
              <p className="text-gray-700">
                El Daoyin Yoga es una práctica milenaria que combina los principios del yoga con la sabiduría de la medicina tradicional china. 
                Esta disciplina trabaja con los meridianos energéticos (canales por donde circula la energía vital o Chi), 
                integrando movimientos fluidos, posturas estáticas, técnicas de respiración y meditación.
              </p>
              <p className="text-gray-700">
                La palabra "Daoyin" significa literalmente "guiar y estirar", refiriéndose al proceso de guiar la energía a través 
                del cuerpo mediante movimientos específicos y estiramientos. Esta práctica es ideal para quienes buscan no solo 
                beneficios físicos, sino también un equilibrio energético profundo.
              </p>
            </motion.div>

            {/* Benefits Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-teal/5 to-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Beneficios Físicos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Aumenta la flexibilidad y fortalece los músculos profundos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la postura y la alineación corporal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Estimula la circulación sanguínea y linfática</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Fortalece los órganos internos y los sistemas del cuerpo</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-purple/5 to-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Beneficios Energéticos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Equilibra el flujo de energía en los meridianos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Armoniza los cinco elementos según la medicina china</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Elimina bloqueos energéticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Incrementa la vitalidad y resistencia general</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-amber/5 to-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Beneficios Mentales</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Reduce el estrés y la ansiedad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la concentración y claridad mental</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Promueve el equilibrio emocional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Desarrolla la intuición y percepción energética</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                Nuestras Clases de Daoyin Yoga
              </h2>
              <p className="text-gray-700 mb-6">
                Nuestras sesiones de Daoyin Yoga están diseñadas para todos los niveles, desde principiantes hasta practicantes avanzados. 
                Cada clase incluye:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Calentamiento Energético</h4>
                  <p className="text-sm text-gray-700">Ejercicios suaves para activar la circulación de energía</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Secuencias de Meridianos</h4>
                  <p className="text-sm text-gray-700">Movimientos específicos para equilibrar los canales energéticos</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Respiración Taoísta</h4>
                  <p className="text-sm text-gray-700">Técnicas para cultivar y dirigir la energía vital</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Meditación Guiada</h4>
                  <p className="text-sm text-gray-700">Para integrar los beneficios y profundizar la práctica</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  ¿Listo para experimentar los beneficios del Daoyin Yoga?
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