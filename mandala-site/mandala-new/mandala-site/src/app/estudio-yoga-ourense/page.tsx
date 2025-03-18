import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Estudio de Yoga en Ourense | Centro Mandala | Instalaciones',
  description: 'Conoce nuestro estudio de yoga en Ourense: instalaciones modernas, ambiente acogedor y todas las comodidades para tu práctica. Visita virtual del Centro Mandala.',
  keywords: 'estudio yoga ourense, centro yoga ourense, instalaciones yoga ourense, espacio yoga, sala yoga ourense',
}

export default function EstudioYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Nuestro Estudio de Yoga en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Un espacio diseñado para tu bienestar y crecimiento personal
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/mandala-studio.jpg" 
            alt="Estudio de yoga Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Un oasis de paz en el corazón de Ourense
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Bienvenidos a Centro Mandala
          </h2>
          <p className="text-lg mb-6">
            Nuestro <strong>estudio de yoga en Ourense</strong> ha sido creado con un objetivo claro: proporcionar un espacio que invite a la práctica profunda, a la conexión interior y al bienestar integral.
          </p>
          <p className="text-lg mb-6">
            Ubicado en pleno centro de <strong>Ourense</strong>, el <strong>Centro Mandala</strong> combina accesibilidad con un ambiente tranquilo, donde el ruido y las prisas de la ciudad quedan fuera, permitiéndote sumergirte en tu práctica de yoga.
          </p>
          <p className="text-lg mb-8">
            Más que un simple <strong>estudio de yoga</strong>, somos un centro de bienestar completo y una comunidad acogedora donde cada persona encuentra su espacio para crecer.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Instalaciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image 
                src="/images/yoga-room.jpg" 
                alt="Sala principal de yoga en Centro Mandala Ourense" 
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4 text-brand-purple">Sala Principal de Yoga</h3>
              <p className="mb-4">Nuestra sala principal de yoga es un espacio amplio y luminoso de 80m², con capacidad para 15-20 practicantes, garantizando que cada persona disponga del espacio necesario para moverse con libertad.</p>
              <p className="mb-4">Características:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Suelo de madera cálido y confortable</li>
                <li>Ventilación natural con purificadores de aire</li>
                <li>Iluminación regulable para adaptarse a cada práctica</li>
                <li>Sistema de sonido de alta calidad</li>
                <li>Temperatura controlada para máximo confort</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-medium mb-4 text-brand-purple">Sala de Terapias y Prácticas Íntimas</h3>
              <p className="mb-4">Contamos con una sala secundaria más pequeña (40m²) para grupos reducidos, sesiones privadas, terapias individuales y prácticas que requieren un ambiente más íntimo.</p>
              <p className="mb-4">Ideal para:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Sesiones personalizadas o terapéuticas</li>
                <li>Grupos pequeños de hasta 8 personas</li>
                <li>Prácticas de meditación y yoga nidra</li>
                <li>Talleres especializados</li>
                <li>Consultas individuales</li>
              </ul>
            </div>
            
            <div className="relative h-[300px] rounded-xl overflow-hidden order-1 md:order-2">
              <Image 
                src="/images/therapy-room.jpg" 
                alt="Sala de terapias del estudio de yoga en Ourense" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/reception.jpg" 
                  alt="Recepción del estudio de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Recepción y Tienda</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Espacio acogedor donde te recibimos, resolvemos tus dudas y ofrecemos productos seleccionados relacionados con la práctica del yoga y el bienestar.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/changing-room.jpg" 
                  alt="Vestuarios del estudio de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Vestuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Vestuarios amplios y limpios con taquillas, duchas y todas las comodidades para que puedas prepararte adecuadamente antes y después de tu práctica.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/tea-corner.jpg" 
                  alt="Rincón de té del estudio de yoga en Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Rincón de Té</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Espacio dedicado a compartir y socializar tranquilamente después de las clases, con una selección de tés e infusiones que complementan los beneficios del yoga.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Equipamiento y Material
          </h2>
          
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <p className="mb-6">En nuestro <strong>estudio de yoga en Ourense</strong> disponemos de todo el material necesario para que tu práctica sea completa y confortable, sin necesidad de que traigas nada (aunque siempre puedes traer tu propia esterilla si lo prefieres).</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Esterillas Profesionales</h3>
                <p>Esterillas de alta calidad, con el grosor y adherencia ideales para una práctica segura y confortable.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Bloques y Ladrillos</h3>
                <p>Soportes que facilitan la alineación correcta y permiten adaptar las posturas a diferentes niveles.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Cintas y Correas</h3>
                <p>Accesorios que ayudan a profundizar en estiramientos y acceder a posturas más exigentes de forma segura.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Bolsters y Cojines</h3>
                <p>Soportes blandos que proporcionan comodidad en posturas restaurativas y meditativas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Mantas</h3>
                <p>Utilizadas tanto para dar soporte como para proporcionar calor durante la relajación final o prácticas calmadas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">Material Especializado</h3>
                <p>Soportes para inversiones, bancos de yoga y otros elementos para prácticas específicas y talleres.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestro Ambiente
          </h2>
          
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-10">
            <Image 
              src="/images/studio-atmosphere.jpg" 
              alt="Ambiente del estudio de yoga en Ourense" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-xl">
                Hemos cuidado cada detalle para crear un espacio que inspire calma y conexión
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Diseño Consciente</h3>
                <p>Nuestro <strong>estudio de yoga en Ourense</strong> ha sido diseñado siguiendo principios de feng shui y bienestar, con colores, materiales y disposición del espacio que promueven la armonía y el equilibrio.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Luz Natural</h3>
                <p>Aprovechamos al máximo la luz natural, que complementamos con iluminación cálida e indirecta, adaptable según el tipo de práctica y momento del día.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Acústica Cuidada</h3>
                <p>Hemos trabajado en la acústica del espacio para minimizar ruidos externos y crear un ambiente propicio para la concentración y la calma interior.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Aroma y Limpieza</h3>
                <p>Mantenemos un riguroso protocolo de limpieza, utilizando productos ecológicos y difusores de aceites esenciales que crean una atmósfera fresca y agradable.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-brand-teal text-xl mr-4">✓</span>
              <div>
                <h3 className="font-medium text-xl mb-2 text-brand-purple">Temperatura Adecuada</h3>
                <p>Regulamos la temperatura según el tipo de práctica, más cálida para clases dinámicas y ligeramente más fresca para prácticas restaurativas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Un Estudio de Yoga para Todos en Ourense
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Accesibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Nuestro <strong>estudio de yoga en Ourense</strong> está diseñado para ser accesible a todas las personas, incluyendo:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Acceso sin barreras arquitectónicas</li>
                  <li>Instalaciones adaptadas</li>
                  <li>Proximidad a transporte público</li>
                  <li>Parking cercano</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-brand-purple">Comunidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Más allá del espacio físico, nuestro centro es una comunidad vibrante donde:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Compartimos conocimientos y experiencias</li>
                  <li>Celebramos eventos especiales y talleres</li>
                  <li>Fomentamos conexiones genuinas</li>
                  <li>Apoyamos el crecimiento personal de cada miembro</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Visita Nuestro Estudio de Yoga en Ourense</h3>
            <p className="text-center mb-6">Te invitamos a conocer nuestras instalaciones sin compromiso. Nuestro equipo estará encantado de mostrarte el espacio y resolver todas tus dudas.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Concertar Visita</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Ubicación de Nuestro Estudio en Ourense
          </h2>
          
          <div className="mb-8">
            <div className="h-[400px] w-full bg-gray-200 rounded-lg mb-6 relative">
              {/* Aquí iría el mapa de Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p>Mapa de ubicación</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-xl mb-4 text-brand-purple">Dirección</h3>
                <p className="mb-2"><strong>Centro Mandala Ourense</strong></p>
                <p className="mb-2">Calle Principal, 123</p>
                <p className="mb-2">32003 Ourense</p>
                <p className="mb-4">España</p>
                
                <h3 className="font-medium text-xl mb-4 text-brand-purple">Contacto</h3>
                <p className="mb-2">Teléfono: 988 123 456</p>
                <p className="mb-4">Email: info@mandalaourense.com</p>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-4 text-brand-purple">Cómo Llegar</h3>
                <p className="mb-3"><strong>En transporte público:</strong></p>
                <p className="mb-4">Líneas de autobús urbano: 1, 3, 5 (parada "Centro")</p>
                
                <p className="mb-3"><strong>A pie:</strong></p>
                <p className="mb-4">A 5 minutos caminando desde la Plaza Mayor</p>
                
                <p className="mb-3"><strong>En coche:</strong></p>
                <p>Parking público a 200 metros del centro</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              ¿Quieres Formar Parte de Nuestra Comunidad?
            </h2>
            <p className="text-lg text-center mb-8">
              Te invitamos a conocer nuestro estudio de yoga en Ourense y a probar una clase gratuita para que experimentes por ti mismo lo que podemos ofrecerte.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Contactar</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Ver Clases y Horarios</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}