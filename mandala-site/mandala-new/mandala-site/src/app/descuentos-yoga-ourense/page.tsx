import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Descuentos Yoga Ourense | Mandala | Ahorra en Tu Práctica',
  description: 'Consigue los mejores descuentos para clases de yoga en Ourense. Centro Mandala ofrece rebajas para estudiantes, mayores, grupos familiares y nuevos alumnos.',
  keywords: 'descuentos yoga ourense, rebajas yoga ourense, yoga barato ourense, promociones yoga ourense, precios reducidos yoga mandala',
}

export default function DescuentosYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Descuentos de Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Practica yoga de calidad a precios reducidos en Centro Mandala
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/yoga-discounts.jpg" 
            alt="Descuentos para clases de yoga en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Ahorra en tu bienestar sin comprometer la calidad
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Yoga Accesible para Todos
          </h2>
          <p className="text-lg mb-6">
            En Centro Mandala creemos firmemente que los beneficios del yoga deben estar al alcance de todos. Por eso, ofrecemos una amplia variedad de <strong>descuentos de yoga en Ourense</strong> que hacen nuestra práctica más accesible económicamente.
          </p>
          <p className="text-lg mb-6">
            Entendemos que cada persona tiene circunstancias diferentes, y nuestro sistema de descuentos está diseñado para adaptarse a distintas situaciones personales, familiares y económicas.
          </p>
          <p className="text-lg mb-8">
            Nuestros <strong>descuentos para yoga en Ourense</strong> van desde reducciones para colectivos específicos hasta ofertas temporales y bonos que premian la fidelidad y constancia en la práctica.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/contacto">Consulta Tu Descuento</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Descuentos Permanentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-brand-purple/10 px-6 py-4 text-center">
                <h3 className="text-xl font-medium text-brand-purple">Estudiantes</h3>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-brand-purple">15%</p>
                  <p className="text-muted-foreground">de descuento</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Válido para estudiantes de cualquier nivel educativo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aplicable a mensualidades y bonos</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">Necesario presentar carnet de estudiante válido</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-brand-purple/10 px-6 py-4 text-center">
                <h3 className="text-xl font-medium text-brand-purple">Adultos +65</h3>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-brand-purple">20%</p>
                  <p className="text-muted-foreground">de descuento</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Para mayores de 65 años</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aplicable a todas las modalidades</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">Verificable con documento de identidad</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-brand-purple/10 px-6 py-4 text-center">
                <h3 className="text-xl font-medium text-brand-purple">Desempleados</h3>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-brand-purple">15%</p>
                  <p className="text-muted-foreground">de descuento</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Para personas en situación de desempleo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Renovable cada 3 meses</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">Presentando tarjeta de demanda de empleo</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-brand-purple/10 px-6 py-4 text-center">
                <h3 className="text-xl font-medium text-brand-purple">Familias</h3>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-brand-purple">15%</p>
                  <p className="text-muted-foreground">de descuento</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Para parejas y familiares directos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dos o más personas del mismo núcleo</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">Acumulable hasta 3 miembros (máx. 25%)</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20 mb-10">
            <h3 className="font-medium text-xl mb-4 text-brand-purple">Descuentos por Fidelidad</h3>
            <p className="mb-4">Premiamos la constancia en tu práctica con estos <strong>descuentos para yoga en Ourense</strong>:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-purple">6 meses continuados</p>
                <p className="mb-1">5% descuento adicional permanente</p>
                <p className="text-xs text-muted-foreground">A partir del 7º mes</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-purple">1 año continuado</p>
                <p className="mb-1">10% descuento adicional permanente</p>
                <p className="text-xs text-muted-foreground">A partir del 13º mes</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-purple">2 años continuados</p>
                <p className="mb-1">15% descuento adicional permanente</p>
                <p className="text-xs text-muted-foreground">A partir del 25º mes</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Precios Completos</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Descuentos en Bonos y Packs
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/class-pack.jpg" 
                    alt="Bono de clases de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-medium text-brand-purple">Bono 10 Clases</h3>
                    <span className="bg-brand-teal text-white text-sm font-medium px-2 py-1 rounded">25% Dto</span>
                  </div>
                  <p className="mb-4">El bono de 10 clases es una de nuestras opciones más populares para quienes practican regularmente pero no necesitan una mensualidad completa:</p>
                  <div className="flex items-center mb-4">
                    <div>
                      <p className="text-lg"><span className="line-through text-muted-foreground">12€ x 10 = 120€</span></p>
                      <p className="text-2xl font-medium text-brand-teal">Precio con descuento: 90€</p>
                      <p className="text-sm text-muted-foreground">(9€ por clase)</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Validez de 3 meses desde la fecha de compra</li>
                    <li>Transferible a familiares y amigos</li>
                    <li>Aplicable a cualquier clase del horario regular</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/trimester-pack.jpg" 
                    alt="Bono trimestral de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-medium text-brand-purple">Pack Trimestral</h3>
                    <span className="bg-brand-purple text-white text-sm font-medium px-2 py-1 rounded">9% Dto</span>
                  </div>
                  <p className="mb-4">Ahorra pagando tres meses por adelantado con este pack que incluye ventajas adicionales:</p>
                  <div className="flex items-center mb-4">
                    <div>
                      <p className="text-lg"><span className="line-through text-muted-foreground">55€ x 3 = 165€</span></p>
                      <p className="text-2xl font-medium text-brand-purple">Precio con descuento: 150€</p>
                      <p className="text-sm text-muted-foreground">(50€ por mes)</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Clases ilimitadas durante 3 meses</li>
                    <li>15% descuento en talleres especiales</li>
                    <li>1 clase privada de 30 minutos incluida</li>
                    <li>Matrícula gratuita si eres nuevo alumno</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/family-pack.jpg" 
                    alt="Bono familiar de yoga en Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-medium text-brand-purple">Bono Familiar</h3>
                    <span className="bg-brand-teal text-white text-sm font-medium px-2 py-1 rounded">13% Dto</span>
                  </div>
                  <p className="mb-4">Perfecto para parejas y familiares que quieren practicar juntos:</p>
                  <div className="flex items-center mb-4">
                    <div>
                      <p className="text-lg"><span className="line-through text-muted-foreground">55€ x 2 = 110€</span></p>
                      <p className="text-2xl font-medium text-brand-teal">Precio con descuento: 95€</p>
                      <p className="text-sm text-muted-foreground">(47,50€ por persona)</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Para 2 personas convivientes</li>
                    <li>Clases ilimitadas para ambos</li>
                    <li>15% descuento en talleres para ambos</li>
                    <li>Asesoramiento conjunto sobre práctica en familia</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-teal/10 p-6 rounded-lg border border-brand-teal/20 mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-teal text-center">Descuentos en Servicios Adicionales</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-teal">Clases Privadas</p>
                <p className="mb-2">Bono 5 sesiones: 200€ (ahorro de 25€)</p>
                <p className="text-xs text-muted-foreground">40€ por sesión en lugar de 45€</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-teal">Yoga Terapéutico</p>
                <p className="mb-2">Bono 5 sesiones: 200€ (ahorro de 25€)</p>
                <p className="text-xs text-muted-foreground">Incluye plan personalizado</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-teal">Talleres Especiales</p>
                <p className="mb-2">10-15% descuento para alumnos matriculados</p>
                <p className="text-xs text-muted-foreground">Según el tipo de membresía</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-medium mb-1 text-brand-teal">Eventos y Retiros</p>
                <p className="mb-2">10% descuento early bird (reserva anticipada)</p>
                <p className="text-xs text-muted-foreground">Hasta 30 días antes del evento</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Descuentos Promocionales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal border-2 hover:shadow-md transition-shadow overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-brand-teal text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Limitado
              </div>
              <div className="bg-brand-teal/20 px-6 py-4 text-center">
                <h3 className="text-xl font-medium text-brand-teal">Promoción Nuevos Alumnos</h3>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-brand-teal">1ª Clase GRATIS</p>
                  <p className="text-xl text-brand-teal">+ 20% dto en 1ª mensualidad</p>
                </div>
                <p className="mb-4">Para quienes se inician en el yoga o son nuevos en nuestro centro:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prueba una clase completa sin compromiso</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Si te quedas, obtienes un 20% en tu primera mensualidad</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sin matrícula de inscripción</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">Válido para quienes nunca han practicado en Mandala</p>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  <Link href="/contacto">Reservar Clase Gratis</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-brand-purple border-2 hover:shadow-md transition-shadow overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-brand-purple text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <div className="bg-brand-purple/20 px-6 py-4 text-center">
                <h3 className="text-xl font-medium text-brand-purple">Promoción "Trae un Amigo"</h3>
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-brand-purple">25% DESCUENTO</p>
                  <p className="text-xl text-brand-purple">en tu próxima mensualidad</p>
                </div>
                <p className="mb-4">Comparte el yoga con tus seres queridos y ambos os beneficiáis:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tú: 25% de descuento en tu siguiente mensualidad</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tu amigo: matrícula gratis y 15% en su 1ª mensualidad</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sin límite: acumulable por cada amigo que traigas</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">El amigo debe inscribirse en una mensualidad</p>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                  <Link href="/contacto">Compartir con Amigos</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Promoción Matinal</CardTitle>
                <CardDescription>Para clases de 7:30h a 9:00h</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-4 text-brand-purple">15% de descuento</p>
                <p className="mb-4">Para fomentar la práctica matutina, ofrecemos un descuento especial en nuestras primeras clases del día:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mensualidad de mañanas: 46,75€ (en lugar de 55€)</span>
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
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Oferta de Verano</CardTitle>
                <CardDescription>Hasta el 31 de agosto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-4 text-brand-purple">3 meses por el precio de 2</p>
                <p className="mb-4">Aprovecha el verano para profundizar en tu práctica con esta oferta exclusiva:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ahorro del 33% en la práctica trimestral</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pago único de 110€ por 3 meses completos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15% de descuento en talleres especiales de verano</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Cómo Solicitar tu Descuento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/step1-discount.jpg" 
                  alt="Paso 1 para solicitar descuentos de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">1. Identifica tu Descuento</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Revisa esta página para encontrar los <strong>descuentos de yoga en Ourense</strong> que mejor se adapten a tu situación personal. Puedes combinar varios si son compatibles (consulta las condiciones).</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/step2-discount.jpg" 
                  alt="Paso 2 para solicitar descuentos de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">2. Prepara la Documentación</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Para los descuentos que requieren verificación (estudiantes, mayores, desempleados), ten lista la documentación acreditativa correspondiente.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/step3-discount.jpg" 
                  alt="Paso 3 para solicitar descuentos de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">3. Solicita en Recepción</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Visítanos o contáctanos para solicitar tu descuento. Nuestro equipo verificará tu elegibilidad y aplicará inmediatamente la reducción a tu cuota o pago.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-medium text-xl mb-4 text-brand-purple">Preguntas Frecuentes sobre Descuentos</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-brand-purple mb-1">¿Puedo combinar varios descuentos?</p>
                <p>Algunos descuentos son acumulables y otros no. Como regla general, los descuentos permanentes (estudiantes, mayores, etc.) no se pueden combinar entre sí, pero sí con promociones temporales específicas. Consulta con nuestro equipo para tu caso particular.</p>
              </div>
              
              <div>
                <p className="font-medium text-brand-purple mb-1">¿Qué ocurre si mi situación cambia?</p>
                <p>Si las circunstancias que te permiten acceder a un descuento cambian (por ejemplo, finalizas tus estudios), debes informarnos. En algunos casos, podríamos ofrecerte alternativas o descuentos de transición.</p>
              </div>
              
              <div>
                <p className="font-medium text-brand-purple mb-1">¿Los descuentos se renuevan automáticamente?</p>
                <p>Los descuentos permanentes se mantienen mientras sigas cumpliendo los requisitos. Los promocionales tienen duración limitada. Para descuentos como el de desempleados, solicitamos actualización trimestral de la documentación.</p>
              </div>
              
              <div>
                <p className="font-medium text-brand-purple mb-1">¿Hay descuentos para casos especiales no listados?</p>
                <p>Valoramos cada caso individualmente. Si tienes una situación particular que no está contemplada en nuestros descuentos estándar, por favor consúltanos y estudiaremos posibles opciones.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Testimonios sobre Nuestros Descuentos
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como jubilada con ingresos limitados, pensé que el yoga sería un lujo que no podría permitirme. El descuento del 20% para mayores de 65 años de Mandala ha hecho que sea totalmente asequible para mí. Ahora asisto tres veces por semana y ha cambiado mi calidad de vida completamente."</p>
                <p className="font-medium">Carmen L., 68 años - Descuento para mayores</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"La promoción 'Trae un amigo' nos motivó a mi pareja y a mí para apuntarnos juntos. No solo conseguimos un buen descuento inicial, sino que ahora disfrutamos del bono familiar que hace que el yoga sea mucho más asequible para ambos. Ha sido una forma maravillosa de compartir esta práctica y cuidarnos mutuamente."</p>
                <p className="font-medium">David y Ana, 34 y 32 años - Bono familiar</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como estudiante universitario, el descuento del 15% ha sido fundamental para poder mantener mi práctica de yoga. He notado una gran mejora en mi concentración y gestión del estrés durante los exámenes, así que lo considero una inversión en mis estudios, no un gasto. Gracias a Mandala por hacer el yoga accesible para los estudiantes."</p>
                <p className="font-medium">Marcos R., 21 años - Descuento para estudiantes</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              Aprovecha Nuestros Descuentos Hoy Mismo
            </h2>
            <p className="text-lg text-center mb-8">
              No dejes que el precio sea una barrera para mejorar tu bienestar. En Mandala tenemos un descuento de yoga en Ourense para ti.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Consultar Mi Descuento</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Precios Completos</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}