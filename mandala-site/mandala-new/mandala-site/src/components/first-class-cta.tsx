"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import Image from "next/image"

export function FirstClassCTA() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Add a small delay before showing the content
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cta-background.jpg"
          alt="Yoga practice background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-amber-50/30 to-brand-beige/20"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9d386_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-8 md:left-16 bottom-16 md:bottom-1/3 text-amber-400 opacity-90">
        <Star className="h-8 w-8 fill-amber-400" strokeWidth={1} />
      </div>
      <div className="absolute right-12 top-1/4 text-amber-300/40 hidden md:block">
        <Sparkles className="h-16 w-16" />
      </div>
      <div className="absolute bottom-1/2 left-1/3 text-amber-200/30 hidden md:block">
        <Star className="h-10 w-10" strokeWidth={1} />
      </div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl -z-10"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl -z-10"></div>
      
      <Container>
        <div 
          className={`max-w-xl mx-auto text-center transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-purple mb-8">
            ¿Listo para iniciar tu práctica de yoga?
          </h2>
          
          <p className="text-lg text-gray-600 mb-14 leading-relaxed max-w-lg mx-auto">
            Reserva tu primera clase ahora y comienza tu viaje hacia el bienestar físico y mental con nosotros.
          </p>
          
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-brand-purple font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            Reservar Tu Primera Clase
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  )
} 