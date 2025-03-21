"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      ref={ref} 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Yoga meditation background"
          fill
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/80 to-brand-teal/80 mix-blend-multiply" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0 z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0 z-10"></div>
      <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl z-10"></div>
      <div className="absolute bottom-1/3 -right-10 w-40 h-40 rounded-full bg-white/5 blur-3xl z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Left content */}
              <div className="md:w-3/5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4 mr-2 text-brand-amber" /> 
                  Primera clase gratuita
                </div>
                
                <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4 text-white leading-tight">
                  Comienza Tu Viaje Hacia el Bienestar Interior
                </h2>
                
                <p className="text-white/90 mb-8 text-lg">
                  Descubre los beneficios del yoga y nuestras terapias holísticas en un espacio diseñado para tu crecimiento personal y bienestar integral.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link 
                      href="/contacto" 
                      className="bg-brand-amber hover:bg-brand-amber/90 text-brand-purple px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors w-full sm:w-auto group"
                    >
                      Reservar Tu Primera Clase
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link 
                      href="/horarios-precios" 
                      className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors w-full sm:w-auto"
                    >
                      Ver Horarios y Precios
                    </Link>
                  </motion.div>
                </div>
              </div>
              
              {/* Right decorative element */}
              <div className="hidden md:block md:w-2/5 relative">
                <div className="aspect-square w-full relative">
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center p-8">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white/80">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path 
                        d="M50 5 
                          A 45 45 0 0 1 95 50 
                          A 45 45 0 0 1 50 95 
                          A 45 45 0 0 1 5 50 
                          A 45 45 0 0 1 50 5 Z" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                      />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-heading text-lg">Mandala Ourense</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}