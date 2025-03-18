import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Clases de Yoga en Ourense | Centro Mandala Ourense',
  description: 'Descubre nuestras clases de yoga en Ourense. Hatha, Daoyin, Yoga Nidra y más. Profesores certificados, horarios flexibles y ambiente acogedor. ¡Primera clase de prueba gratis!',
  keywords: 'clases yoga ourense, yoga en ourense, hatha yoga ourense, clases de yoga, centro de yoga ourense',
}

export default function ClasesYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-brand-purple">
          Clases de Yoga en Ourense
        </h1>
        
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/yoga-class-ourense.jpg" 
            alt="Clase de yoga en Mandala Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl font-medium">
              El mejor centro de yoga en el corazón de Ourense
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Descubre Nuestras Clases de Yoga
          </h2>
          <p className="text-lg mb-6">
            En <strong>Mandala Ourense</strong>, ofrecemos una amplia variedad de <strong>clases de yoga</strong> adaptadas a todos los niveles, desde principiantes hasta practicantes avanzados. Nuestro enfoque se centra en crear un ambiente acogedor donde cada persona pueda desarrollar su práctica a su propio ritmo.
          </p>
          <p className="text-lg mb-6">
            Nuestras <strong>clases de yoga en Ourense</strong> combinan posturas físicas (asanas), técnicas de respiración (pranayama) y meditación para proporcionar una experiencia completa que beneficia tanto al cuerpo como a la mente.
          </p>
          <p className="text-lg mb-6">
            Ya sea que busques mejorar tu flexibilidad, reducir el estrés, o simplemente encontrar un momento de paz en tu ajetreada vida, tenemos la clase perfecta para ti en nuestro centro de Ourense.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/horarios-precios">Ver Horarios y Precios</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Estilos de Yoga que Ofrecemos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Hatha Yoga</CardTitle>
                <CardDescription>Ideal para todos los niveles</CardDescription>
              </CardHeader>
              <CardContent>
                <p>El estilo más tradicional que equilibra fuerza y flexibilidad. Nuestras clases de Hatha Yoga en Ourense se centran en posturas fundamentales, perfectas tanto para principiantes como para quienes desean profundizar en la alineación correcta.</p>
                <Button asChild variant="link" className="text-brand-teal mt-4 p-0">
                  <Link href="/yoga/hatha-yoga">Más sobre Hatha Yoga →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Daoyin Yoga</CardTitle>
                <CardDescription>Fusión de yoga y sabiduría china</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Una práctica única que combina movimientos de yoga con principios de la medicina tradicional china. Estas clases en nuestro centro de Ourense son especialmente beneficiosas para la energía vital y el equilibrio interno.</p>
                <Button asChild variant="link" className="text-brand-teal mt-4 p-0">
                  <Link href="/yoga/daoyin-yoga">Más sobre Daoyin Yoga →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Yoga Nidra</CardTitle>
                <CardDescription>El yoga del sueño consciente</CardDescription>
              </CardHeader>
              <CardContent>
                <p>También conocido como "yoga del sueño consciente", esta práctica guiada induce un estado de relajación profunda mientras se mantiene la conciencia. Perfecta para reducir el estrés y mejorar la calidad del sueño.</p>
                <Button asChild variant="link" className="text-brand-teal mt-4 p-0">
                  <Link href="/yoga/nidra-yoga-meditacion">Más sobre Yoga Nidra →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Meditación</CardTitle>
                <CardDescription>Cultiva la paz interior</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Nuestras sesiones de meditación en Ourense ofrecen técnicas prácticas para calmar la mente, aumentar la concentración y desarrollar la atención plena. Complemento perfecto para cualquier práctica de yoga.</p>
                <Button asChild variant="link" className="text-brand-teal mt-4 p-0">
                  <Link href="/yoga/nidra-yoga-meditacion">Más sobre Meditación →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Beneficios de Nuestras Clases de Yoga en Ourense
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Reducción del Estrés</h3>
              <p>Nuestras clases te ayudan a liberarte de las tensiones físicas y mentales de la vida cotidiana.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Mayor Flexibilidad</h3>
              <p>Con una práctica regular, notarás mayor movilidad y menor rigidez en todo tu cuerpo.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Fuerza y Tono Muscular</h3>
              <p>Las posturas de yoga fortalecen de forma natural todos los grupos musculares.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Mejor Postura</h3>
              <p>Corrige desequilibrios y alineación corporal, aliviando dolores crónicos.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Claridad Mental</h3>
              <p>Aprende a calmar la mente y mejorar tu concentración y enfoque.</p>
            </div>
            
            <div className="bg-brand-beige p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Conexión Interior</h3>
              <p>Desarrolla una relación más profunda contigo mismo y con los demás.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            ¿Por Qué Elegir Mandala Ourense?
          </h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-brand-teal mr-3 mt-1">✓</span>
              <p><strong>Profesores certificados</strong> con años de experiencia y formación continua.</p>
            </li>
            <li className="flex items-start">
              <span className="text-brand-teal mr-3 mt-1">✓</span>
              <p><strong>Grupos reducidos</strong> para garantizar atención personalizada.</p>
            </li>
            <li className="flex items-start">
              <span className="text-brand-teal mr-3 mt-1">✓</span>
              <p><strong>Instalaciones acogedoras</strong> con todo el material necesario para tu práctica.</p>
            </li>
            <li className="flex items-start">
              <span className="text-brand-teal mr-3 mt-1">✓</span>
              <p><strong>Horarios flexibles</strong> adaptados a diferentes rutinas diarias.</p>
            </li>
            <li className="flex items-start">
              <span className="text-brand-teal mr-3 mt-1">✓</span>
              <p><strong>Ubicación céntrica</strong> en Ourense, fácilmente accesible.</p>
            </li>
            <li className="flex items-start">
              <span className="text-brand-teal mr-3 mt-1">✓</span>
              <p><strong>Ambiente respetuoso y acogedor</strong> para todos, independientemente de tu nivel.</p>
            </li>
          </ul>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-8">
            <h3 className="font-medium text-xl mb-3 text-brand-purple">Primera Clase de Prueba Gratuita</h3>
            <p className="mb-4">Te invitamos a experimentar nuestras clases de yoga en Ourense sin compromiso. Reserva tu plaza para una clase de prueba gratuita y descubre por ti mismo los beneficios de nuestra práctica.</p>
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Reservar Clase de Prueba</Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Preguntas Frecuentes sobre Nuestras Clases de Yoga
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Necesito experiencia previa para unirme a las clases?</h3>
              <p>No, tenemos clases para todos los niveles, incluyendo principiantes absolutos. Nuestros profesores adaptan las posturas según las necesidades individuales.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Qué debo llevar a una clase de yoga?</h3>
              <p>Ropa cómoda que permita el movimiento. Disponemos de esterillas y props, aunque puedes traer los tuyos si lo prefieres.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Con qué frecuencia debería practicar yoga?</h3>
              <p>Para notar beneficios, recomendamos al menos 1-2 clases semanales. Sin embargo, incluso una clase semanal puede aportar cambios positivos.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Ofrecéis descuentos para estudiantes o personas mayores?</h3>
              <p>Sí, tenemos tarifas especiales para estudiantes, jubilados y descuentos familiares. Consulta nuestra página de precios para más detalles.</p>
            </div>
            
            <div className="flex justify-center mt-10">
              <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                <Link href="/contacto">¿Más Preguntas? Contáctanos</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}