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
    name: "Otras Páginas",
    icon: "📄",
    color: "bg-gray-100 border-gray-200",
    routes: [
      {
        path: "/noticias",
        title: "Noticias",
        description: "Blog y noticias del centro Mandala."
      },
      {
        path: "/aviso-legal",
        title: "Aviso Legal",
        description: "Información legal y política de privacidad del sitio."
      },
      {
        path: "/sitemap.xml",
        title: "Sitemap XML",
        description: "Sitemap en formato XML para motores de búsqueda."
      }
    ]
  }
];

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(routeCategories.map(cat => cat.name));

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
      route.title.toLowerCase().includes(term.toLowerCase()) || 
      route.path.toLowerCase().includes(term.toLowerCase()) || 
      route.description.toLowerCase().includes(term.toLowerCase())
    );
  };

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
          <div className="relative max-w-md mx-auto">
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
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
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

          {/* Sitemap visualization */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-heading font-semibold text-brand-purple mb-6">
              Visualización Jerárquica
            </h2>
            <div className="bg-white p-8 border rounded-xl shadow-sm overflow-auto">
              <div className="flex">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-16 border-2 border-brand-purple rounded-lg flex items-center justify-center bg-brand-purple/10 font-medium">
                    <span>Home</span>
                  </div>
                  <div className="h-8 w-0.5 bg-gray-300"></div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-4/5 h-0.5 bg-gray-300"></div>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                {/* Primary Level Pages */}
                {['Sobre Nosotros', 'Yoga', 'Terapias', 'Horarios', 'Contacto'].map((item, i) => (
                  <div key={i} className="flex flex-col items-center mt-4">
                    <div className="h-6 w-0.5 bg-gray-300"></div>
                    <div className="w-32 h-12 border-2 border-brand-teal rounded-lg flex items-center justify-center bg-brand-teal/10 font-medium text-sm">
                      <span>{item}</span>
                    </div>
                    {item === 'Yoga' && (
                      <>
                        <div className="h-6 w-0.5 bg-gray-300"></div>
                        <div className="flex">
                          <div className="w-48 h-0.5 bg-gray-300"></div>
                        </div>
                        <div className="flex justify-between w-48 mt-2">
                          {['Hatha', 'Yin', 'Daoyin', 'Nidra'].map((subitem, j) => (
                            <div key={j} className="flex flex-col items-center">
                              <div className="h-4 w-0.5 bg-gray-300"></div>
                              <div className="w-10 h-8 border border-amber-400 rounded flex items-center justify-center bg-amber-50 text-xs">
                                {subitem}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200">
                <h3 className="text-xl font-heading font-medium text-gray-700 mb-4 text-center">
                  Landing Pages SEO
                </h3>
                
                <div className="flex justify-center mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-36 h-16 border-2 border-indigo-500 rounded-lg flex items-center justify-center bg-indigo-50 font-medium">
                      <span>SEO Pages</span>
                    </div>
                    <div className="h-8 w-0.5 bg-gray-300"></div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-4/5 h-0.5 bg-gray-300"></div>
                </div>

                <div className="flex justify-center gap-6 flex-wrap mt-4">
                  {['Yoga', 'Bienestar', 'Terapias', 'Horarios'].map((category, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="h-6 w-0.5 bg-gray-300"></div>
                      <div className={`w-28 h-12 border-2 rounded-lg flex items-center justify-center font-medium text-sm
                        ${i === 0 ? 'border-green-500 bg-green-50' : ''}
                        ${i === 1 ? 'border-purple-500 bg-purple-50' : ''}
                        ${i === 2 ? 'border-rose-500 bg-rose-50' : ''}
                        ${i === 3 ? 'border-blue-500 bg-blue-50' : ''}
                      `}>
                        <span>{category}</span>
                      </div>
                      <div className="h-6 w-0.5 bg-gray-300"></div>
                      <div className="flex">
                        <div className={`w-56 h-0.5 bg-gray-300`}></div>
                      </div>
                      <div className="flex gap-2 flex-wrap justify-center w-56 mt-2">
                        {Array(i === 0 ? 12 : (i === 1 ? 5 : (i === 2 ? 3 : 4))).fill(0).map((_, j) => (
                          <div key={j} className="flex flex-col items-center mt-1">
                            <div className="h-4 w-0.5 bg-gray-300"></div>
                            <div className={`w-3 h-3 rounded-full
                              ${i === 0 ? 'bg-green-500' : ''}
                              ${i === 1 ? 'bg-purple-500' : ''}
                              ${i === 2 ? 'bg-rose-500' : ''}
                              ${i === 3 ? 'bg-blue-500' : ''}
                            `}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-brand-purple mb-2">
                {routeCategories.reduce((total, cat) => total + cat.routes.length, 0)}
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

          {/* Legend */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h2 className="text-xl font-heading font-medium text-gray-800 mb-4">Leyenda de Categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {routeCategories.map((category) => (
                <div key={category.name} className="flex items-center">
                  <div className={`w-6 h-6 flex items-center justify-center rounded mr-3 ${category.color}`}>
                    <span>{category.icon}</span>
                  </div>
                  <span className="text-gray-700">{category.name}</span>
                </div>
              ))}
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