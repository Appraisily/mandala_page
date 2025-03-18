"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"

// Define therapies data
const therapies = [
  {
    id: "masaje-ayurvedico",
    title: "Masaje Ayurvédico",
    description: "Técnica milenaria de la medicina tradicional India para equilibrar los doshas (energías vitales) del cuerpo.",
    fullDescription: "El masaje ayurvédico es uno de los tratamientos más antiguos del mundo, originario de la India con más de 5.000 años de historia. Este masaje se basa en los principios del Ayurveda, que busca el equilibrio entre mente, cuerpo y espíritu. Utilizando aceites esenciales y técnicas específicas para cada constitución corporal (dosha), el masaje ayurvédico mejora la circulación, desintoxica el organismo, relaja la musculatura y equilibra las energías vitales.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    benefits: [
      "Equilibra las energías vitales según el Ayurveda",
      "Mejora la circulación sanguínea y linfática",
      "Elimina toxinas del cuerpo",
      "Reduce el estrés y la ansiedad",
      "Mejora la calidad del sueño"
    ],
    duration: "60-90 minutos",
    price: "60€ - 85€"
  },
  {
    id: "reiki",
    title: "Reiki",
    description: "Terapia energética japonesa que canaliza la energía universal para estimular los procesos naturales de curación.",
    fullDescription: "El Reiki es una técnica de sanación energética desarrollada en Japón a principios del siglo XX por Mikao Usui. La palabra Reiki proviene de los términos japoneses 'rei' (energía universal) y 'ki' (fuerza vital). Esta terapia se basa en la canalización de energía a través de las manos del terapeuta, que actúa como canal para transmitir esta energía vital al receptor. El Reiki trabaja a nivel físico, mental y espiritual, ayudando a equilibrar la energía del cuerpo y facilitando los procesos naturales de curación.",
    image: "https://images.unsplash.com/photo-1598901865264-4f6405cb0fb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    benefits: [
      "Equilibra los centros energéticos (chakras)",
      "Promueve un estado profundo de relajación",
      "Alivia el estrés y tensión emocional",
      "Acelera procesos naturales de curación",
      "Fortalece el sistema inmunológico"
    ],
    duration: "60 minutos",
    price: "50€"
  },
  {
    id: "reflexologia",
    title: "Reflexología Podal",
    description: "Técnica de masaje en los pies que estimula puntos reflejos conectados con órganos y sistemas corporales.",
    fullDescription: "La reflexología podal es una terapia basada en la estimulación de puntos específicos ubicados en los pies, que se corresponden con todos los órganos, glándulas y partes del cuerpo. Este método terapéutico se basa en la teoría de que el cuerpo está dividido en diez zonas longitudinales que recorren el cuerpo desde la cabeza hasta los dedos de los pies. Al aplicar presión en puntos específicos de los pies, se envían impulsos a las áreas correspondientes del cuerpo, promoviendo la relajación y el equilibrio energético.",
    image: "https://images.unsplash.com/photo-1554057009-dc20fe30502a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    benefits: [
      "Mejora la circulación sanguínea y linfática",
      "Alivia dolores musculares y articulares",
      "Reduce el estrés y promueve la relajación",
      "Equilibra el sistema nervioso",
      "Ayuda a desintoxicar el organismo"
    ],
    duration: "45-60 minutos",
    price: "45€ - 55€"
  },
  {
    id: "aromaterapia",
    title: "Aromaterapia",
    description: "Uso terapéutico de aceites esenciales extraídos de plantas para mejorar la salud física y emocional.",
    fullDescription: "La aromaterapia es una forma de medicina alternativa que utiliza extractos vegetales aromáticos (aceites esenciales) para mejorar la salud física, mental y emocional. Estos aceites pueden ser inhalados directamente, aplicados en la piel durante un masaje o utilizados en difusores. Cada aceite esencial tiene propiedades diferentes y puede ayudar con distintas afecciones. La aromaterapia se basa en la premisa de que los aromas naturales de los aceites esenciales estimulan partes del cerebro que influyen en la salud física y mental.",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    benefits: [
      "Reduce el estrés y la ansiedad",
      "Mejora la calidad del sueño",
      "Alivia dolores de cabeza y migrañas",
      "Combate bacterias y virus",
      "Equilibra el estado de ánimo"
    ],
    duration: "45-60 minutos",
    price: "50€ - 60€"
  }
]

export default function ClientPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Terapias holísticas en Mandala Ourense"
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
              Terapias Holísticas
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Descubre nuestras terapias dirigidas al bienestar integral, diseñadas para armonizar cuerpo, mente y espíritu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
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
                Enfoque Holístico del Bienestar
              </h2>
              <p className="text-gray-700">
                En Mandala Ourense entendemos que el verdadero bienestar viene de la armonía entre cuerpo, mente y espíritu. 
                Por eso, complementamos la práctica del yoga con una selección de terapias holísticas que abordan diferentes 
                aspectos de tu salud integral.
              </p>
              <p className="text-gray-700">
                Nuestros terapeutas son profesionales certificados con amplia experiencia, que personalizan 
                cada sesión según tus necesidades específicas. Ya sea que busques aliviar dolores físicos, 
                reducir el estrés, equilibrar tus energías o simplemente disfrutar de un momento de profunda relajación, 
                tenemos la terapia adecuada para ti.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="py-16 bg-brand-beige/30">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-4">
              Nuestras Terapias
            </h2>
            <p className="text-gray-700">
              Exploramos diferentes tradiciones y técnicas terapéuticas para ofrecerte lo mejor de la sabiduría ancestral y moderna.
            </p>
          </motion.div>

          <div className="space-y-24">
            {therapies.map((therapy, index) => (
              <motion.div 
                key={therapy.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <div className={`rounded-xl overflow-hidden shadow-md ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={therapy.image}
                    alt={therapy.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-heading font-medium text-brand-purple mb-4">{therapy.title}</h3>
                  <p className="text-gray-700 mb-6">{therapy.fullDescription}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-brand-teal mb-2">Beneficios</h4>
                      <ul className="space-y-2">
                        {therapy.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-brand-teal mr-2 font-bold">•</span> 
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Duración</p>
                        <p className="font-medium text-gray-800">{therapy.duration}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Precio</p>
                        <p className="font-medium text-gray-800">{therapy.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-heading font-medium text-brand-purple mb-6 text-center">
              Reserva Tu Sesión de Terapia
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Todas nuestras terapias requieren cita previa. Puedes reservar tu sesión por teléfono, email o a través de nuestro formulario de contacto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Información importante:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Se recomienda llegar 10 minutos antes de tu cita</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Usa ropa cómoda y ligera</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Evita comidas pesadas antes de la sesión</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Política de cancelación:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Cancelación gratuita con 24h de antelación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Cancelaciones con menos de 24h pueden conllevar cargo</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-teal text-white font-medium transition-colors hover:bg-brand-teal/90"
              >
                Reserva tu Terapia
                <ArrowRight className="ml-2 h-4 w-4" />
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