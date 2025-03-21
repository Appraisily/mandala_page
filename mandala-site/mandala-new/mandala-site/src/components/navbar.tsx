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
    { name: "Yin Yoga", href: "/yoga/yin-yoga" },
    { name: "Yoga Nidra & Meditación", href: "/yoga/nidra-yoga-meditacion" },
  ]},
  { name: "Terapias", href: "/terapias" },
  { name: "Noticias", href: "/noticias" },
  { name: "Cursos y Eventos", href: "/cursos-eventos" },
  { name: "Horarios y Precios", href: "/horarios-precios" },
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
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className={cn(
                "text-2xl font-heading font-semibold transition-colors duration-300",
                isScrolled ? "text-brand-purple" : "text-white"
              )}>
                Mandala
              </span>
              <span className={cn(
                "ml-1 text-2xl font-heading transition-colors duration-300",
                isScrolled ? "text-brand-teal" : "text-brand-amber"
              )}>
                Ourense
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:gap-x-1 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group px-2">
                {item.submenu ? (
                  <button 
                    onClick={() => toggleSubmenu(item.href)}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors px-3 py-2 rounded-full hover:bg-white/10",
                      isScrolled 
                        ? "text-gray-700 hover:text-brand-teal hover:bg-brand-beige" 
                        : "text-white hover:text-white"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors px-3 py-2 rounded-full hover:bg-white/10 block",
                      isScrolled 
                        ? "text-gray-700 hover:text-brand-teal hover:bg-brand-beige" 
                        : "text-white hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-52 origin-top-left bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
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
            <Button 
              asChild 
              variant={isScrolled ? "amber" : "outline"} 
              size="sm" 
              className={cn(
                "ml-3 rounded-full",
                !isScrolled && "border-white text-white hover:bg-white/20"
              )}
            >
              <Link href="/contacto">Reservar Clase</Link>
            </Button>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className={cn(
                "-m-2.5 inline-flex items-center justify-center rounded-full p-2.5",
                isScrolled ? "text-gray-700" : "text-white"
              )}
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
            className="fixed inset-0 z-50 bg-gradient-to-br from-brand-purple to-brand-teal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="container mx-auto px-4 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-2xl font-heading font-semibold text-white">
                      Mandala
                    </span>
                    <span className="ml-1 text-2xl font-heading text-brand-amber">
                      Ourense
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="rounded-full p-2.5 text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-8 flow-root">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <div key={item.name} className="py-1">
                        {item.submenu ? (
                          <>
                            <button
                              onClick={() => toggleSubmenu(item.href)}
                              className="flex w-full items-center justify-between rounded-xl py-3 px-4 text-lg font-medium text-white hover:bg-white/10"
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
                                  className="mt-1 space-y-1 pl-6 overflow-hidden"
                                >
                                  {item.submenu.map((subitem) => (
                                    <Link
                                      key={subitem.name}
                                      href={subitem.href}
                                      className="block rounded-xl py-2 px-4 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
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
                            className="block rounded-xl py-3 px-4 text-lg font-medium text-white hover:bg-white/10"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <Button
                      asChild
                      variant="amber"
                      size="lg"
                      className="w-full rounded-full font-medium"
                    >
                      <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                        Reservar Clase
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}