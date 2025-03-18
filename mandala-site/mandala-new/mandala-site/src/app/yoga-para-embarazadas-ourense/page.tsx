import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yoga para Embarazadas en Ourense | Prenatal | Centro Mandala',
  description: 'Clases especializadas de yoga para embarazadas en Ourense. Prepárate física y emocionalmente para el parto con técnicas seguras adaptadas a cada trimestre.',
  keywords: 'yoga para embarazadas ourense, prenatal yoga ourense, yoga embarazo, clases embarazadas ourense, preparación parto yoga',
}

export default function YogaParaEmbarazadasOurensePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-brand-purple">
          Yoga para Embarazadas en Ourense
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Un acompañamiento consciente durante tu embarazo
        </p>
        
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-12">
          <Image 
            src="/images/prenatal-yoga.jpg" 
            alt="Clase de yoga para embarazadas en Ourense" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium">
              Conecta con tu bebé y prepárate para la maternidad en un espacio seguro y acogedor
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple">
            Yoga Prenatal: Un Camino hacia el Parto Consciente
          </h2>
          <p className="text-lg mb-6">
            En el <strong>Centro Mandala Ourense</strong> ofrecemos clases especializadas de <strong>yoga para embarazadas</strong> diseñadas para acompañarte durante esta etapa transformadora de tu vida.
          </p>
          <p className="text-lg mb-6">
            Nuestro programa de <strong>yoga prenatal en Ourense</strong> está creado específicamente para mujeres embarazadas, con ejercicios seguros y beneficiosos que se adaptan a cada trimestre del embarazo, respetando las necesidades cambiantes de tu cuerpo y tu bebé.
          </p>
          <p className="text-lg mb-8">
            Combinamos posturas suaves, técnicas de respiración, relajación profunda y meditación para prepararte física, mental y emocionalmente para el parto y la maternidad.
          </p>
          
          <div className="bg-brand-purple/10 p-8 rounded-lg border border-brand-purple/20 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="font-medium text-xl mb-3 text-brand-purple">¿En qué momento puedo empezar?</h3>
                <p className="mb-4">Generalmente recomendamos comenzar las clases de yoga prenatal a partir del segundo trimestre (semana 13-14), aunque si ya practicabas yoga antes del embarazo, puedes unirte antes con las adaptaciones adecuadas. Consulta siempre con tu médico antes de iniciar cualquier actividad física durante el embarazo.</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  <Link href="/contacto">Consultar Disponibilidad</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Beneficios del Yoga Durante el Embarazo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/physical-benefits.jpg" 
                  alt="Beneficios físicos del yoga para embarazadas" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Físicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Alivia los dolores de espalda, ciática y tensiones comunes del embarazo</li>
                  <li>Mejora la postura y el equilibrio a medida que cambia el centro de gravedad</li>
                  <li>Fortalece la musculatura necesaria para el parto (suelo pélvico, abdomen y espalda)</li>
                  <li>Aumenta la flexibilidad de la pelvis, facilitando el paso del bebé en el parto</li>
                  <li>Mejora la circulación, reduciendo la hinchazón en piernas y pies</li>
                  <li>Ayuda a controlar el aumento de peso durante la gestación</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow h-full">
              <div className="relative w-full h-[180px]">
                <Image 
                  src="/images/emotional-benefits.jpg" 
                  alt="Beneficios emocionales del yoga para embarazadas" 
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios Emocionales y Mentales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reduce significativamente el estrés y la ansiedad asociados al embarazo</li>
                  <li>Proporciona herramientas para gestionar el miedo al parto</li>
                  <li>Favorece la conexión consciente con tu bebé</li>
                  <li>Mejora la calidad del sueño, combatiendo el insomnio prenatal</li>
                  <li>Crea un espacio de atención plena y autocuidado durante esta etapa de cambios</li>
                  <li>Propicia la conexión con otras mujeres embarazadas, creando comunidad</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Beneficios para el Parto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Entrena la respiración consciente, fundamental durante las contracciones</li>
                    <li>Desarrolla mayor resistencia física para el trabajo de parto</li>
                    <li>Enseña posiciones que facilitan el descenso y el nacimiento del bebé</li>
                    <li>Potencia la confianza en tu cuerpo y su sabiduría innata</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mejora la capacidad de relajación entre contracciones</li>
                    <li>Reduce la percepción del dolor a través de técnicas de atención y respiración</li>
                    <li>Prepara para un parto más activo y consciente</li>
                    <li>Disminuye las probabilidades de intervenciones médicas innecesarias</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Clases de Yoga para Embarazadas en Ourense
          </h2>
          
          <div className="bg-brand-beige p-8 rounded-xl mb-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[300px] md:h-auto">
                <Image 
                  src="/images/prenatal-class.jpg" 
                  alt="Clase de yoga prenatal en Mandala Ourense" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-4 text-brand-purple">Características de Nuestras Clases</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-brand-teal text-xl mr-3">✓</span>
                    <p><strong>Grupos reducidos</strong> (máximo 10 embarazadas) para garantizar atención personalizada</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand-teal text-xl mr-3">✓</span>
                    <p><strong>Profesoras especializadas</strong> en yoga prenatal con formación adicional en embarazo y parto</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand-teal text-xl mr-3">✓</span>
                    <p><strong>Adaptación a cada trimestre</strong> y a las necesidades individuales de cada mujer</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand-teal text-xl mr-3">✓</span>
                    <p><strong>Material especializado</strong> (cojines, props, mantas) para máximo confort y seguridad</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand-teal text-xl mr-3">✓</span>
                    <p><strong>Ambiente acogedor y seguro</strong> donde compartir experiencias con otras embarazadas</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand-teal text-xl mr-3">✓</span>
                    <p><strong>Información complementaria</strong> sobre embarazo, parto y posparto desde una perspectiva integral</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Horarios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Martes</span>
                    <span>18:00 - 19:15</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jueves</span>
                    <span>11:30 - 12:45</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado</span>
                    <span>10:00 - 11:15</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">Los horarios pueden estar sujetos a cambios. Confirma disponibilidad actual.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Precios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Clase suelta</span>
                    <span>16€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bono 5 clases</span>
                    <span>70€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bono 10 clases</span>
                    <span>120€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mensualidad (1 clase/semana)</span>
                    <span>55€</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">Los bonos tienen validez durante todo el embarazo.</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand-purple">Qué Traer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ropa cómoda que permita movimiento</li>
                  <li>Una botella de agua</li>
                  <li>Toalla pequeña (opcional)</li>
                </ul>
                <p className="mt-4">El resto de material especializado (esterillas, cojines, mantas, bloques) lo proporcionamos nosotros para garantizar condiciones óptimas para embarazadas.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <Link href="/horarios-precios">Ver Todos los Horarios y Tarifas</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            ¿Qué incluyen nuestras clases de yoga para embarazadas?
          </h2>
          
          <div className="space-y-8">
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-medium mb-4 text-brand-purple">Posturas Adaptadas (Asanas)</h3>
                  <p className="mb-4">Secuencias de posturas cuidadosamente seleccionadas y adaptadas para el embarazo, que:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Alivian la presión en la zona lumbar y la pelvis</li>
                    <li>Abren el pecho y mejoran la capacidad respiratoria</li>
                    <li>Fortalecen las piernas para sostener el peso adicional</li>
                    <li>Mejoran la circulación en todo el cuerpo</li>
                    <li>Aumentan la movilidad de la cadera para el parto</li>
                    <li>Proporcionan alivio a molestias comunes como ciática o edemas</li>
                  </ul>
                </div>
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/prenatal-poses.jpg" 
                    alt="Posturas de yoga para embarazadas" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-[200px] md:h-auto order-2 md:order-1">
                  <Image 
                    src="/images/breathing-techniques.jpg" 
                    alt="Técnicas de respiración para embarazadas" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 order-1 md:order-2">
                  <h3 className="text-2xl font-medium mb-4 text-brand-purple">Técnicas de Respiración (Pranayama)</h3>
                  <p className="mb-4">Aprenderás diferentes técnicas respiratorias que te serán útiles durante el embarazo y, especialmente, en el parto:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Respiración completa para aumentar la oxigenación</li>
                    <li>Respiraciones calmantes para momentos de ansiedad</li>
                    <li>Técnicas específicas para cada fase del parto</li>
                    <li>Respiraciones que te ayudan a conectar con tu bebé</li>
                    <li>Ejercicios que preparan para los pujos del expulsivo</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-medium mb-4 text-brand-purple">Relajación Profunda</h3>
                  <p className="mb-4">Cada clase incluye un periodo de relajación guiada que:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Reduce los niveles de cortisol (hormona del estrés)</li>
                    <li>Favorece la producción de endorfinas y oxitocina</li>
                    <li>Entrena la capacidad de soltar y entregarse (fundamental para el parto)</li>
                    <li>Mejora la calidad del descanso y del sueño</li>
                    <li>Proporciona un momento íntimo de conexión madre-bebé</li>
                  </ul>
                </div>
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image 
                    src="/images/deep-relaxation.jpg" 
                    alt="Relajación profunda para embarazadas" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-brand-beige p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-[200px] md:h-auto order-2 md:order-1">
                  <Image 
                    src="/images/community-sharing.jpg" 
                    alt="Compartir experiencias entre embarazadas" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 order-1 md:order-2">
                  <h3 className="text-2xl font-medium mb-4 text-brand-purple">Espacio de Comunidad</h3>
                  <p className="mb-4">Más allá de la práctica física, nuestras clases ofrecen:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Un momento para compartir experiencias con otras embarazadas</li>
                    <li>Información basada en evidencia sobre embarazo y parto</li>
                    <li>Espacio para resolver dudas comunes del proceso</li>
                    <li>Sugerencias de preparación física y emocional para cada etapa</li>
                    <li>Recursos adicionales para profundizar en tu propio tiempo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Nuestras Profesoras Especializadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/teacher-ana.jpg" 
                    alt="Ana Vázquez - Profesora de yoga prenatal" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Ana Vázquez</h3>
                <p className="text-muted-foreground mb-4">Especialista en Yoga Prenatal</p>
                <p className="text-center mb-4">Con más de 8 años de experiencia acompañando a embarazadas, Ana combina su formación como profesora de yoga (500h) con estudios complementarios en biomecánica del parto, doula y acompañamiento emocional en la maternidad.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Yoga Prenatal</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Doula</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Biomecánica del Parto</span>
                </div>
              </div>
            </Card>
            
            <Card className="border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center p-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/teacher-laura.jpg" 
                    alt="Laura Fernández - Profesora de yoga prenatal" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1 text-brand-purple">Laura Fernández</h3>
                <p className="text-muted-foreground mb-4">Yoga Prenatal y Postnatal</p>
                <p className="text-center mb-4">Especializada en acompañamiento integral durante todo el ciclo maternal. Laura es matrona de profesión y profesora de yoga, lo que le permite ofrecer un enfoque único que combina conocimientos médicos con la sabiduría tradicional del yoga.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Yoga Prenatal</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Matrona</span>
                  <span className="bg-brand-purple/10 text-brand-purple text-sm py-1 px-3 rounded-full">Yoga Restaurativo</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Preguntas Frecuentes sobre Yoga Prenatal
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Es seguro practicar yoga durante el embarazo?</h3>
              <p>Sí, el yoga prenatal está especialmente diseñado para ser seguro durante la gestación. En nuestras clases, todas las posturas están adaptadas para respetar los cambios anatómicos y fisiológicos del embarazo. Sin embargo, siempre recomendamos consultar con tu médico u obstetra antes de comenzar, especialmente si tienes alguna contraindicación específica o embarazo de riesgo.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Necesito experiencia previa en yoga para unirme a las clases?</h3>
              <p>No es necesario tener experiencia previa. Nuestras clases están diseñadas para ser accesibles tanto para principiantes como para practicantes con experiencia. Cada instrucción se da de forma clara y detallada, y siempre hay opciones para adaptar según tu nivel y necesidades.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Hasta qué momento del embarazo puedo practicar?</h3>
              <p>Puedes practicar yoga prenatal hasta el final del embarazo. De hecho, muchas mujeres encuentran gran alivio y beneficio en las prácticas durante las últimas semanas de gestación. Simplemente, las posturas se irán adaptando a la etapa avanzada del embarazo para mayor comodidad y seguridad.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Qué pasa si tengo molestias durante la clase?</h3>
              <p>La regla de oro es escuchar siempre a tu cuerpo. Si sientes alguna molestia, dolor o incomodidad, comunícalo inmediatamente a la profesora. Ella te ofrecerá alternativas o modificaciones. El yoga prenatal debe ser una experiencia agradable, nunca dolorosa o incómoda.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Las clases son solo físicas o incluyen otros aspectos?</h3>
              <p>Nuestras clases de yoga para embarazadas en Ourense van mucho más allá de lo físico. Incluyen aspectos emocionales, preparación mental para el parto, conexión con el bebé, técnicas de respiración para las contracciones y un espacio para compartir con otras mujeres en la misma etapa vital.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2 text-brand-purple">¿Ofrecéis también clases postnatales?</h3>
              <p>Sí, contamos con clases específicas de yoga postnatal y yoga con bebés, para acompañarte también en esta nueva etapa. Estas clases están diseñadas para la recuperación física después del parto y para disfrutar de un espacio de conexión con tu bebé.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-brand-purple">
            Experiencias de Nuestras Alumnas
          </h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Las clases de yoga prenatal en Mandala fueron esenciales durante mi embarazo. No solo me ayudaron a mantenerme física y emocionalmente fuerte, sino que las técnicas de respiración que aprendí fueron mi salvación durante el parto. Ana es una profesora excepcional que realmente entiende las necesidades de las embarazadas. Además, hice amigas que ahora compartimos la maternidad."</p>
                <p className="font-medium">Sofía G., mamá de Lucas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Comencé las clases en mi segundo trimestre con bastantes molestias de ciática y dolor lumbar. En pocas semanas noté una mejora significativa. El ambiente en las clases es maravilloso, muy acogedor y sin presiones. Laura adapta todas las posturas según tus necesidades y semana de gestación. Sin duda, fue la mejor inversión que hice durante mi embarazo."</p>
                <p className="font-medium">Marta L., mamá de Emma</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-beige border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">"Como primeriza, tenía muchos miedos respecto al parto. Las clases de yoga prenatal no solo me ayudaron físicamente, sino también mentalmente. Aprendí a confiar en mi cuerpo y a conectar con mi bebé de una forma muy especial. Durante el parto, recordé todo lo aprendido y, aunque fue intenso, me sentí empoderada y preparada. ¡Gracias por ese regalo!"</p>
                <p className="font-medium">Cristina R., mamá de Mateo</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="bg-brand-purple/10 p-8 rounded-xl border border-brand-purple/20">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-brand-purple text-center">
              ¿Lista para comenzar tu práctica prenatal?
            </h2>
            <p className="text-lg text-center mb-8">
              Te invitamos a unirte a nuestras clases de yoga para embarazadas en Ourense. Un espacio donde prepararte para el nacimiento de tu bebé con conciencia, serenidad y conexión.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link href="/contacto">Reservar Plaza</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
                <Link href="/horarios-precios">Consultar Horarios</Link>
              </Button>
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              *Recuerda consultar con tu médico u obstetra antes de comenzar cualquier actividad física durante el embarazo.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}