import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Yoga Terapéutico en Ourense | Terapia con Yoga | Mandala Ourense",
  description: "Descubre nuestras clases de Yoga Terapéutico en Ourense. Enfoque personalizado que utiliza las prácticas de yoga para abordar condiciones específicas y promover la salud integral en Mandala Centro de Yoga.",
  keywords: "yoga terapéutico ourense, yoga terapia ourense, yoga salud ourense, yoga recuperación ourense, yoga bienestar ourense",
}

export default function YogaTerapeuticoOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1613876215075-276fd62c89a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Yoga Terapéutico en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Yoga Terapéutico en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Un enfoque personalizado del yoga para abordar condiciones específicas y promover la salud integral.
            </p>
            <div className="mt-8">
              <Link 
                href="/contacto" 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
              >
                Consulta con un especialista
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
                  Yoga Terapéutico en Mandala Ourense
                </h2>
                <p className="text-gray-700 mb-4">
                  En <strong>Mandala Centro de Yoga Ourense</strong>, ofrecemos sesiones de Yoga Terapéutico dirigidas 
                  por profesionales formados específicamente en esta disciplina. Este enfoque utiliza las herramientas 
                  del yoga (posturas, respiración, meditación, relajación) y las adapta para abordar condiciones físicas 
                  específicas, desequilibrios emocionales o mentales.
                </p>
                <p className="text-gray-700 mb-4">
                  El <strong>Yoga Terapéutico en Ourense</strong> se diferencia de las clases de yoga convencionales por 
                  su enfoque más individualizado y su objetivo de tratar o gestionar condiciones específicas. Cada sesión 
                  se diseña considerando tus necesidades particulares y puede complementar otros tratamientos médicos o 
                  terapéuticos que estés recibiendo.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/terapias" 
                    className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors"
                  >
                    Conoce todas nuestras terapias
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80"
                  alt="Sesión de Yoga Terapéutico en Ourense"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Applications Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Aplicaciones del Yoga Terapéutico
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Problemas Musculoesqueléticos</h3>
                  <p className="text-gray-700">
                    Dolor de espalda, problemas de cuello, fibromialgia, artritis, recuperación post-quirúrgica.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Salud Mental</h3>
                  <p className="text-gray-700">
                    Estrés, ansiedad, depresión leve, trauma, insomnio y trastornos del sueño.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Condiciones Crónicas</h3>
                  <p className="text-gray-700">
                    Diabetes, presión arterial alta, asma, fatiga crónica, migrañas.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Salud Hormonal</h3>
                  <p className="text-gray-700">
                    Menopausia, síndrome premenstrual, desequilibrios hormonales.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Sistema Nervioso</h3>
                  <p className="text-gray-700">
                    Equilibrio del sistema nervioso autónomo, regulación emocional.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Bienestar General</h3>
                  <p className="text-gray-700">
                    Mejora de la energía, claridad mental, equilibrio físico y emocional.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Nuestro Proceso Terapéutico
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-purple font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-brand-purple mb-3">Evaluación Inicial</h3>
                  <p className="text-gray-700 text-sm">
                    Consulta completa para entender tus necesidades, historia médica y objetivos.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-purple font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-brand-purple mb-3">Plan Personalizado</h3>
                  <p className="text-gray-700 text-sm">
                    Desarrollo de un programa específico adaptado a tus necesidades únicas.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-purple font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-brand-purple mb-3">Sesiones Guiadas</h3>
                  <p className="text-gray-700 text-sm">
                    Práctica terapéutica bajo la supervisión directa de nuestros especialistas.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-purple font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-brand-purple mb-3">Seguimiento</h3>
                  <p className="text-gray-700 text-sm">
                    Evaluación continua y ajuste del programa según tu evolución y progreso.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Experiencias con el Yoga Terapéutico
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 italic mb-4">
                    "Después de años de dolor crónico de espalda, el yoga terapéutico en Mandala me ha dado herramientas para 
                    gestionar el dolor y mejorar mi calidad de vida. Las sesiones personalizadas han sido fundamentales."
                  </p>
                  <p className="font-medium text-brand-purple">— Ana L., 47 años</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 italic mb-4">
                    "El enfoque del yoga terapéutico para mi ansiedad ha sido revelador. He aprendido técnicas de respiración 
                    y posturas que me ayudan a calmar mi sistema nervioso cuando siento que se aproxima un ataque de ansiedad."
                  </p>
                  <p className="font-medium text-brand-purple">— Carlos M., 35 años</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  Descubre los Beneficios del Yoga Terapéutico
                </h3>
                <p className="text-gray-700 mb-6">
                  Consulta con nuestros especialistas para evaluar tus necesidades y comenzar un programa personalizado.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contacto" 
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Solicitar Consulta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    href="/terapias" 
                    className="bg-white hover:bg-gray-50 text-brand-purple border border-gray-200 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Más Terapias
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