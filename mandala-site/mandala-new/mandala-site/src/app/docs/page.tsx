"use client"

import { useState } from "react"
import Link from "next/link"
import { AlignJustify, ChevronDown, BookOpen, Calendar, Instagram, Settings, HelpCircle, Server, LayoutGrid, Facebook, Code } from "lucide-react"

// Note: Metadata is defined in layout.tsx file

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("routes")
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-brand-purple" />
            <span className="text-xl font-medium text-brand-purple">Mandala Docs</span>
          </div>
          <button
            className="block lg:hidden p-2 text-gray-600 hover:text-brand-purple"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AlignJustify />
          </button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row flex-1">
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-white p-4 pt-20 overflow-y-auto">
            <nav className="space-y-6 text-lg">
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'quick-start' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('quick-start')}
                >
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5" />
                      <path d="M5 12l7-7 7 7" />
                    </svg>
                    <span>Inicio Rápido</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'routes' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('routes')}
                >
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="h-5 w-5" />
                    <span>Rutas del Sitio</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'functionality' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('functionality')}
                >
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    <span>Funcionalidades</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'google-integration' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('google-integration')}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Servicios Google</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'social-integration' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('social-integration')}
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                    <span>Redes Sociales</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'admin-panel' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('admin-panel')}
                >
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <span>Panel Admin</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'site-settings' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('site-settings')}
                >
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <span>Configuración</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'components' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('components')}
                >
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="h-5 w-5" />
                    <span>Componentes</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'deployment' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('deployment')}
                >
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5" />
                    <span>Despliegue</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className={`flex w-full items-center justify-between py-2 text-left font-medium ${activeSection === 'troubleshooting' ? 'text-brand-purple' : 'text-gray-700'}`}
                  onClick={() => scrollToSection('troubleshooting')}
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    <span>Solución de Problemas</span>
                  </div>
                </button>
              </div>
            </nav>
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-purple"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-200 pt-8 pb-10 pr-4">
          <nav className="space-y-1 pl-6">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Documentación</h2>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'quick-start' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('quick-start')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
                <span>Inicio Rápido</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'routes' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('routes')}
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                <span>Rutas del Sitio</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'functionality' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('functionality')}
              >
                <Code className="mr-2 h-4 w-4" />
                <span>Funcionalidades</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'google-integration' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('google-integration')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                <span>Servicios Google</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'social-integration' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('social-integration')}
              >
                <Instagram className="mr-2 h-4 w-4" />
                <span>Redes Sociales</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'admin-panel' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('admin-panel')}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Panel Admin</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'site-settings' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('site-settings')}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'components' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('components')}
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                <span>Componentes</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'deployment' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('deployment')}
              >
                <Server className="mr-2 h-4 w-4" />
                <span>Despliegue</span>
              </button>
            </div>
            <div>
              <button
                className={`flex w-full items-center text-left py-2 px-3 rounded-md ${activeSection === 'troubleshooting' ? 'bg-brand-purple/10 text-brand-purple font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => scrollToSection('troubleshooting')}
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Solución de Problemas</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 md:px-8">
            <div className="prose prose-purple max-w-none">
              <h1 className="text-4xl font-heading font-bold text-brand-purple mb-8">
                Documentación de Mandala Ourense
              </h1>

              <div className="bg-brand-purple/5 p-6 rounded-xl mb-12">
                <p className="text-gray-700">
                  Bienvenido a la documentación técnica del sitio web de Mandala Ourense. En esta página encontrarás información detallada sobre la estructura, componentes y funcionalidad del sitio.
                </p>
              </div>

              {/* Quick Start Guide */}
              <section className="mb-16 scroll-mt-20" id="quick-start">
                <div className="flex items-center gap-2 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5" />
                    <path d="M5 12l7-7 7 7" />
                  </svg>
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Guía de Inicio Rápido</h2>
                </div>

                <div className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Requisitos Previos</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Node.js 18.x o superior</li>
                        <li>npm 9.x o superior</li>
                        <li>Git</li>
                      </ul>
                    </div>

                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Comandos Principales</h3>
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                          <code className="text-sm text-gray-800">npm run dev</code>
                          <p className="text-xs text-gray-500 mt-1 mb-0">Inicia el servidor de desarrollo</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                          <code className="text-sm text-gray-800">npm run build</code>
                          <p className="text-xs text-gray-500 mt-1 mb-0">Construye el sitio para producción</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                          <code className="text-sm text-gray-800">npm run lint</code>
                          <p className="text-xs text-gray-500 mt-1 mb-0">Ejecuta el linter</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Pasos de Instalación</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>
                        <span className="font-medium">Clonar el repositorio</span>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-1 mb-2">
                          <code className="text-sm text-gray-800">git clone https://github.com/tu-usuario/mandala-site.git</code>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">Instalar dependencias</span>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-1 mb-2">
                          <code className="text-sm text-gray-800">cd mandala-site && npm install</code>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">Configurar las variables de entorno</span>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-1 mb-2">
                          <code className="text-sm text-gray-800">cp .env.local.example .env.local</code>
                          <p className="text-xs text-gray-500 mt-1 mb-0">Luego edita el archivo .env.local con tus valores</p>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">Configurar las imágenes</span>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-1 mb-2">
                          <code className="text-sm text-gray-800">./copy-testimonial-images.bat</code>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">Iniciar el servidor de desarrollo</span>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-1 mb-2">
                          <code className="text-sm text-gray-800">npm run dev</code>
                          <p className="text-xs text-gray-500 mt-1 mb-0">Abre http://localhost:3000 en tu navegador</p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Estructura de Archivos Clave</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <pre className="text-sm text-gray-800 overflow-x-auto">
{`src/
├── app/                  # Rutas y páginas
├── components/           # Componentes reutilizables
├── lib/                  # Utilidades y contextos
│   ├── settings-context.tsx    # Contexto de configuración
│   └── site-config.json        # Configuración predeterminada
└── public/               # Archivos estáticos
    └── images/           # Imágenes del sitio`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rutas del Sitio */}
              <section className="mb-16 scroll-mt-20" id="routes">
                <div className="flex items-center gap-2 mb-6">
                  <LayoutGrid className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Rutas del Sitio</h2>
                </div>
                
                <p className="mb-4">
                  El sitio está construido con Next.js 13, utilizando el nuevo sistema de enrutamiento App Router.
                  Cada ruta corresponde a una carpeta dentro de <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app</code>, y contiene un archivo <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">page.tsx</code>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-brand-purple/10 rounded-lg border border-brand-purple/20 flex items-center justify-between">
                    <div className="flex items-center">
                      <LayoutGrid className="h-5 w-5 text-brand-purple mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-brand-purple">Visualización Completa del Sitemap</span>
                        <p className="text-sm text-gray-600 mt-1 mb-0">Explora la estructura completa del sitio con resúmenes de cada página</p>
                      </div>
                    </div>
                    <Link 
                      href="/docs/sitemap" 
                      className="px-4 py-2 bg-brand-purple text-white rounded-md text-sm font-medium hover:bg-brand-purple/90 transition-colors"
                    >
                      Ver Sitemap
                    </Link>
                  </div>
                  
                  <div className="p-4 bg-brand-teal/10 rounded-lg border border-brand-teal/20 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <span className="font-medium text-brand-teal">Índice de Imágenes</span>
                        <p className="text-sm text-gray-600 mt-1 mb-0">Catálogo completo de imágenes utilizadas en el sitio</p>
                      </div>
                    </div>
                    <Link 
                      href="/docs/images" 
                      className="px-4 py-2 bg-brand-teal text-white rounded-md text-sm font-medium hover:bg-brand-teal/90 transition-colors"
                    >
                      Ver Imágenes
                    </Link>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Categorías de Rutas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 bg-brand-purple/10 rounded-lg border border-brand-purple/20">
                      <h4 className="font-medium text-brand-purple mb-1">Rutas Principales</h4>
                      <p className="text-sm text-gray-600 mb-0">
                        Secciones principales del sitio web
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-700 mb-1">Tipos de Yoga</h4>
                      <p className="text-sm text-gray-600 mb-0">
                        Páginas detalladas para cada estilo de yoga
                      </p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="font-medium text-amber-700 mb-1">Rutas SEO</h4>
                      <p className="text-sm text-gray-600 mb-0">
                        Páginas adicionales optimizadas para motores de búsqueda
                      </p>
                    </div>
                  </div>
                </div>

                <div className="not-prose rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-brand-purple text-white border-b border-brand-purple/20">
                          <th className="px-4 py-3 text-left font-medium">Rutas Principales</th>
                          <th className="px-4 py-3 text-left font-medium">Descripción</th>
                          <th className="px-4 py-3 text-left font-medium">Componentes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/</code></td>
                          <td className="px-4 py-3 align-top">Página de inicio</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/page.tsx</code>
                              <span className="text-xs text-gray-500">Incluye: HeroSection, YogaClassesSection, TestimonialsSection</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/about</code></td>
                          <td className="px-4 py-3 align-top">Información sobre el centro</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/about/page.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/terapias</code></td>
                          <td className="px-4 py-3 align-top">Información sobre terapias</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/terapias/page.tsx</code>
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/terapias/client-page.tsx</code>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/horarios-precios</code></td>
                          <td className="px-4 py-3 align-top">Horarios y precios</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/horarios-precios/page.tsx</code>
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/horarios-precios/client-page.tsx</code>
                              <span className="text-xs text-gray-500">Integración con GoogleCalendar</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/contacto</code></td>
                          <td className="px-4 py-3 align-top">Página de contacto</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/contacto/page.tsx</code>
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/contacto/client-page.tsx</code>
                              <span className="text-xs text-gray-500">Integración con GoogleForm</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/noticias</code></td>
                          <td className="px-4 py-3 align-top">Noticias y actualizaciones</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/noticias/page.tsx</code>
                              <span className="text-xs text-gray-500">Integración con GoogleSites y feed estático de redes sociales</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/admin</code></td>
                          <td className="px-4 py-3 align-top">Panel de administración</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/admin/page.tsx</code>
                              <span className="text-xs text-gray-500">Cliente: utiliza localStorage y settings-context</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/docs</code></td>
                          <td className="px-4 py-3 align-top">Esta documentación</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/docs/page.tsx</code>
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/docs/layout.tsx</code>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="not-prose rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-green-600 text-white border-b border-green-700">
                          <th className="px-4 py-3 text-left font-medium">Rutas de Yoga</th>
                          <th className="px-4 py-3 text-left font-medium">Descripción</th>
                          <th className="px-4 py-3 text-left font-medium">Componentes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/yoga</code></td>
                          <td className="px-4 py-3 align-top">Página general de yoga</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga/page.tsx</code>
                              <span className="text-xs text-gray-500">Incluye: YogaStylesSection</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/yoga/hatha-yoga</code></td>
                          <td className="px-4 py-3 align-top">Hatha Yoga</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga/hatha-yoga/page.tsx</code>
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga/hatha-yoga/client-page.tsx</code>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/yoga/nidra-yoga-meditacion</code></td>
                          <td className="px-4 py-3 align-top">Yoga Nidra y Meditación</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga/nidra-yoga-meditacion/page.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/yoga/yin-yoga</code></td>
                          <td className="px-4 py-3 align-top">Yin Yoga</td>
                          <td className="px-4 py-3 align-top">
                            <div className="space-y-1">
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga/yin-yoga/page.tsx</code>
                              <code className="block px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga/yin-yoga/client-page.tsx</code>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/yoga/daoyin-yoga</code></td>
                          <td className="px-4 py-3 align-top">Daoyin Yoga</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga/daoyin-yoga/page.tsx</code></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="not-prose rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-amber-500 text-white border-b border-amber-600">
                          <th className="px-4 py-3 text-left font-medium">Rutas SEO & Legales</th>
                          <th className="px-4 py-3 text-left font-medium">Descripción</th>
                          <th className="px-4 py-3 text-left font-medium">Archivo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/hatha-yoga-ourense</code></td>
                          <td className="px-4 py-3 align-top">SEO: Hatha Yoga en Ourense</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/hatha-yoga-ourense/page.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/centro-de-yoga-ourense</code></td>
                          <td className="px-4 py-3 align-top">SEO: Centro de Yoga en Ourense</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/centro-de-yoga-ourense/page.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/yoga-para-principiantes-ourense</code></td>
                          <td className="px-4 py-3 align-top">SEO: Yoga para Principiantes</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/yoga-para-principiantes-ourense/page.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/ofertas-yoga-ourense</code></td>
                          <td className="px-4 py-3 align-top">SEO: Ofertas de Yoga</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/ofertas-yoga-ourense/page.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/aviso-legal</code></td>
                          <td className="px-4 py-3 align-top">Aviso Legal</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/aviso-legal/page.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/politica-privacidad</code></td>
                          <td className="px-4 py-3 align-top">Política de Privacidad</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/app/politica-privacidad/page.tsx</code></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Información Técnica Adicional</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Todas las rutas usan el mismo <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">layout.tsx</code> compartido</li>
                    <li>Los archivos <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">client-page.tsx</code> son componentes con "use client" para funcionalidad interactiva</li>
                    <li>La mayoría de páginas SEO son redirecciones internas a las rutas principales</li>
                    <li>Las rutas <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">/robots.txt</code> y <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">/sitemap.xml</code> son generadas automáticamente</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <p className="text-sm text-amber-800 mb-0">
                    <strong>Nota:</strong> Existen más de 20 rutas adicionales para SEO no listadas en esta tabla. Todas son similares a las mostradas y siguen patrones de nombres como <code className="mx-1 px-1 py-0.5 rounded bg-amber-100 text-amber-800">/yoga-terapeutico-ourense</code>, <code className="mx-1 px-1 py-0.5 rounded bg-amber-100 text-amber-800">/escuela-de-yoga-ourense</code>, etc.
                  </p>
                </div>
              </section>

              {/* Funcionalidades Principales */}
              <section className="mb-16 scroll-mt-20" id="functionality">
                <div className="flex items-center gap-2 mb-6">
                  <Code className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Funcionalidades Principales</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Navegación</h3>
                    <p className="text-gray-700 mb-0">
                      Sistema de navegación responsivo con menús desplegables y versión móvil con animaciones.
                      <div className="mt-4 text-sm text-gray-500">
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/components/navbar.tsx</code>
                      </div>
                    </p>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Presentación de Clases</h3>
                    <p className="text-gray-700 mb-0">
                      Componentes para mostrar la oferta de clases de yoga, con información sobre tipos, niveles y horarios.
                      <div className="mt-4 text-sm text-gray-500">
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/components/yoga-classes-section.tsx</code>
                      </div>
                    </p>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Presentación de Terapias</h3>
                    <p className="text-gray-700 mb-0">
                      Componentes para mostrar las terapias ofrecidas por el centro.
                      <div className="mt-4 text-sm text-gray-500">
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/components/therapies-section.tsx</code>
                      </div>
                    </p>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Formulario de Contacto</h3>
                    <p className="text-gray-700 mb-0">
                      Integración con Google Forms para recibir mensajes de los usuarios.
                      <div className="mt-4 text-sm text-gray-500">
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/components/google-form.tsx</code>
                      </div>
                    </p>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Horarios</h3>
                    <p className="text-gray-700 mb-0">
                      Integración con Google Calendar para mostrar los horarios de clases.
                      <div className="mt-4 text-sm text-gray-500">
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/components/google-calendar.tsx</code>
                      </div>
                    </p>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Noticias y Blog</h3>
                    <p className="text-gray-700 mb-0">
                      Integración con Google Sites y feeds de redes sociales para mostrar actualizaciones.
                      <div className="mt-4 text-sm text-gray-500">
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/components/google-sites-embed.tsx</code>
                      </div>
                    </p>
                  </div>
                </div>
              </section>

              {/* Integración con Servicios de Google */}
              <section className="mb-16 scroll-mt-20" id="google-integration">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Integración con Servicios de Google</h2>
                </div>
                
                <div className="space-y-8 mt-6">
                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Google Calendar</h3>
                    <p className="mb-4 text-gray-700">
                      La aplicación utiliza Google Calendar para mostrar los horarios de clases. El ID del calendario se puede configurar desde el panel de administración.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2 text-gray-800">Implementación</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Componente: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/components/google-calendar.tsx</code></li>
                        <li>Utilizado en: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/app/horarios-precios/client-page.tsx</code></li>
                        <li>Configuración: Panel de administración &gt; Google Calendar ID</li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Google Forms</h3>
                    <p className="mb-4 text-gray-700">
                      El formulario de contacto está implementado usando Google Forms para facilitar la gestión de mensajes.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2 text-gray-800">Implementación</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Componente: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/components/google-form.tsx</code></li>
                        <li>Utilizado en: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/app/contacto/client-page.tsx</code></li>
                        <li>Configuración: Requiere un ID de formulario de Google Forms</li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Google Sites</h3>
                    <p className="mb-4 text-gray-700">
                      Se utiliza Google Sites para contenido más estructurado como talleres y artículos. Es una alternativa fácil de usar a un sistema de gestión de contenidos completo.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2 text-gray-800">Implementación</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Componente: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/components/google-sites-embed.tsx</code></li>
                        <li>Utilizado en: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/app/noticias/page.tsx</code></li>
                        <li>Configuración: Panel de administración &gt; URL de Google Sites</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Integración con Redes Sociales */}
              <section className="mb-16 scroll-mt-20" id="social-integration">
                <div className="flex items-center gap-2 mb-6">
                  <Instagram className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Integración con Redes Sociales</h2>
                </div>
                
                <div className="space-y-8 mt-6">
                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Instagram className="h-5 w-5 text-brand-purple" />
                        <h3 className="text-xl font-heading font-medium text-brand-purple m-0">Instagram</h3>
                      </div>
                      <p className="mb-4 text-gray-700">
                        El sitio muestra las publicaciones de Instagram como parte de la sección de noticias.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Componente: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">social-media-feed.tsx</code></li>
                          <li>Configuración: Panel &gt; Usuario de Instagram</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Facebook className="h-5 w-5 text-brand-purple" />
                        <h3 className="text-xl font-heading font-medium text-brand-purple m-0">Facebook</h3>
                      </div>
                      <p className="mb-4 text-gray-700">
                        El sitio muestra las publicaciones de Facebook como parte de la sección de noticias.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Componente: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">social-media-feed.tsx</code></li>
                          <li>Configuración: Panel &gt; ID de Página de Facebook</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Panel de Administración */}
              <section className="mb-16 scroll-mt-20" id="admin-panel">
                <div className="flex items-center gap-2 mb-6">
                  <Settings className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Panel de Administración</h2>
                </div>
                
                <div className="mt-6">
                  <div className="mb-6">
                    <p className="mb-4">
                      El sitio incluye un panel de administración simple, accesible en <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/admin</code>, que permite configurar diversos aspectos sin necesidad de conocimientos técnicos.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Acceso</h3>
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="mb-2 text-gray-700 font-medium">URL: <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">/admin</code></p>
                        <p className="mb-0 text-gray-700">Contraseña: <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">[Contacta al administrador]</code></p>
                      </div>
                    </div>

                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Implementación</h3>
                      <p className="mb-4 text-gray-700">
                        El panel guarda la configuración en localStorage del navegador.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Panel: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/app/admin/page.tsx</code></li>
                          <li>Contexto: <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-800">src/lib/settings-context.tsx</code></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-4">Funcionalidades</h3>
                    <p className="mb-4 text-gray-700">El panel permite configurar:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Google Calendar ID para los horarios</li>
                          <li>URL de Google Sites para el contenido</li>
                          <li>Usuario de Instagram</li>
                          <li>ID de página de Facebook</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Información de contacto (email, teléfono)</li>
                          <li>Dirección física del centro</li>
                          <li>Horarios de atención del centro</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl p-6 border-l-4 border-yellow-400 bg-yellow-50">
                    <h3 className="text-xl font-heading font-medium text-yellow-800 mb-3">⚠️ Limitaciones Importantes</h3>
                    <div className="text-sm text-yellow-800 space-y-2">
                      <p>
                        <strong>Almacenamiento Local:</strong> La configuración se guarda en localStorage, lo que significa que:
                      </p>
                      <ul className="list-disc list-inside pl-2">
                        <li>Los cambios solo afectan al navegador donde se realizaron</li>
                        <li>No se comparten entre dispositivos o usuarios</li>
                        <li>Se pierden si se borran los datos de navegación</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Enfoque de Configuración Híbrido:</strong> 
                      </p>
                      <ul className="list-disc list-inside pl-2">
                        <li>Los valores predeterminados se establecen en <code className="px-1 py-0.5 rounded bg-yellow-100 text-yellow-800">site-config.json</code></li>
                        <li>El contexto <code className="px-1 py-0.5 rounded bg-yellow-100 text-yellow-800">SiteSettingsContext</code> usa localStorage si existe, o valores predeterminados si no</li>
                        <li>Para cambios permanentes que afecten a todos los usuarios, se debe modificar <code className="px-1 py-0.5 rounded bg-yellow-100 text-yellow-800">site-config.json</code> y redesplegar el sitio</li>
                      </ul>
                      <p className="mt-2 font-medium">
                        Solución a largo plazo: En el futuro, se recomienda migrar a una solución basada en base de datos o CMS para permitir modificaciones persistentes y compartidas.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Configuración del Sitio */}
              <section className="mb-16 scroll-mt-20" id="site-settings">
                <div className="flex items-center gap-2 mb-6">
                  <Settings className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Configuración del Sitio</h2>
                </div>
                
                <div className="space-y-6 mt-6">
                  <p>
                    La configuración del sitio se gestiona a través del contexto <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">SiteSettingsContext</code>. Este contexto
                    proporciona acceso a la configuración en cualquier componente del sitio.
                  </p>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Estructura de la Configuración</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
                      <pre className="text-sm text-gray-800">
{`interface SiteSettings {
  calendarId: string          // ID del calendario de Google
  instagramUsername: string   // Nombre de usuario de Instagram
  facebookPageId: string      // ID o nombre de página de Facebook
  contactEmail: string        // Email de contacto
  contactPhone: string        // Teléfono de contacto
  contactAddress: string      // Dirección física
  googleSiteUrl: string       // URL del sitio de Google Sites
  businessHours: {            // Horarios de atención
    weekdays: string          // Lunes a viernes
    saturday: string          // Sábado
    sunday: string            // Domingo
  }
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Uso en Componentes</h3>
                    <p className="mb-4 text-gray-700">
                      Para utilizar la configuración en un componente:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <pre className="text-sm text-gray-800">
{`import { useSiteSettings } from "@/lib/settings-context"

export function MyComponent() {
  const { settings, isLoaded } = useSiteSettings()
  
  // Usar settings.contactEmail, settings.instagramUsername, etc.
  // isLoaded indica si la configuración ya se ha cargado
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white mt-6">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Enfoque de Configuración Híbrido</h3>
                    <p className="mb-4 text-gray-700">
                      El sitio utiliza un enfoque híbrido para su configuración:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2 text-gray-800">site-config.json</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Proporciona los valores predeterminados</li>
                          <li>Se carga en tiempo de construcción</li>
                          <li>Se usa cuando no hay configuración en localStorage</li>
                          <li>Editar requiere redesplegar el sitio</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2 text-gray-800">localStorage</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>Configuración modificada por el administrador</li>
                          <li>Específica del navegador del usuario</li>
                          <li>Temporal y local al dispositivo</li>
                          <li>Permite cambios sin redespliegue</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                      <pre className="text-sm text-gray-800">
{`// Implementación en settings-context.tsx
import siteConfig from './site-config.json'

// Valores predeterminados desde site-config.json
const defaultSettings = siteConfig as SiteSettings

// En el provider:
useEffect(() => {
  if (typeof window !== "undefined") {
    try {
      const savedSettings = localStorage.getItem("mandala-site-settings")
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings))
      }
    } catch (error) {
      // Si hay error, se usan los valores predeterminados
      console.error("Error loading settings:", error)
    }
  }
}, [])`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Componentes Principales */}
              <section className="mb-16 scroll-mt-20" id="components">
                <div className="flex items-center gap-2 mb-6">
                  <LayoutGrid className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Componentes Principales</h2>
                </div>
                
                <div className="not-prose rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-4 py-3 text-left font-medium text-gray-600">Componente</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-600">Descripción</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-600">Ubicación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top font-medium text-brand-purple">Navbar</td>
                          <td className="px-4 py-3 align-top">Barra de navegación responsiva con menús desplegables</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">navbar.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top font-medium text-brand-purple">Footer</td>
                          <td className="px-4 py-3 align-top">Pie de página con enlaces y contacto</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">footer.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top font-medium text-brand-purple">GoogleCalendar</td>
                          <td className="px-4 py-3 align-top">Integración con Google Calendar para horarios</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">google-calendar.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top font-medium text-brand-purple">GoogleForm</td>
                          <td className="px-4 py-3 align-top">Integración con Google Forms para formularios</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">google-form.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top font-medium text-brand-purple">GoogleSitesEmbed</td>
                          <td className="px-4 py-3 align-top">Embebe un sitio de Google Sites</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">google-sites-embed.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top font-medium text-brand-purple">SocialMediaFeed</td>
                          <td className="px-4 py-3 align-top">Muestra feeds de Instagram y Facebook</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">social-media-feed.tsx</code></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 align-top font-medium text-brand-purple">ContactInfo</td>
                          <td className="px-4 py-3 align-top">Muestra la información de contacto</td>
                          <td className="px-4 py-3 align-top"><code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">contact-info.tsx</code></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Despliegue */}
              <section className="mb-16 scroll-mt-20" id="deployment">
                <div className="flex items-center gap-2 mb-6">
                  <Server className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Despliegue</h2>
                </div>
                
                <div className="mt-6">
                  <p>
                    El sitio está configurado para desplegarse en Netlify. La configuración se encuentra en el archivo <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">netlify.toml</code> en la raíz del proyecto.
                  </p>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white mt-6">
                    <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Proceso de Despliegue</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Pushear los cambios al repositorio en GitHub</li>
                        <li>Netlify detecta los cambios y inicia automáticamente el proceso de build</li>
                        <li>El sitio se construye con <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">next build</code></li>
                        <li>Los archivos estáticos se despliegan en la CDN de Netlify</li>
                        <li>Las rutas dinámicas con funciones serverless</li>
                      </ol>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Variables de Entorno</h3>
                      <p className="text-gray-700 mb-0">
                        Actualmente, el sitio no utiliza variables de entorno. Toda la configuración se maneja a través del panel de administración y se almacena en localStorage.
                      </p>
                    </div>

                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Dominios</h3>
                      <p className="text-gray-700 mb-0">
                        El sitio está configurado para servirse desde <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">mandalaourense.com</code> y 
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">www.mandalaourense.com</code>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Solución de Problemas */}
              <section className="mb-16 scroll-mt-20" id="troubleshooting">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-3xl font-heading font-semibold text-brand-purple m-0">Solución de Problemas</h2>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <div className="bg-brand-purple text-white px-6 py-4">
                      <h3 className="text-xl font-heading font-medium m-0">Problemas Comunes</h3>
                    </div>
                    <div className="p-0">
                      <div className="border-b border-gray-200 p-6">
                        <h4 className="font-medium mb-2 text-brand-purple text-lg">La configuración no se aplica</h4>
                        <p className="text-gray-700 mb-3">Si los cambios realizados en el panel de administración no se reflejan en el sitio:</p>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                          <li>Verificar que se guardaron correctamente (debería aparecer un mensaje de éxito)</li>
                          <li>Refrescar la página para asegurarse de que los cambios se cargan</li>
                          <li>Revisar la consola del navegador para errores de JavaScript</li>
                          <li>Borrar la caché del navegador o probar en modo incógnito</li>
                        </ol>
                      </div>

                      <div className="border-b border-gray-200 p-6">
                        <h4 className="font-medium mb-2 text-brand-purple text-lg">Los embeds de redes sociales no cargan</h4>
                        <p className="text-gray-700 mb-3">Si los feeds de Instagram o Facebook no se muestran:</p>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                          <li>Verificar que los nombres de usuario son correctos en el panel de administración</li>
                          <li>Comprobar que no hay bloqueadores de contenido activos en el navegador</li>
                          <li>Asegurarse de que las cuentas son públicas y accesibles</li>
                        </ol>
                      </div>

                      <div className="p-6">
                        <h4 className="font-medium mb-2 text-brand-purple text-lg">No se puede acceder al panel de administración</h4>
                        <p className="text-gray-700 mb-3">Si no se puede acceder al panel de administración:</p>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                          <li>Verificar que se está utilizando la contraseña correcta (<code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">[Contacta al administrador]</code>)</li>
                          <li>Borrar la caché del navegador</li>
                          <li>Probar en otro navegador</li>
                        </ol>
                      </div>

                      <div className="p-6 border-t border-gray-200">
                        <h4 className="font-medium mb-2 text-brand-purple text-lg">Cambios en el panel de administración no afectan a todos los usuarios</h4>
                        <p className="text-gray-700 mb-3">Si los cambios hechos en el panel de administrador no se ven reflejados para todos los usuarios:</p>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                          <li>Esto es normal debido a la implementación basada en localStorage</li>
                          <li>Los cambios solo afectan al navegador donde se realizaron</li>
                          <li>Para cambios permanentes, se debe editar el archivo <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">src/lib/site-config.json</code></li>
                          <li>Después de editar site-config.json, es necesario reconstruir y redesplegar el sitio</li>
                          <li>Consulta la sección <a href="#admin-panel" className="text-brand-purple hover:underline">Panel de Administración</a> para más detalles</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Recuperación de Configuración</h3>
                      <p className="text-gray-700 mb-3">
                        La configuración se almacena en el localStorage del navegador con la clave <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800">mandala-site-settings</code>.
                      </p>
                      <p className="text-gray-700 mb-0">
                        Para hacer una copia de seguridad manual, utiliza la consola del navegador para exportar el objeto 
                        <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 mx-1">localStorage.getItem('mandala-site-settings')</code>.
                      </p>
                    </div>

                    <div className="rounded-xl p-6 border border-gray-200 shadow-sm bg-white">
                      <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">Contacto de Soporte</h3>
                      <p className="text-gray-700 mb-0">
                        Para problemas técnicos que no se pueden resolver con esta guía, contactar al desarrollador en 
                        <a href="mailto:soporte@ejemplo.com" className="text-brand-teal ml-1 hover:underline">soporte@ejemplo.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <footer className="text-center text-sm text-gray-500">
                <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
                <p className="mt-2">
                  Documentación técnica para uso interno. Esta página no está indexada por los motores de búsqueda.
                </p>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}