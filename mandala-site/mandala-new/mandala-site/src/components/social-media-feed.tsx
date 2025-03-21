"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, Instagram, Facebook } from "lucide-react"
import { useSiteSettings } from "@/lib/settings-context"

interface SocialMediaFeedProps {
  instagramUsername?: string
  facebookPageId?: string
  title?: string
  description?: string
  className?: string
}

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
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              {/* Instagram Embed */}
              <div 
                className="elfsight-app-instagram-feed" 
                data-instagram-username={effectiveInstagramUsername}
              >
                <iframe
                  src={`https://www.instagram.com/embed.js?username=${effectiveInstagramUsername}`}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                ></iframe>
              </div>
              
              {/* Fallback for when Instagram embed script is blocked or fails */}
              <div className="p-8 text-center">
                <h3 className="text-xl font-medium text-brand-purple mb-4">
                  Sigue nuestro Instagram para ver las últimas novedades
                </h3>
                <Link 
                  href={`https://www.instagram.com/${effectiveInstagramUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium"
                >
                  Ver Instagram
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="facebook" className="mt-0">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              {/* Facebook Embed */}
              <div 
                className="fb-page" 
                data-href={`https://www.facebook.com/${effectiveFacebookPageId}`}
                data-tabs="timeline"
                data-width="500"
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${effectiveFacebookPageId}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  width="100%"
                  height="600"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>
              </div>

              {/* Fallback for when Facebook embed script is blocked or fails */}
              <div className="p-8 text-center">
                <h3 className="text-xl font-medium text-brand-purple mb-4">
                  Visita nuestra página de Facebook
                </h3>
                <Link 
                  href={`https://www.facebook.com/${effectiveFacebookPageId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium"
                >
                  Ver Facebook
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