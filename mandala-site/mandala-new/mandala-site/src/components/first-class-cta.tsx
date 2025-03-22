"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import Image from "next/image"

export function FirstClassCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-r from-brand-purple/10 to-brand-teal/10">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9d386_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-8 md:left-16 bottom-16 text-amber-400 opacity-70">
        <Star className="h-8 w-8 fill-amber-400" strokeWidth={1} />
      </div>
      <div className="absolute right-12 top-1/4 text-amber-300/40 hidden md:block">
        <Sparkles className="h-16 w-16" />
      </div>
      <div className="absolute top-1/3 left-1/4 text-amber-500/30 hidden md:block">
        <Star className="h-10 w-10 fill-amber-500/30" strokeWidth={1} />
      </div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl -z-10"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-brand-teal/20 blur-3xl -z-10"></div>
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-purple mb-6">
              ¿Listo para iniciar tu práctica de yoga?
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Reserva tu primera clase ahora y comienza tu viaje hacia el bienestar físico y mental con nosotros en un ambiente acogedor y profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-brand-purple font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                Reservar Primera Clase
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/horarios-precios"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-gray-50 text-brand-purple font-medium rounded-md shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300"
              >
                Ver Horarios
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 max-w-sm w-full">
            <h3 className="text-xl font-medium text-brand-purple mb-4">Beneficios de tu Primera Clase</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                  <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Evaluación personalizada de tu nivel y necesidades</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                  <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Consejos sobre qué modalidad de yoga es mejor para ti</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                  <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Información sobre nuestros horarios y bonos</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                  <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Recorrido por nuestras instalaciones</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
} 