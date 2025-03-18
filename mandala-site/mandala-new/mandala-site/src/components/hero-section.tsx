import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
          alt="Background image of a serene yoga studio"
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
        />
      </div>
      <Container className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-heading">
            Encuentra tu equilibrio interior
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-lg">
            En Mandala Ourense ofrecemos un espacio para conectar cuerpo, mente y espíritu a través del yoga y terapias holísticas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="teal" size="lg">
              <Link href="/horarios-precios">Ver Horarios</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/80 hover:bg-white">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}