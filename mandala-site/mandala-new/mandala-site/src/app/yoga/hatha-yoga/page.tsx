import { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Hatha Yoga | Mandala Ourense",
  description: "Descubre el Hatha Yoga, una práctica tradicional que combina posturas físicas, respiración y meditación para equilibrar cuerpo y mente en Mandala Ourense.",
}

export default function HathaYogaPage() {
  return <ClientPage />
}