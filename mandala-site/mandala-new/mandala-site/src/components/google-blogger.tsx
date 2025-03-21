"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  content: string
  published: string
  url: string
  author: {
    name: string
    url: string
  }
  images?: string[]
}

interface GoogleBloggerProps {
  blogId: string
  apiKey: string
  maxResults?: number
  title?: string
  description?: string
  className?: string
}

export function GoogleBlogger({
  blogId,
  apiKey,
  maxResults = 3,
  title = "Nuestras Últimas Noticias",
  description = "Mantente informado sobre nuestras actividades, eventos y artículos sobre yoga y bienestar",
  className = "",
}: GoogleBloggerProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    // This is a mock implementation
    // In production, you would fetch actual data from the Blogger API
    async function fetchBlogPosts() {
      try {
        setLoading(true)
        // In a real implementation, you would use the Blogger API
        // const response = await fetch(
        //   `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=${maxResults}`
        // )
        // const data = await response.json()
        // setPosts(data.items)
        
        // Mock data for demonstration
        setTimeout(() => {
          setPosts([
            {
              id: "1",
              title: "Taller de Yoga para Principiantes este Fin de Semana",
              content: "Este sábado organizamos un taller especial para personas que quieren iniciarse en el yoga. Aprenderás las posturas básicas y técnicas de respiración fundamentales...",
              published: "2025-03-15T10:00:00Z",
              url: "#",
              author: {
                name: "Ana García",
                url: "#"
              },
              images: ["/images/blog-yoga-workshop.jpg"]
            },
            {
              id: "2",
              title: "Beneficios del Yoga Nidra para Combatir el Estrés",
              content: "El Yoga Nidra es una potente técnica para reducir el estrés y la ansiedad. En este artículo exploramos cómo esta práctica puede ayudarte a encontrar calma en tu día a día...",
              published: "2025-03-10T14:30:00Z",
              url: "#",
              author: {
                name: "Carlos Martínez",
                url: "#"
              }
            },
            {
              id: "3",
              title: "Nuevas Clases de Yoga para Niños",
              content: "Estamos muy contentos de anunciar que a partir del próximo mes iniciamos clases de yoga para niños. Una forma divertida de que los más pequeños aprendan sobre consciencia corporal...",
              published: "2025-03-05T09:15:00Z",
              url: "#",
              author: {
                name: "Lucía Rodríguez",
                url: "#"
              }
            }
          ])
          setLoading(false)
        }, 1000)
      } catch (err) {
        setError("Error al cargar las publicaciones del blog")
        setLoading(false)
        console.error("Error fetching blog posts:", err)
      }
    }

    fetchBlogPosts()
  }, [blogId, apiKey, maxResults])

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date)
  }

  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
            {title}
          </h2>
          <p className="text-gray-600">
            {description}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-purple border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Cargando publicaciones...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                {post.images && post.images[0] && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.images[0]} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {formatDate(post.published)}
                  </div>
                  <h3 className="text-xl font-heading font-medium text-brand-purple mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content}
                  </p>
                  <Link 
                    href={post.url} 
                    className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium"
                  >
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link 
            href="https://mandalaourense.blogspot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-purple text-white font-medium transition-colors hover:bg-brand-purple/90"
          >
            Ver Todas las Publicaciones
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}