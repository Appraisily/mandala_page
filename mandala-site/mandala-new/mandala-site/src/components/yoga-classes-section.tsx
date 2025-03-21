import { Container } from "@/components/ui/container"
import { YogaClassCard } from "@/components/yoga-class-card"

const yogaClasses = [
  {
    title: "Hatha Yoga",
    description: "Yoga tradicional que trabaja posturas físicas, técnicas de respiración y meditación para equilibrar cuerpo y mente.",
    imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/yoga/hatha-yoga",
  },
  {
    title: "Daoyin Yoga",
    description: "Una fusión de yoga con principios de medicina china, fortaleciendo el cuerpo y equilibrando la energía vital.",
    imageSrc: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    href: "/yoga/daoyin-yoga",
  },
  {
    title: "Yin Yoga",
    description: "Práctica suave y profunda con posturas sostenidas que trabajan los tejidos conectivos y equilibran la energía.",
    imageSrc: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/yoga/yin-yoga",
  },
  {
    title: "Yoga Nidra & Meditación",
    description: "Técnica de relajación profunda y meditación guiada que ayuda a reducir el estrés y mejorar la calidad del sueño.",
    imageSrc: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/yoga/nidra-yoga-meditacion",
  },
]

export function YogaClassesSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
            Nuestras Clases de Yoga
          </h2>
          <p className="text-gray-600">
            Descubre nuestras clases diseñadas para todos los niveles, desde principiantes hasta practicantes avanzados. Cada estilo ofrece beneficios únicos para el cuerpo y la mente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yogaClasses.map((yogaClass) => (
            <YogaClassCard
              key={yogaClass.title}
              title={yogaClass.title}
              description={yogaClass.description}
              imageSrc={yogaClass.imageSrc}
              href={yogaClass.href}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}