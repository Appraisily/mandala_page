import Image from "next/image"
import { SafeImage } from "@/components/ui/safe-image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-[95vh]">
      {/* Background Image with animated subtle zoom */}
      <div className="absolute inset-0 z-0 animate-subtle-zoom-out">
        <Image
          src="/images/yoga-meditation.jpg"
          alt="Meditación y yoga en un ambiente tranquilo y colorido"
          fill
          priority
          className="object-cover object-center img-filter-bright"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error('Failed to load hero image');
            target.style.display = 'none';
          }}
        />
      </div>
      
      {/* Enhanced gradient overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 z-0"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-brand-teal/20 rounded-full blur-3xl z-0"
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-40 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl z-0"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      ></motion.div>
      
      <Container className="relative z-10 py-24 md:py-32 lg:py-40 h-full flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-5">
              <motion.span 
                className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Centro de Yoga en Ourense
              </motion.span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-heading leading-tight drop-shadow-lg">
              Encuentra tu <br />
              <span className="text-gradient-amber">equilibrio interior</span>
            </h1>
            
            <motion.p 
              className="mt-6 text-xl text-white/90 font-medium max-w-lg drop-shadow-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              En Mandala Ourense ofrecemos un espacio para conectar cuerpo, mente y espíritu a través de diferentes estilos de yoga adaptados a todas las necesidades.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                asChild 
                variant="amber" 
                size="xl" 
                className="rounded-full shadow-lg shadow-brand-amber/30 hover:shadow-brand-amber/40"
              >
                <Link href="/horarios-precios">Ver Horarios</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="xl" 
                className="btn-outline-white rounded-full"
              >
                <Link href="/contacto">Contactar</Link>
              </Button>
            </motion.div>
            
            {/* Floating badges */}
            <motion.div 
              className="mt-14 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm flex items-center">
                <span className="w-2 h-2 bg-brand-teal rounded-full mr-2"></span>
                Hatha Yoga
              </span>
              <span className="py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm flex items-center">
                <span className="w-2 h-2 bg-brand-amber rounded-full mr-2"></span>
                Yin Yoga
              </span>
              <span className="py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm flex items-center">
                <span className="w-2 h-2 bg-brand-purple rounded-full mr-2"></span>
                Yoga Nidra
              </span>
            </motion.div>
          </motion.div>
          
          {/* Decorative right side floating elements - visible only on larger screens */}
          <motion.div 
            className="hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="absolute w-80 h-80 rounded-full border-2 border-white/10"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <div className="absolute w-96 h-96 rounded-full border border-white/5"></div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl w-48 animate-floating"
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              <p className="text-white text-sm font-medium">Primera clase gratuita para nuevos alumnos</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Descubre más</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}