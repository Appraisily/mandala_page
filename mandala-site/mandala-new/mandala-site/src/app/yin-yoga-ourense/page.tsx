import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowRightIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Yin Yoga en Ourense | Clases de Yin Yoga | Mandala Ourense",
  description: "Descubre nuestras clases de Yin Yoga en Ourense. Practica posturas suaves y sostenidas para mejorar la flexibilidad, reducir el estrés y equilibrar la energía corporal en Mandala Centro de Yoga.",
  keywords: "yin yoga ourense, clases yin yoga ourense, yoga restaurativo ourense, yoga relajación ourense, yoga flexibilidad ourense",
}

export default function YinYogaOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Yin Yoga en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Yin Yoga en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Descubre la práctica de Yin Yoga en Mandala Ourense y experimenta sus beneficios para el cuerpo y la mente.
            </p>
            <div className="mt-8">
              <Link 
                href="/contacto" 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
              >
                Reserva tu clase
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                  Yin Yoga en Mandala Ourense
                </h2>
                <p className="text-gray-700 mb-4">
                  En <strong>Mandala Centro de Yoga Ourense</strong>, ofrecemos clases de Yin Yoga adaptadas a todos los niveles, 
                  desde principiantes hasta practicantes avanzados. Nuestras sesiones se enfocan en posturas pasivas mantenidas 
                  durante varios minutos para trabajar profundamente los tejidos conectivos y equilibrar la energía corporal.
                </p>
                <p className="text-gray-700 mb-4">
                  El <strong>Yin Yoga en Ourense</strong> está ganando popularidad por sus beneficios para reducir el estrés, 
                  mejorar la flexibilidad y promover una profunda sensación de calma. Es ideal para complementar prácticas más 
                  dinámicas (Yang) y para quienes buscan un enfoque más meditativo del yoga.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/yoga/yin-yoga" 
                    className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors"
                  >
                    Descubre más sobre Yin Yoga
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Clase de Yin Yoga en Ourense"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Beneficios del Yin Yoga
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Flexibilidad Profunda</h3>
                  <p className="text-gray-700">
                    Mejora la elasticidad de los tejidos conectivos, ligamentos y articulaciones, aumentando el rango de movimiento.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Reducción del Estrés</h3>
                  <p className="text-gray-700">
                    Calma el sistema nervioso y reduce los niveles de cortisol, promoviendo una sensación de paz y relajación.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Equilibrio Energético</h3>
                  <p className="text-gray-700">
                    Estimula los meridianos de energía, mejorando el flujo del chi y equilibrando las energías yin y yang.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Mejora del Sueño</h3>
                  <p className="text-gray-700">
                    Facilita la relajación profunda que ayuda a mejorar la calidad del sueño y combatir el insomnio.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Cultivo de la Paciencia</h3>
                  <p className="text-gray-700">
                    Desarrolla la capacidad de permanecer en posturas durante largo tiempo, fomentando la paciencia y la aceptación.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Conexión Mente-Cuerpo</h3>
                  <p className="text-gray-700">
                    Profundiza la consciencia corporal y promueve una mayor conexión entre mente, cuerpo y respiración.
                  </p>
                </div>
              </div>
            </div>

            {/* Ideal For Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Yin Yoga en Ourense es Ideal Para:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Practicantes de Todos los Niveles</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Principiantes que buscan una introducción accesible al yoga</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Practicantes avanzados que desean complementar sus prácticas dinámicas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Personas con experiencia limitada en yoga que prefieren posturas sostenidas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Aquellos que buscan mejorar su flexibilidad de forma gradual y segura</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Personas con Necesidades Específicas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Quienes sufren de estrés, ansiedad o agotamiento mental</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Personas con tensión muscular o rigidez articular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Quienes buscan un enfoque meditativo y contemplativo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Aquellos que necesitan reducir la actividad física intensa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  Descubre el Yin Yoga en Mandala Ourense
                </h3>
                <p className="text-gray-700 mb-6">
                  Consulta nuestros horarios y precios, o contacta con nosotros para comenzar tu práctica de Yin Yoga.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}