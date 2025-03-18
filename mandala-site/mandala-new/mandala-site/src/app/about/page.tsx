"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Users, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1592427242959-bbce4c6a8670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Mandala Ourense yoga studio"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Mandala Ourense es un espacio dedicado al bienestar integral, donde el yoga y las terapias holísticas se unen para promover la salud física y mental.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-700">
                Mandala Ourense nació en 2018 con la visión de crear un espacio de paz y bienestar en el corazón de Ourense. 
                Fundado por un equipo de profesionales apasionados por el yoga y las terapias holísticas, nuestro centro 
                se ha convertido en un referente de la práctica consciente y el desarrollo personal en la ciudad.
              </p>
              <p className="text-gray-700">
                El nombre "Mandala" representa nuestra filosofía: un espacio sagrado donde cada persona puede encontrar 
                su propio centro y conectar con su esencia. Como el mandala que parte desde un punto central y se expande 
                en armonía, así concebimos la práctica del yoga y las terapias que ofrecemos.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Nuestra Misión</h3>
                <p className="text-gray-600">
                  Promover el bienestar integral a través de prácticas que conecten cuerpo, mente y espíritu, creando un espacio de transformación y crecimiento personal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Nuestra Visión</h3>
                <p className="text-gray-600">
                  Ser un referente en bienestar y desarrollo personal en Galicia, creando una comunidad consciente comprometida con el autoconocimiento y la salud integral.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-amber/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-brand-amber" />
                </div>
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Nuestra Comunidad</h3>
                <p className="text-gray-600">
                  Formamos una comunidad diversa y acogedora, donde cada persona es valorada en su individualidad y encuentra un espacio para crecer y compartir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-brand-beige/30">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-700">
              Nuestros profesores y terapeutas son profesionales certificados con amplia experiencia en sus respectivas disciplinas. 
              Cada uno aporta su propio estilo y conocimientos únicos, unidos por la pasión por el bienestar.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Ana García - Profesora de Hatha Yoga"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-2">Ana García</h3>
                <p className="text-brand-teal font-medium text-sm mb-4">Profesora de Hatha Yoga</p>
                <p className="text-gray-600 text-sm">
                  Con más de 10 años de experiencia en la enseñanza del yoga, Ana se formó en India y ha desarrollado un 
                  estilo que combina precisión técnica con una atención especial a la respiración y la meditación.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1611695267521-9891f56679a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                  alt="Carlos Martínez - Profesor de Daoyin Yoga"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-2">Carlos Martínez</h3>
                <p className="text-brand-teal font-medium text-sm mb-4">Profesor de Daoyin Yoga</p>
                <p className="text-gray-600 text-sm">
                  Especializado en medicina tradicional china y Daoyin Yoga, Carlos integra los principios taoístas 
                  en sus clases, enfocándose en el equilibrio energético y el fortalecimiento del cuerpo desde su interior.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1512291313931-d4291048e7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Lucía Fernández - Instructora de Meditación"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-medium text-brand-purple mb-2">Lucía Fernández</h3>
                <p className="text-brand-teal font-medium text-sm mb-4">Instructora de Meditación y Yoga Nidra</p>
                <p className="text-gray-600 text-sm">
                  Con una formación en psicología y meditación mindfulness, Lucía guía sesiones de Yoga Nidra y meditación 
                  con un enfoque terapéutico, especialmente beneficiosas para quienes buscan reducir el estrés y la ansiedad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Space Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                Nuestro Espacio
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-700">
                  Mandala Ourense está diseñado como un refugio de paz en la ciudad. Nuestras instalaciones incluyen:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Dos amplias salas de práctica con luz natural y equipamiento completo</li>
                  <li>Vestuarios cómodos con duchas</li>
                  <li>Espacio de recepción y biblioteca con material sobre yoga y bienestar</li>
                  <li>Sala de terapias para tratamientos individuales</li>
                  <li>Pequeña zona de té donde descansar y socializar tras las clases</li>
                </ul>
                <p className="text-gray-700">
                  Todo ha sido cuidadosamente diseñado para crear un ambiente acogedor, tranquilo y propicio para la práctica 
                  y el crecimiento personal. Utilizamos materiales naturales, colores suaves y elementos que invitan a la calma y la introspección.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Mandala Ourense yoga studio space"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-teal text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading font-medium mb-6">
              Forma Parte de Nuestra Comunidad
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Te invitamos a conocernos y experimentar los beneficios del yoga y nuestras terapias. 
              Ya sea que busques mejorar tu salud física, reducir el estrés o profundizar en tu práctica, 
              tenemos un espacio para ti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/horarios-precios" 
                className="bg-white text-brand-purple px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors hover:bg-white/90"
              >
                Ver Horarios y Precios
              </Link>
              <Link 
                href="/contacto" 
                className="bg-transparent border border-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors hover:bg-white/10"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-white">
        <div className="container-custom text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Inicio
          </Link>
        </div>
      </section>
    </div>
  )
}