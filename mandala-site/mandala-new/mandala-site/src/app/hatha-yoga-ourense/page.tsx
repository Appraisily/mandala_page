import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Hatha Yoga en Ourense | Clases para Todos los Niveles | Centro Mandala',
  description: 'Clases de Hatha Yoga en Ourense para todos los niveles. Equilibra cuerpo y mente a través de posturas (asanas), respiración (pranayama) y meditación. Primera clase gratuita.',
  keywords: 'hatha yoga ourense, clases hatha yoga, yoga físico ourense, asanas, pranayama, yoga equilibrio, clases yoga ourense',
}

export default function HathaYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Hatha Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          El camino clásico hacia el equilibrio físico y mental
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/hatha-yoga-hero.jpg" 
            alt="Práctica de Hatha Yoga en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Equilibra cuerpo y mente a través de posturas, respiración y meditación
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Hatha Yoga: El Arte del Equilibrio
          </h2>
          <p className="text-lg mb-6">
            En el <strong>Centro Mandala Ourense</strong> ofrecemos clases de <strong>Hatha Yoga</strong> tradicional, una de las formas más practicadas y completas de yoga que combina posturas físicas (asanas), técnicas de respiración (pranayama) y meditación.
          </p>
          <p className="text-lg mb-6">
            La palabra "Hatha" proviene del sánscrito: "Ha" significa sol y "Tha" significa luna, simbolizando la unión de opuestos y el equilibrio entre energías. El <strong>Hatha Yoga en Ourense</strong> es mucho más que ejercicio físico; es un camino para explorar el potencial del cuerpo y la mente.
          </p>
          <p className="text-lg mb-8">
            Nuestras clases están diseñadas para todos los niveles, desde principiantes absolutos hasta practicantes avanzados, siempre con atención personalizada y respeto por las posibilidades individuales de cada alumno.
          </p>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">¡Primera clase de prueba gratuita!</h3>
                <p className="mb-4">Experimenta los beneficios del Hatha Yoga sin compromiso. Descubre por qué tantas personas en Ourense confían en el Centro Mandala para su práctica de yoga.</p>
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
            Los Principios del Hatha Yoga
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/hatha-asanas.jpg" 
                  alt="Asanas o posturas de Hatha Yoga" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Asanas (Posturas)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Las asanas son posturas físicas diseñadas para fortalecer, estirar y equilibrar el cuerpo. En Hatha Yoga, cada postura se mantiene con atención consciente y respiración profunda.</p>
                <p>Trabajamos con secuencias que actúan sobre todos los sistemas del cuerpo: muscular, óseo, nervioso, circulatorio, digestivo y endocrino, promoviendo la salud integral.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/hatha-pranayama.jpg" 
                  alt="Pranayama o técnicas de respiración" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Pranayama (Respiración)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Pranayama significa "expansión de la energía vital" mediante técnicas específicas de respiración que regulan la energía y aquietan la mente.</p>
                <p>Estas técnicas ayudan a mejorar la capacidad pulmonar, a calmar el sistema nervioso y a desarrollar una mayor conciencia de la conexión mente-cuerpo esencial para una vida equilibrada.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/hatha-meditation.jpg" 
                  alt="Meditación y consciencia plena" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Meditación y Relajación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">El Hatha Yoga integra la práctica de la meditación y técnicas de relajación profunda para cultivar la atención plena y la paz interior.</p>
                <p>Estas prácticas nos enseñan a estar presentes, a observar nuestros pensamientos sin identificarnos con ellos, y a encontrar un espacio de calma interior en medio de la vida cotidiana.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 bg-brand-beige p-8 rounded-xl">
            <h3 className="text-2xl font-medium mb-6 text-brand-purple text-center">El Verdadero Sentido del Hatha Yoga</h3>
            <p className="text-lg mb-6">El Hatha Yoga es un camino de equilibrio entre opuestos. Trae:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Fortaleza y Ligereza</h4>
                <p>Desarrolla un cuerpo fuerte pero flexible, y una mente firme pero adaptable.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Acción y Quietud</h4>
                <p>Combina el movimiento dinámico con la quietud contemplativa para un desarrollo completo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Energía y Calma</h4>
                <p>Genera vitalidad y energía al mismo tiempo que cultiva serenidad interior.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Cuerpo y Mente</h4>
                <p>Restablece la conexión entre lo físico y lo mental para una experiencia de vida integrada.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios del Hatha Yoga
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Físicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Aumenta la flexibilidad y tonifica los músculos</li>
                  <li>Mejora la postura y alineación corporal</li>
                  <li>Fortalece el sistema inmunológico</li>
                  <li>Regula el funcionamiento de órganos internos</li>
                  <li>Mejora la respiración y circulación sanguínea</li>
                  <li>Aumenta la energía y vitalidad</li>
                  <li>Alivia dolores crónicos, especialmente de espalda</li>
                  <li>Mejora el equilibrio y la coordinación</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Mentales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reduce el estrés y la ansiedad</li>
                  <li>Mejora la concentración y memoria</li>
                  <li>Promueve el equilibrio emocional</li>
                  <li>Aumenta la claridad mental</li>
                  <li>Mejora la calidad del sueño</li>
                  <li>Ayuda a manejar la depresión</li>
                  <li>Desarrolla la voluntad y autodisciplina</li>
                  <li>Cultiva una actitud positiva ante la vida</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios para la Vida</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Profundiza la conexión mente-cuerpo</li>
                  <li>Desarrolla mayor autoconciencia</li>
                  <li>Favorece la paz interior y bienestar general</li>
                  <li>Mejora las relaciones personales</li>
                  <li>Aumenta la capacidad de vivir el presente</li>
                  <li>Desarrolla la intuición</li>
                  <li>Proporciona herramientas para el autoconocimiento</li>
                  <li>Cultiva la paciencia y compasión hacia uno mismo</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Clases de Hatha Yoga en Ourense
          </h2>
          
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[250px] md:h-auto">
                <Image 
                  src="/images/hatha-class.jpg" 
                  alt="Clase de Hatha Yoga en Centro Mandala Ourense" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-4 text-brand-purple">Estructura de Nuestras Clases</h3>
                <p className="mb-4">Nuestras sesiones de Hatha Yoga están diseñadas para todos los niveles, con especial atención a la correcta alineación y a la adaptación de las posturas según las necesidades individuales. Cada clase incluye:</p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li><strong>Centrado inicial:</strong> Breve meditación para conectar con el cuerpo y establecer la intención de la práctica</li>
                  <li><strong>Calentamiento:</strong> Movimientos suaves para preparar el cuerpo</li>
                  <li><strong>Asanas (posturas):</strong> Secuencia de posturas físicas adaptadas a todos los niveles</li>
                  <li><strong>Pranayama:</strong> Técnicas de respiración para aumentar la energía vital</li>
                  <li><strong>Relajación final:</strong> Práctica de relajación profunda (Savasana)</li>
                  <li><strong>Meditación:</strong> Breve práctica de atención plena para integrar los beneficios</li>
                </ol>
                <p className="text-muted-foreground">Duración: 75-90 minutos | Grupos reducidos para atención personalizada</p>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-beige p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3 order-2 md:order-1">
                <h3 className="text-2xl font-medium mb-4 text-brand-purple">Para Quién es el Hatha Yoga</h3>
                <p className="mb-4">El Hatha Yoga es adecuado para prácticamente cualquier persona, independientemente de su edad, condición física o experiencia previa. Es ideal para:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Principiantes:</strong> Introducción gradual y segura al yoga</li>
                  <li><strong>Personas con problemas de espalda:</strong> Fortalecimiento y alivio de molestias</li>
                  <li><strong>Quienes buscan reducir el estrés:</strong> Técnicas eficaces de relajación</li>
                  <li><strong>Deportistas:</strong> Complemento perfecto para mejorar flexibilidad</li>
                  <li><strong>Personas mayores:</strong> Adaptado para mantener movilidad y equilibrio</li>
                  <li><strong>Buscadores de bienestar integral:</strong> Unión de cuerpo, mente y espíritu</li>
                </ul>
                <p>Cada clase puede adaptarse a necesidades individuales y siempre ofrecemos variantes para todos los niveles.</p>
              </div>
              <div className="md:w-1/3 relative h-[250px] md:h-auto order-1 md:order-2">
                <Image 
                  src="/images/hatha-diverse.jpg" 
                  alt="Diversidad de practicantes de Hatha Yoga" 
                  fill
                  className="object-cover rounded-lg"
                />
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
                    src="/images/teacher-luz.jpg" 
                    alt="Luz - Profesora de Hatha Yoga" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-2 text-brand-purple">Luz</h3>
                <p className="text-muted-foreground mb-4">Especialista en Hatha Yoga Tradicional</p>
                <p className="mb-4">Con más de 10 años de experiencia en la enseñanza del Hatha Yoga, Luz combina los aspectos tradicionales de esta disciplina con un enfoque adaptado a las necesidades contemporáneas. Su formación incluye estudios en India y con reconocidos maestros europeos.</p>
                <p className="mb-4">Sus clases se caracterizan por la atención al detalle en la alineación, un profundo conocimiento anatómico y la capacidad de transmitir los aspectos filosóficos del yoga de manera accesible para todos.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Hatha Yoga</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Yoga Terapéutico</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Pranayama</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-beige p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image 
                    src="/images/teacher-yoli.jpg" 
                    alt="Yoli - Profesora de Hatha Yoga" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 order-2 md:order-1">
                <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoli</h3>
                <p className="text-muted-foreground mb-4">Experta en Hatha Yoga y meditación</p>
                <p className="mb-4">Yoli descubrió el yoga hace más de 15 años como una herramienta para manejar el estrés, y desde entonces ha dedicado su vida al estudio y la enseñanza de esta disciplina transformadora. Es especialista en adaptar el Hatha Yoga para todos los niveles y edades.</p>
                <p className="mb-4">Sus clases integran fluidamente los aspectos físicos del yoga con prácticas meditativas, creando una experiencia equilibrada que nutre tanto el cuerpo como la mente.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Hatha Yoga</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Meditación</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Yoga para principiantes</span>
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
                <p className="font-medium mb-2">Clases con Luz</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex justify-between">
                    <span>Martes</span>
                    <span>10:00 - 11:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Martes</span>
                    <span>19:00 - 20:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jueves</span>
                    <span>10:00 - 11:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jueves</span>
                    <span>19:00 - 20:30</span>
                  </li>
                </ul>
                
                <p className="font-medium mb-2">Clases con Yoli</p>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Lunes</span>
                    <span>19:00 - 20:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Miércoles</span>
                    <span>10:00 - 11:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Miércoles</span>
                    <span>19:00 - 20:30</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Precios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 mb-4">
                  <li className="flex justify-between">
                    <span>Clase suelta</span>
                    <span>12€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bono 4 clases</span>
                    <span>40€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bono 8 clases</span>
                    <span>72€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mensualidad 1 día/semana</span>
                    <span>45€/mes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mensualidad 2 días/semana</span>
                    <span>75€/mes</span>
                  </li>
                </ul>
                
                <p className="font-medium mb-2">Descuentos</p>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Estudiantes y desempleados</span>
                    <span>10% dto.</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pago trimestral</span>
                    <span>5% dto.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Qué Necesitas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ropa cómoda que permita movimiento</li>
                  <li>Esterilla de yoga (tenemos disponibles para préstamo)</li>
                  <li>Botella de agua</li>
                  <li>Una toalla pequeña (opcional)</li>
                  <li>Ropa de abrigo para la relajación</li>
                </ul>
                <p className="mt-4">Es recomendable no comer al menos 1-2 horas antes de la práctica y venir con una actitud abierta y receptiva.</p>
                <p className="mt-4 text-brand-purple font-medium">¡No se necesita experiencia previa!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Hatha Yoga
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Es el Hatha Yoga adecuado para principiantes?</h3>
              <p>Sí, el Hatha Yoga es perfecto para principiantes. Es una práctica que enfatiza los fundamentos del yoga, con posturas que pueden adaptarse a cualquier nivel de condición física. Nuestros profesores están especialmente capacitados para guiar a los nuevos practicantes, ofreciendo modificaciones y alternativas para que cada persona pueda practicar de forma segura y efectiva.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Necesito ser flexible para practicar Hatha Yoga?</h3>
              <p>No, ¡en absoluto! Decir que necesitas ser flexible para hacer yoga es como decir que necesitas estar limpio para ducharte. El yoga es precisamente una práctica que ayuda a desarrollar flexibilidad, tanto física como mental. Cada persona comienza desde su propio punto de partida y progresa a su ritmo. La flexibilidad viene con la práctica constante, no es un requisito para empezar.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Con qué frecuencia debo practicar para notar beneficios?</h3>
              <p>Incluso practicando una vez por semana notarás beneficios, pero lo ideal es mantener una práctica regular de 2-3 veces por semana para experimentar cambios significativos. Lo importante es la constancia más que la intensidad. Una práctica corta pero regular es más beneficiosa que sesiones largas e intensas realizadas de forma esporádica. Además, muchos de nuestros alumnos complementan las clases con una breve práctica diaria en casa.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿El Hatha Yoga puede ayudar con problemas de espalda?</h3>
              <p>El Hatha Yoga es reconocido por sus beneficios para la salud de la columna vertebral y la espalda en general. Las posturas fortalecen los músculos centrales que apoyan la espalda, mejoran la postura y aumentan la flexibilidad espinal. Sin embargo, si tienes una condición específica, es importante informar al profesor antes de la clase para que pueda ofrecerte las adaptaciones necesarias. En muchos casos, trabajamos en colaboración con fisioterapeutas para desarrollar prácticas terapéuticas personalizadas.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Es el Hatha Yoga una práctica religiosa?</h3>
              <p>El Hatha Yoga que enseñamos en Centro Mandala es una práctica secular que respeta sus raíces filosóficas pero que está completamente adaptada al contexto occidental contemporáneo. Aunque el yoga tiene sus orígenes en la tradición hindú, la forma en que se practica hoy en día se centra en los aspectos físicos, mentales y energéticos, sin connotaciones religiosas específicas. Nuestro enfoque se basa en valores universales como la compasión, el respeto y la búsqueda del bienestar integral.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Cuál es la diferencia entre Hatha Yoga y otros estilos?</h3>
              <p>El Hatha Yoga es la base de la mayoría de estilos de yoga físico que se practican hoy en día. Se caracteriza por su enfoque equilibrado, donde las posturas se mantienen durante varias respiraciones, permitiendo un trabajo profundo. En comparación, estilos como el Vinyasa fluyen más rápidamente entre posturas, el Ashtanga sigue secuencias fijas y vigorosas, y el Yin mantiene posturas pasivas durante varios minutos. El Hatha encuentra un punto medio perfecto, ofreciendo tanto dinamismo como quietud, ideal para desarrollar fuerza, flexibilidad y conciencia corporal de forma equilibrada.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Testimonios de Nuestros Alumnos
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Llevo tres años practicando Hatha Yoga en el Centro Mandala y ha cambiado mi vida por completo. Antes sufría dolores crónicos de espalda que me limitaban en mi día a día. Gracias a las clases de Luz, no solo he eliminado casi por completo el dolor, sino que he ganado flexibilidad, fuerza y, lo más importante, una nueva forma de entender mi cuerpo y mente. El ambiente en el centro es acogedor y los profesores se adaptan a las necesidades de cada alumno."</p>
                <p className="font-medium">María, 42 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Empecé en el yoga buscando una actividad para reducir el estrés del trabajo, sin imaginar todo lo que iba a descubrir. Las clases con Yoli son un oasis de calma en mi semana. He aprendido técnicas de respiración que uso diariamente en momentos de tensión, y las prácticas de meditación me han ayudado a mantener el enfoque en mi trabajo como nunca antes. Además, he conocido personas maravillosas en el centro que ahora forman parte de mi círculo de amistades."</p>
                <p className="font-medium">Carlos, 38 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Con 65 años, pensé que el yoga no era para mí, que ya era demasiado mayor para empezar. ¡Qué equivocada estaba! Las clases de Hatha Yoga en Centro Mandala están perfectamente adaptadas para todas las edades. He recuperado movilidad, mejorado mi equilibrio y hasta mi médico ha notado los cambios positivos en mi salud general. Los profesores son atentos y pacientes, y el ambiente es respetuoso y sin competitividad. Ahora no puedo imaginar mi vida sin mi práctica semanal de yoga."</p>
                <p className="font-medium">Elena, 65 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
              Comienza Tu Camino en el Hatha Yoga
            </h2>
            <p className="text-lg text-center mb-8">
              Descubre por ti mismo los beneficios transformadores del Hatha Yoga en el Centro Mandala Ourense. Te invitamos a una primera clase gratuita para que experimentes esta práctica milenaria adaptada al mundo contemporáneo.
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
              "El yoga no trata de tocarse los dedos de los pies, se trata de lo que aprendes en el camino hacia abajo." — Judith Hanson Lasater
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}