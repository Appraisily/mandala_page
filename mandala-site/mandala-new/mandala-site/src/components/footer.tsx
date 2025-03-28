import Link from "next/link"
import { ExternalLink, Instagram, Facebook, Mail, MapPin, Phone, Clock, CookieIcon } from "lucide-react"
import { CookieSettingsButton } from "@/components/cookie-consent-banner"

const navigation = {
  main: [
    { name: "Inicio", href: "/" },
    { name: "Yoga", href: "/yoga" },
    { name: "Noticias", href: "/noticias" },
    { name: "Cursos & Eventos", href: "/cursos-eventos" },
    { name: "Horarios & Precios", href: "/horarios-precios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Política de Privacidad", href: "/politica-privacidad" },
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
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="xl:col-span-1 space-y-6">
            <div>
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-heading font-semibold text-brand-purple">
                  Mandala
                </span>
                <span className="ml-1 text-3xl font-heading text-brand-teal">
                  Ourense
                </span>
              </Link>
              <p className="mt-3 text-sm text-gray-600 max-w-sm">
                Centro especializado en yoga en Ourense, ofreciendo un espacio
                para el bienestar físico, mental y espiritual a través de diversas disciplinas.
              </p>
            </div>
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
          <div className="mt-12 grid md:grid-cols-3 gap-8 xl:col-span-3 xl:mt-0">
            <div>
              <h3 className="text-base font-medium text-brand-purple">Mandala</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/yoga" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Yoga
                  </Link>
                </li>
                <li>
                  <Link href="/noticias" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-brand-purple">Información</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link href="/cursos-eventos" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Cursos & Eventos
                  </Link>
                </li>
                <li>
                  <Link href="/horarios-precios" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Horarios & Precios
                  </Link>
                </li>
                <li>
                  <Link href="/aviso-legal" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Aviso Legal
                  </Link>
                </li>
                <li>
                  <Link href="/politica-privacidad" className="text-sm text-gray-600 hover:text-brand-teal transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
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
                  <a 
                    href="https://goo.gl/maps/uNBdecH9ztaY5nJZ7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-brand-teal transition-colors"
                  >
                    <span>Cómo llegar</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Mandala Ourense. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <CookieSettingsButton className="inline-flex items-center text-sm text-gray-500 hover:text-brand-teal transition-colors">
                <CookieIcon className="h-4 w-4 mr-1" />
                <span>Configuración de cookies</span>
              </CookieSettingsButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}