import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Escuela de Yoga en Ourense | Formación y Práctica | Mandala',
  description: 'Mandala: escuela de yoga en Ourense con formación completa, talleres especializados y práctica tradicional. Aprende con profesores experimentados en un ambiente auténtico.',
  keywords: 'escuela de yoga ourense, formación yoga ourense, talleres yoga ourense, aprender yoga ourense, cursos yoga ourense',
}

export default function EscuelaDeYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Escuela de Yoga Mandala Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Formación, crecimiento y práctica en la tradición del yoga
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/yoga-school.jpg" 
            alt="Escuela de yoga Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Aprende, practica y comparte en nuestra comunidad
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Mandala: Escuela de Yoga en Ourense
          </h2>
          <p className="text-lg mb-6">
            <strong>Mandala</strong> se ha consolidado como una <strong>escuela de yoga de referencia en Ourense</strong>, ofreciendo un espacio donde no solo se practica yoga, sino que también se aprende, se estudia y se vive esta disciplina milenaria en toda su profundidad.
          </p>
          <p className="text-lg mb-6">
            Nuestra <strong>escuela de yoga</strong> combina la sabiduría tradicional con un enfoque contemporáneo, permitiendo a nuestros alumnos desarrollar una práctica sólida y un conocimiento profundo de los principios del yoga, adaptados al contexto actual y las necesidades de la vida moderna.
          </p>
          <p className="text-lg mb-8">
            Ya sea que estés dando tus primeros pasos en el camino del yoga, busques profundizar en tu práctica personal, o te estés formando como profesor, en Mandala encontrarás el entorno ideal para crecer y evolucionar.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestra Oferta Formativa
          </h2>
          
          <div className="space-y-10">
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/ytt-training.jpg" 
                    alt="Formación de profesores de yoga en Ourense" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-medium mb-3 text-brand-purple">Formación de Profesores de Yoga 200h</h3>
                  <p className="mb-4">Nuestro programa de formación de profesores está certificado internacionalmente y proporciona una base sólida para aquellos que desean enseñar yoga o profundizar significativamente en su práctica personal.</p>
                  <p className="mb-4">El programa incluye:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Técnicas y práctica de asanas (posturas)</li>
                    <li>Anatomía y fisiología aplicadas al yoga</li>
                    <li>Filosofía y textos clásicos del yoga</li>
                    <li>Metodología de enseñanza y práctica docente</li>
                    <li>Pranayama y técnicas de meditación</li>
                  </ul>
                  <Button asChild className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                    <Link href="/contacto">Solicitar Información</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/workshops.jpg" 
                    alt="Talleres especializados de yoga en Ourense" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-medium mb-3 text-brand-purple">Talleres Especializados</h3>
                  <p className="mb-4">A lo largo del año organizamos talleres monográficos sobre aspectos específicos del yoga, impartidos tanto por nuestros profesores como por maestros invitados de reconocido prestigio.</p>
                  <p className="mb-4">Algunos de nuestros talleres más populares incluyen:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Ajustes y alineación en las asanas principales</li>
                    <li>Yoga para la espalda: prevención y terapia</li>
                    <li>Introducción a los mantras y el canto védico</li>
                    <li>Pranayama avanzado: técnicas de respiración yóguica</li>
                    <li>Los chakras: teoría y práctica</li>
                  </ul>
                  <Button asChild className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                    <Link href="/contacto">Ver Próximos Talleres</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/intensive-course.jpg" 
                    alt="Cursos intensivos de yoga en Ourense" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-medium mb-3 text-brand-purple">Cursos Intensivos</h3>
                  <p className="mb-4">Diseñados para quienes desean sumergirse en aspectos específicos del yoga durante un período concentrado, nuestros cursos intensivos ofrecen una oportunidad para transformar tu práctica.</p>
                  <p className="mb-4">Ofrecemos cursos en:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Yoga restaurativo y terapéutico (30h)</li>
                    <li>Meditación y mindfulness (20h)</li>
                    <li>Filosofía yóguica aplicada a la vida moderna (25h)</li>
                    <li>Anatomía sutil: nadis, chakras y cuerpo energético (15h)</li>
                  </ul>
                  <Button asChild className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                    <Link href="/contacto">Información y Reservas</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            ¿Por qué elegir nuestra Escuela de Yoga en Ourense?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/experienced-faculty.jpg" 
                  alt="Profesorado experimentado en la escuela de yoga de Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Profesorado Experimentado</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nuestro equipo docente combina una sólida formación académica, años de experiencia en la enseñanza y, lo más importante, una práctica personal comprometida. Cada uno aporta su especialidad y enfoque único, ofreciendo una visión completa del yoga.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/traditional-approach.jpg" 
                  alt="Enfoque tradicional en la escuela de yoga de Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Enfoque Tradicional con Visión Moderna</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Respetamos las raíces antiguas del yoga mientras lo hacemos relevante para el practicante de hoy. Nuestra enseñanza está fundamentada en textos clásicos como los Yoga Sutras, pero incorporamos conocimientos contemporáneos de anatomía, psicología y pedagogía.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/small-groups.jpg" 
                  alt="Grupos reducidos en la escuela de yoga de Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Grupos Reducidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Limitamos el número de participantes en nuestras formaciones y talleres para garantizar una atención personalizada. Esto permite un seguimiento detallado de cada alumno, adaptando la enseñanza a sus necesidades específicas y fomentando un aprendizaje más profundo.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/comprehensive-library.jpg" 
                  alt="Biblioteca especializada en la escuela de yoga de Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Recursos Completos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nuestra escuela cuenta con una biblioteca especializada en yoga y filosofía oriental, materiales didácticos de calidad, y un completo manual de formación desarrollado por nuestros profesores. Además, proporcionamos acceso a grabaciones de clases y material complementario online.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Certificaciones y Avales
          </h2>
          
          <div className="bg-brand-purple/5 p-8 rounded-xl mb-10">
            <p className="mb-6">Nuestra <strong>escuela de yoga en Ourense</strong> cuenta con reconocimientos que avalan la calidad de nuestra enseñanza:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Yoga Alliance Internacional</h3>
                <p>Nuestros programas de formación de profesores están registrados en Yoga Alliance, garantizando que cumplen con los estándares internacionales para la enseñanza del yoga.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Asociación Española de Yoga</h3>
                <p>Somos miembros activos de la Asociación Española de Yoga, participando en su red de escuelas de formación reconocidas a nivel nacional.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Formación Profesional</h3>
                <p>Nuestros cursos intensivos están homologados como formación profesional continua para profesionales de la salud, educación y deporte.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Colaboraciones Académicas</h3>
                <p>Colaboramos con la Universidad de Vigo en programas de extensión universitaria relacionados con el bienestar y las disciplinas orientales.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestra Metodología de Enseñanza
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Aprendizaje Experiencial</h3>
                <p>En nuestra <strong>escuela de yoga en Ourense</strong> creemos que el verdadero conocimiento del yoga surge de la experiencia directa. Por eso, nuestro enfoque combina el estudio teórico con una intensa práctica personal que permite integrar profundamente las enseñanzas.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Progresión Estructurada</h3>
                <p>Nuestros programas siguen una progresión lógica que permite construir conocimientos sobre bases sólidas. Cada módulo se desarrolla sobre lo aprendido anteriormente, facilitando una comprensión cada vez más profunda de las distintas facetas del yoga.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Enfoque Integral</h3>
                <p>No nos limitamos a la práctica física; abordamos todos los aspectos del yoga: postura (asana), respiración (pranayama), meditación (dhyana), ética (yama y niyama), concentración (dharana), estudio de textos clásicos y filosofía yóguica.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Mentoría Personalizada</h3>
                <p>Cada estudiante recibe asesoramiento individual a lo largo de su formación para abordar sus desafíos particulares, resolver dudas específicas y potenciar sus fortalezas. Este acompañamiento cercano es uno de los aspectos más valorados de nuestra escuela.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Evaluación Continua</h3>
                <p>Realizamos un seguimiento constante del progreso de cada alumno mediante prácticas supervisadas, trabajos escritos, enseñanza entre pares y autoevaluación reflexiva. El objetivo no es juzgar sino guiar el desarrollo personal y profesional.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Testimonios de Nuestros Estudiantes
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"La formación de profesores de yoga en Mandala transformó no solo mi práctica, sino mi vida entera. El profundo conocimiento de los profesores, combinado con su capacidad para transmitirlo de forma accesible, crea una experiencia de aprendizaje realmente única. Si buscas una escuela de yoga en Ourense donde aprender con rigor pero también con corazón, no hay mejor opción."</p>
                <p className="font-medium">Patricia L., Graduada del Programa de Formación 200h</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Después de asistir a varios talleres de fin de semana en diferentes centros, encontré en Mandala la profundidad que buscaba. Su enfoque no se queda en la superficie, sino que te invita a explorar todas las dimensiones del yoga. Lo que más valoro es el equilibrio entre respetar la tradición y hacerla relevante para nuestra vida cotidiana actual."</p>
                <p className="font-medium">Marcos R., Participante en cursos intensivos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como profesional de la salud, buscaba ampliar mis recursos terapéuticos con una formación seria en yoga. En la escuela Mandala encontré exactamente lo que necesitaba: rigor científico combinado con el profundo conocimiento de la tradición yóguica. Los cursos de especialización en yoga terapéutico han sido invaluables para mi práctica profesional."</p>
                <p className="font-medium">Cristina M., Fisioterapeuta</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Próximas Formaciones y Eventos
          </h2>
          
          <div className="space-y-6 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Formación de Profesores 200h - Edición 2025/2026</CardTitle>
                <CardDescription>Septiembre 2025 - Junio 2026 (fines de semana)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestro programa anual de formación de profesores, estructurado en 10 módulos de fin de semana a lo largo del curso académico. Ideal para personas que trabajan o estudian entre semana.</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Inversión:</span>
                  <span>2.200€ (posibilidad de pago fraccionado)</span>
                </div>
                <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                  <Link href="/contacto">Solicitar Información Detallada</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Curso Intensivo de Verano: Yoga Restaurativo</CardTitle>
                <CardDescription>15-30 Julio 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Formación especializada de 50 horas en yoga restaurativo y terapéutico. Aprenderás a diseñar secuencias para condiciones específicas y a utilizar props para facilitar la relajación profunda.</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Inversión:</span>
                  <span>650€ (incluye manual y materiales)</span>
                </div>
                <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                  <Link href="/contacto">Reservar Plaza</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Taller de Meditación y Mantras</CardTitle>
                <CardDescription>26-27 Abril 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Un fin de semana para sumergirse en prácticas meditativas y el poder transformador del sonido. Incluye técnicas de meditación, canto de mantras y teoría sobre sus beneficios.</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Inversión:</span>
                  <span>180€ (incluye material didáctico)</span>
                </div>
                <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                  <Link href="/contacto">Inscribirme</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-brand-teal/10 p-6 rounded-lg border border-brand-teal/20 text-center">
            <p className="mb-4">¿Te interesa estar al tanto de todas nuestras formaciones y eventos?</p>
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Suscribirme al Boletín</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Nuestra Escuela
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Necesito experiencia previa para hacer la formación de profesores?</h3>
              <p>Recomendamos al menos un año de práctica regular de yoga antes de iniciar la formación de profesores. Sin embargo, valoramos cada caso individualmente y podemos aconsejar preparación específica si es necesario.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Las certificaciones son válidas internacionalmente?</h3>
              <p>Sí, nuestra formación de profesores 200h está certificada por Yoga Alliance Internacional, lo que te permite enseñar en cualquier parte del mundo. Además, contamos con el aval de la Asociación Española de Yoga.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Qué sucede si no puedo asistir a algún módulo de la formación?</h3>
              <p>Ofrecemos opciones para recuperar contenidos perdidos, como tutorías individuales, material adicional o la posibilidad de cursar ese módulo en la siguiente promoción sin coste adicional.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Ofrecéis formación online o semipresencial?</h3>
              <p>Actualmente nuestra formación principal es presencial, ya que creemos en el valor del contacto directo para transmitir ciertas enseñanzas. Sin embargo, complementamos con material online y tenemos algunos cursos específicos en formato semipresencial.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Hay opciones de financiación para la formación?</h3>
              <p>Sí, ofrecemos planes de pago fraccionado sin intereses para la formación de profesores. También disponemos de un número limitado de becas parciales para estudiantes con dificultades económicas que demuestren un compromiso serio con la práctica.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
              ¿Listo para Profundizar en tu Camino del Yoga?
            </h2>
            <p className="text-lg text-center mb-8">
              Te invitamos a contactar con nuestra escuela de yoga en Ourense para recibir información detallada sobre nuestros programas formativos, resolver tus dudas o concertar una entrevista personal con nuestro equipo docente.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                <Link href="/contacto">Solicitar Información</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                <Link href="/about">Conocer Nuestra Filosofía</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}