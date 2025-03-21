import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Yoga y Terapias en Ourense - Centro Integral Mandala",
  description: "Combina los beneficios del yoga con terapias holísticas en Mandala Ourense. Un enfoque integral para potenciar tu bienestar físico, mental y emocional.",
  keywords: "yoga y terapias ourense, centro yoga terapias ourense, bienestar integral ourense, yoga terapéutico ourense, terapias holísticas ourense"
}

const yogaStyles = [
  {
    title: "Hatha Yoga",
    description: "El estilo clásico que equilibra fuerza y flexibilidad mediante posturas físicas (asanas), respiración (pranayama) y meditación.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/yoga/hatha-yoga"
  },
  {
    title: "Yin Yoga",
    description: "Práctica suave y meditativa que mantiene las posturas por periodos más largos, trabajando los tejidos conectivos y meridianos energéticos.",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
    link: "/yoga/yin-yoga"
  },
  {
    title: "Daoyin Yoga",
    description: "Combina elementos de yoga con ejercicios taoístas y medicina china tradicional para estimular los meridianos y órganos internos.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80",
    link: "/yoga/daoyin-yoga"
  },
  {
    title: "Nidra Yoga y Meditación",
    description: "Técnica de relajación profunda que induce un estado entre la vigilia y el sueño para reducir el estrés y sanar el cuerpo-mente.",
    image: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/yoga/nidra-yoga-meditacion"
  }
]

const therapies = [
  {
    title: "Masaje Ayurvédico",
    description: "Técnica milenaria de la medicina tradicional India para equilibrar los doshas (energías vitales) del cuerpo.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Reiki",
    description: "Terapia energética japonesa que canaliza la energía universal para estimular los procesos naturales de curación.",
    image: "https://images.unsplash.com/photo-1598901865264-4f6405cb0fb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Reflexología Podal",
    description: "Técnica de masaje en los pies que estimula puntos reflejos conectados con órganos y sistemas corporales.",
    image: "https://images.unsplash.com/photo-1554057009-dc20fe30502a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Aromaterapia",
    description: "Uso terapéutico de aceites esenciales extraídos de plantas para mejorar la salud física y emocional.",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
]

const synergies = [
  {
    title: "Yoga + Masaje Ayurvédico",
    description: "Combina el movimiento consciente del yoga con el equilibrio energético del masaje ayurvédico para una experiencia de bienestar completa.",
    benefits: [
      "Mayor flexibilidad y movilidad articular",
      "Equilibrio de doshas (energías vitales)",
      "Alivio de tensiones musculares profundas"
    ]
  },
  {
    title: "Yin Yoga + Reiki",
    description: "Las posturas sostenidas del Yin Yoga potenciadas con el trabajo energético del Reiki para una sanación profunda a nivel físico y energético.",
    benefits: [
      "Liberación de bloqueos energéticos",
      "Trabajo profundo en tejido conectivo",
      "Equilibrio del sistema nervioso"
    ]
  },
  {
    title: "Yoga Nidra + Aromaterapia",
    description: "La relajación consciente del Yoga Nidra amplificada con aceites esenciales específicos para inducir estados profundos de relajación y sanación.",
    benefits: [
      "Reducción profunda del estrés",
      "Mejora de la calidad del sueño",
      "Equilibrio emocional"
    ]
  },
  {
    title: "Hatha Yoga + Reflexología",
    description: "Complementa la activación corporal del Hatha Yoga con la estimulación de puntos reflejos en los pies para un bienestar integral.",
    benefits: [
      "Mejora de la circulación",
      "Desintoxicación del organismo",
      "Alivio de dolores específicos"
    ]
  }
]

const testimonials = [
  {
    name: "Elena Martínez",
    quote: "Combinar las clases de yoga con terapias ha sido revelador. Mi cuerpo responde mucho mejor a la práctica de yoga después de las sesiones de masaje ayurvédico, y mi mente se mantiene más centrada durante la semana.",
    location: "Ourense"
  },
  {
    name: "Javier Rodríguez",
    quote: "Después de años sufriendo dolor de espalda, encontré en Mandala un enfoque integral con yoga terapéutico y reflexología que me ha permitido recuperar mi calidad de vida. El equipo es excepcional.",
    location: "Ourense"
  },
  {
    name: "Lucía Fernández",
    quote: "Las sesiones combinadas de Yin Yoga y Reiki me han ayudado enormemente con mi ansiedad. Es como si el efecto de cada práctica se potenciara cuando las combinas. Totalmente recomendable.",
    location: "Barbadás, Ourense"
  }
]

export default function YogaYTerapiasOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Yoga y terapias en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <Container className="relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Yoga y Terapias Holísticas en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Descubre el poder transformador de integrar la práctica del yoga con terapias complementarias para un bienestar completo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="purple" size="lg">
                <Link href="/contacto">Reserva Tu Experiencia</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#beneficios">Descubre los Beneficios</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-6">
                Enfoque Integral del Bienestar en Ourense
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  En Mandala Ourense hemos desarrollado un enfoque único que integra la práctica del yoga con terapias holísticas complementarias, creando una sinergia perfecta para potenciar los beneficios de ambas disciplinas.
                </p>
                <p>
                  Esta combinación te permite experimentar una transformación más profunda y duradera, trabajando simultáneamente en los aspectos físicos, energéticos, mentales y emocionales de tu ser.
                </p>
                <p>
                  Nuestro equipo de instructores de yoga y terapeutas especializados trabaja de forma coordinada para ofrecerte un camino personalizado hacia el bienestar integral, adaptado a tus necesidades específicas y objetivos personales.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild variant="teal">
                  <Link href="/horarios-precios">Ver Horarios y Precios</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Integración de yoga y terapias en Mandala Ourense"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-brand-purple/10 z-0"></div>
              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-brand-teal/10 z-0"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 bg-brand-beige/30 scroll-mt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Beneficios de Combinar Yoga y Terapias
            </h2>
            <p className="text-gray-700">
              Descubre cómo esta integración potencia los resultados y acelera tu camino hacia el bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-brand-purple mb-4">Beneficios Físicos</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mayor flexibilidad y movilidad articular</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Alivio más efectivo de dolores crónicos</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mejora de la postura y alineación corporal</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fortalecimiento muscular equilibrado</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimización del sistema circulatorio</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-brand-purple mb-4">Beneficios Mentales y Emocionales</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reducción profunda del estrés y ansiedad</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mayor claridad mental y capacidad de concentración</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Equilibrio emocional y gestión de emociones</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mejora de la calidad del sueño</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Desarrollo de la atención plena (mindfulness)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-brand-purple mb-4">Beneficios Energéticos</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Equilibrio de los centros energéticos (chakras)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mejor flujo de energía vital (prana/chi)</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Eliminación de bloqueos energéticos</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Armonización de los sistemas sutiles</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mayor sensibilidad y conciencia energética</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-brand-purple mb-4">Beneficios para la Salud General</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fortalecimiento del sistema inmunológico</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mejora de la digestión y metabolismo</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regularización de sistemas corporales</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Desintoxicación natural del organismo</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mayor vitalidad y energía en el día a día</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Yoga Styles Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Estilos de Yoga en Mandala Ourense
            </h2>
            <p className="text-gray-700">
              Cada estilo de yoga tiene beneficios específicos que pueden complementarse perfectamente con diferentes terapias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yogaStyles.map((style, index) => (
              <Card key={index} className="bg-white border-none overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-60 relative">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium text-brand-purple mb-2">{style.title}</h3>
                  <p className="text-gray-600 mb-6">{style.description}</p>
                  <Button asChild variant="teal">
                    <Link href={style.link}>Más Información <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Therapies Section */}
      <section className="py-16 bg-brand-beige/30">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Terapias Complementarias
            </h2>
            <p className="text-gray-700">
              Nuestras terapias potencian los beneficios de la práctica de yoga, creando una experiencia de bienestar integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapies.map((therapy, index) => (
              <Card key={index} className="bg-white border-none overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={therapy.image}
                    alt={therapy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium text-brand-purple mb-2">{therapy.title}</h3>
                  <p className="text-sm text-gray-600">{therapy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="purple">
              <Link href="/terapias">Explorar Todas las Terapias <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Synergies Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Combinaciones Recomendadas
            </h2>
            <p className="text-gray-700">
              Descubre cómo potenciar los beneficios combinando yoga y terapias de forma estratégica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {synergies.map((synergy, index) => (
              <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-brand-purple mb-2">{synergy.title}</h3>
                  <p className="text-gray-600 mb-4">{synergy.description}</p>
                  
                  <h4 className="font-medium text-brand-teal mb-2">Beneficios específicos:</h4>
                  <ul className="space-y-1 mb-4">
                    {synergy.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-brand-teal mr-2 font-bold">•</span> 
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-brand-purple/5 to-brand-teal/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Testimonios de Nuestros Clientes
            </h2>
            <p className="text-gray-700">
              Experiencias reales de personas que han transformado su bienestar con nuestro enfoque integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-brand-teal">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="font-medium text-brand-purple">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-6">
                Programas Personalizados de Yoga y Terapias
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  En Mandala Ourense diseñamos itinerarios personalizados que combinan diferentes clases de yoga y sesiones terapéuticas adaptadas a tus necesidades específicas y objetivos de bienestar.
                </p>
                <p>
                  Nuestros expertos evaluarán tu condición física, nivel de estrés, objetivos personales y preferencias para crear un programa integral que maximice los beneficios para tu cuerpo y mente.
                </p>
                <p>
                  Ya sea que busques aliviar dolores específicos, reducir el estrés, mejorar tu condición física o profundizar en tu práctica espiritual, contamos con las herramientas y conocimientos para guiarte en tu camino.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild variant="purple">
                  <Link href="/contacto">Consulta Personalizada</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Programas personalizados de yoga y terapias"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-brand-purple/10 z-0"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-brand-teal/10 z-0"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-beige/30">
        <Container>
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Comienza Tu Viaje de Transformación en Ourense
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Da el primer paso hacia un bienestar integral. Nuestro equipo de profesionales está listo para acompañarte en esta experiencia transformadora.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="purple" size="lg">
                <Link href="/contacto">Reserva Tu Primera Sesión</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/horarios-precios">Ver Precios y Horarios</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Explora Más en Mandala Ourense
            </h2>
            <p className="text-gray-700">
              Descubre todos nuestros servicios para potenciar tu bienestar integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Clases de Yoga</h3>
                <p className="text-gray-600 mb-4">Explora nuestros diferentes estilos de yoga para todos los niveles y necesidades.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/clases-yoga-ourense">Ver Clases <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Terapias Holísticas</h3>
                <p className="text-gray-600 mb-4">Conoce en detalle todas las terapias disponibles en nuestro centro.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/terapias-ourense">Descubrir Terapias <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Talleres y Eventos</h3>
                <p className="text-gray-600 mb-4">Participa en nuestros talleres especializados y eventos para profundizar en tu práctica.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/actividades-bienestar-ourense">Ver Calendario <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}