"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Moon, Droplets, Heart } from "lucide-react"

export default function ClientPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Yin Yoga practice"
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
              Yin Yoga
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Una práctica suave y profunda que combina posturas sostenidas y meditación para equilibrar el cuerpo y la mente.
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
                ¿Qué es el Yin Yoga?
              </h2>
              <p className="text-gray-700">
                El Yin Yoga es un estilo de yoga tranquilo y meditativo que trabaja profundamente los tejidos conectivos del cuerpo
                —ligamentos, articulaciones y fascia— a través de posturas pasivas mantenidas durante períodos prolongados de tiempo,
                generalmente entre 3 y 5 minutos.
              </p>
              <p className="text-gray-700">
                Inspirado en la filosofía taoísta y la medicina tradicional china, el Yin Yoga busca estimular los meridianos energéticos
                (canales por donde fluye la energía vital o chi) y restaurar el equilibrio entre las cualidades yin (pasiva, receptiva, femenina)
                y yang (activa, dinámica, masculina) en nuestro cuerpo y mente.
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
                  <Moon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Práctica Pasiva</h3>
                <p className="text-gray-600">
                  Posturas mantenidas durante varios minutos que permiten relajar los músculos y trabajar el tejido conectivo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                  <Droplets className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Fluidez Energética</h3>
                <p className="text-gray-600">
                  Estimulación de los meridianos energéticos para mejorar el flujo del chi en todo el cuerpo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-amber/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-brand-amber" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Conexión Interior</h3>
                <p className="text-gray-600">
                  Cultivo de la atención plena y la observación interna para desarrollar una mayor autoconciencia.
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
                    <span>Aumenta la flexibilidad de articulaciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la movilidad y elasticidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Libera tensiones crónicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Regenera los tejidos conectivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la circulación en tejidos profundos</span>
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
                    <span>Calma la mente y el sistema nervioso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Desarrolla la paciencia y aceptación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Mejora la capacidad de introspección</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Favorece un sueño más profundo</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-amber/5 to-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Beneficios Energéticos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Equilibra el sistema energético</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Estimula los meridianos de energía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Libera bloqueos energéticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Armoniza las cualidades yin y yang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span>Nutre los órganos internos</span>
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
                Nuestras Clases de Yin Yoga
              </h2>
              <p className="text-gray-700 mb-6">
                Nuestras sesiones de Yin Yoga están diseñadas para todos los niveles, con especial atención a crear un espacio 
                de calma y autoexploración. Cada clase incluye:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Meditación Inicial</h4>
                  <p className="text-sm text-gray-700">Centrado y preparación mental para la práctica</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Asanas Pasivas</h4>
                  <p className="text-sm text-gray-700">Secuencia de posturas sostenidas para trabajar los tejidos profundos</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Respiración Consciente</h4>
                  <p className="text-sm text-gray-700">Técnicas de respiración para profundizar la práctica</p>
                </div>
                <div className="bg-brand-beige p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2 text-brand-purple">Relajación Final</h4>
                  <p className="text-sm text-gray-700">Práctica de relajación profunda para integrar los beneficios</p>
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
                  ¿Preparado para experimentar los beneficios del Yin Yoga?
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