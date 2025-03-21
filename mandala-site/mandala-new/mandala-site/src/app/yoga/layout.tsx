import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function YogaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      
      {/* Related Classes Section */}
      <section className="py-16 bg-brand-beige/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-purple mb-4">
              Descubre Otros Estilos de Yoga
            </h2>
            <p className="text-gray-700">
              En Mandala Ourense ofrecemos diferentes estilos de yoga para que encuentres el que mejor se adapta a tus necesidades y preferencias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/yoga/hatha-yoga" 
              className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-heading font-medium text-brand-purple mb-2">Hatha Yoga</h3>
              <p className="text-gray-600 text-sm">Equilibrio entre fuerza y flexibilidad a través de posturas clásicas y respiración.</p>
            </Link>
            
            <Link 
              href="/yoga/daoyin-yoga" 
              className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-heading font-medium text-brand-purple mb-2">Daoyin Yoga</h3>
              <p className="text-gray-600 text-sm">Fusión de yoga con medicina china tradicional para equilibrar la energía vital.</p>
            </Link>
            
            <Link 
              href="/yoga/yin-yoga" 
              className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-heading font-medium text-brand-purple mb-2">Yin Yoga</h3>
              <p className="text-gray-600 text-sm">Práctica suave con posturas sostenidas para mejorar flexibilidad y equilibrio energético.</p>
            </Link>
            
            <Link 
              href="/yoga/nidra-yoga-meditacion" 
              className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-heading font-medium text-brand-purple mb-2">Yoga Nidra & Meditación</h3>
              <p className="text-gray-600 text-sm">Técnicas de relajación profunda y meditación para calmar la mente y reducir el estrés.</p>
            </Link>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/" 
              className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}