"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Sparkles, Heart, Leaf } from "lucide-react"

const therapies = [
  {
    title: "Masaje Terapéutico",
    description: "Técnica manual que alivia tensiones musculares, reduce el estrés y mejora la circulación sanguínea.",
    icon: <Heart className="h-5 w-5" />,
    color: "bg-gradient-to-br from-pink-50 to-red-50 group-hover:from-pink-100 group-hover:to-red-100",
    iconColor: "text-brand-terracotta bg-brand-terracotta/10"
  },
  {
    title: "Tratamientos Ayurvédicos",
    description: "Terapias basadas en la medicina tradicional india para restaurar el equilibrio entre cuerpo, mente y espíritu.",
    icon: <Leaf className="h-5 w-5" />,
    color: "bg-gradient-to-br from-green-50 to-emerald-50 group-hover:from-green-100 group-hover:to-emerald-100",
    iconColor: "text-brand-teal bg-brand-teal/10"
  },
  {
    title: "Constelaciones Familiares",
    description: "Método terapéutico que busca resolver conflictos y patrones heredados en el sistema familiar.",
    icon: <Sparkles className="h-5 w-5" />,
    color: "bg-gradient-to-br from-amber-50 to-yellow-50 group-hover:from-amber-100 group-hover:to-yellow-100",
    iconColor: "text-brand-amber bg-brand-amber/10"
  }
]

export function TherapiesSection() {
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
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f7f9f9_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl -z-10"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text and Therapy Cards */}
          <motion.div 
            className="order-2 lg:order-1 lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-medium text-brand-teal uppercase tracking-wider">Salud integral</span>
            <h2 className="heading-2 text-brand-purple mt-2 mb-4 text-balance">
              Bienestar para Cuerpo, Mente y Espíritu
            </h2>
            <p className="text-gray-600 mb-8 text-balance">
              Nuestras terapias están diseñadas para tratar no solo los síntomas físicos, sino también los aspectos emocionales y energéticos de cada persona, promoviendo una sanación integral y duradera.
            </p>

            <motion.div 
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {therapies.map((therapy, index) => (
                <motion.div
                  key={index}
                  className={`card-hover rounded-xl p-5 group ${therapy.color} border border-transparent transition-all duration-300`}
                  variants={itemVariants}
                >
                  <div className="flex gap-4">
                    <div className={`rounded-full p-2.5 ${therapy.iconColor} self-start`}>
                      {therapy.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-purple transition-colors duration-300">
                        {therapy.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {therapy.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <Link
                href="/terapias"
                className="btn-secondary group inline-flex items-center"
              >
                Descubrir todas nuestras terapias
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Images */}
          <motion.div 
            className="order-1 lg:order-2 lg:col-span-6 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Terapias holísticas en Mandala Ourense"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating smaller image */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80"
                  alt="Terapia ayurvédica"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 rounded-full bg-brand-teal/20"></div>
              <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 rounded-full bg-brand-amber/20"></div>
            </div>
            
            {/* Testimonial */}
            <div className="mt-12 md:ml-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative z-10">
              <svg className="h-8 w-8 text-brand-purple/20 mb-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 mb-3 text-sm italic">
                "Las terapias en Mandala Ourense me han ayudado a encontrar equilibrio en momentos difíciles. Un espacio de verdadera sanación."
              </p>
              <p className="text-sm font-medium text-brand-purple">
                María G. - Cliente desde 2019
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}