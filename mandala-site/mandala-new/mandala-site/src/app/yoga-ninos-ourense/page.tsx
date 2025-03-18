import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yoga para Niños en Ourense | Clases Infantiles | Centro Mandala',
  description: 'Clases de yoga para niños y niñas en Ourense. Actividades lúdicas que mejoran concentración, flexibilidad y autoconfianza en un ambiente divertido y seguro.',
  keywords: 'yoga niños ourense, yoga infantil, clases yoga niños, actividades extraescolares ourense, yoga para niños',
}

export default function YogaNinosOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Yoga para Niños en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Crecimiento, diversión y bienestar para los más pequeños
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/kids-yoga.jpg" 
            alt="Clase de yoga para niños en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Un espacio donde los niños descubren su potencial a través del juego y el movimiento
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Yoga Infantil: Beneficios para toda la vida
          </h2>
          <p className="text-lg mb-6">
            En el <strong>Centro Mandala Ourense</strong> ofrecemos clases de <strong>yoga para niños</strong> especialmente diseñadas para integrar movimiento, diversión y aprendizaje en un enfoque que respeta el desarrollo natural infantil.
          </p>
          <p className="text-lg mb-6">
            Nuestras sesiones de <strong>yoga infantil en Ourense</strong> no son simplemente clases de yoga adulto adaptadas; son experiencias completas que utilizan historias, juegos, canciones y actividades creativas para introducir los beneficios del yoga de forma natural y divertida.
          </p>
          <p className="text-lg mb-8">
            A través de un enfoque lúdico y participativo, los niños aprenden habilidades valiosas que les acompañarán durante toda su vida: atención plena, autoregulación emocional, coordinación física y respeto hacia sí mismos y los demás.
          </p>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">¡Primera clase de prueba gratuita!</h3>
                <p className="mb-4">Invita a tu hijo/a a experimentar una clase de yoga infantil sin compromiso. ¡Descubrirán una actividad que combina diversión y desarrollo integral!</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  <Link href="/contacto">Reservar Clase Gratuita</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios del Yoga para los Niños
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/kids-physical.jpg" 
                  alt="Beneficios físicos del yoga para niños" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Físicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Desarrollo de fuerza y flexibilidad corporal</li>
                  <li>Mejora del equilibrio y la coordinación motora</li>
                  <li>Corrección natural de la postura</li>
                  <li>Mayor conciencia corporal desde edades tempranas</li>
                  <li>Desarrollo de hábitos saludables para toda la vida</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/kids-mental.jpg" 
                  alt="Beneficios mentales del yoga para niños" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Mentales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Incremento de la capacidad de concentración</li>
                  <li>Mejora del rendimiento académico</li>
                  <li>Desarrollo de la creatividad e imaginación</li>
                  <li>Herramientas para gestionar el estrés escolar</li>
                  <li>Mayor capacidad de atención y enfoque</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/kids-emotional.jpg" 
                  alt="Beneficios emocionales del yoga para niños" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Emocionales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Desarrollo de la inteligencia emocional</li>
                  <li>Mayor autoestima y confianza en sí mismos</li>
                  <li>Técnicas para la autorregulación emocional</li>
                  <li>Reducción de la ansiedad y el estrés infantil</li>
                  <li>Fomento de relaciones saludables con otros niños</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 bg-brand-beige p-8 rounded-xl">
            <h3 className="text-2xl font-medium mb-4 text-brand-purple text-center">Beneficios Sociales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Cooperación</h4>
                <p>A través de juegos y actividades grupales, los niños aprenden a trabajar juntos y apoyarse mutuamente.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Respeto</h4>
                <p>Se fomenta el respeto hacia uno mismo, hacia los demás y hacia el entorno, valores fundamentales para la vida.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Empatía</h4>
                <p>Los niños desarrollan mayor sensibilidad hacia las emociones y necesidades de los demás a través de actividades compartidas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Clases de Yoga para Niños en Ourense
          </h2>
          
          <div className="space-y-10">
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 relative h-[250px] md:h-auto">
                  <Image 
                    src="/images/mini-yoguis.jpg" 
                    alt="Clases para mini yoguis en Ourense" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-medium mb-4 text-brand-purple">Mini Yoguis (3-5 años)</h3>
                  <p className="mb-4">Especialmente diseñadas para los más pequeños, estas clases introducen el yoga a través del juego, las historias y la imaginación. Las sesiones incluyen:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Aventuras y cuentos que incorporan posturas de yoga</li>
                    <li>Juegos de movimiento que mejoran la coordinación</li>
                    <li>Actividades sensoriales para el desarrollo completo</li>
                    <li>Momentos de relajación adaptados a su edad</li>
                    <li>Canciones y mantras sencillos que les encantan</li>
                  </ul>
                  <p className="text-muted-foreground">Duración: 45 minutos | Grupos reducidos: máximo 8 niños</p>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3 order-2 md:order-1">
                  <h3 className="text-2xl font-medium mb-4 text-brand-purple">Yoguis Exploradores (6-8 años)</h3>
                  <p className="mb-4">En esta etapa, los niños están listos para explorar el yoga de forma más estructurada pero siempre manteniendo el elemento lúdico. Estas clases incluyen:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Secuencias dinámicas que cuentan historias</li>
                    <li>Introducción a la respiración consciente a través de juegos</li>
                    <li>Posturas que desarrollan fuerza y confianza</li>
                    <li>Actividades de colaboración y trabajo en equipo</li>
                    <li>Primeros pasos en la concentración y atención plena</li>
                  </ul>
                  <p className="text-muted-foreground">Duración: 60 minutos | Grupos reducidos: máximo 10 niños</p>
                </div>
                <div className="md:w-1/3 relative h-[250px] md:h-auto order-1 md:order-2">
                  <Image 
                    src="/images/explorer-yoguis.jpg" 
                    alt="Clases para yoguis exploradores en Ourense" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 relative h-[250px] md:h-auto">
                  <Image 
                    src="/images/young-yoguis.jpg" 
                    alt="Clases para jóvenes yoguis en Ourense" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-medium mb-4 text-brand-purple">Jóvenes Yoguis (9-12 años)</h3>
                  <p className="mb-4">Para niños mayores, nuestras clases combinan el desarrollo físico con herramientas para gestionar los desafíos emocionales de esta etapa. Incluyen:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Secuencias más complejas que desafían y construyen confianza</li>
                    <li>Técnicas de respiración y meditación para el manejo del estrés</li>
                    <li>Prácticas para mejorar la concentración y el rendimiento escolar</li>
                    <li>Espacio para explorar temas relevantes para preadolescentes</li>
                    <li>Desarrollo de autonomía y responsabilidad personal</li>
                  </ul>
                  <p className="text-muted-foreground">Duración: 60 minutos | Grupos reducidos: máximo 12 niños</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Horarios y Precios</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            ¿Cómo son nuestras clases de yoga para niños?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image 
                src="/images/kids-yoga-class.jpg" 
                alt="Estructura de clase de yoga para niños" 
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Estructura de Nuestras Clases</h3>
              <ol className="list-decimal pl-5 space-y-3">
                <li><strong>Círculo de bienvenida:</strong> Comenzamos compartiendo cómo nos sentimos hoy y estableciendo una intención para la clase.</li>
                <li><strong>Calentamiento:</strong> Juegos activos que preparan el cuerpo y captan la atención de los niños.</li>
                <li><strong>Aventura yóguica:</strong> Una historia o tema que guía las posturas y actividades de la sesión.</li>
                <li><strong>Juegos de yoga:</strong> Actividades divertidas que enseñan posturas, equilibrio y cooperación.</li>
                <li><strong>Tiempo tranquilo:</strong> Actividades de respiración y concentración adaptadas a la edad.</li>
                <li><strong>Relajación:</strong> Un momento para descansar y absorber los beneficios de la práctica.</li>
                <li><strong>Círculo de cierre:</strong> Compartimos lo que hemos aprendido y cómo nos sentimos.</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Nuestro Enfoque Pedagógico</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Aprendizaje Experiencial</h4>
                <p>Los niños aprenden a través de la experiencia directa y el juego, no mediante instrucciones abstractas. Nuestras clases se basan en "hacer" y descubrir, no solo en escuchar.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Respeto al Ritmo Individual</h4>
                <p>Cada niño es único y respetamos sus tiempos de aprendizaje, preferencias y necesidades. No hay competencia ni comparaciones; solo celebración del esfuerzo y el progreso personal.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Desarrollo Integral</h4>
                <p>Nuestras clases nutren todos los aspectos del niño: físico, mental, emocional y social. Creemos en educar niños completos, no solo cuerpos flexibles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestros Profesores Especializados
          </h2>
          
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image 
                    src="/images/teacher-carlos.jpg" 
                    alt="Carlos Rodríguez - Profesor de yoga infantil" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-2 text-brand-purple">Carlos Rodríguez</h3>
                <p className="text-muted-foreground mb-4">Especialista en Yoga Infantil</p>
                <p className="mb-4">Carlos combina su formación como maestro de educación primaria con su certificación en yoga infantil y juvenil. Con más de 6 años de experiencia trabajando con niños, ha desarrollado un enfoque único que combina el juego, el movimiento y el aprendizaje significativo.</p>
                <p className="mb-4">Su pasión es ayudar a los niños a descubrir sus propias capacidades y darles herramientas para gestionar sus emociones y desarrollar confianza en sí mismos.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Yoga Infantil</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Educación Primaria</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Mindfulness para Niños</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-beige p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image 
                    src="/images/teacher-elena.jpg" 
                    alt="Elena Martínez - Profesora de yoga infantil" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 order-2 md:order-1">
                <h3 className="text-2xl font-medium mb-2 text-brand-purple">Elena Martínez</h3>
                <p className="text-muted-foreground mb-4">Yoga para Mini Yoguis</p>
                <p className="mb-4">Elena es especialista en desarrollo infantil temprano y yoga para los más pequeños. Su formación en pedagogía Montessori y yoga infantil le permite crear experiencias mágicas que captan la atención de los niños mientras contribuyen a su desarrollo integral.</p>
                <p className="mb-4">Sus clases se caracterizan por el uso de cuentos, música y elementos sensoriales que transforman el yoga en una aventura fascinante para los niños de 3 a 5 años.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Yoga para Preescolares</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Pedagogía Montessori</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Juego y Movimiento</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Información Práctica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Horarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Mini Yoguis (3-5 años)</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex justify-between">
                    <span>Lunes</span>
                    <span>17:30 - 18:15</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Miércoles</span>
                    <span>17:30 - 18:15</span>
                  </li>
                </ul>
                
                <p className="font-medium mb-2">Yoguis Exploradores (6-8 años)</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex justify-between">
                    <span>Martes</span>
                    <span>17:30 - 18:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jueves</span>
                    <span>17:30 - 18:30</span>
                  </li>
                </ul>
                
                <p className="font-medium mb-2">Jóvenes Yoguis (9-12 años)</p>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Lunes</span>
                    <span>18:30 - 19:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Miércoles</span>
                    <span>18:30 - 19:30</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Precios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Mini Yoguis (3-5 años)</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex justify-between">
                    <span>1 día/semana</span>
                    <span>45€/mes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2 días/semana</span>
                    <span>70€/mes</span>
                  </li>
                </ul>
                
                <p className="font-medium mb-2">Yoguis Exploradores y Jóvenes Yoguis</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex justify-between">
                    <span>1 día/semana</span>
                    <span>50€/mes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2 días/semana</span>
                    <span>80€/mes</span>
                  </li>
                </ul>
                
                <p className="font-medium mb-2">Descuentos</p>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Hermanos</span>
                    <span>10% dto.</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Trimestre</span>
                    <span>5% dto.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Qué Necesitan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ropa cómoda que permita movimiento</li>
                  <li>Calcetines antideslizantes (opcional)</li>
                  <li>Botella de agua</li>
                  <li>¡Muchas ganas de divertirse!</li>
                </ul>
                <p className="mt-4">Proporcionamos esterillas y todos los materiales especializados para las clases (cojines, bloques, mantas, elementos sensoriales, etc.)</p>
                <p className="mt-4 text-brand-purple font-medium">¡No se necesita experiencia previa!</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h3 className="font-medium text-xl mb-4 text-brand-teal text-center">Clases Especiales y Eventos</h3>
            <p className="text-center mb-6">Además de nuestras clases regulares, organizamos:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-teal">Talleres Temáticos</h4>
                <p>Exploraciones únicas como "Yoga y Arte", "Yoga y Naturaleza" o "Yoga y Cuentos" para experiencias especiales.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-teal">Yoga en Familia</h4>
                <p>Sesiones donde padres e hijos practican juntos, fortaleciendo vínculos a través del yoga y el juego compartido.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-teal">Campamentos Vacacionales</h4>
                <p>Durante vacaciones escolares, ofrecemos días temáticos o semanas completas de actividades combinando yoga y creatividad.</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Información sobre Próximos Eventos</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes de los Padres
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Mi hijo/a necesita tener experiencia previa en yoga?</h3>
              <p>No, no se requiere ninguna experiencia previa. Nuestras clases están diseñadas para introducir el yoga de forma gradual y adaptada a cada edad, sin importar si es la primera vez que el niño practica.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿El yoga es adecuado para niños muy activos o con dificultades de atención?</h3>
              <p>¡Absolutamente! De hecho, el yoga puede ser especialmente beneficioso para niños con mucha energía o dificultades para concentrarse. Nuestra metodología combina momentos de actividad con momentos de calma, ayudando a los niños a encontrar su propio equilibrio. Les enseñamos herramientas para autorregularse que pueden usar tanto en clase como en su vida diaria.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Puedo quedarme a observar la clase?</h3>
              <p>Generalmente recomendamos que los padres no permanezcan durante toda la clase para fomentar la independencia de los niños. Sin embargo, para los más pequeños o niños que necesitan tiempo para adaptarse, permitimos que los padres se queden las primeras sesiones. También organizamos clases abiertas periódicamente donde los padres pueden asistir y ver el progreso de sus hijos.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Qué beneficios notaré en mi hijo/a?</h3>
              <p>Cada niño es diferente, pero los padres suelen reportar mejoras en la concentración, comportamiento más tranquilo en casa, mejor manejo de las emociones, mayor confianza en sí mismos y mejor calidad de sueño. Físicamente, notarán mayor fuerza, flexibilidad y coordinación. Muchos padres nos comentan también que sus hijos utilizan las técnicas de respiración aprendidas en clase para calmarse en situaciones de estrés.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Es el yoga una actividad competitiva?</h3>
              <p>No, el yoga es todo lo contrario a una actividad competitiva. Enseñamos a los niños que cada persona tiene un cuerpo diferente y que el objetivo no es "ser mejor que" sino descubrir sus propias capacidades y respetar su propio ritmo. Fomentamos un ambiente de cooperación donde celebramos los logros de todos sin comparaciones.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿El yoga tiene alguna connotación religiosa?</h3>
              <p>El yoga que enseñamos a los niños es completamente secular y se centra en los aspectos físicos, mentales y emocionales de la práctica. Utilizamos historias, juegos y actividades adaptadas a la cultura occidental y al entendimiento infantil. Nuestro enfoque se centra en valores universales como la amabilidad, el respeto y la paz, sin ninguna orientación religiosa específica.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Testimonios de Familias
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Mi hijo Martín, de 7 años, empezó las clases de yoga hace seis meses porque tenía dificultades para concentrarse en el colegio. El cambio ha sido increíble. No solo está más tranquilo y centrado, sino que ahora utiliza la respiración cuando se frustra. ¡Incluso me enseña técnicas a mí cuando ve que estoy estresada! Las clases con Carlos son su actividad favorita de la semana."</p>
                <p className="font-medium">Laura, madre de Martín (7 años)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Mis gemelas de 4 años adoran sus clases de Mini Yoguis. Elena tiene una capacidad mágica para captar su atención y convertir el yoga en una aventura. Me encanta cómo incorporan valores como el respeto y la amabilidad de forma natural. En casa, juegan constantemente a ser árboles, leones o mariposas, recreando lo que aprenden en clase. Ha sido una inversión maravillosa en su desarrollo."</p>
                <p className="font-medium">Miguel, padre de Sofía y Lucía (4 años)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Mi hija tenía problemas de autoestima cuando empezó en la clase de Jóvenes Yoguis. Después de unos meses, noto un cambio enorme en su confianza. Le gusta que no haya competencia y que pueda progresar a su propio ritmo. Las técnicas de relajación le han ayudado con su ansiedad ante los exámenes, y ahora duerme mejor. Como madre, estoy profundamente agradecida por este espacio seguro donde puede ser ella misma."</p>
                <p className="font-medium">Carmen, madre de Valeria (11 años)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
              ¿Listo para que tu hijo descubra el yoga?
            </h2>
            <p className="text-lg text-center mb-8">
              Regala a tu hijo herramientas para toda la vida a través del yoga infantil. Reserva una clase de prueba gratuita y comienza esta aventura juntos.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reservar Clase Gratuita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Horarios y Precios</Link>
              </Button>
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              Las plazas son limitadas para garantizar atención personalizada. ¡No esperes para reservar!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}