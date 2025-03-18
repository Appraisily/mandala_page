"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Moon, Brain, Heart } from "lucide-react"

export default function YogaNidraPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Yoga Nidra meditation session"
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
              Yoga Nidra & Meditación
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Técnicas de relajación profunda y meditación guiada que ayudan a reducir el estrés, mejorar la calidad del sueño y aumentar la claridad mental.
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
                ¿Qué es el Yoga Nidra?
              </h2>
              <p className="text-gray-700">
                El Yoga Nidra, también conocido como "sueño yóguico", es una potente práctica de relajación sistemática 
                que te lleva a un estado de conciencia entre la vigilia y el sueño. En este estado receptivo, el cuerpo 
                descansa profundamente mientras la mente permanece despierta, permitiendo acceder a niveles profundos de la conciencia.
              </p>
              <p className="text-gray-700">
                Esta práctica milenaria ha sido adaptada a la vida moderna para ayudar a combatir el estrés, el insomnio y la ansiedad. 
                Una sesión de 30-45 minutos de Yoga Nidra equivale a unas 3 horas de sueño en términos de recuperación física y mental.
              </p>

              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6 mt-12">
                Meditación Consciente
              </h2>
              <p className="text-gray-700">
                Complementando al Yoga Nidra, nuestras clases de meditación ofrecen técnicas variadas para entrenar la mente en 
                atención plena y conciencia. Practicamos diferentes estilos de meditación adaptados a todos los niveles, desde 
                principiantes hasta meditadores con experiencia.
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
                <div className="w-16 h-16 mx-auto bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                  <Moon className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Relajación Profunda</h3>
                <p className="text-gray-600">
                  El Yoga Nidra induce un estado de relajación profunda que permite al sistema nervioso descansar y regenerarse completamente.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Atención Consciente</h3>
                <p className="text-gray-600">
                  Nuestras prácticas de meditación desarrollan la capacidad de mantener la atención en el momento presente, reduciendo la rumiación mental.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-amber/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-brand-amber" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Bienestar Integral</h3>
                <p className="text-gray-600">
                  La combinación de Yoga Nidra y meditación promueve un bienestar integral, conectando cuerpo, mente y espíritu.
                </p>
              </div>
            </motion.div>

            {/* Benefits Cards */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Beneficios Comprobados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-purple/5 to-white p-6 shadow-sm">
                  <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Yoga Nidra</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Reduce el insomnio y mejora la calidad del sueño</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Disminuye los niveles de cortisol (hormona del estrés)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Alivia la ansiedad y los síntomas de depresión</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Mejora la memoria y las funciones cognitivas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Regenera el cuerpo a nivel celular</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-brand-teal/5 to-white p-6 shadow-sm">
                  <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Meditación</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Aumenta la concentración y la capacidad de atención</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Reduce la presión arterial y mejora la salud cardiovascular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Favorece la regulación emocional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Fortalece el sistema inmunológico</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Desarrolla la introspección y el autoconocimiento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-brand-beige rounded-xl p-8 border border-gray-100 shadow-sm">
                <svg className="w-10 h-10 text-brand-purple/30 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 italic mb-6">
                  "Las clases de Yoga Nidra han transformado mi vida. Solía sufrir de insomnio crónico, pero ahora duermo profundamente toda la noche. La combinación de relajación profunda y meditación me ha ayudado a manejar el estrés del trabajo de una manera que nunca pensé posible."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple font-medium">
                    ML
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">María López</p>
                    <p className="text-sm text-gray-500">Alumna desde 2021</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  Comienza tu viaje hacia la calma interior
                </h3>
                <p className="text-gray-700 mb-6">
                  Nuestras clases de Yoga Nidra y Meditación son adecuadas para todos los niveles. No requieren experiencia previa ni condición física especial.
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