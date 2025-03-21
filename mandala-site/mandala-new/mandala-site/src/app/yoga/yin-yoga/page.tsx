import { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Yin Yoga | Mandala Ourense",
  description: "Descubre el Yin Yoga, una práctica suave y profunda que trabaja los tejidos conectivos y meridianos de energía para mejorar la flexibilidad y calma mental en Mandala Ourense.",
}

export default function YinYogaPage() {
  return <ClientPage />
}