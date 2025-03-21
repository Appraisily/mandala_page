import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Award, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Mejor Centro de Yoga en Ourense | Clases de Calidad | Mandala Ourense",
  description: "Descubre por qué Mandala es considerado el mejor centro de yoga en Ourense. Profesores certificados, variedad de estilos, instalaciones cómodas y una comunidad acogedora te esperan.",
  keywords: "mejor yoga ourense, top yoga ourense, centro yoga calidad ourense, clases yoga recomendadas ourense, yoga profesional ourense",
}

export default function MejorYogaOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1593810450967-f9c42742e3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Mejor Centro de Yoga en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              El Mejor Yoga en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Descubre qué hace de Mandala el centro de yoga preferido en Ourense y por qué nuestros alumnos nos eligen.
            </p>
            <div className="mt-8">
              <Link 
                href="/contacto" 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
              >
                Reserva tu primera clase
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
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6">
                ¿Qué Nos Diferencia?
              </h2>
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                En Mandala Centro de Yoga Ourense, nos esforzamos cada día para ofrecer la mejor experiencia 
                posible a nuestros alumnos. Nuestro compromiso con la calidad, la autenticidad y el bienestar 
                integral nos ha posicionado como referentes en la enseñanza del yoga en nuestra ciudad.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-brand-teal" />
                  </div>
                  <p className="text-2xl font-bold text-brand-purple">15+</p>
                  <p className="text-gray-600 text-sm">Años de experiencia</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto bg-brand-amber/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-brand-amber" />
                  </div>
                  <p className="text-2xl font-bold text-brand-purple">100%</p>
                  <p className="text-gray-600 text-sm">Profesores certificados</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto bg-brand-purple/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-brand-purple" />
                  </div>
                  <p className="text-2xl font-bold text-brand-purple">6+</p>
                  <p className="text-gray-600 text-sm">Estilos de yoga</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-brand-purple">1000+</p>
                  <p className="text-gray-600 text-sm">Alumnos satisfechos</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Razones para Elegirnos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Equipo Profesional</h3>
                  <p className="text-gray-700 mb-4">
                    Nuestros profesores son profesionales certificados internacionalmente con formación 
                    continua y especialización en diferentes estilos de yoga. Su pasión por la enseñanza y 
                    el profundo conocimiento del yoga garantizan una práctica segura y transformadora.
                  </p>
                  <Link 
                    href="/profesor-yoga-ourense" 
                    className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors text-sm"
                  >
                    Conoce a nuestros profesores
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Variedad de Estilos</h3>
                  <p className="text-gray-700 mb-4">
                    Ofrecemos una amplia gama de clases que incluyen Hatha Yoga, Yin Yoga, Daoyin Yoga, 
                    Yoga Restaurativo, Yoga Nidra y meditación. Esta diversidad permite a nuestros alumnos 
                    explorar diferentes prácticas y encontrar la que mejor se adapte a sus necesidades.
                  </p>
                  <Link 
                    href="/yoga" 
                    className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors text-sm"
                  >
                    Explora nuestros estilos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Instalaciones Cómodas</h3>
                  <p className="text-gray-700 mb-4">
                    Nuestro centro está diseñado para crear un ambiente de paz y tranquilidad. Contamos con 
                    salas espaciosas, bien ventiladas y equipadas con todos los props necesarios para tu práctica. 
                    Vestuarios, duchas y zonas de descanso completan nuestras instalaciones.
                  </p>
                  <Link 
                    href="/about" 
                    className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors text-sm"
                  >
                    Conoce nuestro centro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Comunidad Acogedora</h3>
                  <p className="text-gray-700 mb-4">
                    Más allá de las clases, Mandala es una comunidad vibrante donde todos son bienvenidos, 
                    independientemente de su nivel o experiencia. Organizamos talleres, eventos y actividades 
                    que fomentan la conexión y el crecimiento personal.
                  </p>
                  <Link 
                    href="/contacto" 
                    className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors text-sm"
                  >
                    Únete a nuestra comunidad
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Lo Que Dicen Nuestros Alumnos
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-brand-beige/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    <p className="ml-2 text-sm text-gray-600">5.0 / 5.0</p>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Después de probar varios centros en Ourense, puedo decir con confianza que Mandala ofrece 
                    la mejor experiencia de yoga. La combinación de profesores expertos, clases variadas y un 
                    ambiente acogedor hace que cada visita sea especial. He notado grandes mejoras en mi flexibilidad 
                    y bienestar general desde que comencé aquí."
                  </p>
                  <p className="font-medium text-brand-purple">— Lucía D., miembro desde 2018</p>
                </div>
                <div className="bg-brand-beige/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    <p className="ml-2 text-sm text-gray-600">5.0 / 5.0</p>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Lo que diferencia a Mandala de otros centros es la atención individualizada. Los profesores 
                    realmente se toman el tiempo para corregir posturas y ofrecer alternativas adaptadas a cada 
                    cuerpo. Como principiante, me sentí bienvenido desde el primer día y ahora, dos años después, 
                    sigo descubriendo nuevos aspectos del yoga gracias a su enseñanza."
                  </p>
                  <p className="font-medium text-brand-purple">— Javier M., miembro desde 2021</p>
                </div>
                <div className="bg-brand-beige/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    <p className="ml-2 text-sm text-gray-600">5.0 / 5.0</p>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "La variedad de clases es impresionante. Un día puedo hacer una clase enérgica de Hatha y al 
                    siguiente disfrutar de una relajante sesión de Yin Yoga. Los profesores son auténticos maestros 
                    en sus especialidades y transmiten su pasión en cada clase. Sin duda, el mejor centro de yoga 
                    en Ourense para una práctica completa."
                  </p>
                  <p className="font-medium text-brand-purple">— Ana R., miembro desde 2019</p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Beneficios de Practicar en Mandala
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Práctica Segura</h3>
                  <p className="text-gray-700">
                    Instrucción experta que prioriza la alineación correcta y previene lesiones.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Progreso Constante</h3>
                  <p className="text-gray-700">
                    Seguimiento personalizado que te ayuda a avanzar a tu propio ritmo.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Horarios Flexibles</h3>
                  <p className="text-gray-700">
                    Amplia oferta de clases en diferentes horarios para adaptarse a tu agenda.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Ambiente Motivador</h3>
                  <p className="text-gray-700">
                    Entorno que te inspira a mantener la constancia en tu práctica.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Eventos Especiales</h3>
                  <p className="text-gray-700">
                    Talleres, masterclasses y retiros que enriquecen tu experiencia.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-3">Bienestar Integral</h3>
                  <p className="text-gray-700">
                    Enfoque holístico que cuida tu cuerpo, mente y espíritu.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  Experimenta la Diferencia en Mandala
                </h3>
                <p className="text-gray-700 mb-6">
                  Te invitamos a descubrir por ti mismo por qué somos considerados el mejor centro de yoga en Ourense.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contacto" 
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Reservar Clase de Prueba
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    href="/horarios-precios" 
                    className="bg-white hover:bg-gray-50 text-brand-purple border border-gray-200 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Ver Horarios y Precios
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