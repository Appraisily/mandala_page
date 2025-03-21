import Link from "next/link"
import { ExternalLink, Instagram, Facebook, Mail, MapPin, Phone, Clock } from "lucide-react"

const navigation = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Yoga", href: "/yoga" },
    { name: "Terapias", href: "/terapias" },
    { name: "Cursos & Eventos", href: "/cursos-eventos" },
    { name: "Horarios & Precios", href: "/horarios-precios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Aviso Legal", href: "/aviso-legal" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/mandalaourense",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <Instagram {...props} />
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/mandalaourense",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <Facebook {...props} />
      ),
    },
    {
      name: "Email",
      href: "mailto:info@mandalaourense.com",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <Mail {...props} />
      ),
    },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-brand-beige" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container-custom py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-heading font-semibold text-brand-purple">
                Mandala
              </span>
              <span className="ml-1 text-3xl font-heading text-brand-teal">
                Ourense
              </span>
            </Link>
            <p className="text-sm text-gray-600 max-w-sm">
              Centro de yoga y terapias holísticas en Ourense, ofreciendo un espacio
              para el bienestar físico, mental y espiritual.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-brand-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-base font-medium text-brand-purple">Navegar</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-brand-teal transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-brand-purple">Contacto</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <a 
                    href="https://maps.app.goo.gl/uNBdecH9ztaY5nJZ7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 text-sm text-gray-600 hover:text-brand-teal group"
                  >
                    <span>C/ Dr. Marañón 2, entresuelo. Ourense, Galicia</span>
                    <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div className="ml-2">
                    <a href="tel:+34675091191" className="block text-sm text-gray-600 hover:text-brand-teal transition-colors">Alberto: 675 091 191</a>
                    <a href="tel:+34627305963" className="block text-sm text-gray-600 hover:text-brand-teal transition-colors">Luz: 627 305 963</a>
                    <a href="tel:+34679144037" className="block text-sm text-gray-600 hover:text-brand-teal transition-colors">Yolanda: 679 144 037</a>
                    <a href="tel:+34644503174" className="block text-sm text-gray-600 hover:text-brand-teal transition-colors">Iria: 644 503 174</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:info@mandalaourense.com" 
                    className="ml-2 text-sm text-gray-600 hover:text-brand-teal transition-colors"
                  >
                    info@mandalaourense.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div className="ml-2">
                    <p className="text-sm text-gray-600">Lun-Vie: 9:30 - 21:00</p>
                    <p className="text-sm text-gray-600">Sáb: 10:00 - 14:00</p>
                    <p className="text-sm text-gray-600">Dom: Cerrado</p>
                  </div>
                </li>
                <li>
                  <Link 
                    href="/aviso-legal" 
                    className="inline-flex text-sm text-gray-600 hover:text-brand-teal transition-colors border-b border-dotted border-gray-400 hover:border-brand-teal"
                  >
                    Aviso Legal y Condiciones de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 xl:text-center">
            &copy; {currentYear} Mandala Ourense. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}