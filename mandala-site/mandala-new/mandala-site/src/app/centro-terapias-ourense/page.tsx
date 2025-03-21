import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Phone, Mail, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Centro de Terapias Ourense - Mandala | Espacio de Bienestar Holístico",
  description: "Visita el centro de terapias Mandala en Ourense. Espacio dedicado a terapias holísticas, masajes, yoga y meditación para tu bienestar integral en un ambiente acogedor y tranquilo.",
  keywords: "centro terapias ourense, terapias holísticas ourense, centro masajes ourense, centro bienestar ourense, mandala ourense, terapias alternativas ourense"
}

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-teal" />,
    title: "Terapeutas Certificados",
    description: "Equipo de profesionales con formación especializada y años de experiencia en diversas disciplinas terapéuticas."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-teal" />,
    title: "Instalaciones Premium",
    description: "Espacios cuidadosamente diseñados para crear un ambiente de calma, confort y conexión profunda."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-teal" />,
    title: "Productos Naturales",
    description: "Utilizamos exclusivamente aceites esenciales orgánicos y productos naturales de la más alta calidad."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-teal" />,
    title: "Atención Personalizada",
    description: "Cada terapia se adapta a tus necesidades específicas, atendiendo a tu condición única y objetivos personales."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-teal" />,
    title: "Ubicación Céntrica",
    description: "Fácil acceso en pleno centro de Ourense, con estacionamiento cercano y bien comunicado."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-teal" />,
    title: "Enfoque Integral",
    description: "Combinamos diversas disciplinas para ofrecer una experiencia de bienestar completa y holística."
  }
]

const therapies = [
  {
    title: "Masaje Ayurvédico",
    description: "Técnica milenaria de la medicina tradicional India para equilibrar las energías vitales del cuerpo."
  },
  {
    title: "Reiki",
    description: "Terapia energética japonesa que canaliza la energía universal para estimular los procesos naturales de curación."
  },
  {
    title: "Reflexología Podal",
    description: "Técnica de masaje en los pies que estimula puntos reflejos conectados con órganos y sistemas corporales."
  },
  {
    title: "Aromaterapia",
    description: "Uso terapéutico de aceites esenciales extraídos de plantas para mejorar la salud física y emocional."
  },
  {
    title: "Masaje Terapéutico",
    description: "Técnicas manuales especializadas para aliviar dolor muscular, mejorar la circulación y reducir el estrés."
  },
  {
    title: "Constelaciones Familiares",
    description: "Método terapéutico que busca resolver conflictos y patrones heredados en el sistema familiar."
  }
]

const aboutImages = [
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1598901865264-4f6405cb0fb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
]

export default function CentroTerapiasOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1607676386903-e64c8647c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Centro de terapias en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <Container className="relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Centro de Terapias Mandala Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Un espacio único en Ourense dedicado a tu bienestar integral, donde cada terapia es una experiencia transformadora.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="purple" size="lg">
                <Link href="/contacto">Reserva Tu Sesión</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#conocenos">Conoce Nuestro Centro</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              ¿Por Qué Elegir Nuestro Centro de Terapias en Ourense?
            </h2>
            <p className="text-gray-700">
              En Mandala hemos creado un espacio diferente, donde cada detalle está pensado para potenciar tu experiencia de bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-brand-purple mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About Our Center Section */}
      <section id="conocenos" className="py-16 bg-brand-beige/30 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-6">
                Sobre Nuestro Centro de Terapias
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Mandala Ourense nació en 2010 con la visión de crear un espacio dedicado al bienestar integral en el corazón de la ciudad. Desde entonces, nos hemos consolidado como referentes en terapias holísticas, combinando tradiciones milenarias con enfoques contemporáneos.
                </p>
                <p>
                  Nuestro centro cuenta con 3 salas de terapia independientes, cada una diseñada con una estética única y equipada con todo lo necesario para realizar las diferentes técnicas que ofrecemos. La iluminación tenue, la música ambiental cuidadosamente seleccionada y los aromas naturales crean una atmósfera que invita a la desconexión desde el primer momento.
                </p>
                <p>
                  El equipo Mandala está formado por profesionales multidisciplinares con amplia formación y experiencia, unidos por la pasión de acompañar a cada persona en su camino hacia el bienestar. Nos mantenemos en constante formación para ofrecerte lo mejor de las terapias tradicionales y las innovaciones más efectivas.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild variant="teal">
                  <Link href="/contacto">Contacta Con Nosotros</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {aboutImages.map((image, index) => (
                <div key={index} className={`rounded-lg overflow-hidden shadow-md ${index % 3 === 0 ? 'col-span-2' : 'col-span-1'}`}>
                  <Image
                    src={image}
                    alt={`Centro de terapias Mandala Ourense ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Therapies Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Terapias Disponibles en Nuestro Centro
            </h2>
            <p className="text-gray-700">
              Ofrecemos una amplia variedad de terapias complementarias, adaptadas a diferentes necesidades y objetivos de bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapies.map((therapy, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-brand-purple mb-2">{therapy.title}</h3>
                  <p className="text-gray-600 mb-4">{therapy.description}</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/terapias">Más Información <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="purple" size="lg">
              <Link href="/terapias">Ver Todas Nuestras Terapias</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Location and Contact Section */}
      <section className="py-16 bg-brand-beige/30">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Visita Nuestro Centro en Ourense
            </h2>
            <p className="text-gray-700">
              Estamos ubicados en una zona céntrica y accesible de Ourense, con fácil aparcamiento y bien comunicado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-video relative rounded-md overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1577045079863-47f202d0d5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Ubicación Centro Mandala Ourense"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Calle del Progreso, 95, 32003 Ourense, España</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Horario</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 21:00</p>
                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium text-brand-purple mb-4">Contacto</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+34 988 123 456</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@mandalaourense.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-beige/20 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Información importante</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Todas nuestras terapias requieren cita previa</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Se recomienda llegar 10 minutos antes de tu cita</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-brand-teal mr-2 font-bold">•</span> 
                    <span className="text-gray-600">Cancelación gratuita con 24h de antelación</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <Button asChild variant="purple" className="w-full">
                  <Link href="/contacto">Reserva Tu Sesión</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Complementary Services */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Servicios Complementarios
            </h2>
            <p className="text-gray-700">
              En Mandala Ourense ofrecemos más que terapias. Descubre todos nuestros servicios para tu bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1599447292286-77a3ff442264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Clases de Yoga en Mandala Ourense"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Clases de Yoga</h3>
                <p className="text-gray-600 mb-4">Diferentes estilos de yoga para todos los niveles, desde principiantes hasta avanzados.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/clases-yoga-ourense">Explorar Clases <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1470137237906-d8a3eb69leftb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Talleres y Formaciones en Mandala Ourense"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Talleres y Formaciones</h3>
                <p className="text-gray-600 mb-4">Eventos especiales y formaciones para profundizar en diferentes técnicas y prácticas.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/actividades-bienestar-ourense">Ver Calendario <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1617526738882-1ea945ce3b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Productos Naturales en Mandala Ourense"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-brand-purple mb-2">Productos Naturales</h3>
                <p className="text-gray-600 mb-4">Selección de aceites esenciales, inciensos y productos naturales para tu bienestar.</p>
                <Button asChild variant="link" className="text-brand-teal p-0">
                  <Link href="/contacto">Más Información <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-beige/30">
        <Container>
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Experimenta el Bienestar en Mandala Ourense
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Te invitamos a conocer nuestro centro de terapias y descubrir cómo podemos ayudarte a mejorar tu bienestar físico, mental y emocional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="purple" size="lg">
                <Link href="/contacto">Reserva Ahora</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/terapias">Explorar Terapias</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}