"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
          alt="Yoga studio with natural light"
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
          style={{ 
            transform: "translateZ(0)",
            willChange: "transform" 
          }}
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-purple/20 to-transparent z-10 opacity-40" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-teal/10 blur-3xl z-5" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-purple/15 blur-3xl z-5" />

      {/* Content */}
      <div className="container-custom relative z-20 py-24 md:py-32 lg:py-40">
        <motion.div 
          ref={ref}
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full"
          >
            Centro de yoga y bienestar en Ourense
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-heading leading-tight"
          >
            Encuentra tu <span className="text-brand-teal">equilibrio</span> interior
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-xl text-white/90 max-w-lg leading-relaxed"
          >
            En Mandala Ourense ofrecemos un espacio para conectar cuerpo, mente y espíritu a través del yoga y terapias holísticas.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/horarios-precios" 
              className="btn-primary group"
            >
              Ver Horarios
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/contacto" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              Contactar
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom curve decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 96" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 96L60 85.3C120 74.7 240 53.3 360 48C480 42.7 600 53.3 720 64C840 74.7 960 85.3 1080 80C1200 74.7 1320 53.3 1380 42.7L1440 32V96H1380C1320 96 1200 96 1080 96C960 96 840 96 720 96C600 96 480 96 360 96C240 96 120 96 60 96H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}