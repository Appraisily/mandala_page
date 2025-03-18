import { Container } from "@/components/ui/container"
import { QuoteIcon } from "lucide-react"

const testimonials = [
  {
    content: "Mandala Ourense ha cambiado mi forma de entender el yoga. Las clases de Hatha Yoga me han ayudado a mejorar mi postura y a reducir el estrés del día a día. Sin duda, recomendaría este centro a cualquier persona.",
    author: "Laura García",
    role: "Practicante de Hatha Yoga",
  },
  {
    content: "Llevo más de un año asistiendo a las sesiones de Yoga Nidra y mi calidad de sueño ha mejorado notablemente. Los profesores son excelentes y el ambiente es muy acogedor. ¡Es mi pequeño oasis de paz en Ourense!",
    author: "Carlos Rodríguez",
    role: "Practicante de Yoga Nidra",
  },
  {
    content: "Los masajes terapéuticos de Mandala son increíbles. He probado varios centros en la ciudad, pero aquí el nivel de atención y profesionalidad es superior. Siempre salgo renovada y con mucha más energía.",
    author: "Marta Fernández",
    role: "Cliente de terapias",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
            Lo Que Dicen Nuestros Alumnos
          </h2>
          <p className="text-gray-600">
            El bienestar de nuestros alumnos es nuestra principal motivación. Conoce las experiencias de quienes ya son parte de la comunidad Mandala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-brand-beige/30 p-6 rounded-lg relative"
            >
              <QuoteIcon className="h-8 w-8 text-brand-amber/30 absolute top-4 right-4" />
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.content}</p>
              <div className="mt-4">
                <p className="font-medium text-brand-purple">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}