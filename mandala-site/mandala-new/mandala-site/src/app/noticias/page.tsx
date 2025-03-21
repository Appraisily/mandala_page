import { GoogleSitesEmbed } from "@/components/google-sites-embed"
import { SocialMediaFeed } from "@/components/social-media-feed"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Noticias y Actualizaciones | Mandala Centro de Yoga en Ourense",
  description: "Mantente informado sobre nuestras actividades, eventos y artículos sobre yoga y bienestar en Mandala Ourense.",
}

export default function NoticiasPage() {
  return (
    <div className="relative">
      {/* Load Facebook SDK */}
      <Script 
        id="facebook-jssdk" 
        strategy="lazyOnload"
        src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v16.0" 
      />
      
      {/* Load Instagram Embed script */}
      <Script 
        id="instagram-embed" 
        strategy="lazyOnload"
        src="https://www.instagram.com/embed.js" 
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-purple mb-6">
              Noticias y Actualizaciones
            </h1>
            <p className="text-lg text-gray-700">
              Mantente informado sobre nuestras actividades, eventos y artículos sobre yoga, meditación y bienestar.
            </p>
          </div>
        </div>
      </section>
      
      {/* Social Media Feed Section */}
      <SocialMediaFeed 
        instagramUsername="mandalaourense" 
        facebookPageId="mandalaourense" 
      />
      
      {/* Google Sites Section - For Important Announcements & Content */}
      <section className="py-16 bg-brand-beige/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-heading font-semibold text-brand-purple mb-4">
              Talleres y Artículos
            </h2>
            <p className="text-gray-600">
              Información detallada sobre nuestros talleres especiales, retiros y consejos para tu práctica.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <GoogleSitesEmbed 
              siteUrl="https://sites.google.com/view/mandalaourense/inicio"
              title=""
              description=""
              height="800px"
              className="p-0"
            />
          </div>
        </div>
      </section>
    </div>
  )
}