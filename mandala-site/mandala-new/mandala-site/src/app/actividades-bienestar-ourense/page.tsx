import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Actividades Bienestar Ourense | Mandala | Para Cuerpo y Mente',
  description: 'Descubre todas las actividades para el bienestar físico y mental en Ourense. Yoga, meditación, talleres, retiros y eventos especiales en Centro Mandala.',
  keywords: 'actividades bienestar ourense, eventos bienestar ourense, talleres yoga ourense, retiros bienestar ourense, cursos mindfulness ourense',
}

export default function ActividadesBienestarOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Actividades de Bienestar en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Cuida tu cuerpo, mente y espíritu con nuestra variada oferta de experiencias
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/wellness-activities.jpg" 
            alt="Actividades de bienestar en Centro Mandala Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Experiencias transformadoras para tu bienestar integral
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Nuestro Enfoque del Bienestar
          </h2>
          <p className="text-lg mb-6">
            En Mandala entendemos el bienestar como un concepto integral que abarca todas las dimensiones del ser humano. Por eso, ofrecemos una amplia variedad de <strong>actividades de bienestar en Ourense</strong> diseñadas para nutrir cuerpo, mente y espíritu.
          </p>
          <p className="text-lg mb-6">
            Nuestra programación combina prácticas milenarias como el yoga y la meditación con enfoques contemporáneos basados en la ciencia y la psicología moderna. Cada actividad ha sido cuidadosamente diseñada para proporcionarte herramientas prácticas que puedas aplicar en tu vida cotidiana.
          </p>
          <p className="text-lg mb-8">
            Ya sea que busques reducir el estrés, aumentar tu vitalidad, explorar tu mundo interior o simplemente disfrutar de un espacio para conectar contigo mismo y con otros, nuestras <strong>actividades de bienestar en Ourense</strong> te ofrecen un camino a medida.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Descubrir Actividades</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Actividades Regulares
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/yoga-classes-activities.jpg" 
                    alt="Clases de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Clases de Yoga</h3>
                  <p className="mb-4">Nuestra actividad insignia para el bienestar físico y mental:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Hatha Yoga:</strong> Equilibrio perfecto entre fuerza y flexibilidad</li>
                    <li><strong>Daoyin Yoga:</strong> Integración de principios de medicina china</li>
                    <li><strong>Yoga Restaurativo:</strong> Relajación profunda y recuperación</li>
                    <li><strong>Yoga para Embarazadas:</strong> Adaptado para el bienestar prenatal</li>
                    <li><strong>Yoga para Mayores:</strong> Enfocado en movilidad y equilibrio</li>
                  </ul>
                  <p className="mb-4"><strong>Horarios:</strong> Múltiples opciones de mañana, tarde y noche</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/hatha-yoga">Ver detalles de clases de yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/meditation-activities.jpg" 
                    alt="Meditación en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Meditación y Mindfulness</h3>
                  <p className="mb-4">Prácticas para calmar la mente y desarrollar la atención plena:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Meditación guiada:</strong> Diferentes técnicas para principiantes y avanzados</li>
                    <li><strong>Mindfulness:</strong> Desarrollo de la atención plena en la vida cotidiana</li>
                    <li><strong>Yoga Nidra:</strong> Meditación yóguica para la relajación profunda</li>
                    <li><strong>Meditación en silencio:</strong> Para practicantes con experiencia</li>
                    <li><strong>Círculos de meditación:</strong> Práctica grupal y compartir experiencias</li>
                  </ul>
                  <p className="mb-4"><strong>Horarios:</strong> Sesiones diarias en diferentes franjas horarias</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/meditacion-ourense">Explorar prácticas de meditación →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/therapy-sessions.jpg" 
                    alt="Terapias en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Terapias Individuales</h3>
                  <p className="mb-4">Sesiones personalizadas para necesidades específicas:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Yoga terapéutico:</strong> Adaptado a condiciones físicas particulares</li>
                    <li><strong>Constelaciones familiares:</strong> Para sanar patrones sistémicos</li>
                    <li><strong>Masaje terapéutico:</strong> Técnicas orientales y occidentales</li>
                    <li><strong>Reiki:</strong> Equilibrio energético y bienestar holístico</li>
                    <li><strong>Coaching de bienestar:</strong> Acompañamiento en objetivos personales</li>
                  </ul>
                  <p className="mb-4"><strong>Horarios:</strong> Con cita previa, flexibilidad de horarios</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/terapias">Descubrir nuestras terapias →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/spiritual-practices.jpg" 
                    alt="Prácticas espirituales en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Prácticas Conscientes</h3>
                  <p className="mb-4">Actividades para profundizar en tu desarrollo personal:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Círculos de mujeres:</strong> Espacio sagrado de conexión femenina</li>
                    <li><strong>Mantras y cantos:</strong> Uso de la voz como herramienta sanadora</li>
                    <li><strong>Danza consciente:</strong> Movimiento libre y expresión corporal</li>
                    <li><strong>Ceremonias de luna llena:</strong> Celebraciones mensuales con la naturaleza</li>
                    <li><strong>Prácticas de gratitud:</strong> Cultivo de actitudes positivas</li>
                  </ul>
                  <p className="mb-4"><strong>Horarios:</strong> Programación mensual variada</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/contacto">Consultar calendario mensual →</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Información Práctica</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Modalidades de Participación</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Clases sueltas</li>
                  <li>Bonos de 5 o 10 sesiones</li>
                  <li>Membresías mensuales</li>
                  <li>Descuentos para estudiantes y mayores</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Material Necesario</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ropa cómoda y transpirable</li>
                  <li>Material disponible en el centro</li>
                  <li>Posibilidad de traer tu propio equipo</li>
                  <li>Botella de agua recomendada</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Reservas</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reserva online a través de nuestra web</li>
                  <li>Por teléfono: 988 123 456</li>
                  <li>Presencialmente en recepción</li>
                  <li>Cancelación hasta 2h antes sin cargo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Talleres Especiales
          </h2>
          
          <p className="text-lg mb-8">
            Además de nuestras actividades regulares, organizamos talleres temáticos para profundizar en aspectos específicos del bienestar. Estos eventos especiales son una oportunidad única para explorar nuevas prácticas, ampliar conocimientos y conectar con comunidad afín.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/yoga-workshop.jpg" 
                  alt="Taller de yoga avanzado en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Taller de Posturas Avanzadas</CardTitle>
                <CardDescription>Sábado 15 de julio | 10:00-13:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Un taller intensivo para practicantes con experiencia que deseen profundizar en asanas de mayor complejidad:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Preparación física adecuada</li>
                  <li>Técnicas de progresión segura</li>
                  <li>Alineación correcta</li>
                  <li>Trabajo con el miedo y las limitaciones</li>
                </ul>
                <p className="text-sm text-muted-foreground">Impartido por Carlos Rodríguez | 35€</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/sound-bath.jpg" 
                  alt="Baño de sonido en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Baño de Sonido Terapéutico</CardTitle>
                <CardDescription>Viernes 28 de julio | 19:30-21:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Una experiencia inmersiva de relajación profunda a través de las vibraciones de cuencos tibetanos y gongs:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Limpieza energética</li>
                  <li>Reducción del estrés</li>
                  <li>Recalibración del sistema nervioso</li>
                  <li>Estados alterados de consciencia</li>
                </ul>
                <p className="text-sm text-muted-foreground">Facilitado por Laura Fernández | 25€</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/mindful-eating.jpg" 
                  alt="Alimentación consciente en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Alimentación Consciente</CardTitle>
                <CardDescription>Sábado 5 de agosto | 16:00-19:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Aprende a transformar tu relación con la comida a través de la atención plena:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Reconectar con las señales del cuerpo</li>
                  <li>Prácticas de mindfulness aplicadas</li>
                  <li>Liberación de patrones disfuncionales</li>
                  <li>Degustación consciente incluida</li>
                </ul>
                <p className="text-sm text-muted-foreground">Con Elena Martínez, nutricionista | 40€</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/family-constellation.jpg" 
                  alt="Constelaciones familiares en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Constelaciones Familiares</CardTitle>
                <CardDescription>Domingo 13 de agosto | 10:00-14:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Taller vivencial para explorar y sanar dinámicas sistémicas familiares:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Posibilidad de constelar tu caso</li>
                  <li>Aprendizaje como representante</li>
                  <li>Comprensión de patrones transgeneracionales</li>
                  <li>Grupo reducido (máx. 15 personas)</li>
                </ul>
                <p className="text-sm text-muted-foreground">Facilitado por Ana García | 60€ (45€ representantes)</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-brand-teal/10 p-8 rounded-lg border border-brand-teal/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-teal text-center">Próximos Talleres</h3>
            <p className="text-center mb-6">Mantente atento a estas <strong>actividades de bienestar en Ourense</strong> que organizaremos próximamente:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-teal">Yoga y Gestión Emocional</h4>
                <p className="mb-2">Herramientas yóguicas para procesar y transformar emociones difíciles.</p>
                <p className="text-sm text-muted-foreground">Septiembre 2023</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-teal">Introducción a la Meditación</h4>
                <p className="mb-2">Ciclo de 4 semanas para aprender las bases de la práctica meditativa.</p>
                <p className="text-sm text-muted-foreground">Octubre 2023</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-teal">Ayurveda para la Vida Diaria</h4>
                <p className="mb-2">Principios básicos de la medicina tradicional india para el equilibrio cotidiano.</p>
                <p className="text-sm text-muted-foreground">Noviembre 2023</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/contacto">Suscríbete al Boletín de Actividades</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Eventos y Retiros
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-[250px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/weekend-retreat.jpg" 
                    alt="Retiro de fin de semana cerca de Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="bg-brand-purple/10 text-brand-purple text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">Destacado</div>
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Retiro de Fin de Semana: "Reconexión con la Naturaleza"</h3>
                  <p className="text-muted-foreground mb-4">22-24 de septiembre | Sierra de San Mamede</p>
                  <p className="mb-4">Una inmersión de fin de semana para reconectar con tu esencia a través de prácticas de yoga, meditación y naturaleza:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Alojamiento en casa rural con entorno natural privilegiado</li>
                    <li>Prácticas diarias de yoga y meditación</li>
                    <li>Senderismo consciente y baños de bosque</li>
                    <li>Alimentación vegetariana ecológica</li>
                    <li>Círculos de compartir y fuego sagrado</li>
                    <li>Tiempo para introspección y descanso</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Inversión: 295€ (todo incluido)</p>
                    <Button asChild variant="outline" className="text-brand-purple border-brand-purple hover:bg-brand-purple/10">
                      <Link href="/contacto">Más Información</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-[250px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/solstice-celebration.jpg" 
                    alt="Celebración del solsticio en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Celebración del Solsticio de Invierno</h3>
                  <p className="text-muted-foreground mb-4">21 de diciembre | 19:00-22:00 | Centro Mandala</p>
                  <p className="mb-4">Una velada especial para honrar el cambio de estación y la luz interior en el día más corto del año:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Práctica especial de yoga con 108 saludos al sol</li>
                    <li>Meditación con velas y visualización guiada</li>
                    <li>Ritual de intenciones para el nuevo ciclo</li>
                    <li>Círculo de compartir y comunidad</li>
                    <li>Infusiones y tentempiés saludables</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Aportación: 25€</p>
                    <Button asChild variant="outline" className="text-brand-purple border-brand-purple hover:bg-brand-purple/10">
                      <Link href="/contacto">Reservar Plaza</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-[250px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/summer-intensive.jpg" 
                    alt="Intensivo de verano en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Intensivo de Verano: "21 Días de Transformación"</h3>
                  <p className="text-muted-foreground mb-4">1-21 de agosto | Horario flexible | Centro Mandala</p>
                  <p className="mb-4">Un programa intensivo para establecer nuevos hábitos de bienestar durante 21 días consecutivos:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Acceso ilimitado a todas las clases regulares durante 21 días</li>
                    <li>Seguimiento personalizado de tu práctica</li>
                    <li>3 talleres especiales exclusivos para participantes</li>
                    <li>Material didáctico y diario de práctica</li>
                    <li>Comunidad de apoyo y grupo de WhatsApp</li>
                    <li>Celebración final con certificado de participación</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Inversión: 150€ (valorado en 300€)</p>
                    <Button asChild variant="outline" className="text-brand-purple border-brand-purple hover:bg-brand-purple/10">
                      <Link href="/contacto">Inscribirme</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-purple">Planifica con Antelación</h3>
            <p className="mb-4">Algunos de nuestros eventos especiales y retiros para los próximos meses:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Octubre 2023:</strong> Retiro de Yoga y Senderismo en la Ribeira Sacra (3 días)</li>
              <li><strong>Noviembre 2023:</strong> Día de Mindfulness en Silencio (jornada completa)</li>
              <li><strong>Enero 2024:</strong> Taller "Propósitos Conscientes para el Nuevo Año"</li>
              <li><strong>Febrero 2024:</strong> Retiro de San Valentín: "Amor Consciente" (parejas y singles)</li>
              <li><strong>Abril 2024:</strong> Retiro de Semana Santa: "Renovación Interior" (4 días)</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Las plazas para estos eventos son limitadas y suelen completarse con antelación. Recomendamos reservar con tiempo.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Programas Continuados
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">MBSR: Reducción de Estrés Basada en Mindfulness</CardTitle>
                <CardDescription>Programa de 8 semanas internacionalmente reconocido</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">El programa desarrollado por Jon Kabat-Zinn en la Universidad de Massachusetts, con aval científico:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>8 sesiones semanales de 2.5 horas</li>
                  <li>1 día de práctica intensiva (retiro de 6 horas)</li>
                  <li>Material completo y audios de meditación</li>
                  <li>Prácticas formales e informales</li>
                  <li>Especialmente efectivo para estrés, ansiedad y depresión</li>
                </ul>
                <p className="font-medium mb-2">Próxima edición:</p>
                <p className="mb-4">Inicio: 15 de septiembre | Horario: Miércoles 18:30-21:00</p>
                <p className="text-sm text-muted-foreground">Inversión: 350€ (Consulta descuentos disponibles)</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Formación en Yoga: Nivel Fundacional</CardTitle>
                <CardDescription>Programa de inmersión de 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Una formación completa para profundizar en la práctica personal de yoga (no orientada a la enseñanza):</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Un fin de semana al mes durante 6 meses</li>
                  <li>Fundamentos de filosofía yóguica</li>
                  <li>Estudio detallado de asanas, pranayama y meditación</li>
                  <li>Anatomía aplicada al yoga</li>
                  <li>Integración del yoga en la vida cotidiana</li>
                  <li>Acceso ilimitado a clases regulares durante el programa</li>
                </ul>
                <p className="font-medium mb-2">Próxima edición:</p>
                <p className="mb-4">Inicio: Octubre 2023 | Finalización: Marzo 2024</p>
                <p className="text-sm text-muted-foreground">Inversión: 1200€ (posibilidad de pago fraccionado)</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Círculo Anual de Mujeres</CardTitle>
                <CardDescription>Un viaje a través de los ciclos naturales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Espacio sagrado femenino que se reúne mensualmente siguiendo los ciclos lunares y estacionales:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>12 encuentros mensuales de 3 horas</li>
                  <li>Prácticas de conexión con la sabiduría femenina</li>
                  <li>Rituales estacionales</li>
                  <li>Compartir en círculo y sororidad</li>
                  <li>Herramientas para honrar los ciclos personales</li>
                </ul>
                <p className="font-medium mb-2">Próximo ciclo:</p>
                <p className="mb-4">Inicio: Luna nueva de septiembre | Un encuentro mensual</p>
                <p className="text-sm text-muted-foreground">Aportación: 35€ por círculo o 350€ ciclo completo</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/contacto">Solicitar Información Detallada</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Testimonios de Nuestras Actividades
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Participar en el retiro de fin de semana en la Sierra fue una experiencia transformadora. Llevo años practicando yoga en Mandala, pero la inmersión en la naturaleza con el grupo llevó mi práctica a otro nivel. La combinación de yoga, meditación y senderismo consciente me permitió reconectar no solo con mi cuerpo, sino también con mi propósito vital. Volví renovada y con mucha claridad."</p>
                <p className="font-medium">Carolina M., participante en retiro de fin de semana</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"El programa MBSR ha sido un antes y un después en mi vida. Como médico, estaba escéptico al principio, pero la evidencia científica me animó a probarlo. Ocho semanas después, mi nivel de estrés ha disminuido notablemente, duermo mejor y he mejorado mi relación con los pacientes. Lo que más valoro es que son herramientas para toda la vida, no una solución temporal. Sin duda, una de las mejores inversiones en mi bienestar."</p>
                <p className="font-medium">Dr. Alejandro R., participante en programa MBSR</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Formar parte del Círculo de Mujeres ha sido encontrar un espacio de pertenencia que no sabía que necesitaba. En un mundo que nos empuja constantemente a la productividad y la competencia, este círculo me ha enseñado el valor de la presencia, la escucha y la celebración de nuestros ciclos naturales. Mes a mes, he ido sanando mi relación con mi feminidad y construyendo vínculos auténticos con mujeres maravillosas."</p>
                <p className="font-medium">Laura T., participante en Círculo Anual de Mujeres</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Es necesaria experiencia previa para participar en las actividades?</h3>
              <p>La mayoría de nuestras <strong>actividades de bienestar en Ourense</strong> son accesibles para principiantes. Indicamos claramente el nivel requerido en cada descripción, y siempre ofrecemos adaptaciones para diferentes capacidades. Para actividades más avanzadas o especializadas, solemos recomendar cierta experiencia previa, pero siempre puedes consultarnos si tienes dudas sobre tu caso particular.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Qué debo llevar a las actividades?</h3>
              <p>Para las clases regulares, solo necesitas ropa cómoda que permita el movimiento. Disponemos de todo el material necesario (esterillas, bloques, mantas, etc.), aunque eres bienvenido a traer tu propio equipo si lo prefieres. Para talleres y retiros, enviaremos una lista detallada de lo necesario al realizar la inscripción. Generalmente recomendamos traer una botella de agua, un cuaderno para notas y, para actividades en exterior, protección solar y ropa adecuada.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cómo puedo reservar mi plaza para eventos especiales?</h3>
              <p>Para talleres, retiros y eventos especiales, requerimos reserva previa con pago del 50% del importe para garantizar tu plaza, ya que suelen tener aforo limitado. Puedes hacer la reserva en recepción, por teléfono o a través de nuestra web. El resto del importe se abona el día del evento. La política de cancelación varía según el tipo de actividad, pero generalmente, si cancelas con más de una semana de antelación, te devolvemos el importe completo o puedes utilizarlo para futuras actividades.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Hay descuentos disponibles para las actividades?</h3>
              <p>Sí, ofrecemos descuentos para estudiantes, jubilados, familias y personas en situación de desempleo en casi todas nuestras actividades. También tenemos precios especiales para antiguos alumnos y miembros con abono mensual. Para los programas más extensos, como MBSR o formaciones, existe la posibilidad de pago fraccionado. Nuestro objetivo es que la economía no sea un impedimento para acceder al bienestar, así que consultanos si tienes una situación especial.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cómo puedo estar informado de las nuevas actividades?</h3>
              <p>La forma más efectiva es suscribirte a nuestro boletín mensual, donde anunciamos todas las <strong>actividades de bienestar en Ourense</strong> con antelación. También publicamos regularmente en nuestras redes sociales (Instagram y Facebook) y actualizamos el calendario en nuestra web. Para eventos muy solicitados, ofrecemos a nuestros alumnos regulares la posibilidad de pre-inscripción antes de anunciarlos públicamente.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Tu Viaje de Bienestar Comienza Aquí
            </h2>
            <p className="text-lg text-center mb-8">
              En Mandala te ofrecemos un amplio abanico de actividades para nutrir todos los aspectos de tu ser. Te invitamos a explorar, experimentar y encontrar las prácticas que mejor resuenen contigo.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reserva Tu Primera Actividad</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Calendario Completo</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}