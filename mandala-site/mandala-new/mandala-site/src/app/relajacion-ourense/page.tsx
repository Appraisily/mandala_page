import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Relajación Ourense | Mandala | Técnicas para Reducir el Estrés',
  description: 'Centro especializado en técnicas de relajación en Ourense. Yoga Nidra, meditación, respiración consciente y métodos efectivos para combatir el estrés y la ansiedad.',
  keywords: 'relajación ourense, técnicas relajación ourense, reducir estrés ourense, yoga nidra ourense, meditación relajante ourense',
}

export default function RelajacionOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Relajación en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Técnicas efectivas para reducir el estrés y encontrar calma interior
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/relaxation-center.jpg" 
            alt="Centro de relajación Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Un oasis de calma en medio del ritmo urbano
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            La Importancia de la Relajación en el Mundo Actual
          </h2>
          <p className="text-lg mb-6">
            En nuestra sociedad acelerada, el estrés crónico se ha convertido en una epidemia silenciosa que afecta a nuestra salud física y mental. En Mandala entendemos la <strong>relajación en Ourense</strong> como una necesidad vital, no un lujo, para mantener el equilibrio y bienestar en nuestras vidas.
          </p>
          <p className="text-lg mb-6">
            Las técnicas de relajación que enseñamos son herramientas poderosas respaldadas tanto por la sabiduría antigua como por la ciencia moderna. Estudios recientes demuestran que la práctica regular de relajación profunda reduce significativamente los niveles de cortisol (hormona del estrés), mejora la calidad del sueño, fortalece el sistema inmunológico y aumenta la claridad mental.
          </p>
          <p className="text-lg mb-8">
            Ya sea que enfrentas estrés laboral, ansiedad, insomnio o simplemente buscas un espacio para recargar energías, nuestro centro especializado en <strong>relajación en Ourense</strong> te ofrece métodos efectivos adaptados a tus necesidades específicas.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Reserva Tu Sesión de Relajación</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Métodos de Relajación que Ofrecemos
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/yoga-nidra.jpg" 
                    alt="Yoga Nidra para relajación en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoga Nidra</h3>
                  <p className="mb-4">El Yoga Nidra o "yoga del sueño consciente" es una poderosa técnica de <strong>relajación en Ourense</strong> que te guía a un estado de consciencia entre la vigilia y el sueño:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Induce una relajación sistemática y profunda de todo el cuerpo</li>
                    <li>45 minutos equivalen a 3 horas de sueño en términos de recuperación</li>
                    <li>Reduce significativamente los niveles de estrés y ansiedad</li>
                    <li>Mejora la calidad del sueño y combate el insomnio</li>
                    <li>Accesible para todos, independientemente de la condición física</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/nidra-yoga-meditacion">Descubre nuestras sesiones de Yoga Nidra →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/meditation-relaxation.jpg" 
                    alt="Meditación para relajación en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Meditación Guiada</h3>
                  <p className="mb-4">Nuestras sesiones de meditación guiada son perfectas para quienes buscan calmar la mente y encontrar paz interior:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Técnicas accesibles incluso para principiantes</li>
                    <li>Guiadas por instructores experimentados</li>
                    <li>Diferentes enfoques: atención plena, visualización, compasión</li>
                    <li>Reducen el diálogo mental negativo y la rumiación</li>
                    <li>Mejoran la capacidad de concentración y claridad mental</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/nidra-yoga-meditacion">Conoce nuestras meditaciones guiadas →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/breathing-techniques.jpg" 
                    alt="Técnicas de respiración para relajación en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Pranayama: Técnicas de Respiración</h3>
                  <p className="mb-4">El control consciente de la respiración es una de las formas más rápidas y efectivas de inducir la <strong>relajación en Ourense</strong>:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Activa el sistema nervioso parasimpático (responsable de la relajación)</li>
                    <li>Técnicas como respiración alterna, respiración cuadrada y ujjayi</li>
                    <li>Efectivas para momentos de ansiedad aguda o ataques de pánico</li>
                    <li>Fáciles de aprender y aplicar en cualquier momento del día</li>
                    <li>Mejoran la oxigenación y la energía vital</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/contacto">Consulta nuestros talleres de respiración →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/restorative-yoga.jpg" 
                    alt="Yoga restaurativo para relajación en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoga Restaurativo</h3>
                  <p className="mb-4">Un estilo de yoga suave diseñado específicamente para la relajación profunda y la recuperación:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Posturas pasivas mantenidas durante varios minutos</li>
                    <li>Uso de props (cojines, mantas, bloques) para máximo confort</li>
                    <li>Ideal para recuperación de lesiones, fatiga crónica o burnout</li>
                    <li>Estimula la regeneración tisular y celular</li>
                    <li>Accesible para todos los niveles y condiciones físicas</li>
                  </ul>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/hatha-yoga">Más sobre nuestras clases restaurativas →</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Otras Técnicas de Relajación</h3>
            <p className="text-center mb-6">Complementamos nuestras prácticas principales con estas técnicas adicionales:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Relajación Progresiva</h4>
                <p>Método de tensión-relajación muscular que enseña a identificar y liberar tensiones inconscientes en el cuerpo, creando una sensación de profundo alivio.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Visualización Curativa</h4>
                <p>Uso del poder de la imaginación para crear imágenes mentales que inducen estados de calma y activación de los mecanismos de autocuración del cuerpo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Baños de Sonido</h4>
                <p>Inmersión en las vibraciones de cuencos tibetanos, gongs y otros instrumentos que facilitan un estado alterado de consciencia propicio para la relajación profunda.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios de la Relajación Regular
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Físicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción de la tensión muscular</p>
                      <p className="text-sm text-muted-foreground">Alivio de dolores crónicos en cuello, hombros y espalda</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Normalización de la presión arterial</p>
                      <p className="text-sm text-muted-foreground">Especialmente beneficioso para personas con hipertensión</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejora del sistema inmunológico</p>
                      <p className="text-sm text-muted-foreground">Mayor resistencia a enfermedades comunes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Optimización de la digestión</p>
                      <p className="text-sm text-muted-foreground">Reducción de síntomas de colon irritable y otras afecciones digestivas</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Mentales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción significativa de la ansiedad</p>
                      <p className="text-sm text-muted-foreground">Dismninución de pensamientos rumiativos y preocupaciones</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejora de la concentración</p>
                      <p className="text-sm text-muted-foreground">Mayor capacidad de enfoque y productividad</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Claridad mental</p>
                      <p className="text-sm text-muted-foreground">Toma de decisiones más efectiva y resolución de problemas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejora del sueño</p>
                      <p className="text-sm text-muted-foreground">Mayor facilidad para conciliar el sueño y descanso más reparador</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Emocionales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mayor equilibrio emocional</p>
                      <p className="text-sm text-muted-foreground">Menos reactividad ante situaciones estresantes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Aumento de la sensación de bienestar</p>
                      <p className="text-sm text-muted-foreground">Mayor presencia de emociones positivas en el día a día</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Reducción de síntomas depresivos</p>
                      <p className="text-sm text-muted-foreground">Complemento efectivo en tratamientos de depresión leve a moderada</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejor gestión emocional</p>
                      <p className="text-sm text-muted-foreground">Capacidad de procesar emociones difíciles de forma saludable</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios en la Vida Diaria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejora en las relaciones personales</p>
                      <p className="text-sm text-muted-foreground">Mayor paciencia y capacidad de escucha</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mayor rendimiento laboral</p>
                      <p className="text-sm text-muted-foreground">Mejor gestión del tiempo y prioridades</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mejor toma de decisiones</p>
                      <p className="text-sm text-muted-foreground">Elecciones más alineadas con valores personales</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Mayor disfrute del momento presente</p>
                      <p className="text-sm text-muted-foreground">Capacidad de apreciar las pequeñas cosas de la vida</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Programas de Relajación Específicos
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">Programa Anti-Estrés</h3>
                <p className="mb-4">Un ciclo de 8 semanas diseñado para quienes sufren de estrés crónico o burnout:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Combinación de yoga suave, meditación y técnicas de respiración</li>
                  <li>Una sesión semanal de 90 minutos en grupo</li>
                  <li>Material para práctica diaria en casa (15-20 minutos)</li>
                  <li>Evaluación inicial y seguimiento personalizado</li>
                  <li>Grupos reducidos (máximo 8 personas)</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>180€ ciclo completo (incluye material y sesión individual)</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">Programa para Mejorar el Sueño</h3>
                <p className="mb-4">Específicamente diseñado para personas con problemas de insomnio o sueño de baja calidad:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Yoga Nidra y técnicas específicas de preparación para el descanso</li>
                  <li>6 semanas de duración, una sesión semanal</li>
                  <li>Análisis de hábitos de sueño y recomendaciones personalizadas</li>
                  <li>Grabaciones para practicar en casa antes de dormir</li>
                  <li>Seguimiento de la calidad del sueño</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>150€ programa completo (incluye materiales y seguimiento)</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">Programa de Relajación para Empresas</h3>
                <p className="mb-4">Llevamos la <strong>relajación en Ourense</strong> directamente a tu lugar de trabajo:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Sesiones de 30-45 minutos adaptadas al entorno laboral</li>
                  <li>Técnicas rápidas y efectivas que pueden practicarse en la oficina</li>
                  <li>Formato flexible: sesiones semanales o quincenales</li>
                  <li>Beneficios comprobados: reducción del absentismo y aumento de productividad</li>
                  <li>Posibilidad de combinar con talleres de gestión del estrés</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>Presupuesto personalizado según necesidades de la empresa</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3 text-brand-purple">Sesiones Individuales de Relajación Profunda</h3>
                <p className="mb-4">Atención personalizada para necesidades específicas:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Evaluación detallada y diseño de práctica a medida</li>
                  <li>Ideal para personas con ansiedad severa o situaciones particulares</li>
                  <li>Combinación de diferentes técnicas según tus necesidades</li>
                  <li>60-90 minutos de duración por sesión</li>
                  <li>Plan de práctica para casa adaptado a tu rutina</li>
                </ul>
                <div className="bg-brand-purple/5 p-4 rounded-lg">
                  <p className="font-medium text-brand-purple mb-1">Inversión:</p>
                  <p>Primera sesión: 60€ | Sesiones siguientes: 50€ | Bono 5 sesiones: 225€</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/contacto">Consulta por Tu Programa Ideal</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Testimonios de Relajación
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Llevo años sufriendo de ansiedad, y he probado de todo. Las sesiones de Yoga Nidra en Mandala han sido lo único que realmente me ha ayudado a encontrar momentos de verdadera calma. Después de seis semanas practicando regularmente, mi médico me ha podido reducir la medicación. La relajación profunda ha cambiado literalmente mi vida."</p>
                <p className="font-medium">Carlos M., 37 años, ingeniero informático</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como empresaria, el estrés era parte de mi día a día. Consideraba que la tensión constante era el precio a pagar por el éxito. En Mandala me enseñaron que la verdadera productividad viene cuando la mente está en calma. Las técnicas de relajación que he aprendido no solo me han liberado de migrañas crónicas, sino que ahora tomo mejores decisiones y disfruto más de mi trabajo."</p>
                <p className="font-medium">María L., 45 años, directora de marketing</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Siempre pensé que no estaba hecho para meditar. Mi mente nunca paraba y me frustraba intentarlo. El enfoque práctico de Mandala hacia la relajación cambió mi perspectiva. Me enseñaron que no se trata de 'no pensar', sino de relacionarme diferente con mis pensamientos. Ahora duermo mejor, me relaciono mejor con mi familia y tengo herramientas para los momentos difíciles."</p>
                <p className="font-medium">Alberto S., 52 años, profesor</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestro Equipo Especializado en Relajación
          </h2>
          
          <p className="text-lg mb-8">
            En Mandala contamos con profesionales formados específicamente en técnicas de <strong>relajación en Ourense</strong>, con años de experiencia y práctica personal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/relaxation-expert1.jpg" 
                    alt="Especialista en relajación Laura Fernández" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Laura Fernández</h3>
                <p className="text-muted-foreground mb-4">Experta en Yoga Nidra</p>
                <p className="text-center mb-4">Formada en India con los mayores exponentes del Yoga Nidra tradicional, Laura ha desarrollado un enfoque único que combina la tradición con los avances en neurociencia.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/relaxation-expert2.jpg" 
                    alt="Especialista en relajación Miguel Torres" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Miguel Torres</h3>
                <p className="text-muted-foreground mb-4">Instructor de Meditación y Mindfulness</p>
                <p className="text-center mb-4">Con más de 10 años de práctica personal y múltiples retiros, Miguel tiene el don de hacer la meditación accesible incluso para los más escépticos y mentes inquietas.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/relaxation-expert3.jpg" 
                    alt="Especialista en relajación Ana García" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Ana García</h3>
                <p className="text-muted-foreground mb-4">Terapeuta de Yoga Restaurativo</p>
                <p className="text-center mb-4">Especializada en adaptaciones terapéuticas, Ana trabaja con personas que sufren ansiedad, insomnio y estrés crónico, creando secuencias personalizadas para cada necesidad.</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Relajación
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cuánto tiempo se tarda en notar los beneficios de la relajación?</h3>
              <p>La mayoría de las personas experimentan beneficios inmediatos después de una sola sesión, como sensación de ligereza y calma mental. Para cambios más profundos y duraderos, como reducción significativa del estrés crónico o mejora del sueño, se recomienda una práctica regular durante 3-4 semanas. Los estudios muestran que la práctica constante produce cambios neurológicos medibles en aproximadamente 8 semanas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Necesito experiencia previa en yoga o meditación?</h3>
              <p>En absoluto. Nuestras técnicas de <strong>relajación en Ourense</strong> están diseñadas para ser accesibles a todas las personas, independientemente de su experiencia previa. De hecho, muchas veces quienes nunca han meditado o practicado yoga experimentan efectos muy profundos en sus primeras sesiones, precisamente por la ausencia de expectativas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Puedo practicar relajación si tengo problemas físicos o lesiones?</h3>
              <p>Sí, la mayoría de nuestras técnicas de relajación no requieren esfuerzo físico y pueden adaptarse a cualquier condición. El Yoga Nidra, por ejemplo, se practica completamente inmóvil, tumbado o sentado cómodamente. Para personas con condiciones específicas (dolor crónico, fibromialgia, etc.), ofrecemos adaptaciones especiales y apoyo adicional con props como mantas, cojines o sillas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Es la relajación compatible con tratamientos médicos?</h3>
              <p>Absolutamente. Las técnicas de relajación actúan como un complemento excelente a tratamientos médicos convencionales para condiciones como ansiedad, depresión, insomnio, hipertensión y dolor crónico. Múltiples estudios han demostrado que la relajación profunda puede potenciar la efectividad de medicamentos y reducir efectos secundarios. No obstante, siempre recomendamos informar a tu médico sobre todas las prácticas que realizas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cuánto tiempo debo dedicar diariamente a la relajación?</h3>
              <p>Para ver resultados significativos, recomendamos empezar con 10-15 minutos diarios. Es mejor una práctica breve pero constante que sesiones largas esporádicas. Con el tiempo, puedes aumentar gradualmente hasta 20-30 minutos. También ofrecemos técnicas de "micro-relajación" de 2-3 minutos que pueden aplicarse varias veces al día, especialmente útiles en momentos de estrés agudo.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Comienza Tu Viaje hacia la Calma Interior
            </h2>
            <p className="text-lg text-center mb-8">
              En un mundo lleno de estímulos y exigencias constantes, darte el tiempo para la relajación profunda no es un lujo, sino una necesidad. En Mandala te ofrecemos el espacio, las técnicas y el acompañamiento para redescubrir tu equilibrio natural.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reserva Tu Primera Sesión</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/yoga/nidra-yoga-meditacion">Descubre Yoga Nidra</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}