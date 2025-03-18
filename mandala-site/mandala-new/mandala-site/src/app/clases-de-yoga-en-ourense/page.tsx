import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Clases de Yoga en Ourense | Todos los Niveles | Centro Mandala',
  description: 'Descubre nuestras clases de yoga en Ourense para todos los niveles. Hatha, Daoyin, Nidra, meditación y más. Horarios flexibles, profesores cualificados y primera clase gratuita.',
  keywords: 'clases de yoga en ourense, yoga ourense, clases yoga principiantes, horarios yoga ourense, profesores yoga ourense',
}

export default function ClasesDeYogaEnOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Clases de Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Descubre todas nuestras modalidades, horarios y beneficios en Centro Mandala
        </p>
        
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/yoga-class-ourense.jpg" 
            alt="Clases de yoga en Centro Mandala Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Clases para todos los niveles con atención personalizada
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Nuestras Clases de Yoga en Ourense
          </h2>
          <p className="text-lg mb-6">
            En <strong>Centro Mandala Ourense</strong>, ofrecemos una amplia variedad de <strong>clases de yoga</strong> adaptadas a diferentes necesidades, niveles y objetivos. Nuestro enfoque es integral, combinando la práctica física con la respiración consciente y la meditación.
          </p>
          <p className="text-lg mb-6">
            Todas nuestras <strong>clases de yoga en Ourense</strong> son impartidas por profesores certificados con años de experiencia, en un espacio tranquilo y acogedor que invita a la práctica profunda y respetuosa.
          </p>
          <p className="text-lg mb-8">
            Ya sea que estés dando tus primeros pasos en el yoga o desees profundizar en tu práctica, aquí encontrarás la clase perfecta para ti.
          </p>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">¡Primera clase de prueba gratuita!</h3>
                <p className="mb-4">Te invitamos a experimentar cualquiera de nuestras clases de yoga en Ourense sin compromiso. Ven, conoce nuestro espacio y siente los beneficios del yoga por ti mismo.</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  <Link href="/contacto">Reservar Prueba Gratuita</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Modalidades de Yoga que Ofrecemos en Ourense
          </h2>
          
          <div className="space-y-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/hatha-yoga.jpg" 
                    alt="Clase de Hatha Yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Hatha Yoga</h3>
                  <p className="text-muted-foreground mb-4">Ideal para todos los niveles</p>
                  <p className="mb-4">El Hatha Yoga es la forma más tradicional y accesible. Nuestras <strong>clases de Hatha Yoga en Ourense</strong> se centran en posturas básicas (asanas) mantenidas, alineación correcta, respiración consciente y relajación profunda.</p>
                  <p className="mb-6">Perfecto para principiantes y para quienes prefieren una práctica pausada que permita prestar atención a los detalles.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/hatha-yoga">Más información sobre Hatha Yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/daoyin-yoga.jpg" 
                    alt="Clase de Daoyin Yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Daoyin Yoga</h3>
                  <p className="text-muted-foreground mb-4">Fusión de yoga y sabiduría oriental</p>
                  <p className="mb-4">Una práctica única que combina elementos del yoga tradicional con principios de la medicina china antigua. En nuestras <strong>clases de Daoyin Yoga en Ourense</strong> trabajamos con la energía vital a través de movimientos fluidos, respiración y automasaje.</p>
                  <p className="mb-6">Especialmente beneficioso para equilibrar la energía interna y fortalecer los órganos.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/daoyin-yoga">Más información sobre Daoyin Yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/nidra-yoga.jpg" 
                    alt="Clase de Yoga Nidra en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoga Nidra</h3>
                  <p className="text-muted-foreground mb-4">El yoga del sueño consciente</p>
                  <p className="mb-4">El Yoga Nidra es una poderosa técnica de relajación sistemática que induce un estado de calma profunda mientras se mantiene la consciencia. Nuestras <strong>clases de Yoga Nidra en Ourense</strong> son ideales para combatir el estrés y la ansiedad.</p>
                  <p className="mb-6">Una sesión de Yoga Nidra equivale a varias horas de sueño en términos de descanso físico y mental.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/nidra-yoga-meditacion">Más información sobre Yoga Nidra →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/meditation.jpg" 
                    alt="Clase de Meditación en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Meditación</h3>
                  <p className="text-muted-foreground mb-4">Cultiva la atención plena</p>
                  <p className="mb-4">Nuestras <strong>clases de meditación en Ourense</strong> ofrecen técnicas prácticas para calmar la mente, desarrollar la atención plena y conectar con tu sabiduría interior. Enseñamos distintos métodos meditativos accesibles para todos.</p>
                  <p className="mb-6">Perfectas como complemento a tu práctica de yoga o como actividad independiente para gestionar el estrés diario.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/nidra-yoga-meditacion">Más información sobre Meditación →</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Todos los Horarios y Precios</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Clases de Yoga Especializadas en Ourense
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga para Principiantes</CardTitle>
                <CardDescription>Da tus primeros pasos con confianza</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestras <strong>clases de yoga para principiantes en Ourense</strong> están diseñadas especialmente para quienes se acercan al yoga por primera vez. Aprenderás las posturas básicas con instrucciones detalladas y a tu ritmo.</p>
                <p className="mb-4">Los profesores ofrecen variantes adaptadas y correcciones individuales para garantizar una práctica segura y satisfactoria desde el primer día.</p>
                <div className="pt-4">
                  <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full">
                    <Link href="/contacto">Consultar Disponibilidad</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Terapéutico</CardTitle>
                <CardDescription>Enfocado en la salud y recuperación</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestras <strong>clases de yoga terapéutico en Ourense</strong> son ideales para personas con necesidades específicas: dolor de espalda, tensión cervical, recuperación post-lesión, estrés crónico o ansiedad.</p>
                <p className="mb-4">Trabajamos en grupos muy reducidos para ofrecer una atención verdaderamente personalizada, adaptando las técnicas a cada condición.</p>
                <div className="pt-4">
                  <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full">
                    <Link href="/contacto">Consultar Disponibilidad</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga para Adultos Mayores</CardTitle>
                <CardDescription>Mantén la vitalidad a cualquier edad</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestras <strong>clases de yoga para adultos mayores en Ourense</strong> están adaptadas para mantener la flexibilidad, el equilibrio y la fuerza de forma segura y efectiva.</p>
                <p className="mb-4">Trabajamos con movimientos suaves, uso de soportes y técnicas de respiración que mejoran la calidad de vida en esta etapa vital.</p>
                <div className="pt-4">
                  <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full">
                    <Link href="/contacto">Consultar Disponibilidad</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Prenatal</CardTitle>
                <CardDescription>Bienestar durante el embarazo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestras <strong>clases de yoga prenatal en Ourense</strong> ofrecen una práctica segura y beneficiosa para acompañar el embarazo, aliviar molestias comunes y preparar el cuerpo para el parto.</p>
                <p className="mb-4">Impartidas por profesoras especializadas en yoga prenatal, estas clases también son un espacio de conexión con tu bebé y otras futuras madres.</p>
                <div className="pt-4">
                  <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full">
                    <Link href="/contacto">Consultar Disponibilidad</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios de Nuestras Clases de Yoga en Ourense
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Cuerpo Flexible y Fuerte</h3>
              <p>Nuestras clases de yoga en Ourense mejoran progresivamente la flexibilidad, fortalecen los músculos y optimizan la postura corporal.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Alivio del Estrés</h3>
              <p>Aprende técnicas efectivas para reducir la ansiedad, mejorar el manejo del estrés y encontrar calma interior en tu vida diaria.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Respiración Consciente</h3>
              <p>Desarrolla una respiración más profunda y eficiente que oxigena mejor tus células y calma tu sistema nervioso.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Concentración Mejorada</h3>
              <p>Las prácticas de atención en nuestras clases se transfieren a tu vida cotidiana, mejorando tu capacidad de enfoque.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Mejor Descanso</h3>
              <p>Muchos alumnos reportan una mejora significativa en la calidad del sueño tras comenzar a practicar yoga regularmente.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Bienestar Integral</h3>
              <p>Nuestro enfoque holístico integra cuerpo, mente y respiración para un mayor equilibrio en todos los aspectos de tu vida.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Nuestro Compromiso en las Clases de Yoga
          </h2>
          
          <div className="bg-brand-purple/5 p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-brand-teal text-xl mr-4">✓</span>
                <div>
                  <h3 className="font-medium text-xl mb-2 text-brand-purple">Atención Personalizada</h3>
                  <p>Limitamos el número de alumnos por clase para garantizar que cada persona reciba la atención necesaria. Nuestros profesores conocen a cada alumno y adaptan las instrucciones según sus necesidades.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-brand-teal text-xl mr-4">✓</span>
                <div>
                  <h3 className="font-medium text-xl mb-2 text-brand-purple">Ambiente Respetuoso y Acogedor</h3>
                  <p>En nuestras clases de yoga en Ourense, creamos un espacio libre de juicios donde cada persona puede practicar a su propio ritmo. La competitividad no tiene lugar en nuestra filosofía.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-brand-teal text-xl mr-4">✓</span>
                <div>
                  <h3 className="font-medium text-xl mb-2 text-brand-purple">Profesores Cualificados</h3>
                  <p>Todos nuestros instructores poseen certificaciones reconocidas y formación continua, combinando conocimientos técnicos con una práctica personal profunda.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-brand-teal text-xl mr-4">✓</span>
                <div>
                  <h3 className="font-medium text-xl mb-2 text-brand-purple">Instalaciones Confortables</h3>
                  <p>Nuestro centro en Ourense cuenta con salas espaciosas, ventiladas, con temperatura agradable y todos los materiales necesarios para una práctica óptima.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-brand-teal text-xl mr-4">✓</span>
                <div>
                  <h3 className="font-medium text-xl mb-2 text-brand-purple">Evolución Constante</h3>
                  <p>Acompañamos tu progreso ofreciendo nuevos retos y variantes a medida que avanzas en tu práctica, evitando el estancamiento.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Nuestras Clases
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Necesito tener experiencia previa para asistir a las clases?</h3>
              <p>No, tenemos clases específicas para principiantes donde explicamos todo desde cero. Además, en todas nuestras clases regulares los profesores ofrecen alternativas para diferentes niveles.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Qué debo llevar a una clase de yoga?</h3>
              <p>Recomendamos ropa cómoda que permita el movimiento. Disponemos de esterillas y todos los props necesarios, aunque puedes traer los tuyos si lo prefieres.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Con qué frecuencia debería asistir a clases?</h3>
              <p>Para notar beneficios significativos, recomendamos asistir al menos dos veces por semana. Sin embargo, incluso una clase semanal constante produce cambios positivos.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Cuál es la duración de las clases?</h3>
              <p>Nuestras clases de yoga en Ourense tienen una duración de 60 a 90 minutos, dependiendo del tipo de práctica.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Ofrecéis descuentos para estudiantes o jubilados?</h3>
              <p>Sí, disponemos de tarifas reducidas para estudiantes, jubilados y casos especiales. Consulta nuestra página de precios o pregunta en recepción.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Puedo recuperar una clase si no puedo asistir?</h3>
              <p>Los alumnos con bonos o tarifas mensuales pueden recuperar clases perdidas según nuestra política de recuperaciones. Te informaremos al inscribirte.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-6">¿Tienes más preguntas sobre nuestras clases de yoga en Ourense? No dudes en contactarnos.</p>
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              ¡Comienza Tu Camino en el Yoga!
            </h2>
            <p className="text-lg text-center mb-8">
              Te invitamos a experimentar nuestras clases de yoga en Ourense. La primera clase es totalmente gratuita y sin compromiso.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reservar Clase Gratuita</Link>
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