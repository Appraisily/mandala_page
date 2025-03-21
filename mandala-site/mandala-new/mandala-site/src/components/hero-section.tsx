import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-yellow-100 via-blue-100 to-teal-100 min-h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new-hero-background.jpg"
          alt="Meditación y yoga en un ambiente tranquilo y colorido"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-0"></div>
      
      <Container className="relative z-10 py-24 md:py-32 lg:py-40 h-full flex items-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-heading drop-shadow-lg">
            Encuentra tu <span className="text-brand-amber">equilibrio</span> interior
          </h1>
          <p className="mt-6 text-xl text-white font-medium max-w-lg drop-shadow-md">
            En Mandala Ourense ofrecemos un espacio para conectar cuerpo, mente y espíritu a través del yoga y terapias holísticas.
          </p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              asChild 
              variant="amber" 
              size="lg" 
              className="rounded-full shadow-lg"
            >
              <Link href="/horarios-precios">Ver Horarios</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30 hover:text-white rounded-full shadow-md"
            >
              <Link href="/contacto">Contactar</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}