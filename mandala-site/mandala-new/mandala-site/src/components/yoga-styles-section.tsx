"use client"

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Define yoga styles data
const yogaStyles = [
  {
    id: "hatha-yoga",
    title: "Hatha Yoga",
    description: "Yoga tradicional que trabaja posturas físicas, técnicas de respiración y meditación para equilibrar cuerpo y mente.",
    imageSrc: "/images/yoga/hatha-yoga.jpg",
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
    imageSrc: "/images/yoga/daoyin-yoga.jpg",
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
    imageSrc: "/images/yoga/yoga-nidra.jpg",
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

export function YogaStylesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-beige/30">
      <Container>
        <div className="text-center mb-16">
          <span className="text-brand-teal font-medium tracking-wider uppercase text-sm">DISCIPLINAS</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading font-medium text-gray-800">
            Descubre Nuestros Estilos de Yoga
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Exploramos diferentes prácticas de yoga para satisfacer tus necesidades, desde el trabajo físico hasta la meditación profunda. Todas nuestras clases son aptas para principiantes y practicantes avanzados.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {yogaStyles.map((style) => (
            <motion.div 
              key={style.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={style.imageSrc}
                  alt={style.title}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute left-4 bottom-4 bg-white rounded-full p-2 shadow-md">
                  <div className="w-8 h-8 relative">
                    <Image 
                      src={style.iconSrc} 
                      alt={`${style.title} icon`} 
                      width={32} 
                      height={32}
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-white to-brand-beige/20">
                <h3 className="text-xl font-heading font-medium text-brand-purple mb-2">
                  {style.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {style.description}
                </p>
                
                <div className="space-y-2 mb-5">
                  {style.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <div className="text-brand-teal flex-shrink-0 mt-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.5 10.5L4 8L3 9L6.5 12.5L13.5 5.5L12.5 4.5L6.5 10.5Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <span className="ml-2 text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={style.href} 
                  className="inline-flex items-center text-brand-teal hover:text-brand-purple transition-colors text-sm font-medium"
                >
                  Descubrir más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-14 text-center">
          <Link 
            href="/horarios-precios" 
            className="inline-flex items-center justify-center bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md"
          >
            Consultar horarios de clases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-gray-500">Primera clase de prueba gratuita para nuevos alumnos</p>
        </div>
      </Container>
    </section>
  );
} 