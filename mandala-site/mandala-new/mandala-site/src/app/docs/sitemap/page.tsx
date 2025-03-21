"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronRight, Info, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define categories and page routes
const routeCategories = [
  {
    name: "Páginas Principales",
    icon: "🏠",
    color: "bg-brand-purple/10 border-brand-purple/20",
    routes: [
      {
        path: "/",
        title: "Página de Inicio",
        description: "Página principal del sitio con información general sobre Mandala y sus servicios."
      },
      {
        path: "/about",
        title: "Sobre Nosotros",
        description: "Información sobre el centro Mandala, su filosofía y equipo."
      },
      {
        path: "/contacto",
        title: "Contacto",
        description: "Formulario de contacto, ubicación y detalles para comunicarse con el centro."
      },
      {
        path: "/horarios-precios",
        title: "Horarios y Precios",
        description: "Información detallada sobre horarios de clases y tarifas."
      },
      {
        path: "/terapias",
        title: "Terapias",
        description: "Información sobre las diferentes terapias ofrecidas en el centro."
      },
      {
        path: "/docs",
        title: "Documentación",
        description: "Documentación técnica del sitio web (solo para administradores)."
      },
      {
        path: "/noticias",
        title: "Noticias",
        description: "Blog y novedades del centro."
      },
      {
        path: "/aviso-legal",
        title: "Aviso Legal",
        description: "Términos legales del sitio."
      },
      {
        path: "/politica-privacidad",
        title: "Política de Privacidad",
        description: "Política de privacidad y cookies del sitio."
      },
      {
        path: "/admin",
        title: "Panel de Administración",
        description: "Panel de control para administradores del sitio."
      }
    ]
  },
  {
    name: "Clases de Yoga",
    icon: "🧘",
    color: "bg-brand-teal/10 border-brand-teal/20",
    routes: [
      {
        path: "/yoga/hatha-yoga",
        title: "Hatha Yoga",
        description: "Información específica sobre clases de Hatha Yoga, beneficios y horarios."
      },
      {
        path: "/yoga/yin-yoga",
        title: "Yin Yoga",
        description: "Información específica sobre clases de Yin Yoga, beneficios y horarios."
      },
      {
        path: "/yoga/daoyin-yoga",
        title: "Daoyin Yoga",
        description: "Información específica sobre clases de Daoyin Yoga, beneficios y horarios."
      },
      {
        path: "/yoga/nidra-yoga-meditacion",
        title: "Nidra Yoga y Meditación",
        description: "Información sobre clases de Yoga Nidra y prácticas de meditación."
      }
    ]
  },
  {
    name: "Landing Pages - Yoga",
    icon: "🔍",
    color: "bg-amber-50 border-amber-200",
    routes: [
      {
        path: "/centro-de-yoga-ourense",
        title: "Centro de Yoga Ourense",
        description: "Landing page para usuarios que buscan centros de yoga en Ourense."
      },
      {
        path: "/clases-yoga-ourense",
        title: "Clases Yoga Ourense",
        description: "Landing page para usuarios que buscan clases de yoga en Ourense."
      },
      {
        path: "/clases-de-yoga-en-ourense",
        title: "Clases de Yoga en Ourense",
        description: "Variante de landing page para clases de yoga en Ourense."
      },
      {
        path: "/estudio-yoga-ourense",
        title: "Estudio Yoga Ourense",
        description: "Landing page orientada a usuarios que buscan un estudio de yoga en Ourense."
      },
      {
        path: "/escuela-de-yoga-ourense",
        title: "Escuela de Yoga Ourense",
        description: "Landing page para búsquedas de escuelas de yoga en Ourense."
      },
      {
        path: "/yoga-para-principiantes-ourense",
        title: "Yoga para Principiantes",
        description: "Landing page para personas que quieren iniciarse en el yoga en Ourense."
      },
      {
        path: "/yoga-para-embarazadas-ourense",
        title: "Yoga para Embarazadas",
        description: "Landing page específica para yoga prenatal en Ourense."
      },
      {
        path: "/yoga-ninos-ourense",
        title: "Yoga para Niños",
        description: "Landing page para clases de yoga infantil en Ourense."
      },
      {
        path: "/hatha-yoga-ourense",
        title: "Hatha Yoga Ourense",
        description: "Landing page específica para Hatha Yoga en Ourense."
      },
      {
        path: "/vinyasa-yoga-ourense",
        title: "Vinyasa Yoga Ourense",
        description: "Landing page para Vinyasa Yoga en Ourense."
      },
      {
        path: "/yin-yoga-ourense",
        title: "Yin Yoga Ourense",
        description: "Landing page para Yin Yoga en Ourense."
      },
      {
        path: "/yoga-restaurativo-ourense",
        title: "Yoga Restaurativo Ourense",
        description: "Landing page específica para Yoga Restaurativo en Ourense."
      },
      {
        path: "/yoga-terapeutico-ourense",
        title: "Yoga Terapéutico Ourense",
        description: "Landing page para Yoga Terapéutico en Ourense."
      },
      {
        path: "/profesor-yoga-ourense",
        title: "Profesor Yoga Ourense",
        description: "Landing page para personas que buscan profesores de yoga en Ourense."
      },
      {
        path: "/mejor-yoga-ourense",
        title: "Mejor Yoga Ourense",
        description: "Landing page orientada a búsquedas de los mejores lugares para practicar yoga en Ourense."
      },
      {
        path: "/yoga-cerca-ourense",
        title: "Yoga cerca de Ourense",
        description: "Landing page para personas que buscan clases de yoga cerca de Ourense."
      },
      {
        path: "/yoga-en-el-centro-de-ourense",
        title: "Yoga en el Centro de Ourense",
        description: "Landing page específica para yoga en la zona centro de Ourense."
      },
      {
        path: "/ourense-yoga",
        title: "Ourense Yoga",
        description: "Landing page para búsquedas generales de yoga en Ourense."
      }
    ]
  },
  {
    name: "Landing Pages - Horarios y Precios",
    icon: "⏰",
    color: "bg-emerald-50 border-emerald-200",
    routes: [
      {
        path: "/horario-clases-yoga-ourense",
        title: "Horario Clases Yoga Ourense",
        description: "Landing page para horarios de clases de yoga en Ourense."
      },
      {
        path: "/precios-clases-yoga-ourense",
        title: "Precios Clases Yoga Ourense",
        description: "Landing page con información de precios para clases de yoga en Ourense."
      },
      {
        path: "/ofertas-yoga-ourense",
        title: "Ofertas Yoga Ourense",
        description: "Landing page enfocada en promociones y ofertas para yoga en Ourense."
      },
      {
        path: "/descuentos-yoga-ourense",
        title: "Descuentos Yoga Ourense",
        description: "Landing page para descuentos en clases de yoga en Ourense."
      }
    ]
  },
  {
    name: "Landing Pages - Bienestar",
    icon: "🌿",
    color: "bg-indigo-50 border-indigo-200",
    routes: [
      {
        path: "/bienestar-ourense",
        title: "Bienestar Ourense",
        description: "Landing page para servicios de bienestar general en Ourense."
      },
      {
        path: "/relajacion-ourense",
        title: "Relajación Ourense",
        description: "Landing page para servicios de relajación en Ourense."
      },
      {
        path: "/meditacion-ourense",
        title: "Meditación Ourense",
        description: "Landing page para clases y servicios de meditación en Ourense."
      },
      {
        path: "/mindfulness-ourense",
        title: "Mindfulness Ourense",
        description: "Landing page específica para mindfulness en Ourense."
      },
      {
        path: "/actividades-bienestar-ourense",
        title: "Actividades Bienestar Ourense",
        description: "Landing page para diversas actividades de bienestar en Ourense."
      }
    ]
  },
  {
    name: "Landing Pages - Terapias",
    icon: "💆",
    color: "bg-rose-50 border-rose-200",
    routes: [
      {
        path: "/terapias-ourense",
        title: "Terapias Ourense",
        description: "Landing page para terapias holísticas en Ourense."
      },
      {
        path: "/centro-terapias-ourense",
        title: "Centro Terapias Ourense",
        description: "Landing page para centros de terapias en Ourense."
      },
      {
        path: "/yoga-y-terapias-ourense",
        title: "Yoga y Terapias Ourense",
        description: "Landing page que combina yoga y terapias holísticas en Ourense."
      }
    ]
  },
  {
    name: "API y Otras Rutas",
    icon: "⚙️",
    color: "bg-gray-100 border-gray-200",
    routes: [
      {
        path: "/api/hello",
        title: "API de Ejemplo",
        description: "Endpoint de API para pruebas."
      },
      {
        path: "/robots.txt",
        title: "Robots.txt",
        description: "Archivo de configuración para bots de motores de búsqueda."
      },
      {
        path: "/sitemap.xml",
        title: "Sitemap XML",
        description: "Sitemap en formato XML para motores de búsqueda."
      }
    ]
  }
];

// Lista completa de todas las rutas para SEO y sitemap
const allRoutesFlat = [
  "/",
  "/about",
  "/actividades-bienestar-ourense",
  "/admin",
  "/api/hello",
  "/aviso-legal",
  "/bienestar-ourense",
  "/centro-de-yoga-ourense",
  "/centro-terapias-ourense",
  "/clases-de-yoga-en-ourense",
  "/clases-yoga-ourense",
  "/contacto",
  "/descuentos-yoga-ourense",
  "/docs",
  "/docs/images",
  "/docs/sitemap",
  "/escuela-de-yoga-ourense",
  "/estudio-yoga-ourense",
  "/hatha-yoga-ourense",
  "/horario-clases-yoga-ourense",
  "/horarios-precios",
  "/meditacion-ourense",
  "/mejor-yoga-ourense",
  "/mindfulness-ourense",
  "/noticias",
  "/ofertas-yoga-ourense",
  "/ourense-yoga",
  "/politica-privacidad",
  "/precios-clases-yoga-ourense",
  "/profesor-yoga-ourense",
  "/relajacion-ourense",
  "/terapias-ourense",
  "/terapias",
  "/vinyasa-yoga-ourense",
  "/yin-yoga-ourense",
  "/yoga-cerca-ourense",
  "/yoga-en-el-centro-de-ourense",
  "/yoga-ninos-ourense",
  "/yoga-para-embarazadas-ourense",
  "/yoga-para-principiantes-ourense",
  "/yoga-restaurativo-ourense",
  "/yoga-terapeutico-ourense",
  "/yoga-y-terapias-ourense",
  "/yoga/daoyin-yoga",
  "/yoga/hatha-yoga",
  "/yoga/nidra-yoga-meditacion",
  "/yoga/yin-yoga",
  "/robots.txt",
  "/sitemap.xml"
];

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(routeCategories.map(cat => cat.name));
  const [view, setView] = useState<"categorized" | "flat">("categorized");

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filterRoutes = (routes: any[], term: string) => {
    if (!term) return routes;
    return routes.filter(route => 
      route.title?.toLowerCase().includes(term.toLowerCase()) || 
      route.path.toLowerCase().includes(term.toLowerCase()) || 
      route.description?.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filteredFlatRoutes = allRoutesFlat.filter(route => 
    !searchTerm || route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <header className="bg-brand-purple/10 py-12 border-b border-brand-purple/20">
        <div className="container mx-auto px-4">
          <Link 
            href="/docs" 
            className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Documentación
          </Link>
          <h1 className="text-4xl font-heading font-bold text-brand-purple mb-4">
            Mapa del Sitio Mandala
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Visualización completa de la estructura del sitio web de Mandala Ourense,
            con todas las páginas organizadas por categorías.
          </p>
        </div>
      </header>

      {/* Search bar */}
      <div className="bg-white border-b border-gray-200 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple"
                placeholder="Buscar páginas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setView("categorized")}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  view === "categorized" 
                    ? "bg-brand-purple text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Ver por Categorías
              </button>
              <button
                onClick={() => setView("flat")}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  view === "flat" 
                    ? "bg-brand-purple text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Ver Lista Completa
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {view === "categorized" ? (
            // Categorized view
            <>
              {/* Route categories */}
              {routeCategories.map((category) => {
                const filteredRoutes = filterRoutes(category.routes, searchTerm);
                if (filteredRoutes.length === 0) return null;
                
                return (
                  <div 
                    key={category.name} 
                    className={`mb-8 border rounded-xl overflow-hidden ${category.color}`}
                  >
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <h2 className="text-xl font-heading font-semibold text-gray-800">
                          {category.name} <span className="text-gray-500 text-sm ml-2">({filteredRoutes.length} páginas)</span>
                        </h2>
                      </div>
                      <div>
                        {expandedCategories.includes(category.name) ? (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {expandedCategories.includes(category.name) && (
                      <div className="bg-white">
                        <div className="grid grid-cols-1 divide-y divide-gray-100">
                          {filteredRoutes.map((route) => (
                            <div key={route.path} className="p-4 hover:bg-gray-50">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium text-brand-purple text-lg mb-1">
                                    {route.title}
                                  </h3>
                                  <p className="text-gray-600 mb-2">{route.description}</p>
                                  <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                                    {route.path}
                                  </code>
                                </div>
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="ml-4 flex-shrink-0"
                                >
                                  <Link href={route.path} target="_blank">
                                    Ver Página
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            // Flat list view
            <div className="border rounded-xl overflow-hidden">
              <div className="bg-brand-purple/10 border-b border-brand-purple/20 p-4">
                <h2 className="text-xl font-heading font-semibold text-gray-800 flex items-center">
                  <span className="text-2xl mr-3">📋</span>
                  Lista Completa de Rutas <span className="text-gray-500 text-sm ml-2">({filteredFlatRoutes.length} páginas)</span>
                </h2>
              </div>
              <div className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                  {filteredFlatRoutes.map((route) => (
                    <Link
                      key={route}
                      href={route}
                      target="_blank"
                      className="p-3 rounded-lg hover:bg-gray-50 border border-gray-100 transition-colors"
                    >
                      <code className="text-sm text-gray-700 break-all">
                        {route}
                      </code>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-brand-purple mb-2">
                {allRoutesFlat.length}
              </div>
              <div className="text-gray-600">Páginas Totales</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-brand-teal mb-2">
                {routeCategories.length}
              </div>
              <div className="text-gray-600">Categorías</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-brand-amber mb-2">
                {routeCategories.filter(cat => cat.name.includes("Landing")).reduce((total, cat) => total + cat.routes.length, 0)}
              </div>
              <div className="text-gray-600">Landing Pages SEO</div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>
          Documentación interna de Mandala Ourense — Actualizado: {new Date().toLocaleDateString('es-ES')}
        </p>
      </footer>
    </div>
  )
}