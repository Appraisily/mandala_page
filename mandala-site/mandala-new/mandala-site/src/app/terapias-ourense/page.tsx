import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Terapias Ourense - Centro Holístico Mandala | Bienestar Integral",
  description: "Descubre las mejores terapias en Ourense en nuestro centro Mandala. Masaje ayurvédico, reiki, reflexología, aromaterapia y más para tu bienestar físico, mental y espiritual.",
  keywords: "terapias ourense, centro terapias ourense, masaje ayurvédico ourense, reiki ourense, reflexología ourense, aromaterapia ourense, terapias holísticas ourense, bienestar ourense"
}

const therapies = [
  {
    id: "masaje-ayurvedico",
    title: "Masaje Ayurvédico",
    description: "Técnica milenaria de la medicina tradicional India para equilibrar los doshas (energías vitales) del cuerpo.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    benefits: [
      "Equilibra las energías vitales según el Ayurveda",
      "Mejora la circulación sanguínea y linfática",
      "Elimina toxinas del cuerpo"
    ]
  },
  {
    id: "reiki",
    title: "Reiki",
    description: "Terapia energética japonesa que canaliza la energía universal para estimular los procesos naturales de curación.",
    image: "https://images.unsplash.com/photo-1598901865264-4f6405cb0fb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    benefits: [
      "Equilibra los centros energéticos (chakras)",
      "Promueve un estado profundo de relajación",
      "Alivia el estrés y tensión emocional"
    ]
  },
  {
    id: "reflexologia",
    title: "Reflexología Podal",
    description: "Técnica de masaje en los pies que estimula puntos reflejos conectados con órganos y sistemas corporales.",
    image: "https://images.unsplash.com/photo-1554057009-dc20fe30502a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    benefits: [
      "Mejora la circulación sanguínea y linfática",
      "Alivia dolores musculares y articulares",
      "Reduce el estrés y promueve la relajación"
    ]
  },
  {
    id: "aromaterapia",
    title: "Aromaterapia",
    description: "Uso terapéutico de aceites esenciales extraídos de plantas para mejorar la salud física y emocional.",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    benefits: [
      "Reduce el estrés y la ansiedad",
      "Mejora la calidad del sueño",
      "Alivia dolores de cabeza y migrañas"
    ]
  }
]

const benefits = [
  {
    title: "Reducción del Estrés",
    description: "Nuestras terapias te ayudan a reducir los niveles de estrés y ansiedad, promoviendo la relajación profunda y el bienestar mental."
  },
  {
    title: "Alivio del Dolor",
    description: "Técnicas especializadas para aliviar dolores crónicos, tensiones musculares y molestias físicas sin necesidad de medicamentos."
  },
  {
    title: "Equilibrio Energético",
    description: "Trabajamos para restaurar el flujo natural de energía en tu cuerpo, eliminando bloqueos y promoviendo la vitalidad."
  },
  {
    title: "Desintoxicación",
    description: "Nuestras terapias ayudan a eliminar toxinas acumuladas, mejorando el funcionamiento de tus sistemas corporales."
  },
  {
    title: "Mejora del Sueño",
    description: "Muchos de nuestros clientes experimentan una mejor calidad de sueño después de las sesiones terapéuticas."
  },
  {
    title: "Bienestar Integral",
    description: "Enfoque holístico que cuida de tu bienestar físico, mental, emocional y espiritual de forma integrada."
  }
]

const testimonials = [
  {
    name: "Laura Gómez",
    quote: "Las sesiones de masaje ayurvédico en Mandala han transformado mi bienestar. El dolor crónico de espalda que sufría desde hace años ha disminuido notablemente, y mi nivel de estrés se ha reducido considerablemente.",
    location: "Ourense"
  },
  {
    name: "Carlos Fernández",
    quote: "Empecé con el Reiki por curiosidad y ahora es parte esencial de mi rutina de autocuidado. Los terapeutas de Mandala son verdaderos profesionales que te hacen sentir cómodo y atendido.",
    location: "Ourense"
  },
  {
    name: "María Rodríguez",
    quote: "La reflexología podal me ha ayudado con problemas digestivos que ningún otro tratamiento había solucionado. El equipo de Mandala no solo conoce las técnicas, sino que se preocupa genuinamente por tu bienestar.",
    location: "Barbadás, Ourense"
  }
]

const faqs = [
  {
    question: "¿Necesito experiencia previa para recibir estas terapias?",
    answer: "No, no se requiere experiencia previa. Nuestros terapeutas te guiarán durante todo el proceso, explicándote cada paso y adaptando la sesión a tus necesidades específicas."
  },
  {
    question: "¿Qué terapia es más adecuada para principiantes?",
    answer: "Todas nuestras terapias son adecuadas para principiantes. Sin embargo, el masaje ayurvédico y la aromaterapia suelen ser excelentes opciones para quienes se inician en terapias alternativas."
  },
  {
    question: "¿Cuánto dura una sesión de terapia?",
    answer: "La duración varía según la terapia, pero generalmente las sesiones duran entre 45 y 90 minutos, permitiendo tiempo suficiente para el tratamiento y la relajación."
  },
  {
    question: "¿Con qué frecuencia debo recibir terapia para notar resultados?",
    answer: "Depende de tus objetivos y situación personal. Algunos clientes notan beneficios inmediatos después de una sesión, mientras que para condiciones crónicas, recomendamos sesiones regulares (semanales o quincenales)."
  },
  {
    question: "¿Las terapias holísticas pueden complementar tratamientos médicos?",
    answer: "Sí, nuestras terapias pueden complementar tratamientos médicos convencionales. Sin embargo, siempre recomendamos consultar con tu médico, especialmente si tienes condiciones médicas preexistentes."
  }
]

export default function TerapiasOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Centro de terapias en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <Container className="relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Las Mejores Terapias en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Descubre nuestro centro especializado en terapias holísticas para tu bienestar integral en el corazón de Ourense.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="purple" size="lg">
                <Link href="/contacto">Reserva Tu Sesión</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#terapias">Ver Terapias</Link>
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
                Centro de Referencia en Terapias Holísticas en Ourense
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  En Mandala Ourense nos hemos consolidado como el centro de referencia para terapias holísticas en la ciudad, ofreciendo un enfoque integral hacia el bienestar que combina sabiduría ancestral con técnicas modernas.
                </p>
                <p>
                  Ubicados en pleno centro de Ourense, nuestro espacio está diseñado para brindarte una experiencia de relajación profunda desde el momento en que entras por nuestra puerta. Cada rincón ha sido cuidadosamente creado para promover la calma y la conexión con uno mismo.
                </p>
                <p>
                  Nuestro equipo de terapeutas certificados cuenta con años de experiencia y formación continua en diversas disciplinas terapéuticas, garantizando un servicio profesional y personalizado para cada persona.
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
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Centro de terapias Mandala en Ourense"
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
      <section className="py-16 bg-brand-beige/30">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Beneficios de Nuestras Terapias
            </h2>
            <p className="text-gray-700">
              Descubre cómo nuestras terapias holísticas pueden transformar tu bienestar físico, mental y emocional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-brand-purple mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Therapies Section */}
      <section id="terapias" className="py-16 bg-white scroll-mt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Terapias que Ofrecemos en Ourense
            </h2>
            <p className="text-gray-700">
              Cada una de nuestras terapias está diseñada para abordar diferentes aspectos de tu bienestar, con enfoques complementarios que puedes combinar según tus necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {therapies.map((therapy, index) => (
              <Card key={therapy.id} className="bg-white border-none overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-60 relative">
                  <Image
                    src={therapy.image}
                    alt={therapy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium text-brand-purple mb-2">{therapy.title}</h3>
                  <p className="text-gray-600 mb-4">{therapy.description}</p>
                  
                  <h4 className="font-medium text-brand-teal mb-2">Principales beneficios:</h4>
                  <ul className="space-y-1 mb-6">
                    {therapy.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-brand-teal mr-2 font-bold">•</span> 
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="teal" className="w-full">
                    <Link href="/terapias">Más Información <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="purple" size="lg">
              <Link href="/contacto">Reserva Tu Sesión Ahora</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-brand-purple/5 to-brand-teal/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Lo Que Dicen Nuestros Clientes en Ourense
            </h2>
            <p className="text-gray-700">
              Experiencias reales de personas que han transformado su bienestar con nuestras terapias.
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Preguntas Frecuentes sobre Terapias en Ourense
            </h2>
            <p className="text-gray-700">
              Resolvemos tus dudas sobre nuestras terapias holísticas y servicios en Mandala Ourense.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-lg font-medium text-brand-purple mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-beige/30">
        <Container>
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Transforma Tu Bienestar en Ourense
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Da el primer paso hacia una vida más equilibrada y plena. Nuestro equipo de terapeutas profesionales está listo para acompañarte en tu camino hacia el bienestar integral.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="purple" size="lg">
                <Link href="/contacto">Reserva Tu Primera Sesión</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/horarios-precios">Ver Precios</Link>
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
              Descubre Más Sobre Mandala Ourense
            </h2>
            <p className="text-gray-700">
              Explora otras actividades y servicios que ofrecemos para potenciar tu bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Clases de Yoga</h3>
                <p className="text-gray-600 mb-4">Complementa tus terapias con nuestras variadas clases de yoga para todos los niveles.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/clases-yoga-ourense">Conoce Nuestras Clases <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Meditación y Mindfulness</h3>
                <p className="text-gray-600 mb-4">Aprende técnicas de meditación y mindfulness para cultivar la paz interior.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/meditacion-ourense">Explora Nuestros Programas <ArrowRight className="ml-1 h-4 w-4" /></Link>
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