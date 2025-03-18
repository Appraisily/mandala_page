import { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Contacto | Mandala Ourense",
  description: "Ponte en contacto con Mandala Ourense para resolver dudas, reservar clases o solicitar información sobre nuestros servicios de yoga y terapias holísticas.",
}

export default function ContactPage() {
  return <ClientPage />
}