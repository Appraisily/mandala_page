# Mandala Ourense Website

Un sitio web moderno para Mandala Ourense, un centro de yoga y bienestar ubicado en Ourense, Galicia.

## Características

- Diseño moderno y minimalista inspirado en shadcn/ui
- Totalmente responsive para dispositivos móviles y de escritorio
- Optimizado para SEO
- Formulario de contacto interactivo
- Sistema de programación visual para clases
- Precios y tarifas claramente estructurados
- Integración de mapas para localización
- Páginas detalladas para cada modalidad de yoga y terapia

## Tecnologías utilizadas

- Next.js 15 - Framework React de alto rendimiento
- TypeScript - Tipado estático para un código más robusto
- Tailwind CSS - Framework de utilidades CSS para diseño rápido
- shadcn/ui - Componentes de interfaz de usuario accesibles y personalizables
- Framer Motion - Animaciones fluidas para mejor experiencia de usuario
- Vercel/Netlify - Despliegue y hosting

## Estructura del proyecto

```
src/
├── app/                      # Rutas y páginas de Next.js
│   ├── (routes)/             # Organización por rutas
│   ├── contacto/             # Página de contacto
│   ├── horarios-precios/     # Horarios y precios
│   ├── yoga/                 # Páginas para tipos de yoga
│   └── layout.tsx            # Layout principal
├── components/               # Componentes reutilizables
│   ├── ui/                   # Componentes de interfaz básicos
│   ├── hero-section.tsx      # Sección de héroe del home
│   ├── navbar.tsx            # Barra de navegación
│   └── ...                   # Otros componentes
├── lib/                      # Utilidades y funciones auxiliares
└── styles/                   # Estilos globales
```

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar versión de producción
npm start
```

## Despliegue

El sitio está configurado para despliegue automático en Netlify. Cada push a la rama principal desencadenará un nuevo despliegue.

## Personalización

- Los colores de marca se pueden modificar en `tailwind.config.js`
- Los textos y contenidos se pueden editar directamente en los componentes correspondientes
- Las imágenes deben ser reemplazadas con fotografías reales del estudio

## Créditos

- Diseño y desarrollo: [Tu nombre o empresa]
- Imágenes: Unsplash (temporales, a reemplazar con fotografías del local)
- Iconos: Lucide React