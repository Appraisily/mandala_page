import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentación | Mandala Ourense",
  description: "Documentación técnica y base de conocimiento para el sitio web de Mandala Ourense",
  robots: "noindex",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}