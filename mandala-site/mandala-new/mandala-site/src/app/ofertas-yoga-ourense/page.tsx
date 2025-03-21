import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ofertas Yoga Ourense | Mandala | Promociones Especiales',
  description: 'Descubre las mejores ofertas para practicar yoga en Ourense. Centro Mandala ofrece descuentos, promociones y bonos exclusivos para nuevos y actuales alumnos.',
  keywords: 'ofertas yoga ourense, descuentos yoga ourense, promociones yoga ourense, bonos yoga mandala ourense',
}

export default function OfertasYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Ofertas de Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Accede a todas nuestras promociones y descuentos exclusivos
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/yoga-offers.jpg" 
            alt="Ofertas de yoga en el centro Mandala de Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Practica yoga de calidad a precios accesibles
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Promociones Actuales
          </h2>
          <p className="text-lg mb-6">
            En Mandala creemos que el yoga debe ser accesible para todos. Por eso, ofrecemos regularmente <strong>ofertas de yoga en Ourense</strong> que permiten disfrutar de nuestras clases a precios reducidos o con beneficios adicionales.
          </p>
          <p className="text-lg mb-6">
            Nuestras promociones están diseñadas tanto para nuevos alumnos que quieren iniciarse en el yoga, como para practicantes habituales que buscan opciones económicas para continuar su práctica.
          </p>
          <p className="text-lg mb-8">
            Todas nuestras <strong>ofertas de yoga en Ourense</strong> son por tiempo limitado, así que te recomendamos aprovecharlas mientras estén disponibles. ¡No esperes más para cuidar de tu bienestar!
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Consultar Disponibilidad</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Ofertas Destacadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-brand-teal border-2 hover:shadow-md transition-shadow overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-brand-teal text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <div className="bg-brand-teal/20 px-6 py-4 text-center">
                <h3 className="text-2xl font-medium text-brand-teal">Oferta Nuevos Alumnos</h3>
                <p className="text-muted-foreground">Para quienes se inician en el yoga</p>
              </div>
              <div className="p-6 text-center flex-grow">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-brand-teal">1ª Clase GRATIS</p>
                  <p className="text-xl">+ 20% dto. en mensualidad</p>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Primera clase de prueba totalmente gratuita</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20% descuento en tu primera mensualidad</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sin matrícula de inscripción</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Asesoramiento personalizado inicial</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mb-4">Válido para nuevos alumnos que nunca han practicado en Mandala. No acumulable con otras ofertas.</p>
              </div>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  <Link href="/contacto">Reservar Ahora</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-brand-purple border-2 hover:shadow-md transition-shadow overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-brand-purple text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Limitado
              </div>
              <div className="bg-brand-purple/20 px-6 py-4 text-center">
                <h3 className="text-2xl font-medium text-brand-purple">Oferta de Verano</h3>
                <p className="text-muted-foreground">Válida hasta el 31 de agosto</p>
              </div>
              <div className="p-6 text-center flex-grow">
                <div className="mb-4">
                  <p className="text-3xl font-bold text-brand-purple">3 meses al precio de 2</p>
                  <p className="text-xl">¡Ahorra un 33%!</p>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Paga 2 meses y disfruta de 3 meses completos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Acceso a todas las clases del centro</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Horario flexible para el verano</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15% descuento en talleres especiales</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mb-4">Oferta por tiempo limitado. Plazas limitadas. No acumulable con otros descuentos.</p>
              </div>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                  <Link href="/contacto">Aprovechar Oferta</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="bg-brand-purple/10 px-6 py-4">
                <h3 className="text-xl font-medium text-brand-purple">Bono Amigo</h3>
              </div>
              <CardContent className="pt-6">
                <p className="text-lg font-medium mb-4">Trae a un amigo y ambos recibís:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>25% de descuento en la próxima mensualidad para ti</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Matrícula gratis y 15% descuento en la primera mensualidad para tu amigo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Un regalo sorpresa para compartir</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">Esta oferta de yoga en Ourense no tiene límite: ¡puedes traer a tantos amigos como quieras!</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="bg-brand-purple/10 px-6 py-4">
                <h3 className="text-xl font-medium text-brand-purple">Oferta Early Bird</h3>
              </div>
              <CardContent className="pt-6">
                <p className="text-lg font-medium mb-4">Para las clases de 7:30 a 9:00h:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15% de descuento en la mensualidad de mañanas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clases sueltas a 10€ en horario matutino</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Incluye infusión energizante tras la clase</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">Perfecta para quienes quieren empezar el día con energía y aprovechar al máximo la jornada.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Descuentos Especiales Permanentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-purple">Estudiantes</p>
                <p className="mb-2">15% de descuento en todas las modalidades</p>
                <p className="text-xs text-muted-foreground">Presentando carnet de estudiante válido</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-purple">Mayores de 65</p>
                <p className="mb-2">20% de descuento en mensualidades</p>
                <p className="text-xs text-muted-foreground">Presentando documento identificativo</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-purple">Familias</p>
                <p className="mb-2">Bono familiar: 95€/mes para dos personas</p>
                <p className="text-xs text-muted-foreground">Para parejas o familiares directos</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Detalles de Precios</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Promociones Temporales
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-2">
                  <Image 
                    src="/images/special-workshop.jpg" 
                    alt="Taller especial de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-medium text-brand-purple">Taller Intensivo de Verano</h3>
                    <span className="bg-brand-teal text-white text-sm font-medium px-2 py-1 rounded">30% Dto</span>
                  </div>
                  <p className="mb-4">Un fin de semana completo para profundizar en tu práctica de yoga, con sesiones de Hatha, Yin, meditación y teoría yóguica. Ideal para quienes quieren avanzar rápidamente.</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Fecha:</strong> 24-25 de Julio</li>
                    <li><strong>Precio normal:</strong> <span className="line-through">120€</span></li>
                    <li><strong>Precio oferta:</strong> <span className="text-brand-teal font-medium">84€</span></li>
                    <li><strong>Incluye:</strong> Material didáctico, comidas vegetarianas y certificado</li>
                  </ul>
                  <div className="flex justify-end">
                    <Button asChild variant="outline" className="text-brand-teal border-brand-teal hover:bg-brand-teal/10">
                      <Link href="/contacto">Más Información</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-2">
                  <Image 
                    src="/images/yoga-package.jpg" 
                    alt="Pack combinado de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-medium text-brand-purple">Pack Yoga + Terapia</h3>
                    <span className="bg-brand-purple text-white text-sm font-medium px-2 py-1 rounded">20% Dto</span>
                  </div>
                  <p className="mb-4">Combina tus clases regulares de yoga con sesiones terapéuticas personalizadas para obtener máximos beneficios. Una oferta perfecta para quienes buscan un enfoque integral.</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Incluye:</strong> Mensualidad de yoga + 2 sesiones terapéuticas al mes</li>
                    <li><strong>Precio normal:</strong> <span className="line-through">125€</span></li>
                    <li><strong>Precio oferta:</strong> <span className="text-brand-purple font-medium">99€</span></li>
                    <li><strong>Disponible hasta:</strong> 30 de septiembre</li>
                  </ul>
                  <div className="flex justify-end">
                    <Button asChild variant="outline" className="text-brand-purple border-brand-purple hover:bg-brand-purple/10">
                      <Link href="/contacto">Consultar Detalles</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-2">
                  <Image 
                    src="/images/yoga-gift.jpg" 
                    alt="Regalo de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-medium text-brand-purple">Tarjeta Regalo</h3>
                    <span className="bg-brand-teal text-white text-sm font-medium px-2 py-1 rounded">+1 Clase</span>
                  </div>
                  <p className="mb-4">Regala bienestar a tus seres queridos con nuestras tarjetas regalo. Durante este mes, todas las tarjetas regalo incluyen una clase adicional completamente gratis.</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Opciones:</strong> Bono 5 clases, Bono 10 clases o valor personalizado</li>
                    <li><strong>Bonus:</strong> Una clase adicional gratis</li>
                    <li><strong>Presentación:</strong> Tarjeta física en elegante sobre o formato digital</li>
                    <li><strong>Validez:</strong> 6 meses desde la fecha de compra</li>
                  </ul>
                  <div className="flex justify-end">
                    <Button asChild variant="outline" className="text-brand-teal border-brand-teal hover:bg-brand-teal/10">
                      <Link href="/contacto">Adquirir Tarjeta Regalo</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-teal/10 p-6 rounded-lg border border-brand-teal/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-teal text-center">Próximas Promociones</h3>
            <p className="text-center mb-6">Mantente atento a estas próximas <strong>ofertas de yoga en Ourense</strong> que lanzaremos en breve:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-teal">Oferta de Otoño</p>
                <p className="mb-2">30% de descuento en la matrícula y primera mensualidad</p>
                <p className="text-xs text-brand-purple">Disponible a partir del 15 de septiembre</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-teal">Semana del Yoga</p>
                <p className="mb-2">Clases abiertas gratuitas durante toda una semana</p>
                <p className="text-xs text-brand-purple">Primera semana de octubre</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            ¿Cómo Aprovechar Nuestras Ofertas?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/step1.jpg" 
                  alt="Paso 1 para conseguir ofertas de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">1. Infórmate</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Consulta esta página regularmente o suscríbete a nuestro boletín para estar al día de todas las <strong>ofertas de yoga en Ourense</strong>. También publicamos promociones en nuestras redes sociales.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/step2.jpg" 
                  alt="Paso 2 para conseguir ofertas de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">2. Contacta</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Una vez hayas encontrado la oferta que más te interesa, contáctanos por teléfono, correo electrónico o visítanos personalmente para verificar la disponibilidad y condiciones específicas.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/step3.jpg" 
                  alt="Paso 3 para conseguir ofertas de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">3. Disfruta</CardTitle>
              </CardHeader>
              <CardContent>
                <p>¡Simplemente disfruta de tus clases de yoga a un precio especial! Nuestro equipo se encargará de aplicar el descuento correspondiente en tu modalidad elegida.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-purple">Términos y Condiciones</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Las ofertas no son acumulables entre sí, salvo que se indique expresamente lo contrario.</li>
              <li>Cada promoción tiene su propio período de validez. Una vez finalizado, se aplicarán las tarifas normales.</li>
              <li>Algunas ofertas pueden requerir permanencia mínima o estar limitadas a un número determinado de plazas.</li>
              <li>Los descuentos especiales (estudiantes, mayores, etc.) pueden requerir documentación acreditativa.</li>
              <li>Mandala se reserva el derecho de modificar o cancelar cualquier promoción con previo aviso.</li>
              <li>Para detalles específicos de cada oferta, por favor consulta con nuestro equipo en recepción.</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Testimonios de Nuestras Ofertas
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Aproveché la oferta de verano el año pasado y fue la mejor decisión. No solo ahorré dinero, sino que la continuidad durante tres meses me permitió notar cambios reales en mi cuerpo y mente. Ahora soy alumna fija y espero cada año las nuevas promociones para probar cosas diferentes."</p>
                <p className="font-medium">Lucía M., aprovechó la oferta 3x2, 34 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Cuando mi amigo me invitó con el bono amigo, no estaba muy convencido del yoga. La primera clase gratuita y el descuento en la mensualidad me animaron a probarlo sin mucho compromiso económico. Seis meses después, no me imagino mi vida sin el yoga y he traído ya a tres amigos más aprovechando la misma oferta."</p>
                <p className="font-medium">Miguel R., llegó con el Bono Amigo, 29 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como estudiante, creía que no podría permitirme clases de yoga de calidad. El descuento permanente para estudiantes de Mandala ha hecho posible que pueda practicar regularmente sin que mi economía se resienta. Además, sus ofertas temporales son una oportunidad genial para probar talleres especiales a precios accesibles."</p>
                <p className="font-medium">Andrea L., estudiante con descuento, 22 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              No Pierdas Estas Oportunidades
            </h2>
            <p className="text-lg text-center mb-8">
              Nuestras ofertas de yoga en Ourense están disponibles por tiempo limitado. ¡Contáctanos hoy mismo para aprovecharlas!
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reservar con Descuento</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Todos los Precios</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}