import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yoga para Principiantes en Ourense | Centro Mandala | Primera Clase Gratis',
  description: 'Clases de yoga para principiantes en Ourense, en ambiente acogedor y sin presiones. Profesores experimentados, grupos reducidos y primera clase de prueba gratis.',
  keywords: 'yoga para principiantes ourense, clases yoga principiantes, yoga inicial, empezar yoga ourense, yoga primera vez',
}

export default function YogaParaPrincipiantesOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Yoga para Principiantes en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Comienza tu camino en el yoga con confianza y apoyo
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/beginner-yoga.jpg" 
            alt="Clase de yoga para principiantes en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              El yoga es para todos, independientemente de tu edad, flexibilidad o condición física
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Yoga para Principiantes: Tu Primer Paso
          </h2>
          <p className="text-lg mb-6">
            En el <strong>Centro Mandala Ourense</strong> hemos diseñado clases especiales de <strong>yoga para principiantes</strong> que te permitirán iniciarte en esta práctica milenaria de forma segura, gradual y agradable.
          </p>
          <p className="text-lg mb-6">
            Entendemos que dar el primer paso puede generar dudas o incluso intimidar: ¿Seré lo suficientemente flexible? ¿Podré seguir la clase? ¿Me sentiré fuera de lugar? Nuestro enfoque está pensado precisamente para eliminar estas barreras y crear un entorno donde puedas descubrir el yoga a tu propio ritmo.
          </p>
          <p className="text-lg mb-8">
            Nuestras clases de <strong>yoga para principiantes en Ourense</strong> combinan posturas básicas, técnicas de respiración sencillas y ejercicios de relajación, todo ello explicado con claridad y adaptado a diferentes niveles físicos.
          </p>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">¡Primera clase de prueba gratuita!</h3>
                <p className="mb-4">Te invitamos a experimentar una clase de yoga para principiantes sin ningún compromiso. Ven, conoce nuestro espacio y descubre cómo el yoga puede transformar tu vida.</p>
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
            ¿Por qué elegir nuestras clases para principiantes?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/supportive-teachers.jpg" 
                  alt="Profesores comprensivos para yoga principiantes en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Profesores Comprensivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nuestros instructores están especialmente formados para acompañar a principiantes, con paciencia para explicar cada postura en detalle y ofrecer alternativas adaptadas a diferentes capacidades físicas.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/step-by-step.jpg" 
                  alt="Aprendizaje paso a paso para yoga principiantes en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Aprendizaje Paso a Paso</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Seguimos una progresión lógica que te permite construir tu práctica sobre bases sólidas. Cada clase se construye sobre lo aprendido anteriormente, avanzando a un ritmo adecuado para principiantes.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/no-judgement.jpg" 
                  alt="Ambiente sin juicios para yoga principiantes en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Ambiente Sin Juicios</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Creamos un espacio donde no existe la competitividad, donde cada persona puede practicar a su propio ritmo sin sentirse observada o comparada. El respeto y la aceptación son valores fundamentales.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Grupos Reducidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Limitamos el número de alumnos por clase para garantizar una atención personalizada. Esto nos permite corregir posturas de forma individual y resolver todas las dudas que puedan surgir durante la práctica.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Material Incluido</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Proporcionamos todos los elementos necesarios para tu práctica: esterillas, bloques, cintas, mantas y bolsters. No necesitas traer nada más que ropa cómoda y ganas de aprender.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            ¿Qué aprenderás en nuestras clases para principiantes?
          </h2>
          
          <div className="space-y-8">
            <div className="bg-brand-beige p-8 rounded-xl">
              <h3 className="text-2xl font-medium mb-4 text-brand-purple">Fundamentos del Yoga</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">En nuestras clases de <strong>yoga para principiantes en Ourense</strong> aprenderás los elementos básicos que constituyen una práctica completa:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Posturas fundamentales (asanas) y su alineación correcta</li>
                    <li>Técnicas de respiración consciente (pranayama)</li>
                    <li>Principios de relajación profunda</li>
                    <li>Introducción a la meditación y atención plena</li>
                    <li>Filosofía básica del yoga aplicada a la vida diaria</li>
                  </ul>
                </div>
                <div className="relative h-[220px] rounded-lg overflow-hidden">
                  <Image 
                    src="/images/yoga-fundamentals.jpg" 
                    alt="Fundamentos del yoga para principiantes" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <h3 className="text-2xl font-medium mb-4 text-brand-purple">Posturas Esenciales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="order-2 md:order-1 relative h-[220px] rounded-lg overflow-hidden">
                  <Image 
                    src="/images/essential-poses.jpg" 
                    alt="Posturas esenciales para principiantes de yoga" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="mb-4">Aprenderás gradualmente las posturas básicas que forman el núcleo de la práctica de yoga:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Posturas de pie para fortalecer y mejorar el equilibrio</li>
                    <li>Flexiones hacia adelante para aumentar la flexibilidad</li>
                    <li>Posturas sentadas para calmar la mente</li>
                    <li>Torsiones suaves para la columna vertebral</li>
                    <li>Posturas restaurativas para la relajación profunda</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <h3 className="text-2xl font-medium mb-4 text-brand-purple">Consciencia Corporal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">Uno de los mayores beneficios del yoga para principiantes es el desarrollo de una mayor conexión con tu cuerpo:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Aprenderás a reconocer tus límites y respetarlos</li>
                    <li>Desarrollarás una mejor postura en tu vida diaria</li>
                    <li>Comprenderás la diferencia entre estiramiento saludable y forzar</li>
                    <li>Identificarás patrones de tensión en tu cuerpo</li>
                    <li>Cultivarás una relación más positiva con tu cuerpo</li>
                  </ul>
                </div>
                <div className="relative h-[220px] rounded-lg overflow-hidden">
                  <Image 
                    src="/images/body-awareness.jpg" 
                    alt="Consciencia corporal en yoga para principiantes" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios para Principiantes
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-sm rounded-lg p-6 border border-brand-teal/20">
              <div className="text-brand-teal text-3xl mb-3">❯</div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Reducción del Estrés</h3>
              <p>Desde la primera clase, aprenderás técnicas de respiración que activan tu sistema nervioso parasimpático, reduciendo notablemente los niveles de estrés y ansiedad.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border border-brand-teal/20">
              <div className="text-brand-teal text-3xl mb-3">❯</div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Mayor Flexibilidad</h3>
              <p>Gradualmente notarás una mejora en tu rango de movimiento, sin necesidad de forzar. El yoga trabaja la flexibilidad de forma progresiva y respetuosa.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border border-brand-teal/20">
              <div className="text-brand-teal text-3xl mb-3">❯</div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Fortalecimiento</h3>
              <p>Incluso las posturas más básicas construyen fuerza muscular, especialmente en el core, piernas y brazos, utilizando tu propio peso corporal de forma equilibrada.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border border-brand-teal/20">
              <div className="text-brand-teal text-3xl mb-3">❯</div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Mejor Postura</h3>
              <p>Corregirás patrones posturales inadecuados que pueden causar dolor, creando mayor conciencia de tu alineación tanto en el yoga como en actividades diarias.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border border-brand-teal/20">
              <div className="text-brand-teal text-3xl mb-3">❯</div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Calidad del Sueño</h3>
              <p>Muchos principiantes reportan una mejora significativa en su descanso nocturno desde las primeras semanas de práctica regular.</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-6 border border-brand-teal/20">
              <div className="text-brand-teal text-3xl mb-3">❯</div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Equilibrio Físico y Mental</h3>
              <p>El yoga integra cuerpo y mente, ayudándote a encontrar un equilibrio que se traduce en mayor bienestar general y claridad mental.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/contacto">Reserva Tu Clase Introductoria</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Horarios Especiales para Principiantes
          </h2>
          
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <p className="text-center mb-6">En Mandala Ourense ofrecemos clases específicas para principiantes en diferentes horarios para adaptarnos a tu rutina:</p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-brand-purple/10">
                  <tr>
                    <th className="p-3 text-left">Día</th>
                    <th className="p-3 text-left">Horario</th>
                    <th className="p-3 text-left">Profesor/a</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Lunes</td>
                    <td className="p-3">10:00 - 11:15</td>
                    <td className="p-3">María</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Lunes</td>
                    <td className="p-3">19:30 - 20:45</td>
                    <td className="p-3">Carlos</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Miércoles</td>
                    <td className="p-3">18:00 - 19:15</td>
                    <td className="p-3">Laura</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Jueves</td>
                    <td className="p-3">11:30 - 12:45</td>
                    <td className="p-3">María</td>
                  </tr>
                  <tr>
                    <td className="p-3">Sábado</td>
                    <td className="p-3">11:00 - 12:30</td>
                    <td className="p-3">Carlos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-center mt-6 text-muted-foreground">Los horarios pueden estar sujetos a cambios estacionales. Consulta nuestra página de horarios o contáctanos para confirmar.</p>
          </div>
          
          <div className="flex justify-center">
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/horarios-precios">Ver Todos los Horarios y Precios</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes de los Principiantes
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Necesito ser flexible para empezar a practicar yoga?</h3>
              <p>Absolutamente no. Es un mito común que necesitas ser flexible para hacer yoga. En realidad, es exactamente lo contrario: practicas yoga para volverte más flexible, entre otros beneficios. Nuestras clases para principiantes en Ourense ofrecen variantes y adaptaciones para todo tipo de cuerpos y niveles de flexibilidad.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Qué ropa debo llevar a clase?</h3>
              <p>Simplemente ropa cómoda que permita el movimiento. No necesitas ropa específica de yoga ni marcas caras. Unos leggings o pantalones de chándal con una camiseta cómoda son perfectos. Practicamos descalzos, así que no necesitas calzado especial.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">Tengo una lesión/condición médica, ¿puedo practicar yoga?</h3>
              <p>En muchos casos sí, pero es importante informar a tu profesor antes de la clase. Nuestros instructores están capacitados para ofrecer adaptaciones seguras y alternativas para diferentes condiciones. Para casos específicos, recomendamos consultar primero con tu médico y considerar clases individuales inicialmente.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Con qué frecuencia debería practicar para notar beneficios?</h3>
              <p>Incluso una clase semanal puede aportar beneficios, pero idealmente, recomendamos 2-3 sesiones por semana para principiantes. Recuerda que una práctica breve pero regular es más beneficiosa que sesiones ocasionales más largas.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Tengo que saber respirar de forma especial?</h3>
              <p>No te preocupes, enseñamos las técnicas de respiración desde cero y de forma gradual. La respiración consciente es parte del aprendizaje en las clases para principiantes, no un prerrequisito.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Cuándo debería avanzar a un nivel intermedio?</h3>
              <p>No hay un tiempo fijo, cada persona progresa a su ritmo. Generalmente, después de 3-6 meses de práctica regular, podrías considerar incorporar algunas clases de nivel intermedio. Nuestros profesores te guiarán cuando sea el momento adecuado.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Testimonios de Principiantes
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Siempre pensé que el yoga no era para mí porque no soy flexible, pero las clases para principiantes en Mandala me demostraron lo contrario. Los profesores son increíblemente pacientes y explican todo paso a paso. Después de solo dos meses, no solo noto más flexibilidad sino que duermo mejor y manejo mejor el estrés del trabajo."</p>
                <p className="font-medium">Alejandro, 42 años - Comenzó hace 3 meses</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Me inscribí en las clases para principiantes después de una lesión en la espalda, por recomendación de mi fisioterapeuta. Lo que más me ha sorprendido es cómo los profesores adaptan las posturas a mis necesidades particulares. No hay presión para hacer las posturas 'perfectamente' y eso crea un ambiente donde realmente disfruto aprender."</p>
                <p className="font-medium">Lucía, 35 años - Comenzó hace 6 meses</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"A mis 67 años, pensaba que era demasiado mayor para empezar algo nuevo como el yoga. Estaba equivocado. Las clases para principiantes están diseñadas para todos, independientemente de la edad o condición física. Me siento más ágil, con mejor equilibrio y he hecho nuevas amistades. Recomendaría estas clases a cualquier persona que esté dudando."</p>
                <p className="font-medium">Manuel, 67 años - Comenzó hace 4 meses</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
              ¿Listo para dar tu primer paso en el yoga?
            </h2>
            <p className="text-lg text-center mb-8">
              Te invitamos a experimentar una clase de yoga para principiantes en nuestro centro de Ourense, sin compromiso y completamente gratuita.
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
              Todos fuimos principiantes alguna vez. Tu viaje en el yoga comienza con un solo paso.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}