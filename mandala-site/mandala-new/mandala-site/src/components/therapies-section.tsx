"use client"

import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Leaf, Sparkles } from "lucide-react"

const therapies = [
  {
    title: "Masaje Terapéutico",
    description: "Técnica manual que alivia tensiones musculares, reduce el estrés y mejora la circulación sanguínea.",
    icon: <Heart className="h-5 w-5 text-rose-500" />,
    color: "bg-rose-50 border-l-4 border-l-rose-400"
  },
  {
    title: "Tratamientos Ayurvédicos",
    description: "Terapias basadas en la medicina tradicional india para restaurar el equilibrio entre cuerpo, mente y espíritu.",
    icon: <Leaf className="h-5 w-5 text-emerald-500" />,
    color: "bg-emerald-50 border-l-4 border-l-emerald-400"
  },
  {
    title: "Constelaciones Familiares",
    description: "Método terapéutico que busca resolver conflictos y patrones heredados en el sistema familiar.",
    icon: <Sparkles className="h-5 w-5 text-amber-500" />,
    color: "bg-amber-50 border-l-4 border-l-amber-400"
  }
]

export function TherapiesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f7f9f9_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg border border-white/80">
              <Image
                src="/images/therapy.jpg"
                alt="Terapias holísticas en Mandala Ourense"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-brand-teal/20 z-0"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-amber/20 z-0"></div>
            
            {/* Thumbnail image */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-lg overflow-hidden border-4 border-white shadow-lg hidden lg:block">
              <Image
                src="/images/yoga-meditation.jpg"
                alt="Centro de terapias"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Testimonial */}
            <div className="mt-10 lg:mt-16 p-6 bg-white rounded-lg shadow-sm border border-gray-100 relative z-10">
              <svg className="h-8 w-8 text-brand-purple/20 mb-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 italic">
                "Las terapias en Mandala Ourense me han ayudado a encontrar equilibrio en momentos difíciles. Un espacio de verdadera sanación."
              </p>
              <p className="text-sm font-medium text-brand-purple mt-3">
                María G. - Cliente desde 2019
              </p>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium text-brand-teal uppercase tracking-wider">SALUD INTEGRAL</span>
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mt-2 mb-4">
              Bienestar para Cuerpo, Mente y Espíritu
            </h2>
            <p className="text-gray-600 mb-8">
              Nuestras terapias están diseñadas para tratar no solo los síntomas físicos, sino también los aspectos emocionales y energéticos de cada persona, promoviendo una sanación integral y duradera.
            </p>
            
            <div className="space-y-5">
              {therapies.map((therapy, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg shadow-sm ${therapy.color} transition-all duration-300 hover:shadow-md overflow-hidden`}
                >
                  <div className="flex items-start gap-4 p-5">
                    <div className="rounded-full bg-white p-2 shadow-sm self-start mt-1">
                      {therapy.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-purple">{therapy.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{therapy.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button asChild variant="outline" className="group border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                <Link href="/terapias" className="flex items-center">
                  Descubrir todas nuestras terapias
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}