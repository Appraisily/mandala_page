import React from 'react';
import { YogaStylesSection } from '@/components/yoga-styles-section';

const yogaStyles = [
  {
    id: "hatha",
    title: "Hatha Yoga",
    description: "Fortalece tu cuerpo y calma tu mente con posturas tradicionales. Ideal para todos los niveles.",
    image: "/images/yoga/hatha-yoga.png",
    benefits: [
      "Mejora la flexibilidad y fuerza",
      "Reduce el estrés y la ansiedad",
      "Aumenta la concentración"
    ]
  },
  {
    id: "daoyin",
    title: "Daoyin Yoga",
    description: "Combina elementos del yoga tradicional con principios taoístas para mejorar el flujo de energía.",
    image: "/images/yoga/daoyin-yoga.png",
    benefits: [
      "Equilibra la energía interna",
      "Mejora la salud de órganos internos",
      "Aumenta la vitalidad"
    ]
  },
  {
    id: "nidra",
    title: "Yoga Nidra & Meditación",
    description: "Conocido como el 'sueño consciente', este estilo induce un estado de relajación profunda.",
    image: "/images/yoga/yoga-nidra.png",
    benefits: [
      "Reduce el insomnio y mejora el sueño",
      "Disminuye los niveles de cortisol",
      "Favorece la claridad mental"
    ]
  }
];

export default function YogaPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Estilos de Yoga</h1>
      <YogaStylesSection yogaStyles={yogaStyles} />
    </div>
  );
} 