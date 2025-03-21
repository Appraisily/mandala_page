import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Clock, Calendar, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Yoga Cerca de Mí en Ourense | Clases de Yoga Próximas | Mandala Ourense",
  description: "Encuentra clases de yoga cerca de ti en Ourense. Mandala Centro de Yoga está ubicado en el centro de la ciudad con fácil acceso, amplio horario y diversidad de estilos para todos los niveles.",
  keywords: "yoga cerca de mi ourense, clases yoga próximas ourense, yoga centro ourense, yoga accesible ourense, yoga barrio ourense",
}

export default function YogaCercaOurensePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Yoga Cerca de Mí en Ourense"
            fill
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Yoga Cerca de Ti en Ourense
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Encuentra tu oasis de bienestar en el corazón de Ourense con nuestras clases de yoga accesibles y adaptadas a todos los niveles.
            </p>
            <div className="mt-8">
              <Link 
                href="/contacto" 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
              >
                Encontrar mi clase
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
                  Centro de Yoga en el Corazón de Ourense
                </h2>
                <p className="text-gray-700 mb-4">
                  <strong>Mandala Centro de Yoga</strong> está estratégicamente ubicado en el centro de Ourense, 
                  ofreciendo un acceso fácil y cómodo desde cualquier punto de la ciudad. Nuestras instalaciones 
                  están diseñadas para crear un ambiente de tranquilidad y armonía, permitiéndote desconectar 
                  del bullicio urbano y conectar con tu práctica.
                </p>
                <p className="text-gray-700 mb-4">
                  Ya sea que vivas o trabajes en el centro, o que vengas de barrios como San Francisco, O Couto, 
                  A Ponte, O Vinteún o Las Lagunas, encontrarás que nuestro centro es fácilmente accesible, con 
                  opciones de transporte público cercanas y posibilidades de aparcamiento en los alrededores.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-brand-purple">Dirección</h3>
                      <p className="text-gray-600">Calle Principal 123, Centro, 32005 Ourense</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-brand-purple">Horario del Centro</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 21:00 | Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-brand-purple">Contacto</h3>
                      <p className="text-gray-600">Teléfono: 988 123 456 | Email: info@mandalaourense.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Centro de Yoga en Ourense"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6 text-center">
                Nuestra Ubicación
              </h2>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80"
                    alt="Mapa de ubicación de Mandala Yoga Ourense"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Link 
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-50 text-brand-purple px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                    >
                      Ver en Google Maps
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-brand-beige/30 p-5 rounded-lg">
                  <h3 className="font-heading text-lg font-medium text-brand-purple mb-2">Transporte Público</h3>
                  <p className="text-gray-700 text-sm">
                    Líneas de autobús 1, 3 y 5 con parada a 2 minutos a pie del centro.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-5 rounded-lg">
                  <h3 className="font-heading text-lg font-medium text-brand-purple mb-2">Aparcamiento</h3>
                  <p className="text-gray-700 text-sm">
                    Parking público a 5 minutos y zonas de aparcamiento en calles cercanas.
                  </p>
                </div>
                <div className="bg-brand-beige/30 p-5 rounded-lg">
                  <h3 className="font-heading text-lg font-medium text-brand-purple mb-2">A Pie</h3>
                  <p className="text-gray-700 text-sm">
                    A 10 minutos caminando desde la Plaza Mayor y principales zonas comerciales.
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-8 text-center">
                Horarios Adaptados a Tu Vida
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-gray-700 mb-6">
                    En Mandala entendemos que encontrar tiempo para practicar yoga puede ser un desafío. Por eso, 
                    ofrecemos un amplio horario de clases que se adapta a diferentes rutinas diarias:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-brand-purple">Clases Matutinas (7:30 - 10:00)</h3>
                        <p className="text-gray-600 text-sm">
                          Perfecto para comenzar el día con energía antes de ir al trabajo.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-brand-purple">Clases de Mediodía (13:30 - 15:00)</h3>
                        <p className="text-gray-600 text-sm">
                          Ideal para aprovechar la pausa para comer y revitalizarte.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-brand-purple">Clases de Tarde-Noche (17:30 - 21:00)</h3>
                        <p className="text-gray-600 text-sm">
                          Perfecto para desconectar después del trabajo y liberar tensiones.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-brand-purple">Clases de Fin de Semana</h3>
                        <p className="text-gray-600 text-sm">
                          Sesiones más largas y talleres especiales para profundizar en tu práctica.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-heading text-xl font-medium text-brand-purple mb-4">Horario Destacado</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-3">
                      <h4 className="font-medium text-brand-purple">Lunes</h4>
                      <p className="text-gray-600 text-sm">7:30 - Hatha Yoga</p>
                      <p className="text-gray-600 text-sm">13:30 - Yoga Express (45 min)</p>
                      <p className="text-gray-600 text-sm">18:00 - Yin Yoga</p>
                      <p className="text-gray-600 text-sm">20:00 - Yoga Nidra</p>
                    </div>
                    <div className="border-b border-gray-100 pb-3">
                      <h4 className="font-medium text-brand-purple">Miércoles</h4>
                      <p className="text-gray-600 text-sm">9:00 - Daoyin Yoga</p>
                      <p className="text-gray-600 text-sm">14:00 - Yoga Express (45 min)</p>
                      <p className="text-gray-600 text-sm">17:30 - Yoga para Principiantes</p>
                      <p className="text-gray-600 text-sm">19:30 - Hatha Yoga Avanzado</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-purple">Sábado</h4>
                      <p className="text-gray-600 text-sm">10:00 - Yoga Flow</p>
                      <p className="text-gray-600 text-sm">12:00 - Yoga Restaurativo</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link 
                      href="/horarios-precios" 
                      className="text-brand-purple hover:text-brand-teal font-medium inline-flex items-center transition-colors text-sm"
                    >
                      Ver horario completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Neighborhoods */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-6 text-center">
                Tu Centro de Yoga de Referencia en Ourense
              </h2>
              <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Mandala es el centro de yoga más cercano y accesible para residentes de los siguientes barrios de Ourense:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-medium text-brand-purple">Centro Histórico</h3>
                  <p className="text-gray-600 text-sm">A 5 minutos caminando</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-medium text-brand-purple">San Francisco</h3>
                  <p className="text-gray-600 text-sm">A 10 minutos caminando</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-medium text-brand-purple">O Couto</h3>
                  <p className="text-gray-600 text-sm">A 15 minutos en autobús</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-medium text-brand-purple">A Ponte</h3>
                  <p className="text-gray-600 text-sm">A 12 minutos caminando</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-medium text-brand-purple">O Vinteún</h3>
                  <p className="text-gray-600 text-sm">A 8 minutos en coche</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h3 className="font-medium text-brand-purple">Las Lagunas</h3>
                  <p className="text-gray-600 text-sm">A 10 minutos en autobús</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">
                  Tu Oasis de Bienestar Está Más Cerca de lo que Piensas
                </h3>
                <p className="text-gray-700 mb-6">
                  Descubre la comodidad de practicar yoga cerca de casa o del trabajo. ¡Te esperamos en Mandala Ourense!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contacto" 
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Contactar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    href="/horarios-precios" 
                    className="bg-white hover:bg-gray-50 text-brand-purple border border-gray-200 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Ver Horarios
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