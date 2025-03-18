import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })

  const [formState, setFormState] = useState({
    error: false,
    success: false,
    isSubmitting: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ error: false, success: false, isSubmitting: true })

    // Simulating form submission
    setTimeout(() => {
      // In a real implementation, you'd call your API here
      setFormState({
        error: false,
        success: true,
        isSubmitting: false,
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Tema *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          >
            <option value="general">Información General</option>
            <option value="yoga">Clases de Yoga</option>
            <option value="therapy">Terapias</option>
            <option value="events">Cursos y Eventos</option>
            <option value="other">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="teal"
          disabled={formState.isSubmitting}
          className="px-8"
        >
          {formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </div>

      {formState.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
          ¡Gracias por tu mensaje! Te responderemos a la mayor brevedad posible.
        </div>
      )}

      {formState.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
          Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.
        </div>
      )}
    </form>
  )
}