"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Yoga", href: "/yoga", submenu: [
    { name: "Hatha Yoga", href: "/yoga/hatha-yoga" },
    { name: "Daoyin Yoga", href: "/yoga/daoyin-yoga" },
    { name: "Yoga Nidra & Meditación", href: "/yoga/nidra-yoga-meditacion" },
  ]},
  { name: "Terapias", href: "/terapias" },
  { name: "Cursos & Eventos", href: "/cursos-eventos" },
  { name: "Horarios & Precios", href: "/horarios-precios" },
  { name: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (href: string) => {
    if (activeSubmenu === href) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(href)
    }
  }

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/95"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-heading font-semibold text-brand-purple">
                Mandala
              </span>
              <span className="ml-1 text-2xl font-heading text-brand-teal">
                Ourense
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:gap-x-6 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button 
                    onClick={() => toggleSubmenu(item.href)}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors py-2 px-1"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors py-2 px-1"
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-48 origin-top-left bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-beige hover:text-brand-purple transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button asChild variant="teal" size="sm" className="ml-3">
              <Link href="/contacto">Reservar Clase</Link>
            </Button>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="container-custom">
              <div className="flex items-center justify-between py-4">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-heading font-semibold text-brand-purple">
                    Mandala
                  </span>
                  <span className="ml-1 text-2xl font-heading text-brand-teal">
                    Ourense
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.submenu ? (
                          <>
                            <button
                              onClick={() => toggleSubmenu(item.href)}
                              className="flex w-full items-center justify-between rounded-lg py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <span>{item.name}</span>
                              <ChevronDown className={cn(
                                "ml-1 h-5 w-5 transition-transform",
                                activeSubmenu === item.href ? "rotate-180" : ""
                              )} />
                            </button>
                            <AnimatePresence>
                              {activeSubmenu === item.href && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-2 space-y-2 pl-6 overflow-hidden"
                                >
                                  {item.submenu.map((subitem) => (
                                    <Link
                                      key={subitem.name}
                                      href={subitem.href}
                                      className="block rounded-lg py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subitem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block rounded-lg py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button
                      asChild
                      variant="teal"
                      className="w-full"
                    >
                      <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                        Reservar Clase
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}