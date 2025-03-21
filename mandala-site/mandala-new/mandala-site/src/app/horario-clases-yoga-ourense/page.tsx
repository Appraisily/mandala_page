import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GoogleCalendar } from '@/components/google-calendar'

export const metadata: Metadata = {
  title: 'Horario Clases Yoga Ourense | Mandala | Amplia Disponibilidad',
  description: 'Consulta el horario de clases de yoga en Ourense del Centro Mandala. Múltiples opciones de mañana, tarde y noche para adaptarse a todas las agendas.',
  keywords: 'horario clases yoga ourense, calendario yoga ourense, horarios yoga centro mandala, clases yoga ourense horarios',
}

export default function HorarioClasesYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Horario de Clases de Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Encuentra el momento perfecto para tu práctica en Mandala
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/yoga-schedule.jpg" 
            alt="Horario de clases de yoga en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Horarios flexibles adaptados a tu rutina diaria
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Horarios Diseñados para Ti
          </h2>
          <p className="text-lg mb-6">
            En Mandala entendemos que cada persona tiene diferentes compromisos y rutinas. Por eso, ofrecemos un <strong>horario de clases de yoga en Ourense</strong> amplio y variado, con sesiones desde primera hora de la mañana hasta la noche.
          </p>
          <p className="text-lg mb-6">
            Nuestro objetivo es que puedas integrar la práctica de yoga en tu vida cotidiana, independientemente de tus horarios laborales, familiares o académicos. Hemos diseñado nuestra programación pensando en la diversidad de nuestros alumnos.
          </p>
          <p className="text-lg mb-8">
            Además de nuestras clases regulares, ofrecemos talleres especiales y eventos durante los fines de semana, para que puedas profundizar en aspectos específicos del yoga cuando dispongas de más tiempo.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Reserva Tu Clase</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Horario Semanal de Clases
          </h2>
          
          {/* Google Calendar Integration */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-12">
            <GoogleCalendar 
              height="700px"
              title=""
              description=""
            />
          </div>
          
          <div className="bg-white shadow-md rounded-xl overflow-hidden mb-12">
            <div className="bg-brand-purple text-white p-4 text-center">
              <h3 className="text-xl font-medium">Horario de Lunes a Viernes</h3>
            </div>
            
            <div className="divide-y">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4 bg-brand-purple/10 font-medium">Horario</div>
                <div className="p-4 bg-brand-purple/10 font-medium">Clase</div>
                <div className="p-4 bg-brand-purple/10 font-medium hidden md:block">Nivel</div>
                <div className="p-4 bg-brand-purple/10 font-medium hidden md:block">Profesor/a</div>
              </div>
              
              {/* Clases de mañana */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4">7:30 - 8:30</div>
                <div className="p-4">Hatha Yoga Despertar</div>
                <div className="p-4 hidden md:block">Todos los niveles</div>
                <div className="p-4 hidden md:block">María</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x bg-gray-50">
                <div className="p-4">9:00 - 10:15</div>
                <div className="p-4">Hatha Yoga</div>
                <div className="p-4 hidden md:block">Intermedio</div>
                <div className="p-4 hidden md:block">Carlos</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4">10:30 - 11:45</div>
                <div className="p-4">Yoga para Mayores</div>
                <div className="p-4 hidden md:block">Principiantes</div>
                <div className="p-4 hidden md:block">Ana</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x bg-gray-50">
                <div className="p-4">12:00 - 13:00</div>
                <div className="p-4">Yoga Express</div>
                <div className="p-4 hidden md:block">Todos los niveles</div>
                <div className="p-4 hidden md:block">David</div>
              </div>
              
              {/* Clases de tarde */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4">14:15 - 15:15</div>
                <div className="p-4">Yoga Express</div>
                <div className="p-4 hidden md:block">Todos los niveles</div>
                <div className="p-4 hidden md:block">Laura</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x bg-gray-50">
                <div className="p-4">17:00 - 18:15</div>
                <div className="p-4">Yoga Prenatal</div>
                <div className="p-4 hidden md:block">Especializado</div>
                <div className="p-4 hidden md:block">Ana</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4">18:30 - 19:45</div>
                <div className="p-4">Daoyin Yoga</div>
                <div className="p-4 hidden md:block">Todos los niveles</div>
                <div className="p-4 hidden md:block">Carlos</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x bg-gray-50">
                <div className="p-4">20:00 - 21:15</div>
                <div className="p-4">Hatha Yoga</div>
                <div className="p-4 hidden md:block">Multinivel</div>
                <div className="p-4 hidden md:block">María</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4">21:30 - 22:30</div>
                <div className="p-4">Yoga Nidra</div>
                <div className="p-4 hidden md:block">Todos los niveles</div>
                <div className="p-4 hidden md:block">Laura</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-xl overflow-hidden mb-12">
            <div className="bg-brand-teal text-white p-4 text-center">
              <h3 className="text-xl font-medium">Horario de Sábados</h3>
            </div>
            
            <div className="divide-y">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4 bg-brand-teal/10 font-medium">Horario</div>
                <div className="p-4 bg-brand-teal/10 font-medium">Clase</div>
                <div className="p-4 bg-brand-teal/10 font-medium hidden md:block">Nivel</div>
                <div className="p-4 bg-brand-teal/10 font-medium hidden md:block">Profesor/a</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
                <div className="p-4">10:00 - 11:30</div>
                <div className="p-4">Hatha Yoga Intensivo</div>
                <div className="p-4 hidden md:block">Intermedio-Avanzado</div>
                <div className="p-4 hidden md:block">María</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x bg-gray-50">
                <div className="p-4">12:00 - 13:30</div>
                <div className="p-4">Yoga para Principiantes</div>
                <div className="p-4 hidden md:block">Principiantes</div>
                <div className="p-4 hidden md:block">David</div>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-purple">Información Importante sobre el Horario</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>El <strong>horario de clases de yoga en Ourense</strong> puede estar sujeto a cambios estacionales. Consulta siempre la versión más actualizada en nuestra recepción o web.</li>
              <li>Se recomienda llegar 10-15 minutos antes del inicio de la clase para prepararte adecuadamente.</li>
              <li>Las reservas pueden realizarse con hasta una semana de antelación, en persona, por teléfono o a través de nuestra web.</li>
              <li>En caso de no poder asistir a una clase reservada, por favor, cancela con al menos 2 horas de antelación.</li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Precios y Bonos</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Tipos de Clases en Nuestro Horario
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Hatha Yoga (Mañana, Tarde y Noche)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestras clases regulares de Hatha Yoga están disponibles en múltiples franjas horarias para adaptarse a tu agenda. Cada sesión incluye:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Calentamiento inicial</li>
                  <li>Secuencia principal de asanas (posturas)</li>
                  <li>Pranayama (ejercicios de respiración)</li>
                  <li>Relajación final</li>
                </ul>
                <p>Perfectas para cualquier nivel, nuestros profesores ofrecen adaptaciones para principiantes y variantes más desafiantes para practicantes avanzados.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Express (Mediodía)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Diseñadas especialmente para quienes disponen de poco tiempo pero no quieren renunciar a los beneficios del yoga, estas clases de 45-60 minutos son ideales para:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Profesionales que aprovechan su pausa para comer</li>
                  <li>Personas con agendas muy ocupadas</li>
                  <li>Quienes prefieren sesiones más cortas pero efectivas</li>
                </ul>
                <p>A pesar de su corta duración, estas clases incluyen una práctica completa que te dejará energizado y centrado para continuar tu día.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Nidra (Noche)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestras sesiones de Yoga Nidra o "yoga del sueño consciente" se programan estratégicamente en horario nocturno para:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Ayudarte a liberar la tensión acumulada durante el día</li>
                  <li>Preparar cuerpo y mente para un descanso reparador</li>
                  <li>Reducir el insomnio y mejorar la calidad del sueño</li>
                </ul>
                <p>Estas sesiones son especialmente recomendables para personas con altos niveles de estrés o dificultades para conciliar el sueño.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Clases Especializadas (Horarios Específicos)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestro <strong>horario de clases de yoga en Ourense</strong> incluye sesiones especializadas para necesidades específicas:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Yoga Prenatal:</strong> Horarios adaptados a futuras mamás, generalmente a media tarde</li>
                  <li><strong>Yoga para Mayores:</strong> Programado en horario de mañana, cuando hay mayor energía vital</li>
                  <li><strong>Daoyin Yoga:</strong> Ofrecido en horas estratégicas para aprovechar los ciclos energéticos</li>
                  <li><strong>Yoga para Principiantes:</strong> En horarios de fin de semana, con más tiempo para explicaciones y ajustes</li>
                </ul>
                <p>Consulta la disponibilidad de estas clases especiales, ya que algunas se ofrecen solo ciertos días de la semana.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Consejos para Elegir el Mejor Horario para Tu Práctica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/morning-yoga.jpg" 
                  alt="Yoga por la mañana en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Matutino</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Practicar yoga por la mañana te permite:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Despertar el cuerpo de forma natural</li>
                  <li>Activar tu metabolismo</li>
                  <li>Establecer una intención positiva para el día</li>
                  <li>Mejorar tu enfoque y concentración</li>
                </ul>
                <p className="mt-3">Ideal para: madrugadores, personas que buscan energía para el día, y quienes prefieren practicar con el estómago vacío.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/evening-yoga.jpg" 
                  alt="Yoga por la tarde en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Vespertino</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Las clases de tarde te permiten:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Desconectar del estrés laboral</li>
                  <li>Recuperar energía a mitad de jornada</li>
                  <li>Mayor flexibilidad corporal (el cuerpo está más "despierto")</li>
                  <li>Crear una transición entre el trabajo y el tiempo personal</li>
                </ul>
                <p className="mt-3">Ideal para: trabajadores de horario tradicional, estudiantes, y quienes sienten un bajón de energía por la tarde.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/night-yoga.jpg" 
                  alt="Yoga nocturno en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Nocturno</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Practicar yoga al final del día te ayuda a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Liberar tensiones acumuladas</li>
                  <li>Preparar el cuerpo para el descanso</li>
                  <li>Mejorar la calidad del sueño</li>
                  <li>Procesar y liberar el estrés diario</li>
                </ul>
                <p className="mt-3">Ideal para: personas con insomnio, trabajadores con horarios variables, y quienes buscan una transición suave hacia el descanso.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/weekend-yoga.jpg" 
                  alt="Yoga de fin de semana en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga de Fin de Semana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Las clases de sábado te ofrecen:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Más tiempo para una práctica profunda</li>
                  <li>Menor prisa y mayor atención a los detalles</li>
                  <li>Oportunidad para talleres especializados</li>
                  <li>Ambiente más relajado y social</li>
                </ul>
                <p className="mt-3">Ideal para: personas con semanas laborales ocupadas, quienes buscan profundizar en su práctica, y principiantes que necesitan más explicaciones.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Testimonios sobre Nuestros Horarios
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Las clases de yoga express a la hora de comer han sido un salvavidas para mí. Trabajo en el centro de Ourense y puedo escaparme 45 minutos para practicar. Vuelvo a la oficina renovada y con energía para afrontar la tarde."</p>
                <p className="font-medium">Marta F., empleada administrativa, 34 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como padre primerizo, mis horarios son caóticos. Lo que más aprecio de Mandala es su amplio horario de clases de yoga en Ourense, que me permite encontrar huecos para practicar incluso en mis días más complicados. Las clases de las 21:30 son perfectas cuando ya el niño está dormido."</p>
                <p className="font-medium">Alejandro R., ingeniero, 37 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Después de probar varios horarios, descubrí que las clases matutinas son las mejores para mí. La energía que siento al practicar yoga a las 7:30 de la mañana me acompaña durante todo el día. Agradezco muchísimo que Mandala ofrezca esta opción tan temprana para los madrugadores."</p>
                <p className="font-medium">Teresa L., médica, 42 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Horarios
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Puedo llegar tarde a una clase?</h3>
              <p>Por respeto a los demás practicantes y para mantener la energía de la sesión, permitimos un margen de 5 minutos de retraso. Pasado este tiempo, te recomendamos esperar a la siguiente clase disponible.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cómo puedo reservar mi plaza?</h3>
              <p>Puedes reservar tu clase a través de nuestra web, por teléfono o directamente en la recepción del centro. Te recomendamos reservar con antelación, especialmente para las clases más concurridas (tarde y fin de semana).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Hay horarios especiales en festivos?</h3>
              <p>Sí, en días festivos solemos ofrecer un horario reducido con clases especiales más largas. Estos horarios se anuncian con antelación en nuestra web y redes sociales.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Puedo cambiar de nivel o de tipo de clase?</h3>
              <p>Por supuesto. Nuestro <strong>horario de clases de yoga en Ourense</strong> está diseñado para ser flexible. Puedes probar diferentes estilos y horarios hasta encontrar lo que mejor se adapte a tus necesidades.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Qué pasa si no puedo asistir a una clase reservada?</h3>
              <p>Te pedimos que canceles tu reserva con al menos 2 horas de antelación. Las cancelaciones frecuentes sin previo aviso pueden afectar a tu posibilidad de reservar en el futuro.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Encuentra Tu Momento Ideal para Practicar
            </h2>
            <p className="text-lg text-center mb-8">
              Con nuestro amplio horario de clases de yoga en Ourense, seguro que encontrarás el momento perfecto para tu práctica. ¡Te esperamos!
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reservar Tu Primera Clase</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Precios y Bonos</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}