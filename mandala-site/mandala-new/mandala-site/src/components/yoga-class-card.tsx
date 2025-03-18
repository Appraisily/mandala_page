import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface YogaClassCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export function YogaClassCard({ title, description, imageSrc, href }: YogaClassCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={`Imagen de ${title}`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-heading text-brand-purple">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">
          {/* Truncated description */}
          {description.length > 120 
            ? `${description.substring(0, 120)}...` 
            : description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="teal" className="w-full">
          <Link href={href}>Más Información</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}