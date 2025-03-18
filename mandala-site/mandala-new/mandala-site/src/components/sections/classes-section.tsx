"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

const classes = [
  {
    id: "hatha-yoga",
    title: "Hatha Yoga",
    description: "Yoga tradicional que trabaja posturas físicas, técnicas de respiración y meditación para equilibrar cuerpo y mente.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/yoga/hatha-yoga",
    benefits: [
      "Mejora la flexibilidad y fuerza",
      "Reduce el estrés y la ansiedad",
      "Mejora la postura y alineación",
      "Promueve la consciencia corporal"
    ],
    color: "bg-gradient-to-br from-brand-purple/5 to-brand-teal/10",
    icon: "🧘‍♀️"
  },
  {
    id: "daoyin-yoga",
    title: "Daoyin Yoga",
    description: "Una fusión de yoga con principios de medicina china, fortaleciendo el cuerpo y equilibrando la energía vital.",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    href: "/yoga/daoyin-yoga",
    benefits: [
      "Equilibra la energía del cuerpo",
      "Fortalece músculos profundos",
      "Mejora la circulación",
      "Conecta con la tradición taoísta"
    ],
    color: "bg-gradient-to-br from-brand-amber/5 to-brand-terracotta/10",
    icon: "🌱"
  },
  {
    id: "nidra-yoga",
    title: "Yoga Nidra & Meditación",
    description: "Técnica de relajación profunda y meditación guiada que ayuda a reducir el estrés y mejorar la calidad del sueño.",
    image: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/yoga/nidra-yoga-meditacion",
    benefits: [
      "Reduce el insomnio",
      "Alivia el estrés y la ansiedad",
      "Mejora la claridad mental",
      "Profundiza la conexión mente-cuerpo"
    ],
    color: "bg-gradient-to-br from-brand-beige/60 to-brand-purple/5",
    icon: "✨"
  },
]

export function ClassesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-gradient-light relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl" />
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-brand-purple/5 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-brand-teal uppercase tracking-wider">Disciplinas</span>
          <h2 className="heading-2 text-brand-purple mt-2 mb-4 text-balance">
            Descubre Nuestros Estilos de Yoga
          </h2>
          <p className="text-gray-600 text-balance">
            Exploramos diferentes prácticas de yoga para satisfacer tus necesidades, desde el trabajo físico hasta la meditación profunda. Todas nuestras clases son aptas para principiantes y practicantes avanzados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {classes.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className={`card-base card-hover h-full flex flex-col ${yogaClass.color}`}>
                {/* Card header with image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={yogaClass.image}
                    alt={yogaClass.title}
                    fill
                    className="object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-xl">
                    {yogaClass.icon}
                  </div>
                </div>
                
                {/* Card content */}
                <div className="flex-grow p-6 flex flex-col">
                  <h3 className="text-xl font-heading font-medium text-brand-purple mb-2">
                    {yogaClass.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-5 flex-grow">
                    {yogaClass.description}
                  </p>
                  
                  {/* Benefits list */}
                  <div className="mb-5 space-y-2">
                    {yogaClass.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-full bg-brand-teal/10 p-1">
                          <Check className="h-3 w-3 text-brand-teal" />
                        </div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to action */}
                  <Link 
                    href={yogaClass.href}
                    className="mt-auto group inline-flex items-center text-sm font-medium text-brand-teal hover:text-brand-teal/80 transition-colors"
                  >
                    Descubrir más
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="/horarios-precios" 
            className="btn-secondary inline-flex items-center group"
          >
            Consultar horarios de clases
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-4 text-sm text-gray-500">Primera clase de prueba gratuita para nuevos alumnos</p>
        </motion.div>
      </div>
    </section>
  )
}