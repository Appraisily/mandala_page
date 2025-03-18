"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ArrowLeft, Instagram, Facebook } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-purple/5 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-purple mb-6">
              Contacto
            </h1>
            <p className="text-lg text-gray-700">
              Estamos encantados de resolver cualquier duda que tengas sobre nuestras clases, terapias o servicios.
              No dudes en ponerte en contacto con nosotros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-heading font-medium text-brand-purple mb-6">
                  Información de Contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Dirección</h3>
                      <p className="text-gray-600">C/ Dr. Fleming, 10</p>
                      <p className="text-gray-600">32003 Ourense, Galicia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-brand-teal/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Teléfono</h3>
                      <p className="text-gray-600">+34 600 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-brand-amber/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-brand-amber" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@mandalaourense.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-brand-terracotta/10 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-brand-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Horario de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:30 - 21:00</p>
                      <p className="text-gray-600">Sábado: 10:00 - 14:00</p>
                      <p className="text-gray-600">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-4">Síguenos en redes sociales</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/mandalaourense" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-purple/5 hover:bg-brand-purple/10 p-3 rounded-full transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-brand-purple" />
                    </a>
                    <a 
                      href="https://facebook.com/mandalaourense" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-purple/5 hover:bg-brand-purple/10 p-3 rounded-full transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-brand-purple" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/3]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8554635613126!2d-7.8655!3d42.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2ffea6366958b3%3A0xcc4b1073d24e66db!2sC.%20Doctor%20Fleming%2C%2032003%20Ourense!5e0!3m2!1ses!2ses!4v1654800000000!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Mandala Ourense"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-heading font-medium text-brand-purple mb-6">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible. 
                  También puedes llamarnos o escribirnos directamente por correo electrónico.
                </p>
                
                <ContactForm />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-brand-purple hover:text-brand-purple/80 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}