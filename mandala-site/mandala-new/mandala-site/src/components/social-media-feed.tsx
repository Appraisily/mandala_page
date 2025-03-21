"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram, Facebook } from "lucide-react"
import { useSiteSettings } from "@/lib/settings-context"

interface SocialMediaFeedProps {
  instagramUsername?: string
  facebookPageId?: string
  title?: string
  description?: string
  className?: string
}

// Example social media posts for static display
const instagramPosts = [
  {
    id: 'post1',
    image: '/images/yoga-pose.jpg',
    caption: 'Clase de Hatha Yoga esta mañana. ¡Energía renovada para comenzar la semana! 🧘‍♀️ #YogaOurense #MandalaOurense #Bienestar',
    likes: 45,
    date: '2 días'
  },
  {
    id: 'post2',
    image: '/images/therapy.jpg',
    caption: 'Nueva sesión de masaje ayurvédico disponible. Ideal para reducir el estrés y mejorar la circulación. ¡Reserva tu cita! 🌿 #AyurvedaOurense #TerapiasHolisticas',
    likes: 38,
    date: '5 días'
  },
  {
    id: 'post3',
    image: '/images/yoga-studio.jpg',
    caption: 'Workshop de meditación este fin de semana. Aprende técnicas para calmar la mente y encontrar tu paz interior. Plazas limitadas. 🧠✨ #Meditacion #PazInterior',
    likes: 62,
    date: '1 semana'
  }
]

export function SocialMediaFeed({
  instagramUsername,
  facebookPageId,
  title = "Síguenos en Redes Sociales",
  description = "Mantente al día con nuestras últimas actividades, talleres y eventos",
  className = "",
}: SocialMediaFeedProps) {
  const { settings, isLoaded } = useSiteSettings()
  
  // Use props values if provided, otherwise use settings
  const effectiveInstagramUsername = instagramUsername || (isLoaded ? settings.instagramUsername : "mandalaourense")
  const effectiveFacebookPageId = facebookPageId || (isLoaded ? settings.facebookPageId : "mandalaourense")
  
  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
            {title}
          </h2>
          <p className="text-gray-600">
            {description}
          </p>
        </div>

        <Tabs defaultValue="instagram" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-brand-beige/20">
              <TabsTrigger value="instagram" className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </TabsTrigger>
              <TabsTrigger value="facebook" className="flex items-center gap-2">
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="instagram" className="mt-0">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white p-5">
              {/* Static Instagram Feed */}
              <div className="pb-4 border-b flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
                  <Instagram className="h-5 w-5 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">{effectiveInstagramUsername}</p>
                  <p className="text-xs text-gray-500">Ourense, Galicia</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {instagramPosts.map(post => (
                  <div key={post.id} className="border rounded-lg overflow-hidden bg-white">
                    <div className="aspect-square relative">
                      <Image
                        src={post.image}
                        alt={`Instagram post by ${effectiveInstagramUsername}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm line-clamp-2 mb-2">{post.caption}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>❤️ {post.likes} likes</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <Link 
                  href={`https://www.instagram.com/${effectiveInstagramUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium"
                >
                  Ver todos los posts en Instagram
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="facebook" className="mt-0">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white p-5">
              {/* Static Facebook Content */}
              <div className="pb-4 border-b flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Mandala Ourense</p>
                  <p className="text-xs text-gray-500">Página de Facebook</p>
                </div>
              </div>
              
              <div className="my-6 space-y-4">
                <div className="border rounded-lg p-4">
                  <p className="text-sm mb-3">
                    ¡Nueva clase de Yoga Nidra todos los miércoles a las 19:00! 
                    Una oportunidad perfecta para relajarte después del trabajo. 
                    #YogaNidra #Relajación #MandalaOurense
                  </p>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/yoga-meditation.jpg"
                      alt="Clase de Yoga Nidra"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-3">
                    <span>👍 23 Me gusta • 3 comentarios</span>
                    <span>3 días</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <p className="text-sm mb-3">
                    ¡Gracias a todos por asistir al taller de introducción al Ayurveda! 
                    Fue una tarde de aprendizaje y descubrimientos. 
                    Pronto anunciaremos nuevas fechas. #Ayurveda #Bienestar #Taller
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>👍 15 Me gusta • 1 comentario</span>
                    <span>1 semana</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Link 
                  href={`https://www.facebook.com/${effectiveFacebookPageId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium"
                >
                  Ver más en Facebook
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Sigue nuestras redes sociales para estar al día de los últimos eventos, 
            consejos, promociones y noticias de Mandala Ourense.
          </p>
        </div>
      </Container>
    </section>
  )
}