import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yoga en Ourense | Centro Mandala - Tu Espacio de Bienestar',
  description: 'Descubre Mandala, el centro de yoga en Ourense con las mejores clases, profesores certificados y un ambiente acogedor. Hatha, Daoyin, Nidra y más estilos para todos los niveles.',
  keywords: 'ourense yoga, yoga ourense, centro yoga ourense, clases yoga ourense, escuela yoga ourense',
}

export default function OurenseYogaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-brand-purple">
          Yoga en Ourense: Centro Mandala
        </h1>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/studio-ourense.jpg" 
            alt="Centro de yoga Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-2xl font-medium">
              Tu espacio de paz y bienestar en el corazón de Ourense
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Bienvenidos a Mandala: El Centro de Yoga de Referencia en Ourense
          </h2>
          <p className="text-lg mb-6">
            En <strong>Mandala Ourense</strong>, ofrecemos un espacio dedicado al <strong>yoga</strong> y al bienestar, donde cada persona encuentra su camino hacia el equilibrio físico y mental. Situados en el centro de <strong>Ourense</strong>, somos más que un simple estudio de yoga: somos una comunidad comprometida con la práctica auténtica y respetuosa.
          </p>
          <p className="text-lg mb-6">
            Nuestro centro de <strong>yoga en Ourense</strong> combina la sabiduría de las tradiciones ancestrales con un enfoque adaptado a las necesidades contemporáneas, creando un ambiente donde tanto principiantes como practicantes avanzados pueden desarrollarse y crecer.
          </p>
          <p className="text-lg mb-6">
            El <strong>yoga</strong> que practicamos y enseñamos en <strong>Ourense</strong> no es solo una actividad física, sino un camino de autodescubrimiento y transformación personal que integra cuerpo, mente y espíritu.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/about">Conoce Nuestra Historia</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
              ¿Por qué elegir Mandala para practicar yoga en Ourense?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Experiencia y Tradición</h3>
                <p>Más de 10 años dedicados a compartir el yoga auténtico en Ourense, respetando sus raíces y filosofía.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Profesores Cualificados</h3>
                <p>Nuestro equipo está formado por instructores certificados con amplia experiencia y formación continua.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Espacio Acogedor</h3>
                <p>Instalaciones diseñadas para crear una atmósfera de calma y serenidad en pleno centro de Ourense.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Clases para Todos</h3>
                <p>Ofrecemos una variedad de estilos y niveles para que cada persona encuentre su práctica ideal.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Estilos de Yoga que Practicamos en Mandala Ourense
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/hatha-yoga.jpg" 
                    alt="Hatha Yoga en Ourense" 
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-brand-purple">Hatha Yoga</CardTitle>
                    <CardDescription>La base de la práctica física del yoga</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">El Hatha Yoga es el estilo más tradicional y accesible, perfecto para iniciar tu camino en el yoga. En nuestras clases de <strong>Hatha Yoga en Ourense</strong> trabajamos posturas (asanas) sostenidas, respiración consciente y relajación profunda.</p>
                    <p className="mb-4">Beneficios: mejora la flexibilidad, fortalece el cuerpo, calma la mente y reduce el estrés. Ideal para todas las edades y condiciones físicas.</p>
                    <Button asChild variant="link" className="text-brand-teal p-0">
                      <Link href="/yoga/hatha-yoga">Descubre nuestras clases de Hatha Yoga →</Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/daoyin-yoga.jpg" 
                    alt="Daoyin Yoga en Ourense" 
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-brand-purple">Daoyin Yoga</CardTitle>
                    <CardDescription>Fusión de yoga y medicina tradicional china</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">El Daoyin Yoga combina elementos del yoga con principios de la medicina china y qigong. En <strong>Mandala Ourense</strong> ofrecemos estas clases únicas que trabajan con la energía vital (qi) a través de los meridianos energéticos.</p>
                    <p className="mb-4">Beneficios: equilibrio energético, flexibilidad, fortalecimiento interno y mayor vitalidad. Especialmente recomendado para quien busca una práctica energética profunda.</p>
                    <Button asChild variant="link" className="text-brand-teal p-0">
                      <Link href="/yoga/daoyin-yoga">Explora nuestras clases de Daoyin Yoga →</Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/nidra-yoga.jpg" 
                    alt="Yoga Nidra en Ourense" 
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-brand-purple">Yoga Nidra y Meditación</CardTitle>
                    <CardDescription>Relajación profunda y práctica meditativa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">El Yoga Nidra o "yoga del sueño consciente" te lleva a un estado de relajación profunda manteniendo la conciencia despierta. En nuestro centro de <strong>yoga en Ourense</strong> complementamos esta práctica con técnicas de meditación para el desarrollo de la atención plena.</p>
                    <p className="mb-4">Beneficios: reducción profunda del estrés, mejor calidad del sueño, mayor claridad mental y equilibrio emocional. Perfecto para combatir la ansiedad y el insomnio.</p>
                    <Button asChild variant="link" className="text-brand-teal p-0">
                      <Link href="/yoga/nidra-yoga-meditacion">Conoce nuestras sesiones de Yoga Nidra →</Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Mandala Ourense: Un Centro de Yoga para Todos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Yoga para Principiantes</h3>
              <p className="mb-4">Si estás dando tus primeros pasos en el mundo del yoga, en Mandala Ourense encontrarás el ambiente perfecto para comenzar. Nuestros profesores te guiarán con paciencia, explicando cada postura en detalle y ofreciendo alternativas adaptadas a tu nivel.</p>
              <p>No importa tu edad, condición física o flexibilidad actual, el yoga es para todos y nuestras clases para principiantes en Ourense te mostrarán cómo integrarlo a tu vida.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Yoga Terapéutico</h3>
              <p className="mb-4">Nuestras clases de yoga terapéutico en Ourense están diseñadas específicamente para abordar condiciones físicas particulares: dolores de espalda, problemas posturales, estrés crónico o recuperación tras lesiones.</p>
              <p>Trabajamos con grupos reducidos para ofrecer atención personalizada, adaptando la práctica a las necesidades específicas de cada alumno.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Yoga para la Vitalidad</h3>
              <p className="mb-4">Para quienes buscan una práctica más dinámica, nuestras clases de yoga para la vitalidad combinan secuencias fluidas, respiración energética y posturas que despiertan la fuerza interior.</p>
              <p>Perfecto para quienes ya tienen experiencia en yoga y desean profundizar en una práctica más intensa y transformadora en nuestro centro de Ourense.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Yoga para la Relajación</h3>
              <p className="mb-4">El estrés y la ansiedad son problemas comunes en la vida moderna. Nuestras clases de yoga para la relajación en Mandala Ourense ofrecen un oasis de calma donde aprender técnicas efectivas para gestionar las tensiones diarias.</p>
              <p>Combina posturas suaves, respiración consciente y meditación para crear un estado de paz interior duradera.</p>
            </div>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">¿No sabes qué estilo de yoga es adecuado para ti?</h3>
            <p className="text-center mb-6">Te invitamos a una consulta gratuita donde nuestros profesores te orientarán sobre la práctica más adecuada según tus necesidades y objetivos.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Agenda Tu Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Testimonios de Nuestra Comunidad de Yoga en Ourense
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Practico yoga en Mandala Ourense desde hace más de dos años y ha transformado completamente mi vida. Las clases son profesionales pero cercanas, y el ambiente del centro es simplemente especial. He notado una mejora increíble en mi flexibilidad y, sobre todo, en mi capacidad para gestionar el estrés."</p>
                <p className="font-medium">Ana R., 42 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Empecé en Mandala sin experiencia previa en yoga, con muchos miedos y limitaciones físicas. Desde el primer día me sentí acogido y respetado. Los profesores adaptan las posturas a cada alumno y te guían con mucho conocimiento. Después de seis meses, mi dolor de espalda crónico ha mejorado notablemente."</p>
                <p className="font-medium">Carlos M., 57 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Las clases de yoga nidra en Mandala son una joya escondida en Ourense. Sufría de insomnio desde hacía años y tras unas semanas practicando regularmente, por fin puedo descansar bien. Además, el centro tiene una ubicación perfecta en el centro de la ciudad."</p>
                <p className="font-medium">Laura S., 35 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
            Información Práctica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-brand-purple">Horarios Flexibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Ofrecemos clases de yoga en Ourense en diversos horarios, desde primeras horas de la mañana hasta la noche, para adaptarnos a tu rutina diaria.</p>
                <Button asChild className="bg-brand-purple hover:bg-brand-purple/90 text-white w-full">
                  <Link href="/horarios-precios">Ver Todos los Horarios</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-brand-purple">Precios Accesibles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Disponemos de diferentes opciones: clases sueltas, bonos de 5 o 10 sesiones y tarifas mensuales. También ofrecemos descuentos para estudiantes y jubilados.</p>
                <Button asChild className="bg-brand-purple hover:bg-brand-purple/90 text-white w-full">
                  <Link href="/horarios-precios">Consultar Precios</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg mb-6">¿Quieres empezar tu camino en el yoga con nosotros? Reserva tu primera clase gratuita y descubre por qué somos el centro de referencia de yoga en Ourense.</p>
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Reservar Clase de Prueba</Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
            Ubicación en Ourense
          </h2>
          
          <div className="bg-brand-beige p-6 rounded-lg mb-8">
            <p className="text-center mb-4"><strong>Centro Mandala Ourense</strong></p>
            <p className="text-center mb-4">Calle Principal, 123<br/>32003 Ourense</p>
            <p className="text-center mb-6">A solo 5 minutos caminando desde la Plaza Mayor</p>
            
            <div className="h-[300px] w-full bg-gray-200 rounded-lg mb-6 relative">
              {/* Aquí iría el mapa de Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p>Mapa de ubicación</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button asChild className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                <Link href="/contacto">Cómo Llegar</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}