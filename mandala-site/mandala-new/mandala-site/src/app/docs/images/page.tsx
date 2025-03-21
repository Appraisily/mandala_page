import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Índice de Imágenes | Mandala Ourense",
  description: "Índice completo de todas las imágenes utilizadas en el sitio web de Mandala Ourense",
}

interface ImageItem {
  url: string
  alt: string
  pages: {
    component: string
    route: string
  }[]
}

export default function ImagesPage() {
  const images: ImageItem[] = [
    {
      url: "https://images.unsplash.com/photo-1545389336-cf090694435e",
      alt: "Background image of a serene yoga studio",
      pages: [
        { component: "HeroSection", route: "/" },
        { component: "SimpleHomePage", route: "/" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      alt: "Hatha Yoga",
      pages: [
        { component: "ClassesSection", route: "/" },
        { component: "YogaClassPage", route: "/yoga/hatha-yoga" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
      alt: "Daoyin Yoga",
      pages: [
        { component: "ClassesSection", route: "/" },
        { component: "YogaClassPage", route: "/yoga/daoyin-yoga" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d",
      alt: "Yoga Nidra & Meditación",
      pages: [
        { component: "ClassesSection", route: "/" },
        { component: "YogaClassPage", route: "/yoga/nidra-yoga-meditacion" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
      alt: "Terapias holísticas en Mandala Ourense",
      pages: [
        { component: "TherapiesSection", route: "/" },
        { component: "SimpleHomePage", route: "/" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      alt: "Terapia ayurvédica",
      pages: [
        { component: "TherapiesSection", route: "/" },
        { component: "TerapiasPage", route: "/terapias" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1593810450967-f9c2004f8a69",
      alt: "Yoga meditation background",
      pages: [
        { component: "CtaSection", route: "/" }
      ]
    },
    {
      url: "https://randomuser.me/api/portraits/women/44.jpg",
      alt: "Laura García",
      pages: [
        { component: "TestimonialsSection", route: "/" }
      ]
    },
    {
      url: "https://randomuser.me/api/portraits/men/86.jpg",
      alt: "Carlos Rodríguez",
      pages: [
        { component: "TestimonialsSection", route: "/" }
      ]
    },
    {
      url: "https://randomuser.me/api/portraits/women/65.jpg",
      alt: "Marta Fernández",
      pages: [
        { component: "TestimonialsSection", route: "/" }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-purple mb-8">Índice de Imágenes</h1>
      <p className="text-gray-600 mb-12">
        Este índice muestra todas las imágenes utilizadas en el sitio web de Mandala Ourense, 
        organizadas por URL y con información sobre dónde se utilizan.
      </p>

      <div className="grid grid-cols-1 gap-12">
        {images.map((image, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:col-span-2">
                <h2 className="text-xl font-semibold text-brand-purple mb-4">Imagen #{index + 1}</h2>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">URL</h3>
                  <p className="text-sm text-gray-700 break-all">{image.url}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Texto Alternativo</h3>
                  <p className="text-sm text-gray-700">{image.alt}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Utilizada en</h3>
                  <ul className="text-sm text-gray-700 space-y-2 mt-2">
                    {image.pages.map((page, pageIndex) => (
                      <li key={pageIndex} className="border-l-2 border-brand-teal pl-3 py-1">
                        <p>
                          <span className="font-medium">Componente:</span> {page.component}
                        </p>
                        <p>
                          <span className="font-medium">Ruta:</span>{' '}
                          <Link href={page.route} className="text-brand-teal hover:text-brand-purple transition-colors">
                            {page.route}
                          </Link>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}