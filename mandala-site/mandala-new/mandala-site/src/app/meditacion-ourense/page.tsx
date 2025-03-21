import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Meditación Ourense | Mandala | Aprende a Meditar con Expertos',
  description: 'Centro especializado en meditación en Ourense. Aprende técnicas de mindfulness, meditación guiada y prácticas para la calma mental con instructores certificados.',
  keywords: 'meditación ourense, mindfulness ourense, clases meditación ourense, aprender a meditar ourense, centro meditación mandala',
}

export default function MeditacionOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Meditación en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Aprende a entrenar tu mente para una vida más consciente y plena
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/meditation-center.jpg" 
            alt="Centro de meditación Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Un espacio dedicado al cultivo de la atención y la paz interior
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Descubre el Poder de la Meditación
          </h2>
          <p className="text-lg mb-6">
            La meditación es una práctica milenaria que en los últimos años ha sido respaldada por numerosos estudios científicos, demostrando sus beneficios para la salud física y mental. En Mandala, ofrecemos un espacio dedicado a la <strong>meditación en Ourense</strong>, donde puedes aprender diferentes técnicas bajo la guía de instructores experimentados.
          </p>
          <p className="text-lg mb-6">
            Más allá de una simple herramienta de relajación, la meditación es un entrenamiento sistemático de la mente que te permite desarrollar cualidades como la atención sostenida, la ecuanimidad, la compasión y la claridad mental. Es un camino de autodescubrimiento que te ayuda a relacionarte de forma más consciente con tus pensamientos, emociones y el mundo que te rodea.
          </p>
          <p className="text-lg mb-8">
            Ya sea que busques reducir el estrés, mejorar tu concentración, gestionar mejor tus emociones o explorar dimensiones más profundas de tu ser, en nuestro centro de <strong>meditación en Ourense</strong> encontrarás el método y el acompañamiento adecuados para tu camino.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Reserva Tu Primera Clase</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Clases de Meditación
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/mindfulness-meditation.jpg" 
                    alt="Meditación mindfulness en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Mindfulness (Atención Plena)</h3>
                  <p className="mb-4">La práctica de mindfulness consiste en prestar atención de manera intencional al momento presente, sin juzgar:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Aprende a observar tus pensamientos y emociones sin identificarte con ellos</li>
                    <li>Desarrolla mayor consciencia de tus patrones mentales habituales</li>
                    <li>Cultiva una actitud de aceptación y amabilidad hacia tu experiencia</li>
                    <li>Perfecta para principiantes y personas con mente muy activa</li>
                    <li>Bases científicas sólidas con numerosos estudios que avalan sus beneficios</li>
                  </ul>
                  <p className="font-medium mb-2">Horarios:</p>
                  <p>Lunes y miércoles 19:00-20:00 | Viernes 10:00-11:00</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/vipassana-meditation.jpg" 
                    alt="Meditación Vipassana en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Vipassana (Visión Clara)</h3>
                  <p className="mb-4">Una de las técnicas de <strong>meditación en Ourense</strong> más antiguas, enfocada en el desarrollo de la introspección:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Observación sistemática de sensaciones físicas y fenómenos mentales</li>
                    <li>Desarrollo de comprensión profunda sobre la impermanencia</li>
                    <li>Cultivo de ecuanimidad ante las experiencias placenteras y displacenteras</li>
                    <li>Ideal para practicantes con cierta experiencia previa</li>
                    <li>Práctica tradicional budista adaptada a contexto contemporáneo</li>
                  </ul>
                  <p className="font-medium mb-2">Horarios:</p>
                  <p>Martes y jueves 20:15-21:30 | Sábados 9:00-10:30 (práctica extendida)</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/metta-meditation.jpg" 
                    alt="Meditación Metta en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Metta (Amor Incondicional)</h3>
                  <p className="mb-4">También conocida como meditación de amor bondadoso, centrada en cultivar cualidades positivas:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Desarrollo de bondad amorosa hacia uno mismo y los demás</li>
                    <li>Práctica sistemática para superar la negatividad y el resentimiento</li>
                    <li>Cultivo de estados mentales positivos: amabilidad, compasión, alegría</li>
                    <li>Especialmente beneficiosa para personas con autocrítica excesiva</li>
                    <li>Complemento ideal a prácticas de atención más neutras</li>
                  </ul>
                  <p className="font-medium mb-2">Horarios:</p>
                  <p>Lunes 20:15-21:15 | Viernes 18:00-19:00</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/yoga-nidra-meditation.jpg" 
                    alt="Yoga Nidra en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoga Nidra (Sueño Consciente)</h3>
                  <p className="mb-4">Una poderosa técnica de relajación meditativa realizada en posición tumbada:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Estado de consciencia entre la vigilia y el sueño</li>
                    <li>Relajación profunda mientras se mantiene la consciencia despierta</li>
                    <li>Acceso a niveles subconscientes de la mente</li>
                    <li>Excelente para personas con estrés, ansiedad o insomnio</li>
                    <li>No requiere postura sentada (se practica tumbado)</li>
                  </ul>
                  <p className="font-medium mb-2">Horarios:</p>
                  <p>Miércoles 21:00-22:00 | Domingos 19:00-20:00</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Sesiones Especiales</h3>
            <p className="text-center mb-6">Además de nuestras clases regulares, ofrecemos estas sesiones especiales de <strong>meditación en Ourense</strong>:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Meditación del Amanecer</h4>
                <p className="mb-2">Sesiones matutinas para empezar el día con claridad y enfoque.</p>
                <p className="text-sm text-muted-foreground">Martes y jueves 7:00-7:45</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Meditación en Silencio</h4>
                <p className="mb-2">Práctica no guiada para meditadores con experiencia.</p>
                <p className="text-sm text-muted-foreground">Sábados 18:00-19:00</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Meditación y Movimiento</h4>
                <p className="mb-2">Combinación de meditación en movimiento y quietud.</p>
                <p className="text-sm text-muted-foreground">Domingos 11:00-12:30</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Círculo de Meditación</h4>
                <p className="mb-2">Práctica compartida seguida de diálogo y reflexión.</p>
                <p className="text-sm text-muted-foreground">Último viernes del mes 19:30-21:00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios Científicamente Probados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Para el Cerebro</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Aumento de materia gris</p>
                      <p className="text-sm text-muted-foreground">Mejora en áreas relacionadas con aprendizaje y memoria</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mayor conectividad neuronal</p>
                      <p className="text-sm text-muted-foreground">Mejor comunicación entre diferentes regiones cerebrales</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Cambios positivos en ondas cerebrales</p>
                      <p className="text-sm text-muted-foreground">Incremento de ondas alfa y theta, asociadas a la relajación</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción del desgaste cerebral</p>
                      <p className="text-sm text-muted-foreground">Enlentecimiento del envejecimiento cognitivo</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Para la Salud Mental</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción de ansiedad</p>
                      <p className="text-sm text-muted-foreground">Disminución de la actividad en la amígdala cerebral</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Prevención de recaídas en depresión</p>
                      <p className="text-sm text-muted-foreground">Tan efectiva como la medicación en algunos estudios</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mayor resiliencia emocional</p>
                      <p className="text-sm text-muted-foreground">Mejor recuperación tras eventos estresantes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción de síntomas de TEPT</p>
                      <p className="text-sm text-muted-foreground">Ayuda en el procesamiento de experiencias traumáticas</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Para el Cuerpo</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción de la inflamación</p>
                      <p className="text-sm text-muted-foreground">Disminución de marcadores inflamatorios en sangre</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejora del sistema inmunológico</p>
                      <p className="text-sm text-muted-foreground">Mayor actividad de células NK y producción de anticuerpos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Normalización de la presión arterial</p>
                      <p className="text-sm text-muted-foreground">Efectos similares a algunos medicamentos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción del dolor crónico</p>
                      <p className="text-sm text-muted-foreground">Cambios en la percepción del dolor y su procesamiento</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Para la Vida Diaria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejora de relaciones interpersonales</p>
                      <p className="text-sm text-muted-foreground">Mayor empatía y comunicación consciente</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Aumento de productividad</p>
                      <p className="text-sm text-muted-foreground">Mayor concentración y menos multitarea ineficiente</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejores decisiones</p>
                      <p className="text-sm text-muted-foreground">Reducción de sesgos cognitivos y reactividad</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mayor satisfacción vital</p>
                      <p className="text-sm text-muted-foreground">Capacidad de disfrutar el presente sin rumiar pasado o futuro</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Programas Especiales de Meditación
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">Curso de Iniciación a la Meditación</h3>
                <p className="mb-4">Perfecto para quienes se acercan por primera vez a la <strong>meditación en Ourense</strong>:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>8 semanas de duración (una sesión semanal de 90 minutos)</li>
                  <li>Introducción gradual a diferentes técnicas meditativas</li>
                  <li>Material didáctico y grabaciones para práctica en casa</li>
                  <li>Grupos reducidos (máximo 10 personas)</li>
                  <li>Incluye seguimiento personalizado</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>160€ curso completo (materiales incluidos)</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">MBSR: Reducción de Estrés Basada en Mindfulness</h3>
                <p className="mb-4">Programa científicamente validado para la gestión del estrés y la ansiedad:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>8 semanas de duración (sesiones semanales de 2.5 horas)</li>
                  <li>Día intensivo de práctica (6 horas)</li>
                  <li>Combinación de meditaciones formales y prácticas informales</li>
                  <li>Manual completo y audios de meditaciones guiadas</li>
                  <li>Impartido por instructor certificado en MBSR</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>320€ programa completo (consulta descuentos disponibles)</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">Retiros de Silencio</h3>
                <p className="mb-4">Experiencias intensivas para profundizar en tu práctica meditativa:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Retiros de fin de semana (de viernes tarde a domingo tarde)</li>
                  <li>Práctica en silencio con meditaciones guiadas y periodos de práctica libre</li>
                  <li>Alimentación vegetariana incluida</li>
                  <li>Entorno natural a 30 minutos de Ourense</li>
                  <li>Adecuado para practicantes con experiencia previa</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>220€ retiro completo (alojamiento y comidas incluidas)</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">Mindfulness para Empresas</h3>
                <p className="mb-4">Programas a medida para mejorar el bienestar y rendimiento laboral:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Talleres formativos para equipos de trabajo</li>
                  <li>Sesiones cortas adaptadas al entorno corporativo</li>
                  <li>Reducción del estrés laboral y prevención del burnout</li>
                  <li>Mejora de la concentración y la comunicación entre compañeros</li>
                  <li>Impartido en sus instalaciones o en nuestro centro</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>Presupuesto personalizado según necesidades</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/contacto">Solicitar más Información</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestro Equipo de Meditación
          </h2>
          
          <p className="text-lg mb-8">
            En Mandala contamos con instructores experimentados, con sólida formación y práctica personal, para guiar tu camino en la <strong>meditación en Ourense</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/meditation-teacher1.jpg" 
                    alt="Profesor de meditación Miguel Torres" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Miguel Torres</h3>
                <p className="text-muted-foreground mb-4">Director de Meditación</p>
                <p className="text-center mb-4">Formado en la tradición budista Theravada, con más de 15 años de práctica y múltiples retiros de larga duración. Certificado en MBSR y especialista en mindfulness aplicado.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/meditation-teacher2.jpg" 
                    alt="Profesora de meditación Laura Fernández" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Laura Fernández</h3>
                <p className="text-muted-foreground mb-4">Especialista en Yoga Nidra</p>
                <p className="text-center mb-4">Experta en meditaciones guiadas y estados profundos de consciencia. Formada en la India y con más de 10 años impartiendo Yoga Nidra y técnicas de relajación consciente.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/meditation-teacher3.jpg" 
                    alt="Profesor de meditación David Sánchez" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">David Sánchez</h3>
                <p className="text-muted-foreground mb-4">Instructor de Mindfulness</p>
                <p className="text-center mb-4">Psicólogo y profesor certificado de MBSR y MBCT, especializado en aplicaciones clínicas de mindfulness para ansiedad y depresión. Formado en el Center for Mindfulness de Massachusetts.</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Experiencias de Nuestros Alumnos
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Siempre pensé que meditar no era para mí porque no podía callar mi mente. En Mandala entendí que no se trata de eso, sino de relacionarme de otra forma con mis pensamientos. El curso de iniciación a la meditación transformó mi forma de gestionar el estrés. Ahora, tres años después, no puedo imaginar mi vida sin esta práctica diaria."</p>
                <p className="font-medium">Ana P., 38 años, abogada</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Llegué a la meditación buscando alivio para mis problemas de ansiedad. El programa MBSR no solo me dio herramientas para gestionar los ataques de pánico, sino que me enseñó a vivir de una forma más plena y consciente. Miguel es un guía excepcional que combina conocimiento profundo con una gran capacidad para transmitir estas enseñanzas de forma accesible."</p>
                <p className="font-medium">Roberto L., 45 años, profesor universitario</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Las sesiones de Yoga Nidra con Laura han sido revolucionarias para mi insomnio crónico. Por primera vez en años puedo descansar profundamente y despertar renovada. Además, he notado una mejora significativa en mi capacidad de concentración y en la gestión de situaciones estresantes en el trabajo. La mejor inversión en salud mental que he hecho nunca."</p>
                <p className="font-medium">Elena M., 41 años, directiva</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Meditación
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Necesito tener experiencia previa para empezar a meditar?</h3>
              <p>No, en absoluto. Nuestras clases de iniciación están diseñadas específicamente para principiantes. Comenzamos con técnicas muy accesibles y vamos progresando gradualmente. La <strong>meditación en Ourense</strong> es una habilidad que se desarrolla con la práctica, como cualquier otra, y todos partimos desde cero en algún momento.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Es necesario sentarse en postura de loto para meditar correctamente?</h3>
              <p>No es necesario en absoluto. La postura ideal es aquella en la que puedas permanecer cómodamente alerta sin tensión excesiva. Puedes meditar sentado en una silla con la espalda recta, en un banco de meditación o incluso tumbado (para ciertas prácticas como Yoga Nidra). Lo importante es la actitud mental, no la posición física específica.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cuánto tiempo debo meditar cada día para notar beneficios?</h3>
              <p>Los estudios científicos han mostrado beneficios incluso con prácticas diarias de 10 minutos. Para principiantes, recomendamos empezar con sesiones de 5-10 minutos e ir aumentando gradualmente. La constancia es más importante que la duración: es mejor meditar 10 minutos todos los días que una hora solo los domingos. Con práctica regular, la mayoría de nuestros alumnos reportan beneficios notables en 4-6 semanas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿La meditación tiene alguna contradicción con mis creencias religiosas?</h3>
              <p>La meditación que enseñamos es una práctica laica centrada en el desarrollo de cualidades mentales como la atención y la calma. Aunque algunas técnicas tienen origen en tradiciones como el budismo, se presentan sin elementos religiosos, como un entrenamiento mental basado en la evidencia científica. Personas de todas las creencias (o ninguna) pueden beneficiarse de estas prácticas sin conflicto con sus convicciones personales.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Qué ocurre si no puedo "vaciar mi mente" durante la meditación?</h3>
              <p>Este es uno de los mayores malentendidos sobre la meditación. El objetivo no es vaciar la mente o detener los pensamientos, algo prácticamente imposible. La práctica consiste en observar la actividad mental sin identificarse completamente con ella, desarrollando una relación diferente con nuestros pensamientos. De hecho, darse cuenta de que la mente se ha distraído y volver amablemente a la atención es el núcleo mismo del entrenamiento.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Inicia Tu Camino de Consciencia
            </h2>
            <p className="text-lg text-center mb-8">
              La meditación es un viaje de autodescubrimiento que puede transformar profundamente tu relación contigo mismo y con el mundo. En Mandala te ofrecemos el espacio, la guía y el apoyo para emprender este camino.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reserva Tu Clase de Prueba</Link>
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