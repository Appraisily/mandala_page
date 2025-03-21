import Link from "next/link"
import { Container } from "@/components/ui/container"
import { ArrowRight, Sparkles, Star } from "lucide-react"

export function FirstClassCTA() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-amber-50/20 to-brand-beige/10"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9d386_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-8 md:left-16 bottom-16 md:bottom-1/3 text-amber-400 opacity-80">
        <Star className="h-8 w-8 fill-amber-400" strokeWidth={1} />
      </div>
      <div className="absolute right-12 top-1/4 text-amber-300/30 hidden md:block">
        <Sparkles className="h-16 w-16" />
      </div>
      <div className="absolute bottom-1/2 left-1/3 text-amber-200/20 hidden md:block">
        <Star className="h-10 w-10" strokeWidth={1} />
      </div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl -z-10"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl -z-10"></div>
      
      <Container>
        <div className="max-w-xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-purple mb-8">
            ¿Listo para iniciar tu práctica de yoga?
          </h2>
          
          <p className="text-lg text-gray-600 mb-14 leading-relaxed max-w-lg mx-auto">
            Reserva tu primera clase ahora y comienza tu viaje hacia el bienestar físico y mental con nosotros.
          </p>
          
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-brand-purple font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            Reservar Tu Primera Clase
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
      
      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
} 