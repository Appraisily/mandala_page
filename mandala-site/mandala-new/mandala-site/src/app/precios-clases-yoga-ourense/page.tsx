import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Precios Clases Yoga Ourense | Mandala | Tarifas Competitivas',
  description: 'Información completa sobre precios de clases de yoga en Ourense. Centro Mandala ofrece tarifas flexibles: clases sueltas, bonos, mensualidades y descuentos especiales.',
  keywords: 'precios clases yoga ourense, tarifas yoga ourense, bonos yoga mandala, cuánto cuesta yoga ourense, mensualidad yoga ourense',
}

export default function PreciosClasesYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Precios de Clases de Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Tarifas accesibles adaptadas a todas las necesidades en Mandala
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/yoga-prices.jpg" 
            alt="Precios de clases de yoga en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Inversión en bienestar con opciones para todos los bolsillos
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Nuestra Filosofía de Precios
          </h2>
          <p className="text-lg mb-6">
            En Mandala entendemos que el yoga debe ser accesible para todos. Nuestros <strong>precios de clases de yoga en Ourense</strong> están diseñados para ofrecer calidad y experiencia a un coste razonable, con opciones flexibles que se adaptan a diferentes frecuencias de práctica y situaciones económicas.
          </p>
          <p className="text-lg mb-6">
            Nos esforzamos por mantener un equilibrio entre la sostenibilidad de nuestro centro y la accesibilidad para nuestros alumnos. Por eso, ofrecemos desde clases sueltas para quienes practican ocasionalmente, hasta bonos y mensualidades para practicantes regulares.
          </p>
          <p className="text-lg mb-8">
            Además, contamos con descuentos especiales para estudiantes, desempleados, familias y personas mayores, porque creemos que el yoga debe ser una herramienta de bienestar al alcance de todos los bolsillos.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Consulta tu Caso Particular</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Tarifas y Opciones de Pago
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="bg-brand-purple/10 px-6 py-4 text-center">
                <h3 className="text-2xl font-medium text-brand-purple">Clases Sueltas</h3>
                <p className="text-muted-foreground">Para práctica ocasional</p>
              </div>
              <div className="p-6 text-center flex-grow">
                <p className="text-4xl font-bold text-brand-purple mb-6">12€</p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clase de 60-90 minutos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sin compromiso de permanencia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Válida para cualquier estilo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Incluye préstamo de material</span>
                  </li>
                </ul>
              </div>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  <Link href="/contacto">Reservar Clase</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-brand-teal border-2 hover:shadow-md transition-shadow overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-brand-teal text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Más Popular
              </div>
              <div className="bg-brand-teal/20 px-6 py-4 text-center">
                <h3 className="text-2xl font-medium text-brand-teal">Bono 10 Clases</h3>
                <p className="text-muted-foreground">Para práctica regular</p>
              </div>
              <div className="p-6 text-center flex-grow">
                <p className="text-4xl font-bold text-brand-teal mb-6">90€</p>
                <p className="text-lg mb-4"><span className="line-through">120€</span> <span className="text-brand-teal font-medium">25% descuento</span></p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10 clases por 9€/clase</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Validez de 3 meses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transferible a amigos/familia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Acceso a todas las clases</span>
                  </li>
                </ul>
              </div>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  <Link href="/contacto">Comprar Bono</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="bg-brand-purple/10 px-6 py-4 text-center">
                <h3 className="text-2xl font-medium text-brand-purple">Mensualidad</h3>
                <p className="text-muted-foreground">Para práctica frecuente</p>
              </div>
              <div className="p-6 text-center flex-grow">
                <p className="text-4xl font-bold text-brand-purple mb-6">55€/mes</p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clases ilimitadas (2/semana recomendado)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Matrícula gratuita</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10% descuento en talleres</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compromiso mínimo 3 meses</span>
                  </li>
                </ul>
              </div>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  <Link href="/contacto">Contratar Mensualidad</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Bono Trimestral</CardTitle>
                <CardDescription>Ahorra con compromiso trimestral</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-brand-purple mb-4">150€ <span className="text-base font-normal text-muted-foreground">(50€/mes)</span></p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clases ilimitadas durante 3 meses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pago único con 9% de descuento</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15% descuento en talleres</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 clase privada de 30 min incluida</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Bono Familiar</CardTitle>
                <CardDescription>Para parejas o familiares</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-brand-purple mb-4">95€/mes</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Para 2 personas convivientes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clases ilimitadas para ambos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ahorro de 15€/mes (47,50€ por persona)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15% descuento en talleres para ambos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-purple">Descuentos Especiales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1">Estudiantes y menores de 25 años</p>
                <p>15% de descuento en todas las modalidades presentando carnet válido</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1">Mayores de 65 años</p>
                <p>20% de descuento en todas las modalidades</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1">Desempleados</p>
                <p>15% de descuento presentando tarjeta de demanda de empleo</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1">Promoción "Trae un amigo"</p>
                <p>Un mes con 25% de descuento para ti cuando un amigo se matricula</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Horarios Detallados</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Modalidades Especiales y Sus Precios
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/private-yoga.jpg" 
                    alt="Clases privadas de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Clases Privadas</h3>
                  <p className="mb-4">Las clases privadas son ideales para quienes buscan atención personalizada, tienen necesidades específicas o desean acelerar su progreso:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Sesión individual:</strong> 45€ (60 minutos)</li>
                    <li><strong>Bono 5 sesiones:</strong> 200€ (40€/sesión)</li>
                    <li><strong>Pack pareja/2 personas:</strong> 60€ por sesión</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">Todas las sesiones privadas incluyen evaluación inicial, adaptación personalizada y seguimiento detallado.</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/workshops.jpg" 
                    alt="Talleres de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Talleres Especializados</h3>
                  <p className="mb-4">Periódicamente organizamos talleres temáticos para profundizar en aspectos específicos del yoga:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Talleres de 3 horas:</strong> 35€</li>
                    <li><strong>Talleres intensivos de fin de semana:</strong> desde 80€</li>
                    <li><strong>Masterclass con profesores invitados:</strong> entre 40€ y 60€</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">Los alumnos con mensualidad o bonos disfrutan de descuentos especiales en todos los talleres.</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/yoga-therapy.jpg" 
                    alt="Yoga terapéutico en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoga Terapéutico</h3>
                  <p className="mb-4">Sesiones especializadas para condiciones específicas, dirigidas por terapeutas certificados:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong>Primera consulta y evaluación:</strong> 55€ (75 minutos)</li>
                    <li><strong>Sesiones de seguimiento:</strong> 45€ (60 minutos)</li>
                    <li><strong>Bono 5 sesiones terapéuticas:</strong> 200€</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">Estas sesiones incluyen evaluación detallada, plan personalizado y recomendaciones para práctica en casa.</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-teal/10 p-6 rounded-lg border border-brand-teal/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-teal text-center">Comparativa de Precios en Ourense</h3>
            <p className="text-center mb-6">Nuestros <strong>precios de clases de yoga en Ourense</strong> son competitivos ofreciendo la mejor relación calidad-precio:</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-teal/20">
                    <th className="p-3 text-left">Servicio</th>
                    <th className="p-3 text-center">Precio Mercado</th>
                    <th className="p-3 text-center">Nuestro Precio</th>
                    <th className="p-3 text-center">Ahorro</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-white">
                    <td className="p-3">Clase suelta</td>
                    <td className="p-3 text-center">12-15€</td>
                    <td className="p-3 text-center font-medium text-brand-teal">12€</td>
                    <td className="p-3 text-center">Hasta 20%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3">Mensualidad</td>
                    <td className="p-3 text-center">60-70€</td>
                    <td className="p-3 text-center font-medium text-brand-teal">55€</td>
                    <td className="p-3 text-center">Hasta 21%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3">Bono 10 clases</td>
                    <td className="p-3 text-center">100-120€</td>
                    <td className="p-3 text-center font-medium text-brand-teal">90€</td>
                    <td className="p-3 text-center">Hasta 25%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3">Clase privada</td>
                    <td className="p-3 text-center">50-60€</td>
                    <td className="p-3 text-center font-medium text-brand-teal">45€</td>
                    <td className="p-3 text-center">Hasta 25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Preguntas Frecuentes sobre Precios
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Hay algún coste adicional que deba considerar?</h3>
              <p>Todos nuestros <strong>precios de clases de yoga en Ourense</strong> incluyen el préstamo de material básico (esterillas, bloques, mantas). Solo pagarás extra por talleres especiales o retiros, siempre informados con antelación y opcionales.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Puedo probar antes de decidirme?</h3>
              <p>¡Por supuesto! Ofrecemos una clase de prueba por solo 8€, descontable de tu inscripción si decides continuar. También organizamos jornadas de puertas abiertas varias veces al año con clases gratuitas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Qué ocurre si no puedo asistir a algunas clases?</h3>
              <p>Si tienes mensualidad y avisas con al menos 24 horas, puedes recuperar hasta 2 clases al mes. Los bonos tienen validez de 3 meses para darte flexibilidad. Las clases privadas pueden cancelarse hasta 48 horas antes sin penalización.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Hay opciones para grupos?</h3>
              <p>Sí, ofrecemos tarifas especiales para grupos corporativos, asociaciones y centros educativos. Contáctanos para recibir un presupuesto personalizado según vuestras necesidades específicas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-xl mb-3 text-brand-purple">¿Cómo puedo realizar el pago?</h3>
              <p>Aceptamos efectivo, tarjetas de crédito/débito, transferencia bancaria y pagos a través de nuestra web. Las mensualidades se pagan por domiciliación bancaria o tarjeta recurrente para mayor comodidad.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Testimonios sobre Nuestras Tarifas
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Al principio dudaba si podría permitirme practicar yoga regularmente, pero el bono trimestral de Mandala ha hecho que sea totalmente asequible. La relación calidad-precio es inmejorable, sobre todo considerando la preparación de los profesores y las instalaciones."</p>
                <p className="font-medium">Patricia M., administrativa, 36 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como estudiante, agradezco enormemente el descuento que ofrecen. Los precios de las clases de yoga en Ourense suelen ser prohibitivos para nosotros, pero en Mandala han pensado en todos los bolsillos. Además, la flexibilidad de horarios me permite aprovechar al máximo mi mensualidad."</p>
                <p className="font-medium">Diego L., estudiante universitario, 22 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Mi pareja y yo aprovechamos el bono familiar y es un ahorro importante a fin de mes. Además, nos motiva a venir juntos y convertir el yoga en una actividad compartida. Por lo que cuesta un gimnasio normal, aquí recibimos atención personalizada y clases de mucha mejor calidad."</p>
                <p className="font-medium">Carlos y Marta, pareja, 41 y 38 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Invierte en Tu Bienestar
            </h2>
            <p className="text-lg text-center mb-8">
              Nuestros precios están diseñados para que el yoga sea accesible y puedas encontrar la opción que mejor se adapte a tus necesidades y posibilidades.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reservar Clase de Prueba</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Horarios Completos</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}