import { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Terapias Holísticas | Mandala Ourense",
  description: "Descubre nuestras terapias holísticas (masaje ayurvédico, reflexología, reiki y aromaterapia) dirigidas al bienestar integral, diseñadas para armonizar cuerpo, mente y espíritu.",
}

export default function TherapiesPage() {
  return <ClientPage />
}