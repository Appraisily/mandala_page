import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yoga en el Centro de Ourense | Mandala | Ubicación Privilegiada',
  description: 'Practica yoga en el centro de Ourense con Mandala. Ubicación céntrica y accesible, ambiente acogedor y clases para todos los niveles. ¡Reserva tu clase!',
  keywords: 'yoga en el centro de ourense, clases yoga centro ourense, yoga ourense centro ciudad, estudio yoga céntrico ourense',
}

export default function YogaEnElCentroDeOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Yoga en el Centro de Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Espacio Mandala: Tu oasis de paz en pleno corazón de la ciudad
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/mandala-center.jpg" 
            alt="Estudio de yoga Mandala en el centro de Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Ubicación privilegiada con fácil acceso y ambiente tranquilo
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Yoga en el Corazón de Ourense
          </h2>
          <p className="text-lg mb-6">
            Mandala es tu estudio de <strong>yoga en el centro de Ourense</strong>, estratégicamente ubicado para que puedas conectar con tu práctica sin desplazamientos largos o complicados. Nuestro espacio se encuentra a solo unos minutos caminando de la Plaza Mayor, siendo accesible tanto a pie como en transporte público.
          </p>
          <p className="text-lg mb-6">
            Hemos creado un refugio de tranquilidad en pleno <strong>centro urbano de Ourense</strong>, donde el bullicio de la ciudad queda fuera al cruzar nuestra puerta. Un lugar donde encontrar calma, conexión y comunidad sin tener que alejarte de tu rutina diaria.
          </p>
          <p className="text-lg mb-8">
            Nuestra ubicación céntrica nos permite ser el espacio de yoga más accesible de Ourense, ideal para quienes trabajan o viven en el centro y buscan integrar el yoga en su día a día sin complicaciones.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Visítanos en el Centro</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Ventajas de Practicar Yoga en el Centro de Ourense
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/convenience.jpg" 
                  alt="Conveniencia del yoga en el centro de Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Conveniencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Practica antes o después del trabajo, durante tu pausa para comer o mientras haces otras gestiones en el centro. Sin largos desplazamientos que te quiten tiempo y energía.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/accessibility.jpg" 
                  alt="Accesibilidad del yoga en el centro de Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Accesibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fácil acceso en transporte público, a pie desde muchos puntos de la ciudad, y con opciones de aparcamiento cercanas para quienes prefieren venir en coche.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/community.jpg" 
                  alt="Comunidad de yoga en el centro de Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Comunidad Diversa</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nuestra ubicación céntrica atrae a personas de todos los barrios y perfiles, creando una comunidad rica y diversa que enriquece la experiencia compartida del yoga.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Integración con la Vida Urbana</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Practicar <strong>yoga en el centro de Ourense</strong> te permite integrar esta disciplina en tu rutina urbana, creando un equilibrio entre la vida activa de la ciudad y los momentos de introspección y calma.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Oasis Urbano</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hemos diseñado nuestro espacio como un verdadero refugio en medio de la ciudad, con aislamiento acústico, luz natural, plantas y elementos que invitan a la desconexión del ajetreo exterior.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Instalaciones en el Centro de Ourense
          </h2>
          
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden mb-10">
            <Image 
              src="/images/yoga-studio.jpg" 
              alt="Instalaciones de yoga en el centro de Ourense" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-xl">
                "Un espacio concebido para la práctica, la conexión y el crecimiento personal"
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Sala Principal de Práctica</h3>
              <p className="mb-3">Nuestra sala principal cuenta con:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Más de 120 m² de espacio para práctica</li>
                <li>Luz natural filtrada para crear un ambiente sereno</li>
                <li>Suelo de madera con calidad profesional para yoga</li>
                <li>Sistema de climatización que mantiene temperatura óptima todo el año</li>
                <li>Aislamiento acústico que elimina los ruidos del centro de la ciudad</li>
                <li>Capacidad para hasta 25 practicantes con espacio confortable</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Sala de Prácticas Íntimas</h3>
              <p className="mb-3">Contamos también con una sala más pequeña para:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Clases reducidas de máximo 10 personas</li>
                <li>Sesiones privadas y semi-privadas</li>
                <li>Sesiones terapéuticas personalizadas</li>
                <li>Prácticas de meditación y pranayama</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Áreas Comunes y Servicios</h3>
              <p className="mb-3">Además de las salas de práctica, nuestro centro ofrece:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vestuarios espaciosos con duchas</li>
                <li>Taquillas seguras para tus pertenencias</li>
                <li>Área de recepción y tienda con productos seleccionados</li>
                <li>Zona de infusiones para socializar antes o después de tu clase</li>
                <li>Biblioteca con literatura especializada en yoga y bienestar</li>
                <li>Wifi gratuito en las áreas comunes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Estilos de Yoga que Ofrecemos en el Centro de Ourense
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/hatha-yoga.jpg" 
                    alt="Hatha Yoga en el centro de Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Hatha Yoga</h3>
                  <p className="mb-4">El Hatha Yoga es el estilo tradicional más accesible, ideal para iniciarse en esta disciplina. Nuestras clases de <strong>yoga en el centro de Ourense</strong> combinan posturas (asanas), respiración consciente (pranayama) y relajación.</p>
                  <p className="mb-4">Perfecto para: principiantes, personas que buscan una práctica equilibrada, y quienes desean mejorar flexibilidad y reducir estrés.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/hatha-yoga">Más sobre nuestras clases de Hatha Yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/daoyin-yoga.jpg" 
                    alt="Daoyin Yoga en el centro de Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Daoyin Yoga</h3>
                  <p className="mb-4">Una especialidad única de nuestro estudio de <strong>yoga en el centro de Ourense</strong>. El Daoyin Yoga integra elementos del yoga tradicional con principios de la medicina china y el qigong.</p>
                  <p className="mb-4">Perfecto para: personas interesadas en el trabajo energético, quienes buscan fortalecer su sistema inmunológico, y practicantes que quieren explorar nuevos enfoques.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/daoyin-yoga">Más sobre nuestras clases de Daoyin Yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/nidra-yoga.jpg" 
                    alt="Yoga Nidra en el centro de Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoga Nidra y Meditación</h3>
                  <p className="mb-4">En nuestro centro de <strong>yoga en el centro de Ourense</strong> ofrecemos regularmente sesiones de Yoga Nidra (yoga del sueño consciente) y diversas técnicas de meditación, ideales para reducir el estrés de la vida urbana.</p>
                  <p className="mb-4">Perfecto para: personas con alto nivel de estrés, quienes tienen dificultad para desconectar, y los que buscan mejorar la calidad del sueño y la concentración.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/nidra-yoga-meditacion">Más sobre nuestras sesiones de Yoga Nidra y Meditación →</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Modalidades Adicionales en el Centro</h3>
            <p className="text-center mb-6">Además de nuestras clases regulares, nuestro estudio de yoga en el centro de Ourense ofrece:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yoga Restaurativo</h4>
                <p>Una práctica suave y profundamente relajante, ideal para recuperar energía después de una jornada intensa en la ciudad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yin Yoga</h4>
                <p>Posturas sostenidas que trabajan tejido conectivo y fascia, perfecto para contrarrestar la tensión acumulada en el día a día urbano.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yoga Prenatal</h4>
                <p>Clases especialmente diseñadas para acompañar el embarazo, con profesoras especializadas y en un entorno seguro en el centro de la ciudad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yoga Express</h4>
                <p>Clases de 45 minutos diseñadas para ajustarse a la apretada agenda urbana, concentrando los beneficios del yoga en sesiones más breves.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Todos los Horarios y Precios</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            ¿Cómo Llegar a Nuestro Centro de Yoga?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Ubicación</h3>
              <p className="mb-2"><strong>Centro de Yoga Mandala Ourense</strong></p>
              <p className="mb-2">Calle Principal, 123</p>
              <p className="mb-2">32003 Ourense</p>
              <p className="mb-4">A 5 minutos caminando desde la Plaza Mayor</p>
              
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Opciones de Transporte</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>A pie:</strong> Somos accesibles caminando desde la mayoría de zonas del centro de Ourense</li>
                <li><strong>En autobús:</strong> Las líneas 1, 3 y 5 tienen parada a menos de 200 metros</li>
                <li><strong>En coche:</strong> Aparcamiento público a 3 minutos andando</li>
                <li><strong>En bicicleta:</strong> Contamos con aparcamiento para bicicletas en la entrada</li>
              </ul>
              
              <div className="h-[200px] w-full bg-gray-200 rounded-lg mb-4 relative">
                {/* Aquí iría el mapa de Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p>Mapa de ubicación</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Puntos de Referencia Cercanos</h3>
              <p className="mb-4">Nuestro centro de yoga en el centro de Ourense está estratégicamente ubicado cerca de:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Plaza Mayor (5 min. caminando)</li>
                <li>Ayuntamiento de Ourense (7 min. caminando)</li>
                <li>Centro Comercial Principal (10 min. caminando)</li>
                <li>Estación de Autobuses (15 min. caminando)</li>
                <li>Principales zonas de oficinas del centro (radio de 10 min.)</li>
              </ul>
              
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Horarios de Apertura</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Lunes a Viernes:</span>
                  <span>9:00 - 21:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sábados:</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
              
              <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
            Testimonios: Yoga en el Centro de Ourense
          </h2>
          <p className="text-center text-lg mb-10">
            Experiencias de nuestros alumnos sobre practicar yoga en pleno centro de la ciudad
          </p>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Lo que más valoro de Mandala es poder practicar yoga en el centro de Ourense, justo al salir de la oficina. He probado otros centros más alejados, pero acababa abandonando por la logística. Aquí puedo venir incluso en mi pausa para comer. Ha transformado mi relación con el estrés laboral."</p>
                <p className="font-medium">Roberto G., empresario, 42 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como estudiante, el centro Mandala me permite compaginar mis clases en la universidad con la práctica de yoga. Su ubicación en el centro de Ourense es perfecta, y tienen horarios compatibles con mis estudios. Además, el ambiente es muy acogedor y los profesores realmente se preocupan por cada alumno."</p>
                <p className="font-medium">Sara L., estudiante, 23 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Vivo en las afueras pero trabajo en el centro, así que poder practicar yoga aquí antes de volver a casa ha sido un regalo. Lo que más me sorprende es cómo, estando en pleno centro de Ourense, consiguen crear un ambiente tan tranquilo. Cruzas la puerta y el bullicio de la ciudad desaparece completamente."</p>
                <p className="font-medium">Carmen D., profesora, 38 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Descubre el Yoga en el Centro de Ourense
            </h2>
            <p className="text-lg text-center mb-8">
              Te invitamos a conocer Mandala y experimentar los beneficios de practicar yoga en una ubicación céntrica y accesible.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reservar Clase de Prueba</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Horarios y Precios</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}