"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    content: "Mandala Ourense ha cambiado mi forma de entender el yoga. Las clases de Hatha Yoga me han ayudado a mejorar mi postura y a reducir el estrés del día a día. El ambiente es acogedor y los profesores muy atentos.",
    author: "Laura García",
    role: "Practicante de Hatha Yoga",
    avatar: "/images/woman1.jpg",
    stars: 5
  },
  {
    content: "Llevo más de un año asistiendo a las sesiones de Yoga Nidra y mi calidad de sueño ha mejorado notablemente. Los profesores son excelentes y el ambiente es muy tranquilo. ¡Es mi pequeño oasis de paz en Ourense!",
    author: "Carlos Rodríguez",
    role: "Practicante de Yoga Nidra",
    avatar: "/images/man1.jpg",
    stars: 5
  },
  {
    content: "Los masajes terapéuticos de Mandala son increíbles. He probado varios centros en la ciudad, pero aquí el nivel de atención y profesionalidad es superior. Siempre salgo renovada y con mucha más energía.",
    author: "Marta Fernández",
    role: "Cliente de terapias",
    avatar: "/images/woman2.jpg",
    stars: 5
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-brand-beige/30 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-purple/5 blur-3xl -z-10"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl -z-10"></div>
      </div>
      
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-brand-teal uppercase tracking-wider">Testimonios</span>
          <h2 className="heading-2 text-brand-purple mt-2 mb-4 text-balance">
            La Experiencia de Nuestra Comunidad
          </h2>
          <p className="text-gray-600 text-balance">
            El bienestar de nuestros alumnos es nuestra principal motivación. Estas son algunas experiencias de quienes ya forman parte de la familia Mandala Ourense.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="h-full"
            >
              <div className="card-base card-hover h-full flex flex-col p-8 relative">
                {/* Quote symbol */}
                <div className="absolute top-6 right-8">
                  <svg width="45" height="36" className="text-brand-purple/10" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4 36C9.4 36 6.2 34.6 3.8 31.8C1.4 29 0.200001 25.6 0.200001 21.6C0.200001 18.4 0.833334 15.3333 2.1 12.4C3.36667 9.46666 5.1 6.76666 7.3 4.3C9.56667 1.83333 11.9667 0 14.5 -1.43051e-06L18.1 5.6C15.9 6.53333 13.9667 8 12.3 10C10.6333 12 9.8 13.9333 9.8 15.8C9.8 16.4667 9.96667 17.0667 10.3 17.6C10.7 18.0667 11.1667 18.3 11.7 18.3C14.0333 18.3 16.1 19.2667 17.9 21.2C19.7 23.1333 20.6 25.3333 20.6 27.8C20.6 30.3333 19.7 32.3667 17.9 33.9C16.1667 35.3 14 36 13.4 36ZM37.5 36C33.5 36 30.3 34.6 27.9 31.8C25.5 29 24.3 25.6 24.3 21.6C24.3 18.4 24.9333 15.3333 26.2 12.4C27.4667 9.46666 29.2 6.76666 31.4 4.3C33.6667 1.83333 36.0667 0 38.6 -1.43051e-06L42.2 5.6C40 6.53333 38.0667 8 36.4 10C34.7333 12 33.9 13.9333 33.9 15.8C33.9 16.4667 34.0667 17.0667 34.4 17.6C34.8 18.0667 35.2667 18.3 35.8 18.3C38.1333 18.3 40.2 19.2667 42 21.2C43.8 23.1333 44.7 25.3333 44.7 27.8C44.7 30.3333 43.8 32.3667 42 33.9C40.2667 35.3 38.1 36 37.5 36Z" />
                  </svg>
                </div>
                
                {/* Rating stars */}
                <div className="flex items-center mb-6">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-amber text-brand-amber" />
                  ))}
                </div>
                
                {/* Testimonial content */}
                <div className="mb-8 flex-grow">
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
                
                {/* Author info */}
                <div className="mt-auto flex items-center pt-4 border-t border-gray-100">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-brand-purple">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}