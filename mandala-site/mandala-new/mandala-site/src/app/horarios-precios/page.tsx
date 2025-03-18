import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Horarios y Precios | Mandala Ourense",
  description: "Consulta los horarios de nuestras clases de yoga y servicios, así como nuestras tarifas y bonos en Mandala Ourense.",
}

// We need to use client components for animations
// Let's create a client component for the animated content
import ClientPage from "./client-page"

export default function SchedulePricingPage() {
  return <ClientPage />
}