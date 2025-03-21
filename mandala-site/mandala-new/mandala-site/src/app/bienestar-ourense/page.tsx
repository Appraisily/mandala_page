import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bienestar Ourense | Mandala | Centro Integral de Salud y Equilibrio',
  description: 'Centro Mandala: tu espacio de bienestar en Ourense. Yoga, meditación, terapias holísticas y técnicas para el equilibrio físico y mental en un entorno acogedor.',
  keywords: 'bienestar ourense, salud integral ourense, equilibrio cuerpo mente ourense, centro bienestar mandala, terapias bienestar ourense',
}

export default function BienestarOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Bienestar Integral en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Mandala: Tu espacio para el equilibrio físico, mental y emocional
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/wellness-center.jpg" 
            alt="Centro de bienestar Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Un enfoque holístico para mejorar tu calidad de vida
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Bienestar Completo en el Corazón de Ourense
          </h2>
          <p className="text-lg mb-6">
            En Mandala entendemos el <strong>bienestar en Ourense</strong> como un concepto integral que abarca todos los aspectos de tu ser: físico, mental, emocional y espiritual. Nuestro centro nació con la visión de crear un espacio donde las personas puedan encontrar herramientas, técnicas y acompañamiento para cultivar un estado de plenitud y armonía.
          </p>
          <p className="text-lg mb-6">
            Situados en pleno centro de Ourense, ofrecemos un refugio de paz donde puedes desconectar del ritmo acelerado de la vida moderna y reconectar con tu esencia. Nuestro enfoque holístico combina la sabiduría de tradiciones milenarias con conocimientos contemporáneos sobre salud y bienestar.
          </p>
          <p className="text-lg mb-8">
            Ya sea que busques aliviar tensiones físicas, reducir el estrés, encontrar claridad mental o simplemente mejorar tu calidad de vida, en Mandala encontrarás un camino adaptado a tus necesidades específicas.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Descubre Tu Camino al Bienestar</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Pilares del Bienestar en Mandala
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/physical-wellness.jpg" 
                  alt="Bienestar físico en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Bienestar Físico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Cuidamos de tu cuerpo a través de prácticas que mejoran la flexibilidad, fortalecen la musculatura, equilibran los sistemas corporales y aumentan la vitalidad:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hatha Yoga para mejorar postura y flexibilidad</li>
                  <li>Daoyin Yoga para equilibrar la energía vital</li>
                  <li>Yoga terapéutico adaptado a necesidades específicas</li>
                  <li>Técnicas de respiración para optimizar funciones corporales</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/mental-wellness.jpg" 
                  alt="Bienestar mental en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Bienestar Mental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Cultivamos la claridad y calma mental para reducir el estrés, mejorar la concentración y encontrar mayor equilibrio en tus pensamientos:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Meditación guiada para calmar la mente</li>
                  <li>Mindfulness para vivir en el presente</li>
                  <li>Yoga Nidra para la relajación profunda</li>
                  <li>Técnicas de concentración y enfoque</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/emotional-wellness.jpg" 
                  alt="Bienestar emocional en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Bienestar Emocional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Trabajamos con tus emociones para fomentar el equilibrio, la resiliencia y una relación sana con tu mundo interior:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Constelaciones familiares para sanar patrones emocionales</li>
                  <li>Yoga para gestionar emociones difíciles</li>
                  <li>Técnicas de autocompasión y desarrollo personal</li>
                  <li>Espacio seguro para la expresión emocional</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/spiritual-wellness.jpg" 
                  alt="Bienestar espiritual en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Bienestar Energético</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Atendemos la dimensión sutil de tu ser, buscando el equilibrio energético y la conexión con tu esencia profunda:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Trabajo con chakras y centros energéticos</li>
                  <li>Técnicas de la medicina tradicional china</li>
                  <li>Meditaciones para la expansión de consciencia</li>
                  <li>Prácticas para fortalecer tu campo energético</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Servicios para el Bienestar Integral
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/yoga-classes.jpg" 
                    alt="Clases de yoga para bienestar en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Clases de Yoga</h3>
                  <p className="mb-4">Nuestras variadas modalidades de yoga contribuyen al <strong>bienestar en Ourense</strong> a través del movimiento consciente, la respiración y la atención plena:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Hatha Yoga:</strong> Equilibrio entre fuerza y flexibilidad</li>
                    <li><strong>Daoyin Yoga:</strong> Equilibrio energético basado en medicina china</li>
                    <li><strong>Yoga Restaurativo:</strong> Relajación profunda para recuperación</li>
                    <li><strong>Yoga Terapéutico:</strong> Adaptado a necesidades específicas de salud</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/hatha-yoga">Explorar Clases de Yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/meditation-sessions.jpg" 
                    alt="Sesiones de meditación para bienestar en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Meditación y Mindfulness</h3>
                  <p className="mb-4">El entrenamiento mental para cultivar la atención, calma y claridad, fundamentales para el bienestar integral:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Meditación guiada:</strong> Para principiantes y avanzados</li>
                    <li><strong>Mindfulness:</strong> Atención plena en la vida cotidiana</li>
                    <li><strong>Yoga Nidra:</strong> Meditación yóguica para la relajación profunda</li>
                    <li><strong>Talleres específicos:</strong> Para gestión del estrés, ansiedad y concentración</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/nidra-yoga-meditacion">Descubrir Nuestras Meditaciones →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/holistic-therapies.jpg" 
                    alt="Terapias holísticas para bienestar en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Terapias Holísticas</h3>
                  <p className="mb-4">Abordajes complementarios para tratar cuerpo, mente y emociones como un todo integrado:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Constelaciones familiares:</strong> Para resolver patrones sistémicos</li>
                    <li><strong>Masajes terapéuticos:</strong> Alivio de tensiones físicas y emocionales</li>
                    <li><strong>Reiki:</strong> Equilibrio energético y relajación profunda</li>
                    <li><strong>Terapias corporales:</strong> Para liberar bloqueos y traumas</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/terapias">Conocer Nuestras Terapias →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/workshops-events.jpg" 
                    alt="Talleres y eventos de bienestar en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Talleres y Eventos Especiales</h3>
                  <p className="mb-4">Oportunidades para profundizar en aspectos específicos del <strong>bienestar en Ourense</strong>:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Talleres temáticos:</strong> Sobre nutrición, descanso, gestión emocional</li>
                    <li><strong>Retiros de fin de semana:</strong> Inmersiones intensivas</li>
                    <li><strong>Conferencias:</strong> Con especialistas en diversos campos del bienestar</li>
                    <li><strong>Encuentros comunitarios:</strong> Para compartir y crecer juntos</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/contacto">Consultar Próximos Eventos →</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Enfoques Especializados</h3>
            <p className="text-center mb-6">Atendemos necesidades específicas para optimizar el bienestar en distintas etapas y situaciones vitales:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Bienestar en el Embarazo</h4>
                <p>Clases y terapias adaptadas para acompañar esta etapa de transformación, preparar el cuerpo para el parto y fomentar la conexión madre-bebé.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Bienestar Laboral</h4>
                <p>Programas diseñados para combatir el estrés laboral, prevenir el burnout y mejorar la concentración y productividad en entornos de trabajo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Bienestar en la Tercera Edad</h4>
                <p>Actividades adaptadas para mantener la movilidad, fortalecer el equilibrio, estimular la memoria y fomentar la socialización en adultos mayores.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios del Bienestar Integral
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Beneficios Físicos</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Mayor flexibilidad y fuerza</p>
                    <p className="text-sm text-muted-foreground">Previene lesiones y mejora la postura corporal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Mejora de la calidad del sueño</p>
                    <p className="text-sm text-muted-foreground">Facilita un descanso reparador y profundo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Reducción de dolores crónicos</p>
                    <p className="text-sm text-muted-foreground">Especialmente en espalda, cuello y articulaciones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Fortalecimiento del sistema inmune</p>
                    <p className="text-sm text-muted-foreground">Mayor resistencia a enfermedades</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Beneficios Mentales</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Reducción significativa del estrés</p>
                    <p className="text-sm text-muted-foreground">Disminución de cortisol y mayor serenidad</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Mejora de la concentración</p>
                    <p className="text-sm text-muted-foreground">Mayor capacidad de enfoque y claridad mental</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Control de la ansiedad</p>
                    <p className="text-sm text-muted-foreground">Herramientas efectivas para momentos difíciles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Mayor creatividad</p>
                    <p className="text-sm text-muted-foreground">Acceso a recursos mentales más profundos</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Beneficios Emocionales</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Mayor equilibrio emocional</p>
                    <p className="text-sm text-muted-foreground">Menos reactividad y más respuestas conscientes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Desarrollo de la inteligencia emocional</p>
                    <p className="text-sm text-muted-foreground">Mejor reconocimiento y gestión de emociones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Aumento de la autoestima</p>
                    <p className="text-sm text-muted-foreground">Mayor confianza y amor propio</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Mejora en relaciones interpersonales</p>
                    <p className="text-sm text-muted-foreground">Comunicación más efectiva y empática</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Beneficios en Calidad de Vida</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Mayor sensación de propósito</p>
                    <p className="text-sm text-muted-foreground">Conexión con valores más profundos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Aumento de la productividad</p>
                    <p className="text-sm text-muted-foreground">Más energía y capacidad para gestionar tareas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Hábitos más saludables</p>
                    <p className="text-sm text-muted-foreground">Mejoras naturales en alimentación y estilo de vida</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Sensación general de plenitud</p>
                    <p className="text-sm text-muted-foreground">Mayor satisfacción y bienestar cotidiano</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            El Bienestar según Nuestros Alumnos
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Llegué a Mandala en un momento de gran estrés laboral y problemas de insomnio. La combinación de yoga y meditación ha transformado no solo mi descanso, sino mi forma de enfrentar los desafíos diarios. Ahora entiendo que el verdadero bienestar en Ourense empieza por cuidar tanto el cuerpo como la mente. La diferencia en mi calidad de vida es notable."</p>
                <p className="font-medium">Antonio R., 42 años, ejecutivo</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Después de años arrastrando dolores crónicos de espalda y habiendo probado numerosos tratamientos, encontré en las clases de yoga terapéutico y las terapias complementarias de Mandala el alivio que tanto buscaba. Lo que más valoro es su enfoque integral que no solo trata el síntoma, sino la causa raíz del malestar. Son el mejor centro de bienestar en Ourense, sin duda."</p>
                <p className="font-medium">Laura M., 38 años, profesora</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Las constelaciones familiares en Mandala me ayudaron a resolver conflictos emocionales que arrastraba desde hace años. Entendí patrones que se repetían en mi vida y pude liberarme de cargas que ni siquiera sabía que llevaba. El trabajo con María fue profundo pero muy respetuoso. Este tipo de terapias son un tesoro para el bienestar emocional."</p>
                <p className="font-medium">Elena D., 45 años, psicóloga</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestro Equipo de Profesionales
          </h2>
          
          <p className="text-lg mb-8">
            En Mandala, contamos con un equipo multidisciplinar de profesionales cualificados y apasionados por el <strong>bienestar en Ourense</strong>. Cada uno aporta su especialidad y enfoque único, pero todos comparten el compromiso con una atención personalizada y de calidad.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/wellbeing-expert1.jpg" 
                    alt="Experta en bienestar María González" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">María González</h3>
                <p className="text-muted-foreground mb-4">Directora y Terapeuta Holística</p>
                <p className="text-center mb-4">Con más de 15 años de experiencia, María combina su formación en yoga, medicina tradicional china y psicología transpersonal para ofrecer un enfoque verdaderamente integral del bienestar.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/wellbeing-expert2.jpg" 
                    alt="Experto en bienestar Carlos Rodríguez" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Carlos Rodríguez</h3>
                <p className="text-muted-foreground mb-4">Especialista en Medicina Energética</p>
                <p className="text-center mb-4">Carlos integra sus conocimientos en medicina china, qigong y técnicas energéticas para equilibrar los sistemas sutiles del cuerpo y potenciar la vitalidad natural.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/wellbeing-expert3.jpg" 
                    alt="Experta en bienestar Ana Vázquez" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Ana Vázquez</h3>
                <p className="text-muted-foreground mb-4">Facilitadora de Constelaciones</p>
                <p className="text-center mb-4">Formada en psicología sistémica y constelaciones familiares, Ana acompaña procesos de sanación emocional profunda que transforman patrones limitantes.</p>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/wellbeing-expert4.jpg" 
                    alt="Experto en bienestar David López" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1 text-brand-purple">David López</h3>
                <p className="text-muted-foreground mb-4">Instructor de Yoga Terapéutico</p>
                <p className="text-center">Especializado en adaptar el yoga para necesidades específicas y condiciones físicas particulares, ayudando a recuperar la funcionalidad y reducir el dolor.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/wellbeing-expert5.jpg" 
                    alt="Experta en bienestar Laura Fernández" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1 text-brand-purple">Laura Fernández</h3>
                <p className="text-muted-foreground mb-4">Especialista en Mindfulness</p>
                <p className="text-center">Dedicada a enseñar técnicas de atención plena para integrar la consciencia en la vida cotidiana y transformar la relación con el estrés.</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Bienestar
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Por dónde debo empezar si soy completamente nuevo?</h3>
              <p>Te recomendamos comenzar con una consulta inicial gratuita donde evaluaremos tus necesidades y objetivos. Podemos recomendarte el camino más adecuado según tu situación particular, ya sea comenzando con clases de yoga suave, sesiones introductorias de meditación o alguna terapia específica.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Necesito experiencia previa para participar en las actividades?</h3>
              <p>No, todas nuestras actividades son accesibles para principiantes. Nuestros profesionales están capacitados para adaptar las prácticas a diferentes niveles y necesidades. De hecho, muchos de nuestros alumnos comenzaron sin ninguna experiencia previa en yoga o meditación.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cuánto tiempo tardará en notarse una mejora en mi bienestar?</h3>
              <p>Muchas personas notan beneficios inmediatos después de una sola sesión, como reducción del estrés o mejor descanso. Sin embargo, los cambios profundos y duraderos suelen requerir práctica constante. Con asistencia regular (2-3 veces por semana), la mayoría de nuestros alumnos reportan mejoras significativas en su bienestar general en un período de 4-6 semanas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿El bienestar integral reemplaza tratamientos médicos convencionales?</h3>
              <p>No, nuestros servicios son complementarios a la medicina convencional, no sustitutivos. En Mandala promovemos un enfoque integrador donde las prácticas de bienestar apoyan y potencian los tratamientos médicos. Siempre recomendamos mantener el seguimiento con profesionales sanitarios para condiciones médicas específicas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Ofrecen planes personalizados de bienestar?</h3>
              <p>Sí, ofrecemos asesoramiento personalizado para crear un plan de bienestar a medida que combine diferentes servicios según tus necesidades específicas. Estos planes pueden incluir una combinación de clases regulares, terapias individuales y recomendaciones para la práctica en casa.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Tu Viaje hacia el Bienestar Integral
            </h2>
            <p className="text-lg text-center mb-8">
              En Mandala creemos que el verdadero bienestar es un camino de autodescubrimiento y transformación personal. Te invitamos a dar el primer paso.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reserva tu Consulta Gratuita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}