import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Yoga Restaurativo en Ourense | Clases de Yoga Restaurativo | Mandala Ourense",
  description: "Descubre nuestras clases de Yoga Restaurativo en Ourense. Práctica suave y terapéutica que promueve la relajación profunda, reduce el estrés y restaura la energía corporal en Mandala Centro de Yoga.",
  keywords: "yoga restaurativo ourense, yoga restauración ourense, yoga terapéutico ourense, yoga relajación ourense, yoga estrés ourense",
}

export default function YogaRestaurativoOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608405059861-b21a68ae76a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Yoga Restaurativo en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Yoga Restaurativo en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Recupera el equilibrio físico y mental con nuestras clases de yoga restaurativo en Mandala Ourense.
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
                  Yoga Restaurativo en Mandala Ourense
                </h2>
                <p className="text-gray-700 mb-4">
                  En <strong>Mandala Centro de Yoga Ourense</strong>, ofrecemos clases de Yoga Restaurativo diseñadas para 
                  ayudarte a recuperar el equilibrio y la vitalidad. Esta práctica suave y terapéutica utiliza props como mantas, 
                  bolsters y bloques para sostener el cuerpo en posturas cómodas durante períodos prolongados.
                </p>
                <p className="text-gray-700 mb-4">
                  El <strong>Yoga Restaurativo en Ourense</strong> está especialmente indicado para personas que buscan reducir el 
                  estrés, recuperarse de lesiones, o simplemente necesitan un contrapunto a sus prácticas más intensas. Es una 
                  forma de yoga que honra la necesidad de descanso y recuperación del cuerpo y la mente.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/horarios-precios" 
                    className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors"
                  >
                    Ver horarios de clases
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Clase de Yoga Restaurativo en Ourense"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Beneficios del Yoga Restaurativo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Reducción del Estrés</h3>
                  <p className="text-gray-700">
                    Activa la respuesta de relajación del sistema nervioso parasimpático, reduciendo los niveles de cortisol y ansiedad.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Recuperación Física</h3>
                  <p className="text-gray-700">
                    Ayuda en la recuperación de lesiones, cirugías y agotamiento físico, permitiendo una sanación más profunda.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Equilibrio Emocional</h3>
                  <p className="text-gray-700">
                    Promueve un estado de calma y equilibrio emocional, ayudando a gestionar mejor las emociones difíciles.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Descanso Profundo</h3>
                  <p className="text-gray-700">
                    Mejora la calidad del sueño y combate el insomnio mediante técnicas que calman el sistema nervioso.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Alivio del Dolor</h3>
                  <p className="text-gray-700">
                    Reduce tensiones musculares crónicas y alivia el dolor mediante posturas suaves y sostenidas.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Energía Renovada</h3>
                  <p className="text-gray-700">
                    Repone las reservas de energía y vitalidad sin agotar los recursos del cuerpo.
                  </p>
                </div>
              </div>
            </div>

            {/* Ideal For Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Yoga Restaurativo en Ourense es Ideal Para:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Personas que Necesitan Recuperación</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Quienes sufren de estrés crónico, agotamiento o burnout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Personas en recuperación de enfermedades o cirugías</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Quienes padecen insomnio o trastornos del sueño</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Personas con problemas relacionados con el estrés</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Practicantes que Buscan Equilibrio</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Deportistas que necesitan recuperación activa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Practicantes de yoga dinámico que buscan complementar su práctica</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Personas con vidas activas y agendas ocupadas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Quienes buscan una forma suave de comenzar con la práctica del yoga</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  Descubre el Yoga Restaurativo en Mandala Ourense
                </h3>
                <p className="text-gray-700 mb-6">
                  Consulta nuestros horarios y precios, o contacta con nosotros para comenzar tu práctica de Yoga Restaurativo.
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