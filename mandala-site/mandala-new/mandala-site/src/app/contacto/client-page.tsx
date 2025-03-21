"use client"

import { motion } from "framer-motion"
import { GoogleForm } from "@/components/google-form"
import { ContactInfo } from "@/components/contact-info"

export default function ClientPage() {
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
              Estamos encantados de atenderte. Puedes contactarnos a través del formulario, 
              por teléfono o visitando nuestro centro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactInfo />

              {/* Map */}
              <div className="mt-8">
                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8432565383493!2d-7.8645716845697!3d42.34043797918873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2fff4f93d8c309%3A0x3655650605af41a6!2sMandala%20Ourense!5e0!3m2!1sen!2ses!4v1615554283674!5m2!1sen!2ses" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    title="Mandala Yoga Center Map"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-heading font-semibold text-brand-purple mb-6">
                  Envíanos un Mensaje
                </h2>
                
                <GoogleForm
                  formId="1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                  height="600px"
                />
                
                <div className="mt-6 text-sm text-gray-500">
                  * Todos los campos marcados con asterisco son obligatorios
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}