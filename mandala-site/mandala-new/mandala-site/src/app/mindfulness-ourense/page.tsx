import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Mindfulness Ourense | Mandala | Atención Plena para el Día a Día',
  description: 'Programas de mindfulness en Ourense con instructores certificados. Aprende atención plena para reducir estrés, ansiedad y vivir con mayor consciencia en el presente.',
  keywords: 'mindfulness ourense, atención plena ourense, mbsr ourense, reducción de estrés ourense, cursos mindfulness mandala',
}

export default function MindfulnessOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Mindfulness en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Cultiva la atención plena para vivir con mayor consciencia y bienestar
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/mindfulness-center.jpg" 
            alt="Centro de mindfulness Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Aprende a vivir en el presente, con calma y claridad mental
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            ¿Qué es Mindfulness?
          </h2>
          <p className="text-lg mb-6">
            Mindfulness o atención plena es la capacidad de prestar atención al momento presente de forma intencional, sin juicios y con una actitud de amabilidad y curiosidad. Esta práctica, con raíces en tradiciones contemplativas milenarias y validada por la ciencia moderna, se ha convertido en una herramienta fundamental para el bienestar en el mundo contemporáneo.
          </p>
          <p className="text-lg mb-6">
            En Centro Mandala, ofrecemos programas de <strong>mindfulness en Ourense</strong> diseñados para ayudarte a cultivar esta cualidad mental en tu vida cotidiana. Aprendiendo a estar presente, puedes transformar tu relación con el estrés, las emociones difíciles y los desafíos diarios.
          </p>
          <p className="text-lg mb-8">
            Nuestro enfoque combina el rigor de programas basados en evidencia científica con la calidez y adaptabilidad necesarias para integrar estas prácticas en la vida moderna occidental. Las técnicas de <strong>mindfulness en Ourense</strong> que enseñamos son completamente seculares y accesibles para personas de cualquier edad, creencia o condición física.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Descubre Nuestros Programas</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Programas de Mindfulness que Ofrecemos
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/mbsr-program.jpg" 
                    alt="Programa MBSR de mindfulness en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">MBSR: Reducción de Estrés Basada en Mindfulness</h3>
                  <p className="mb-4">El programa más reconocido y estudiado de <strong>mindfulness en Ourense</strong>, desarrollado por Jon Kabat-Zinn en la Universidad de Massachusetts:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>8 semanas de duración, sesiones semanales de 2.5 horas</li>
                    <li>Día de práctica intensiva (6 horas)</li>
                    <li>Prácticas formales: meditación sentada, body scan, yoga consciente</li>
                    <li>Prácticas informales para integrar la atención plena en la vida diaria</li>
                    <li>Más de 40 años de investigación científica respaldando su eficacia</li>
                    <li>Especialmente efectivo para estrés, ansiedad y prevención de recaídas en depresión</li>
                  </ul>
                  <p className="font-medium mb-2">Próxima edición:</p>
                  <p>Inicio: 15 de septiembre | Horario: Miércoles de 18:30 a 21:00</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/intro-mindfulness.jpg" 
                    alt="Iniciación al mindfulness en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Curso de Iniciación al Mindfulness</h3>
                  <p className="mb-4">Una introducción accesible y práctica para quienes desean dar sus primeros pasos en la atención plena:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>6 semanas de duración, sesiones semanales de 90 minutos</li>
                    <li>Grupos reducidos (máximo 12 participantes)</li>
                    <li>Introducción gradual a las prácticas fundamentales</li>
                    <li>Material didáctico y audios para práctica en casa</li>
                    <li>Énfasis en la aplicación práctica a situaciones cotidianas</li>
                    <li>No requiere experiencia previa en meditación</li>
                  </ul>
                  <p className="font-medium mb-2">Próxima edición:</p>
                  <p>Inicio: 10 de septiembre | Horario: Lunes de 19:00 a 20:30</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/mindful-self-compassion.jpg" 
                    alt="Mindfulness y autocompasión en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">MSC: Mindfulness y Autocompasión</h3>
                  <p className="mb-4">Un programa desarrollado por Kristin Neff y Christopher Germer que combina la atención plena con la autocompasión:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>8 semanas de duración, sesiones semanales de 2.5 horas</li>
                    <li>Medio día de retiro en silencio</li>
                    <li>Aprende a tratarte a ti mismo con la misma amabilidad que tratarías a un buen amigo</li>
                    <li>Especialmente beneficioso para personas con autocrítica excesiva</li>
                    <li>Herramientas para gestionar emociones difíciles con mayor equilibrio</li>
                    <li>Se recomienda experiencia previa en meditación, aunque no es imprescindible</li>
                  </ul>
                  <p className="font-medium mb-2">Próxima edición:</p>
                  <p>Inicio: 5 de octubre | Horario: Jueves de 18:00 a 20:30</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/corporate-mindfulness.jpg" 
                    alt="Mindfulness corporativo en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Mindfulness para Empresas</h3>
                  <p className="mb-4">Programas adaptados al entorno laboral para mejorar bienestar, productividad y clima organizacional:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Formato flexible: talleres puntuales o programas de 4 a 8 semanas</li>
                    <li>Sesiones adaptadas al horario y necesidades de la empresa</li>
                    <li>Enfoque práctico orientado a resultados medibles</li>
                    <li>Herramientas específicas para gestión del estrés laboral</li>
                    <li>Mejora de la comunicación y trabajo en equipo</li>
                    <li>Posibilidad de evaluación pre/post para medir impacto</li>
                  </ul>
                  <p className="font-medium mb-2">Información:</p>
                  <p>Programas personalizados | Solicita una reunión sin compromiso</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Sesiones Regulares de Práctica</h3>
            <p className="text-center mb-6">Además de nuestros programas estructurados, ofrecemos sesiones regulares para mantener y profundizar tu práctica de <strong>mindfulness en Ourense</strong>:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Sangha de Mindfulness</h4>
                <p className="mb-2">Grupo de práctica semanal para antiguos alumnos y practicantes experimentados.</p>
                <p className="text-sm text-muted-foreground">Martes de 20:00 a 21:15 | Aportación voluntaria</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Meditación Matutina</h4>
                <p className="mb-2">Sesiones cortas de 30 minutos para empezar el día con claridad y presencia.</p>
                <p className="text-sm text-muted-foreground">Lunes, miércoles y viernes de 8:00 a 8:30 | 5€ por sesión</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Meditación de Luna Llena</h4>
                <p className="mb-2">Sesión especial mensual en las noches de luna llena, con prácticas y reflexiones específicas.</p>
                <p className="text-sm text-muted-foreground">Día variable | 15€ por sesión</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Mindfulness en la Naturaleza</h4>
                <p className="mb-2">Salidas mensuales para practicar atención plena en entornos naturales cercanos a Ourense.</p>
                <p className="text-sm text-muted-foreground">Primer domingo de cada mes | 25€ por sesión (incluye transporte)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Aplicaciones del Mindfulness
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Mindfulness para la Salud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">La atención plena tiene aplicaciones terapéuticas comprobadas para diversas condiciones:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción de estrés crónico</p>
                      <p className="text-sm text-muted-foreground">Disminución de cortisol y activación del sistema nervioso parasimpático</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Manejo de ansiedad y depresión</p>
                      <p className="text-sm text-muted-foreground">Cambios en patrones de pensamiento negativo y rumiación</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Alivio del dolor crónico</p>
                      <p className="text-sm text-muted-foreground">Modificación de la percepción del dolor y reducción del sufrimiento asociado</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejora del sueño</p>
                      <p className="text-sm text-muted-foreground">Reducción del insomnio y mejor calidad de descanso</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Mindfulness en el Trabajo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">La práctica de la atención plena transforma la experiencia laboral:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mayor concentración y enfoque</p>
                      <p className="text-sm text-muted-foreground">Menos multitarea ineficiente y mayor productividad sostenible</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejor toma de decisiones</p>
                      <p className="text-sm text-muted-foreground">Reducción de sesgos cognitivos y mayor claridad en situaciones complejas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Resolución efectiva de conflictos</p>
                      <p className="text-sm text-muted-foreground">Comunicación más empática y menos reactiva</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Prevención del burnout</p>
                      <p className="text-sm text-muted-foreground">Mayor capacidad para establecer límites saludables</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Mindfulness en Relaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">La atención plena mejora significativamente nuestras conexiones interpersonales:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Escucha atenta</p>
                      <p className="text-sm text-muted-foreground">Capacidad de estar verdaderamente presentes para los demás</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Comunicación compasiva</p>
                      <p className="text-sm text-muted-foreground">Habilidad para expresarse con autenticidad y amabilidad</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Gestión de conflictos</p>
                      <p className="text-sm text-muted-foreground">Respuesta reflexiva en lugar de reacción automática</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Empatía y conexión</p>
                      <p className="text-sm text-muted-foreground">Mayor capacidad para comprender perspectivas diferentes</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Mindfulness en la Vida Cotidiana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">La práctica informal integra la atención plena en actividades diarias:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Alimentación consciente</p>
                      <p className="text-sm text-muted-foreground">Disfrute pleno de la experiencia de comer y mejor digestión</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Movimiento atento</p>
                      <p className="text-sm text-muted-foreground">Caminar, ejercitarse o realizar tareas domésticas con plena atención</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Pausa consciente</p>
                      <p className="text-sm text-muted-foreground">Momentos breves de atención plena a lo largo del día</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Uso consciente de tecnología</p>
                      <p className="text-sm text-muted-foreground">Relación más balanceada con dispositivos digitales</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios de la Práctica Regular
          </h2>
          
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden mb-10">
            <Image 
              src="/images/mindfulness-benefits.jpg" 
              alt="Beneficios del mindfulness en Ourense" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-xl">
                "El mindfulness no cambia lo que ocurre, pero transforma nuestra forma de relacionarnos con ello"
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">A Corto Plazo</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reducción inmediata de los niveles de estrés</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mayor claridad mental y concentración</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mejora en la calidad del sueño</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Disminución de la reactividad emocional</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mayor capacidad para disfrutar del momento presente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">A Medio Plazo</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reducción significativa de síntomas de ansiedad y depresión</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mejora en relaciones interpersonales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mayor autoconocimiento y autocompasión</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Herramientas efectivas para gestionar situaciones desafiantes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mayor resistencia ante situaciones de estrés</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">A Largo Plazo</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cambios estructurales positivos en el cerebro</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fortalecimiento del sistema inmunológico</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mayor sabiduría emocional y ecuanimidad</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ralentización del envejecimiento cognitivo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transformación profunda en la relación con uno mismo y el mundo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Evidencia Científica</h3>
            <p className="mb-4">Los beneficios del <strong>mindfulness en Ourense</strong> y en todo el mundo están respaldados por una sólida investigación científica. Algunas de las instituciones que han validado estas prácticas incluyen:</p>
            <ul className="list-disc pl-5 space-y-2 md:columns-2">
              <li>Universidad de Massachusetts Medical School</li>
              <li>Oxford Mindfulness Centre</li>
              <li>Center for Healthy Minds (Universidad de Wisconsin)</li>
              <li>Harvard Medical School</li>
              <li>University College London</li>
              <li>Stanford University</li>
              <li>National Institutes of Health (NIH)</li>
              <li>Max Planck Institute</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestros Instructores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/mindfulness-teacher1.jpg" 
                    alt="Instructor de mindfulness David Sánchez" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">David Sánchez</h3>
                <p className="text-muted-foreground mb-4">Instructor Certificado MBSR</p>
                <p className="text-center mb-4">Psicólogo y profesor de mindfulness con más de 12 años de experiencia. Formado en el Center for Mindfulness de la Universidad de Massachusetts y en el Instituto esMindfulness de Barcelona. Ha guiado a más de 800 personas en programas de MBSR y mindfulness aplicado.</p>
                <p className="text-center text-sm text-muted-foreground">Certificaciones: Instructor MBSR, MSC, Mindfulness en Contextos Clínicos</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/mindfulness-teacher2.jpg" 
                    alt="Instructora de mindfulness Laura Martínez" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Laura Martínez</h3>
                <p className="text-muted-foreground mb-4">Especialista en Mindfulness y Autocompasión</p>
                <p className="text-center mb-4">Especializada en el programa MSC (Mindful Self-Compassion) y en aplicaciones de mindfulness para el ámbito educativo. Combina su trabajo como instructora con la investigación académica sobre los efectos del mindfulness en el bienestar psicológico.</p>
                <p className="text-center text-sm text-muted-foreground">Certificaciones: Instructora MSC, Mindfulness en Educación, MBCT</p>
              </div>
            </Card>
          </div>
          
          <p className="text-center text-lg mb-8">
            Todos nuestros instructores mantienen una práctica personal diaria de mindfulness, participan regularmente en retiros y siguen formándose continuamente para ofrecerte la mejor experiencia de <strong>mindfulness en Ourense</strong>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Testimonios de Participantes
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"El programa MBSR ha sido una auténtica revelación para mí. Llegué buscando herramientas para gestionar el estrés laboral que me estaba pasando factura, y me llevé mucho más: una forma completamente nueva de relacionarme con mis pensamientos y emociones. Las técnicas que aprendí me han permitido estar presente incluso en situaciones difíciles y, curiosamente, eso ha hecho que todo sea más llevadero."</p>
                <p className="font-medium">Marta L., 42 años, directiva de empresa</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Siempre fui escéptico con estas prácticas, pero tras una recomendación médica decidí probar el curso de iniciación al mindfulness. Ha sido sorprendente descubrir que no se trata de filosofía abstracta sino de técnicas prácticas con efectos muy concretos. Mi presión arterial ha mejorado, duermo mejor y, lo más importante, disfruto más de los pequeños momentos de cada día. El enfoque científico de David para explicar los procesos fue clave para mí."</p>
                <p className="font-medium">Roberto S., 58 años, ingeniero</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"El curso de Mindfulness y Autocompasión cambió mi relación conmigo misma. Como perfeccionista, mi diálogo interno era extremadamente duro, algo que me pasaba factura emocional y físicamente. Aprender a tratarme con la misma amabilidad que ofrecería a un amigo ha sido transformador. Las prácticas son sencillas pero profundas, y Laura tiene un don especial para transmitir estos conceptos de forma accesible y cercana."</p>
                <p className="font-medium">Elena R., 35 años, profesora</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Recursos y Materiales
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Audios de Meditaciones Guiadas</h3>
              <p className="mb-4">Ponemos a tu disposición grabaciones de alta calidad para apoyar tu práctica diaria:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Meditación de atención a la respiración (10 min)</li>
                <li>Body scan para relajación profunda (20 min)</li>
                <li>Práctica de bondad amorosa (15 min)</li>
                <li>Meditación para la gestión de emociones difíciles (18 min)</li>
                <li>Práctica de atención abierta (15 min)</li>
              </ul>
              <p className="mt-4 text-sm">Disponibles para participantes de nuestros programas a través de nuestra área privada.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Biblioteca Especializada</h3>
              <p className="mb-4">Nuestra biblioteca cuenta con una selección de los mejores libros sobre mindfulness y prácticas contemplativas:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>"Mindfulness en la Vida Cotidiana" - Jon Kabat-Zinn</li>
                <li>"El Poder del Ahora" - Eckhart Tolle</li>
                <li>"Autocompasión" - Kristin Neff</li>
                <li>"Tú Eres Aquí" - Thich Nhat Hanh</li>
                <li>"La Trampa de la Felicidad" - Russ Harris</li>
              </ul>
              <p className="mt-4 text-sm">Servicio de préstamo gratuito para alumnos de Mandala.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Material Didáctico</h3>
              <p className="mb-4">Todos nuestros programas incluyen material didáctico de calidad:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Manual completo del programa con explicaciones detalladas</li>
                <li>Fichas de trabajo para integrar el aprendizaje</li>
                <li>Diario de práctica para seguimiento personal</li>
                <li>Infografías sobre los conceptos clave</li>
                <li>Referencias científicas actualizadas</li>
              </ul>
              <p className="mt-4 text-sm">Materiales disponibles en formato digital y físico.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Aplicación Móvil</h3>
              <p className="mb-4">Nuestra app exclusiva para alumnos facilita tu práctica diaria:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Temporizador de meditación con configuración personalizable</li>
                <li>Biblioteca de meditaciones guiadas por nuestros instructores</li>
                <li>Registro de práctica diaria con estadísticas</li>
                <li>Recordatorios personalizados</li>
                <li>Comunidad privada para compartir experiencias</li>
              </ul>
              <p className="mt-4 text-sm">Disponible para iOS y Android, acceso exclusivo para miembros.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Mindfulness
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿El mindfulness es una práctica religiosa?</h3>
              <p>No. Aunque el mindfulness tiene raíces en tradiciones contemplativas como el budismo, los programas que ofrecemos son completamente seculares y están basados en evidencia científica. Se enseñan como un entrenamiento mental y no requieren adoptar ninguna creencia religiosa o filosófica específica. Personas de todas las creencias (o ninguna) pueden beneficiarse igualmente de estas prácticas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Necesito experiencia previa en meditación?</h3>
              <p>No se requiere experiencia previa. Todos nuestros programas de <strong>mindfulness en Ourense</strong> están diseñados para ser accesibles a principiantes absolutos. Comenzamos desde lo más básico y vamos progresando gradualmente. Si ya tienes experiencia, igualmente te beneficiarás profundizando en tu práctica y descubriendo nuevos enfoques.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cuánto tiempo debo dedicar diariamente a la práctica?</h3>
              <p>En nuestros programas estructurados como el MBSR, recomendamos una práctica diaria de 30-45 minutos para obtener resultados óptimos. Sin embargo, incluso prácticas breves de 10-15 minutos diarios pueden generar beneficios significativos si se mantienen con constancia. Lo importante es la regularidad más que la duración. También enseñamos "prácticas informales" que pueden integrarse en actividades cotidianas sin tiempo adicional.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿El mindfulness puede ayudar con problemas de ansiedad o depresión?</h3>
              <p>Sí, existe amplia evidencia científica sobre los beneficios del mindfulness para la ansiedad y la depresión. Programas específicos como el MBCT (Terapia Cognitiva Basada en Mindfulness) fueron desarrollados precisamente para prevenir recaídas en depresión, mostrando una eficacia comparable a la medicación en algunos estudios. Sin embargo, es importante tener en cuenta que, si estás atravesando un episodio agudo, debes consultarlo previamente con tu profesional de salud mental.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Qué ocurre si no puedo "vaciar mi mente" durante la práctica?</h3>
              <p>¡Buenas noticias! No necesitas vaciar tu mente para practicar mindfulness correctamente. De hecho, el objetivo no es detener los pensamientos (algo prácticamente imposible), sino cambiar tu relación con ellos. En la práctica, aprendemos a observar los pensamientos sin identificarnos completamente con ellos, reconociéndolos como eventos mentales pasajeros. Darse cuenta de que la mente se ha distraído y volver amablemente al presente es parte esencial del entrenamiento.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Da el Primer Paso Hacia una Vida Más Consciente
            </h2>
            <p className="text-lg text-center mb-8">
              El mindfulness es una habilidad que puede cambiar profundamente tu experiencia de vida. En Mandala te ofrecemos la guía, el espacio y la comunidad para cultivar esta práctica transformadora.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Infórmate sin Compromiso</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Programas y Precios</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}