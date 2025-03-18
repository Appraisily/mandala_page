import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vinyasa Yoga en Ourense | Clases Dinámicas de Flujo | Centro Mandala',
  description: 'Clases de Vinyasa Yoga en Ourense. Practica un estilo dinámico que sincroniza movimiento y respiración para cultivar fuerza, flexibilidad y presencia. Primera clase gratuita.',
  keywords: 'vinyasa yoga ourense, clases vinyasa, yoga dinámico ourense, yoga de flujo, yoga sincronizado respiración, ashtanga ourense, power yoga ourense',
}

export default function VinyasaYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Vinyasa Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          El arte del movimiento fluido sincronizado con la respiración
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/vinyasa-yoga-hero.jpg" 
            alt="Práctica de Vinyasa Yoga en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Descubre la danza meditativa que unifica cuerpo, respiración y mente
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Vinyasa Yoga: El Arte del Flujo Consciente
          </h2>
          <p className="text-lg mb-6">
            En el <strong>Centro Mandala Ourense</strong> ofrecemos clases de <strong>Vinyasa Yoga</strong>, un estilo dinámico y creativo que sincroniza el movimiento con la respiración. La palabra "Vinyasa" significa "colocar de una manera especial" y se refiere a la secuencia fluida que conecta cada postura con la siguiente.
          </p>
          <p className="text-lg mb-6">
            El <strong>Vinyasa Yoga en Ourense</strong> es una práctica moderna con raíces en el yoga tradicional que combina elementos de diversas tradiciones para crear una experiencia completa. Cada clase es un viaje único donde movimiento, respiración y presencia se integran para crear una meditación en movimiento.
          </p>
          <p className="text-lg mb-8">
            Con cada respiración, cada transición y cada postura, el Vinyasa Yoga nos enseña a estar presentes, a fluir con los cambios y a encontrar estabilidad en el movimiento, lecciones que trasciendan más allá de la esterilla para enriquecer nuestra vida cotidiana.
          </p>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">¡Primera clase de prueba gratuita!</h3>
                <p className="mb-4">Experimenta el Vinyasa Yoga sin compromiso. Descubre cómo esta práctica dinámica puede transformar tu cuerpo y mente generando vitalidad, fuerza y claridad mental.</p>
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
            Características del Vinyasa Yoga
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/vinyasa-flow.jpg" 
                  alt="Flujo y movimiento en Vinyasa Yoga" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Movimiento Fluido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">El Vinyasa se caracteriza por su fluidez, conectando las posturas (asanas) a través de transiciones armoniosas que crean una secuencia continua y dinámica.</p>
                <p>Cada clase es una danza meditativa donde el movimiento nunca se detiene completamente, creando una sensación de ritmo y continuidad que refleja el flujo constante de la vida.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/vinyasa-breath.jpg" 
                  alt="Sincronización con la respiración en Vinyasa" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Sincronización Respiratoria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">La respiración es el ancla de la práctica, cada movimiento está sincronizado con la inhalación o la exhalación, creando un vínculo profundo entre cuerpo y aliento.</p>
                <p>Esta sincronización respiratoria (ujjayi pranayama) genera calor interno, mejora la concentración y transforma la práctica en una meditación activa que calma la mente.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[160px]">
                <Image 
                  src="/images/vinyasa-creative.jpg" 
                  alt="Creatividad y variación en Vinyasa Yoga" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Creatividad y Adaptabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">El Vinyasa no sigue secuencias fijas, permitiendo la creatividad y la adaptación a las necesidades de cada practicante y a las intenciones específicas de cada clase.</p>
                <p>Esta libertad creativa hace que cada sesión sea única, explorando diferentes temas, enfocándose en distintas áreas del cuerpo o trabajando cualidades específicas como equilibrio, fuerza o flexibilidad.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 bg-brand-beige p-8 rounded-xl">
            <h3 className="text-2xl font-medium mb-6 text-brand-purple text-center">El Espíritu del Vinyasa</h3>
            <p className="text-lg mb-6">El Vinyasa Yoga cultiva cualidades esenciales que trascienden la práctica física:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Presencia</h4>
                <p>La atención constante al movimiento y respiración desarrolla una profunda capacidad de estar presente en cada momento.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Adaptabilidad</h4>
                <p>Aprendemos a fluir con los cambios, desarrollando flexibilidad tanto física como mental para adaptarnos a nuevas situaciones.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Equilibrio</h4>
                <p>Encontramos balance entre esfuerzo y ligereza, entre estabilidad y movimiento, entre disciplina y libertad creativa.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Integración</h4>
                <p>Unificamos cuerpo, respiración y mente en una experiencia integradora que nos conecta con nuestra totalidad.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios del Vinyasa Yoga
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Físicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Desarrolla fuerza y resistencia muscular</li>
                  <li>Mejora la flexibilidad y amplitud de movimiento</li>
                  <li>Aumenta la capacidad cardiovascular</li>
                  <li>Estimula el sistema linfático y la desintoxicación</li>
                  <li>Mejora el equilibrio y la coordinación</li>
                  <li>Incrementa la energía vital y reduce la fatiga</li>
                  <li>Tonifica todo el cuerpo de manera integral</li>
                  <li>Mejora la postura y alineación corporal</li>
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
                  <li>Desarrolla concentración y enfoque mental</li>
                  <li>Mejora la capacidad de estar presente</li>
                  <li>Calma la mente y los pensamientos dispersos</li>
                  <li>Estimula la claridad mental y la creatividad</li>
                  <li>Mejora el estado de ánimo y reduce síntomas depresivos</li>
                  <li>Desarrolla la capacidad de observación sin juicio</li>
                  <li>Cultiva resistencia mental ante los desafíos</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Integrales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Profundiza la conexión cuerpo-mente-respiración</li>
                  <li>Desarrolla mayor autoconciencia y autoconocimiento</li>
                  <li>Mejora la gestión de las emociones</li>
                  <li>Aumenta la capacidad de adaptación al cambio</li>
                  <li>Desarrolla la intuición y la escucha interior</li>
                  <li>Mejora la calidad del sueño y los patrones de descanso</li>
                  <li>Cultiva una actitud de aceptación y ecuanimidad</li>
                  <li>Promueve un estilo de vida más consciente y saludable</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Clases de Vinyasa Yoga en Ourense
          </h2>
          
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[250px] md:h-auto">
                <Image 
                  src="/images/vinyasa-class.jpg" 
                  alt="Clase de Vinyasa Yoga en Centro Mandala Ourense" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-4 text-brand-purple">Estructura de Nuestras Clases</h3>
                <p className="mb-4">Nuestras sesiones de Vinyasa Yoga se adaptan a todos los niveles, ofreciendo variantes para principiantes y desafíos para practicantes avanzados. Cada clase sigue una estructura que asegura una práctica completa y segura:</p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li><strong>Centrado inicial:</strong> Establecemos la intención de la práctica y conectamos con la respiración</li>
                  <li><strong>Calentamiento suave:</strong> Preparamos el cuerpo con movimientos conscientes y respiración profunda</li>
                  <li><strong>Saludos al sol:</strong> Series dinámicas que calientan el cuerpo y establecen el ritmo respiratorio</li>
                  <li><strong>Secuencia principal:</strong> Exploración creativa de posturas enlazadas con fluidez</li>
                  <li><strong>Trabajo de equilibrio y fuerza:</strong> Posturas que desarrollan estabilidad y potencia</li>
                  <li><strong>Aperturas profundas:</strong> Asanas enfocadas en flexibilidad y liberación de tensiones</li>
                  <li><strong>Inversiones y posturas avanzadas:</strong> Adaptadas al nivel de cada practicante</li>
                  <li><strong>Enfriamiento gradual:</strong> Reducción del ritmo para preparar el cuerpo para la quietud</li>
                  <li><strong>Relajación final:</strong> Integración de los beneficios de la práctica</li>
                </ol>
                <p className="text-muted-foreground">Duración: 75-90 minutos | Grupos reducidos para atención personalizada</p>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-beige p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3 order-2 md:order-1">
                <h3 className="text-2xl font-medium mb-4 text-brand-purple">Para Quién es el Vinyasa Yoga</h3>
                <p className="mb-4">El Vinyasa Yoga es ideal para quienes buscan una práctica dinámica que combine movimiento físico con presencia mental. Es especialmente adecuado para:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Personas activas:</strong> Que disfrutan del movimiento y buscan un desafío físico</li>
                  <li><strong>Quienes buscan reducir el estrés:</strong> A través de una meditación en movimiento</li>
                  <li><strong>Practicantes que buscan variedad:</strong> La naturaleza creativa del Vinyasa ofrece experiencias siempre nuevas</li>
                  <li><strong>Deportistas:</strong> Como complemento ideal para mejorar rendimiento y prevenir lesiones</li>
                  <li><strong>Personas con vidas ocupadas:</strong> Una práctica completa que combina ejercicio, relajación y meditación</li>
                  <li><strong>Quienes buscan un estilo de vida consciente:</strong> El Vinyasa cultiva la atención plena y la aplicación de la consciencia en la vida diaria</li>
                </ul>
                <p>Adaptamos las clases a diferentes niveles, ofreciendo variantes para principiantes y opciones avanzadas para practicantes experimentados.</p>
              </div>
              <div className="md:w-1/3 relative h-[250px] md:h-auto order-1 md:order-2">
                <Image 
                  src="/images/vinyasa-practitioners.jpg" 
                  alt="Practicantes de Vinyasa Yoga en Ourense" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestros Profesores de Vinyasa
          </h2>
          
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image 
                    src="/images/teacher-andrea.jpg" 
                    alt="Andrea - Profesora de Vinyasa Yoga" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-2 text-brand-purple">Andrea</h3>
                <p className="text-muted-foreground mb-4">Especialista en Vinyasa Flow</p>
                <p className="mb-4">Andrea descubrió el Vinyasa Yoga hace más de 12 años y desde entonces ha profundizado en esta práctica transformadora a través de formaciones con maestros internacionales y un estudio constante. Su formación incluye estudios en India, Estados Unidos y Europa.</p>
                <p className="mb-4">Sus clases se caracterizan por secuencias creativas que fluyen con elegancia, una atención meticulosa a la alineación y la capacidad de inspirar a los alumnos a explorar sus propios límites con seguridad y consciencia. Andrea combina el rigor técnico con una enseñanza accesible y motivadora.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Vinyasa Flow</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Power Yoga</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Alineación Consciente</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-beige p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center order-1 md:order-2">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image 
                    src="/images/teacher-marcos.jpg" 
                    alt="Marcos - Profesor de Vinyasa Yoga" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 order-2 md:order-1">
                <h3 className="text-2xl font-medium mb-2 text-brand-purple">Marcos</h3>
                <p className="text-muted-foreground mb-4">Experto en Vinyasa y Meditación en Movimiento</p>
                <p className="mb-4">Con un background en artes marciales y danza contemporánea, Marcos aporta una perspectiva única a sus clases de Vinyasa, enfatizando la conexión entre movimiento, respiración y presencia. Su enfoque integra elementos de diversas tradiciones de movimiento consciente.</p>
                <p className="mb-4">Sus clases son un viaje dinámico que combina fuerza, fluidez y atención plena. Marcos crea un espacio donde cada alumno puede explorar su práctica personal mientras es guiado con precisión técnica y profundidad filosófica.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Vinyasa Dinámico</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Meditación en Movimiento</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Movimiento Consciente</span>
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
                <p className="font-medium mb-2">Clases con Andrea</p>
                <ul className="space-y-1 mb-4">
                  <li className="flex justify-between">
                    <span>Lunes</span>
                    <span>19:30 - 21:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Miércoles</span>
                    <span>10:00 - 11:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Viernes</span>
                    <span>19:00 - 20:30</span>
                  </li>
                </ul>
                
                <p className="font-medium mb-2">Clases con Marcos</p>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Martes</span>
                    <span>19:30 - 21:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jueves</span>
                    <span>19:30 - 21:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado</span>
                    <span>11:00 - 12:30</span>
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
                    <span>15€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bono 4 clases</span>
                    <span>50€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bono 8 clases</span>
                    <span>85€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mensualidad 1 día/semana</span>
                    <span>50€/mes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mensualidad 2 días/semana</span>
                    <span>80€/mes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mensualidad ilimitada</span>
                    <span>100€/mes</span>
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
                    <span>10% dto.</span>
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
                  <li>Esterilla de yoga antideslizante (tenemos disponibles para préstamo)</li>
                  <li>Toalla pequeña para el sudor</li>
                  <li>Botella de agua</li>
                  <li>Ropa de abrigo ligera para la relajación final</li>
                </ul>
                <p className="mt-4">Para una práctica óptima, evita comer al menos 2 horas antes de la clase. Hidrátate bien durante el día.</p>
                <p className="mt-4 text-brand-purple font-medium">Recomendable para todos los niveles con adaptaciones personalizadas</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Vinyasa Yoga
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿El Vinyasa Yoga es adecuado para principiantes?</h3>
              <p>Aunque el Vinyasa es un estilo dinámico, nuestras clases están diseñadas para acoger a practicantes de todos los niveles, incluidos principiantes. Los profesores ofrecen variantes para cada postura y guían con claridad las transiciones. Si eres completamente nuevo en el yoga, te recomendamos comenzar con nuestras clases específicas para principiantes o con Hatha Yoga para familiarizarte con las posturas básicas. No obstante, con una mente abierta y respetando tus límites, cualquier persona puede disfrutar del Vinyasa desde el inicio.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Cuál es la diferencia entre Vinyasa y Hatha Yoga?</h3>
              <p>La principal diferencia radica en el ritmo y la estructura. El Hatha Yoga se caracteriza por mantener las posturas durante varias respiraciones, con transiciones más pausadas entre ellas, permitiendo un trabajo profundo en cada asana. El Vinyasa, por su parte, enlaza las posturas en secuencias fluidas sincronizadas con la respiración, creando un movimiento continuo similar a una danza meditativa. El Vinyasa suele ser más cardiovascular y dinámico, mientras que el Hatha pone mayor énfasis en la precisión y el mantenimiento de cada postura. Ambos estilos son complementarios y aportan beneficios únicos a tu práctica.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿El Vinyasa Yoga ayuda a perder peso?</h3>
              <p>El Vinyasa Yoga es una práctica dinámica que activa el metabolismo, tonifica los músculos y puede contribuir a la pérdida de peso cuando forma parte de un estilo de vida saludable que incluya una alimentación equilibrada. Las secuencias fluidas generan calor interno que favorece la quema de calorías, mientras que el trabajo muscular integral aumenta el metabolismo basal. Además, la práctica regular de Vinyasa desarrolla mayor consciencia corporal, lo que suele traducirse en mejores hábitos alimenticios y de autocuidado. Sin embargo, es importante entender el yoga como una práctica integral enfocada en el bienestar completo, no solo como una herramienta para el control de peso.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Cuántas veces por semana debo practicar Vinyasa para ver resultados?</h3>
              <p>Los beneficios del Vinyasa se notan desde la primera clase: mayor energía, reducción del estrés y sensación de bienestar general. Para ver cambios significativos en fuerza, flexibilidad y resistencia, recomendamos una práctica de 2-3 veces por semana. La consistencia es más importante que la intensidad o duración de cada sesión. Un ritmo sostenible que puedas mantener a largo plazo producirá mejores resultados que prácticas intensivas pero esporádicas. Muchos de nuestros alumnos complementan las clases en el estudio con sesiones breves en casa, lo que amplifica los beneficios de la práctica.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿El Vinyasa es demasiado intenso para personas con limitaciones físicas?</h3>
              <p>El Vinyasa es adaptable a diferentes condiciones físicas y nuestros profesores están capacitados para ofrecer modificaciones para cada situación particular. Si tienes lesiones, condiciones crónicas o limitaciones específicas, te recomendamos mencionarlo al profesor antes de la clase para recibir sugerencias personalizadas. También ofrecemos clases de Vinyasa Suave especialmente diseñadas para quienes necesitan un enfoque más gentil. La esencia del Vinyasa está en la sincronización del movimiento con la respiración, no necesariamente en la intensidad física, por lo que es posible disfrutar de sus beneficios adaptando la práctica a tus necesidades.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿El Vinyasa Yoga puede complementar otros deportes?</h3>
              <p>Absolutamente. El Vinyasa Yoga es un complemento ideal para cualquier actividad deportiva. Para corredores, ciclistas y deportes de impacto, aporta flexibilidad y movilidad articular que previene lesiones. Para deportes de fuerza como halterofilia o crossfit, mejora la recuperación muscular y el rango de movimiento. Para deportistas de equipo, desarrolla equilibrio, coordinación y concentración. Además, las técnicas respiratorias del yoga optimizan la capacidad pulmonar, beneficiando el rendimiento en cualquier disciplina. Muchos atletas profesionales incorporan el Vinyasa en su entrenamiento para mejorar no solo sus capacidades físicas sino también la resistencia mental y la capacidad de mantener la calma bajo presión.</p>
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
                <p className="italic mb-4">"El Vinyasa en Centro Mandala ha transformado no solo mi cuerpo sino mi forma de afrontar la vida. Tras años de intenso trabajo de oficina con dolores crónicos de espalda y alto estrés, encontré en estas clases un espacio donde reconectar conmigo mismo mientras fortalecía mi cuerpo. Las secuencias fluidas y la atención a la respiración me han enseñado a mantener la calma en situaciones difíciles y a afrontar los desafíos con una mente más clara. Andrea crea clases que son físicamente desafiantes pero accesibles para todos los niveles."</p>
                <p className="font-medium">Roberto, 37 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como corredora de larga distancia, siempre tuve problemas con la rigidez muscular y lesiones recurrentes. El Vinyasa Yoga con Marcos ha sido el complemento perfecto para mi entrenamiento. La fluidez de los movimientos y el trabajo de flexibilidad han mejorado enormemente mi rendimiento deportivo y mi tiempo de recuperación. Pero lo que más valoro es cómo ha cambiado mi relación con mi cuerpo: he aprendido a escucharlo y respetarlo, a entrenar con más inteligencia y menor riesgo de lesiones. Las clases son dinámicas y nunca aburridas, cada día es una experiencia diferente."</p>
                <p className="font-medium">Laura, 31 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"A mis 58 años, nunca pensé que podría disfrutar de una clase tan dinámica como el Vinyasa. Tenía miedo de que fuera demasiado exigente para mi condición física, pero los profesores del Centro Mandala ofrecen opciones para todos los niveles. Empecé hace un año y la diferencia es asombrosa: más energía, menos dolores articulares y una flexibilidad que no tenía ni de joven. Las secuencias fluidas son como una meditación en movimiento que calma mi mente después de un día estresante. Además, la comunidad de practicantes es acogedora y motivadora. El Vinyasa me ha demostrado que nunca es tarde para cuidar tu cuerpo y mente."</p>
                <p className="font-medium">Manuel, 58 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
              Descubre el Vinyasa Yoga en Ourense
            </h2>
            <p className="text-lg text-center mb-8">
              Experimenta la fusión perfecta de movimiento, respiración y presencia. Te invitamos a conocer el Vinyasa Yoga con una primera clase gratuita en el Centro Mandala Ourense.
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
              "El yoga es el viaje del ser, a través del ser, hacia el ser." — Bhagavad Gita
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}