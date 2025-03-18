import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Centro de Yoga en Ourense | Mandala | Experiencia y Tradición',
  description: 'Descubre Mandala, el centro de yoga en Ourense con más tradición. Ofrecemos diversas modalidades de yoga, profesores certificados y un espacio acogedor para tu práctica.',
  keywords: 'centro de yoga ourense, yoga ourense, estudio yoga ourense, escuela yoga ourense, clases yoga ourense',
}

export default function CentroDeYogaOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Centro de Yoga Mandala Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Tradición, experiencia y un enfoque integral del yoga
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/mandala-center.jpg" 
            alt="Centro de yoga Mandala en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Un espacio sagrado para tu práctica en el corazón de Ourense
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Mandala: Tu Centro de Yoga en Ourense
          </h2>
          <p className="text-lg mb-6">
            El <strong>Centro de Yoga Mandala</strong> es un espacio dedicado íntegramente a la práctica y enseñanza del yoga en <strong>Ourense</strong>. Fundado en 2010, nuestro centro ha crecido hasta convertirse en un referente del yoga auténtico y el bienestar integral.
          </p>
          <p className="text-lg mb-6">
            Nuestro <strong>centro de yoga en Ourense</strong> acoge a practicantes de todos los niveles: desde quienes dan sus primeros pasos en el yoga hasta quienes llevan años de práctica y buscan profundizar en aspectos más sutiles de esta disciplina milenaria.
          </p>
          <p className="text-lg mb-8">
            En Mandala no solo enseñamos posturas: transmitimos un estilo de vida basado en el equilibrio, la consciencia y el respeto hacia uno mismo y los demás.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link href="/about">Conoce Nuestra Historia</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            ¿Por qué elegir Mandala como tu centro de yoga en Ourense?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/experienced-teachers.jpg" 
                  alt="Profesores experimentados en el centro de yoga Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Profesores Experimentados</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nuestro equipo está formado por profesores certificados con años de experiencia y formación continua. Cada instructor aporta su especialidad y enfoque único, enriqueciendo la experiencia de nuestros alumnos.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/authentic-approach.jpg" 
                  alt="Enfoque auténtico en el centro de yoga Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Enfoque Auténtico</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Respetamos las raíces tradicionales del yoga mientras lo hacemos accesible al practicante contemporáneo. No seguimos modas pasajeras; nos centramos en lo que realmente funciona y transforma.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/welcoming-community.jpg" 
                  alt="Comunidad acogedora en el centro de yoga Ourense" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Comunidad Vibrante</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Más que un centro, somos una comunidad. Fomentamos conexiones genuinas entre los practicantes, creando un espacio de apoyo mutuo donde compartir el camino del yoga y el crecimiento personal.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Espacio Inspirador</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nuestras instalaciones en pleno centro de Ourense han sido diseñadas para crear una atmósfera que invita a la introspección, con atención a cada detalle: iluminación, acústica, materiales naturales y elementos que transmiten serenidad.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Variedad de Prácticas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ofrecemos distintos estilos de yoga (Hatha, Daoyin, Nidra), meditación y prácticas complementarias, permitiéndote explorar diferentes caminos y encontrar lo que mejor resuena con tus necesidades personales.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestra Filosofía como Centro de Yoga
          </h2>
          
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden mb-10">
            <Image 
              src="/images/yoga-philosophy.jpg" 
              alt="Filosofía de nuestro centro de yoga en Ourense" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-xl">
                "El yoga es el viaje del ser, a través del ser, hacia el ser" - Bhagavad Gita
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Yoga Integral</h3>
              <p>En Mandala entendemos el yoga como un sistema completo que va mucho más allá de las posturas físicas. Nuestra enseñanza integra:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Asana</strong> (posturas físicas) para fortalecer y flexibilizar el cuerpo</li>
                <li><strong>Pranayama</strong> (técnicas de respiración) para aumentar la energía vital</li>
                <li><strong>Meditación</strong> para cultivar la claridad mental y la paz interior</li>
                <li><strong>Filosofía yóguica</strong> para una comprensión más profunda de la práctica</li>
                <li><strong>Satsang</strong> (comunidad) para apoyarnos mutuamente en el camino</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Respeto por la Individualidad</h3>
              <p>Reconocemos que cada persona es única, con su propio cuerpo, mente y circunstancias. Por eso en nuestro <strong>centro de yoga en Ourense</strong>:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Adaptamos las prácticas a las necesidades individuales</li>
                <li>Ofrecemos opciones para diferentes niveles en cada clase</li>
                <li>Animamos a escuchar y respetar los límites propios</li>
                <li>Celebramos el progreso personal, sin comparaciones</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3 text-brand-purple">Equilibrio entre Tradición e Innovación</h3>
              <p>Mantenemos un profundo respeto por las raíces tradicionales del yoga, a la vez que reconocemos su naturaleza evolutiva y la aportación de la ciencia moderna:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Preservamos la esencia de las enseñanzas clásicas</li>
                <li>Incorporamos conocimientos de anatomía y fisiología actuales</li>
                <li>Adaptamos las prácticas al contexto y necesidades contemporáneas</li>
                <li>Mantenemos una mente abierta y un espíritu de investigación constante</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Modalidades que Ofrecemos en Nuestro Centro
          </h2>
          
          <div className="space-y-8 mb-10">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/hatha-yoga.jpg" 
                    alt="Hatha Yoga en el centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Hatha Yoga</h3>
                  <p className="mb-4">El Hatha Yoga es el estilo más tradicional y accesible. En nuestro <strong>centro de yoga en Ourense</strong> ofrecemos clases de Hatha que combinan posturas físicas, respiración consciente y relajación, con énfasis en la alineación correcta y la atención al detalle.</p>
                  <p className="mb-4">Beneficios principales: mayor flexibilidad, fortalecimiento muscular, mejora de la postura, reducción del estrés y equilibrio energético.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/hatha-yoga">Más sobre nuestras clases de Hatha Yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/daoyin-yoga.jpg" 
                    alt="Daoyin Yoga en el centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Daoyin Yoga</h3>
                  <p className="mb-4">Una especialidad única de nuestro <strong>centro de yoga en Ourense</strong>. El Daoyin Yoga combina elementos del yoga tradicional con principios de la medicina china y el qigong, trabajando con los meridianos energéticos y la energía vital (qi).</p>
                  <p className="mb-4">Beneficios principales: equilibrio energético, fortalecimiento del sistema inmune, mayor vitalidad y armonización de órganos internos.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/daoyin-yoga">Más sobre nuestras clases de Daoyin Yoga →</Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="relative h-[200px] md:h-auto md:col-span-1">
                  <Image 
                    src="/images/nidra-yoga.jpg" 
                    alt="Yoga Nidra en el centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-2xl font-medium mb-2 text-brand-purple">Yoga Nidra y Meditación</h3>
                  <p className="mb-4">Ofrecemos sesiones regulares de Yoga Nidra (yoga del sueño consciente) y diversas técnicas de meditación. Estas prácticas son ideales para quienes buscan reducir el estrés, mejorar el sueño y desarrollar mayor claridad mental.</p>
                  <p className="mb-4">Beneficios principales: profunda relajación, mejor gestión del estrés y ansiedad, mayor concentración y desarrollo de la atención plena.</p>
                  <Button asChild variant="link" className="text-brand-teal p-0">
                    <Link href="/yoga/nidra-yoga-meditacion">Más sobre nuestras sesiones de Yoga Nidra y Meditación →</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20">
            <h3 className="font-medium text-xl mb-4 text-brand-purple text-center">Prácticas Especializadas</h3>
            <p className="text-center mb-6">Además de nuestras clases regulares, nuestro centro de yoga en Ourense ofrece prácticas específicas para diferentes necesidades:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yoga Terapéutico</h4>
                <p>Para personas con necesidades especiales, lesiones o condiciones médicas específicas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yoga para Embarazadas</h4>
                <p>Práctica adaptada para acompañar el embarazo y preparar el cuerpo para el parto.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yoga para Adultos Mayores</h4>
                <p>Sesiones adaptadas para mantener la vitalidad y movilidad en la tercera edad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2 text-brand-purple">Yoga para el Estrés</h4>
                <p>Enfoque específico para personas que sufren de estrés crónico o ansiedad.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Todos los Horarios y Precios</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestro Equipo Docente
          </h2>
          
          <p className="text-lg mb-8">
            En nuestro <strong>centro de yoga en Ourense</strong> contamos con un equipo de profesores altamente cualificados, cada uno con su especialidad y enfoque, pero todos compartiendo una visión común: transmitir el yoga de forma auténtica, respetuosa y adaptada a las necesidades de cada alumno.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/teacher-1.jpg" 
                    alt="Profesora María - Centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">María González</h3>
                <p className="text-muted-foreground mb-4">Directora y profesora de Hatha Yoga</p>
                <p className="text-center mb-4">Con más de 15 años de experiencia en la enseñanza del yoga, María fundó Mandala con la visión de crear un espacio donde el yoga auténtico fuera accesible para todos en Ourense.</p>
                <p className="text-center text-sm text-muted-foreground">Certificaciones: E-RYT 500, Yoga Terapéutico, Meditación Mindfulness</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/teacher-2.jpg" 
                    alt="Profesor Carlos - Centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Carlos Rodríguez</h3>
                <p className="text-muted-foreground mb-4">Especialista en Daoyin Yoga</p>
                <p className="text-center mb-4">Carlos combina su profundo conocimiento del yoga con estudios en medicina tradicional china, ofreciendo una perspectiva única que integra lo mejor de ambas tradiciones.</p>
                <p className="text-center text-sm text-muted-foreground">Certificaciones: RYT 500, Qi Gong, Medicina Tradicional China</p>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/teacher-3.jpg" 
                    alt="Profesora Laura - Centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1 text-brand-purple">Laura Fernández</h3>
                <p className="text-muted-foreground mb-4">Yoga Nidra y Meditación</p>
                <p className="text-center text-sm">Especialista en técnicas de relajación profunda y mindfulness.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/teacher-4.jpg" 
                    alt="Profesor David - Centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1 text-brand-purple">David López</h3>
                <p className="text-muted-foreground mb-4">Yoga Terapéutico</p>
                <p className="text-center text-sm">Enfocado en el yoga adaptado para necesidades especiales y recuperación.</p>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/teacher-5.jpg" 
                    alt="Profesora Ana - Centro de yoga Ourense" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1 text-brand-purple">Ana Vázquez</h3>
                <p className="text-muted-foreground mb-4">Yoga Prenatal</p>
                <p className="text-center text-sm">Especializada en acompañamiento durante el embarazo a través del yoga.</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
            Testimonios de Nuestra Comunidad
          </h2>
          <p className="text-center text-lg mb-10">
            Estas son algunas experiencias de personas que han encontrado en Mandala su centro de yoga en Ourense
          </p>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Llevo más de tres años practicando en Mandala y ha sido una experiencia transformadora. Lo que más valoro es el ambiente familiar pero profesional, y cómo los profesores te acompañan en tu proceso personal. Este centro de yoga en Ourense ha cambiado mi forma de entender no solo el yoga, sino también la vida cotidiana."</p>
                <p className="font-medium">Elena M., 38 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Después de probar varios centros en Ourense, encontré en Mandala lo que buscaba: un yoga auténtico, no solo físico sino integral. Las clases de Daoyin Yoga con Carlos han sido especialmente beneficiosas para mi salud, ayudándome a superar problemas digestivos crónicos que arrastraba desde hacía años."</p>
                <p className="font-medium">Miguel R., 45 años</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Empecé en el centro durante mi embarazo, con las clases prenatales de Ana, y fue una experiencia tan positiva que continué después del parto. Lo recomiendo especialmente a quienes buscan un centro con atención personalizada y un enfoque respetuoso del yoga, donde realmente se preocupan por tu bienestar."</p>
                <p className="font-medium">Lucía D., 33 años</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple text-center">
            Información Práctica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Ubicación</h3>
              <p className="mb-2"><strong>Centro de Yoga Mandala Ourense</strong></p>
              <p className="mb-2">Calle Principal, 123</p>
              <p className="mb-2">32003 Ourense</p>
              <p className="mb-6">A 5 minutos caminando desde la Plaza Mayor</p>
              
              <div className="h-[200px] w-full bg-gray-200 rounded-lg mb-4 relative">
                {/* Aquí iría el mapa de Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p>Mapa de ubicación</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Horarios</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Lunes a Viernes:</span>
                  <span>9:00 - 21:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sábados:</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
              
              <h3 className="font-medium text-xl mb-4 text-brand-purple">Contacto</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Teléfono:</span>
                  <span>988 123 456</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Email:</span>
                  <span>info@mandalaourense.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Instagram:</span>
                  <span>@mandala_ourense</span>
                </div>
              </div>
              
              <Button asChild className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-brand-teal/10 p-8 rounded-xl border border-brand-teal/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-teal text-center">
              ¡Comienza Tu Viaje en el Yoga!
            </h2>
            <p className="text-lg text-center mb-8">
              Te invitamos a conocer nuestro centro de yoga en Ourense y a probar una clase gratuita para que sientas por ti mismo lo que nos hace especiales.
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