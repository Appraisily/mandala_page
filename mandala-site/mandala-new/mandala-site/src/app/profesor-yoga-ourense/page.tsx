import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Profesores de Yoga en Ourense | Instructores Cualificados | Mandala Ourense",
  description: "Conoce a nuestros profesores de yoga en Ourense. Instructores certificados y con amplia experiencia en diferentes estilos de yoga para guiarte en tu práctica en Mandala Centro de Yoga.",
  keywords: "profesor yoga ourense, instructor yoga ourense, maestro yoga ourense, profesionales yoga ourense, clases yoga certificadas ourense",
}

export default function ProfesorYogaOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617456755295-0c970ec28bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Profesores de Yoga en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Profesores de Yoga en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Conoce a nuestro equipo de instructores certificados en Mandala Ourense, dedicados a guiarte en tu camino del yoga.
            </p>
            <div className="mt-8">
              <Link 
                href="/contacto" 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
              >
                Reserva una clase
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
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                Nuestro Equipo de Instructores
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                En Mandala Ourense, contamos con profesores certificados y con amplia experiencia en diferentes 
                disciplinas del yoga. Cada uno de nuestros instructores aporta su especialidad y enfoque único, 
                ofreciéndote una experiencia de aprendizaje completa y enriquecedora.
              </p>
            </div>

            {/* Teachers Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {/* Teacher 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="relative h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1604431696980-fe340936d14f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Profesor de Yoga en Mandala Ourense"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-brand-purple mb-2">Laura Martínez</h3>
                  <p className="text-brand-teal font-medium mb-4">Directora e Instructora Principal</p>
                  <p className="text-gray-700 mb-4">
                    Formada en Hatha y Vinyasa Yoga con más de 15 años de experiencia. Su enseñanza se centra 
                    en la alineación precisa y la conexión mente-cuerpo. Especializada en yoga para la salud 
                    de la espalda y yoga terapéutico.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Especialidad:</span>
                      <span className="text-gray-800 font-medium">Hatha Yoga, Yoga Terapéutico</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Certificación:</span>
                      <span className="text-gray-800 font-medium">500H RYT, Yoga Alliance</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Clases:</span>
                      <span className="text-gray-800 font-medium">Lunes, Miércoles, Viernes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teacher 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="relative h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Instructor de Yoga en Mandala Ourense"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-brand-purple mb-2">Carlos Rodríguez</h3>
                  <p className="text-brand-teal font-medium mb-4">Instructor Senior</p>
                  <p className="text-gray-700 mb-4">
                    Especializado en Yin Yoga y meditación, con formación adicional en medicina tradicional china. 
                    Su enfoque integra los principios de los meridianos energéticos para una práctica profunda y 
                    transformadora.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Especialidad:</span>
                      <span className="text-gray-800 font-medium">Yin Yoga, Daoyin Yoga</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Certificación:</span>
                      <span className="text-gray-800 font-medium">300H Yin Yoga, MTC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Clases:</span>
                      <span className="text-gray-800 font-medium">Martes, Jueves, Sábado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Qualifications */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Formación y Cualificaciones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Certificaciones</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Certificaciones internacionales reconocidas por Yoga Alliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Formación mínima de 200-500 horas en sus respectivas especialidades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Estudios adicionales en anatomía, filosofía yóguica y prácticas meditativas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Formación continua a través de talleres y retiros especializados</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-brand-beige/30 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Enfoque de Enseñanza</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Instrucción personalizada adaptada a todos los niveles de práctica</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Atención a la correcta alineación para prevenir lesiones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Integración de aspectos físicos, mentales y espirituales del yoga</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-teal mr-2 font-bold">•</span> 
                      <span>Creación de un ambiente inclusivo, respetuoso y acogedor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                ¿Por qué Elegir Nuestros Profesores en Ourense?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Experiencia</h3>
                  <p className="text-gray-700">
                    Profesores con años de práctica personal y enseñanza, capaces de guiarte con seguridad y conocimiento.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Atención Personalizada</h3>
                  <p className="text-gray-700">
                    Clases con grupos reducidos que permiten una atención individualizada y adaptada a tus necesidades.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Diversidad de Estilos</h3>
                  <p className="text-gray-700">
                    Especialización en diferentes ramas del yoga para ofrecerte una experiencia completa y variada.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Formación Continua</h3>
                  <p className="text-gray-700">
                    Nuestros profesores actualizan constantemente sus conocimientos para ofrecerte lo mejor.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Enfoque Holístico</h3>
                  <p className="text-gray-700">
                    Comprensión del yoga como una disciplina integral que va más allá de las posturas físicas.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Pasión por la Enseñanza</h3>
                  <p className="text-gray-700">
                    Auténtica vocación por compartir los beneficios del yoga y acompañarte en tu camino.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Lo Que Dicen Nuestros Alumnos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <p className="text-gray-700 italic mb-4">
                    "Laura ha transformado completamente mi práctica de yoga. Su atención a los detalles de alineación 
                    me ha ayudado a corregir posturas que llevaba años haciendo incorrectamente. Sus clases son el 
                    perfecto equilibrio entre desafío y accesibilidad."
                  </p>
                  <p className="font-medium text-brand-purple">— Elena G., practicante desde 2019</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <p className="text-gray-700 italic mb-4">
                    "Las clases de Yin Yoga con Carlos son un oasis de paz en mi semana. Su conocimiento de los 
                    meridianos energéticos y su capacidad para guiar la meditación han añadido una dimensión 
                    completamente nueva a mi práctica del yoga."
                  </p>
                  <p className="font-medium text-brand-purple">— Miguel R., practicante desde 2020</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  Conoce a Nuestros Profesores en una Clase
                </h3>
                <p className="text-gray-700 mb-6">
                  Reserva una clase de prueba y experimenta la diferencia que hace practicar con profesores cualificados.
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