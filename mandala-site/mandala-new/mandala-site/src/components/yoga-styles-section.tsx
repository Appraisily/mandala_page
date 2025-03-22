"use client"

import Image from "next/image"
import { SafeImage } from "@/components/ui/safe-image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Define yoga styles data
const yogaStyles: YogaStyle[] = [
  {
    id: "hatha-yoga",
    title: "Hatha Yoga",
    description: "Yoga tradicional que trabaja posturas físicas, técnicas de respiración y meditación para equilibrar cuerpo y mente.",
    imageSrc: "/images/yoga/hatha-yoga.png",
    iconSrc: "/images/icons/hatha-icon.svg",
    benefits: [
      "Mejora la flexibilidad y fuerza",
      "Reduce el estrés y la ansiedad"
    ],
    href: "/yoga/hatha-yoga"
  },
  {
    id: "daoyin-yoga",
    title: "Daoyin Yoga",
    description: "Una fusión de yoga con principios de medicina china, fortaleciendo el cuerpo y equilibrando la energía vital.",
    imageSrc: "/images/yoga/daoyin-yoga.png",
    iconSrc: "/images/icons/daoyin-icon.svg",
    benefits: [
      "Equilibra la energía del cuerpo",
      "Fortalece músculos profundos"
    ],
    href: "/yoga/daoyin-yoga"
  },
  {
    id: "yoga-nidra",
    title: "Yoga Nidra & Meditación",
    description: "Técnica de relajación profunda y meditación guiada que ayuda a reducir el estrés y mejorar la calidad del sueño.",
    imageSrc: "/images/yoga/yoga-nidra.png",
    iconSrc: "/images/icons/nidra-icon.svg",
    benefits: [
      "Reduce el insomnio",
      "Alivia el estrés y la ansiedad"
    ],
    href: "/yoga/nidra-yoga-meditacion"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Define the shape of a yoga style
interface YogaStyle {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  // Make all image-related fields optional
  image?: string;
  imageSrc?: string;
  iconSrc?: string;
  href?: string;
}

interface YogaStylesProps {
  yogaStyles?: YogaStyle[];
}

export function YogaStylesSection({ yogaStyles: customStyles }: YogaStylesProps) {
  // Use provided styles or fall back to default
  const stylesData = customStyles || yogaStyles;
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-10 top-1/2 w-20 h-20 rounded-full border border-brand-teal/20 animate-pulse-slow"></div>
      <div className="absolute right-10 top-40 w-10 h-10 rounded-full border-2 border-brand-amber/20 animate-spin-slow"></div>
      
      <Container className="relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block py-1 px-4 rounded-full bg-brand-teal/10 text-brand-teal font-medium tracking-wider uppercase text-sm mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            DISCIPLINAS
          </motion.span>
          
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-gray-800 leading-tight">
            Descubre Nuestros <span className="text-gradient">Estilos de Yoga</span>
          </h2>
          
          <motion.p 
            className="mt-6 body-large max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exploramos diferentes prácticas de yoga para satisfacer tus necesidades, desde el trabajo físico hasta la meditación profunda. Todas nuestras clases son aptas para principiantes y practicantes avanzados.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stylesData.map((style, index) => (
            <motion.div 
              key={style.id}
              className={`card-premium group hover:-translate-y-2 transition-all duration-500`}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <SafeImage
                  src={style.imageSrc || style.image || ''}
                  alt={style.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 img-filter-bright"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {style.iconSrc && (
                  <div className="absolute left-4 bottom-4 bg-white rounded-full p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className="w-10 h-10 relative">
                      <Image 
                        src={style.iconSrc} 
                        alt={`${style.title} icon`} 
                        width={40} 
                        height={40}
                      />
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium shadow-md text-brand-purple">
                    {index === 0 ? "Popular" : index === 1 ? "Único" : "Relajante"}
                  </span>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-white to-brand-beige/10 relative">
                <h3 className="text-2xl font-heading font-medium text-brand-purple mb-3 group-hover:text-gradient transition-all duration-300">
                  {style.title}
                </h3>
                
                <p className="body-base mb-5">
                  {style.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {style.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-brand-teal flex-shrink-0 bg-brand-teal/10 rounded-full p-1">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.5 10.5L4 8L3 9L6.5 12.5L13.5 5.5L12.5 4.5L6.5 10.5Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={style.href || '#'} 
                  className="inline-flex items-center justify-center w-full bg-white rounded-xl py-3 shadow-sm border border-gray-100 text-brand-purple font-medium hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-300 group-hover:shadow-md"
                >
                  Descubrir más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 backdrop-blur-sm max-w-xl mx-auto shadow-sm">
            <h3 className="text-xl text-brand-purple font-medium mb-4">¿Listo para comenzar tu camino?</h3>
            <p className="body-base mb-6 text-balance">Todas nuestras clases están diseñadas para adaptarse a tu nivel y necesidades personales.</p>
            
            <Link 
              href="/horarios-precios" 
              className="btn-secondary rounded-full group"
            >
              Consultar horarios de clases
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <div className="mt-6 py-2 px-4 rounded-full bg-brand-amber/10 text-brand-amber-dark text-sm font-medium inline-flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Primera clase de prueba gratuita para nuevos alumnos
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 