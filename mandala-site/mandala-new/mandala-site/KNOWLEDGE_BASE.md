# Base de Conocimiento - Sitio Web Mandala Ourense

Este documento proporciona una visión general de la estructura y funcionamiento del sitio web de Mandala Ourense. Para una documentación más detallada, visita la página de documentación en el sitio: `/docs`

## Índice

1. [Estructura General](#estructura-general)
2. [Rutas Principales](#rutas-principales)
3. [Guías para el Administrador](#guías-para-el-administrador)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Integración con Servicios de Google](#integración-con-servicios-de-google)
6. [Integración con Redes Sociales](#integración-con-redes-sociales)

## Estructura General

El sitio está construido con Next.js 13, utilizando el nuevo sistema de enrutamiento App Router. La estructura general es:

```
mandala-site/
  ├── public/            # Archivos estáticos
  ├── src/               # Código fuente
  │   ├── app/           # Rutas y páginas
  │   ├── components/    # Componentes reutilizables
  │   ├── lib/           # Utilidades y contextos
  │   └── styles/        # Estilos globales
  ├── next.config.js     # Configuración de Next.js
  ├── tailwind.config.js # Configuración de Tailwind CSS
  └── package.json       # Dependencias
```

## Rutas Principales

- `/` - Página de inicio
- `/yoga/...` - Páginas de tipos de yoga (hatha-yoga, daoyin-yoga, etc.)
- `/terapias` - Página de terapias ofrecidas
- `/horarios-precios` - Horarios y precios de las clases
- `/contacto` - Formulario de contacto e información
- `/noticias` - Noticias y actualizaciones del centro
- `/admin` - Panel de administración (protegido con contraseña)
- `/docs` - Documentación técnica (no indexada)

## Guías para el Administrador

Se han creado dos guías principales para la administración del sitio:

1. **ADMIN_GUIDE.md** - Guía detallada del panel de administración
2. **GOOGLE_SERVICES_GUIDE.md** - Guía para gestionar los servicios de Google integrados

Los aspectos más importantes para el administrador son:

- **Panel de Administración**: Accesible en `/admin` con la contraseña `mandala2024`
- **Configuración de Servicios**: Google Calendar, Google Forms, Google Sites
- **Redes Sociales**: Configuración de cuentas de Instagram y Facebook
- **Información de Contacto**: Email, teléfono, dirección y horarios

## Tecnologías Utilizadas

- **Next.js 13**: Framework React con App Router
- **TypeScript**: Para tipado estático
- **Tailwind CSS**: Para estilos
- **Framer Motion**: Para animaciones
- **React Context**: Para gestión de estado
- **localStorage**: Para almacenamiento de configuración

## Integración con Servicios de Google

### Google Calendar

- **Propósito**: Mostrar horarios de clases
- **Componente**: `GoogleCalendar`
- **Configuración**: Panel de administración > Google Calendar ID
- **Archivo**: `src/components/google-calendar.tsx`

### Google Forms

- **Propósito**: Formulario de contacto
- **Componente**: `GoogleForm`
- **Configuración**: Por defecto utiliza un ID de formulario predeterminado
- **Archivo**: `src/components/google-form.tsx`

### Google Sites

- **Propósito**: Contenido estructurado (talleres, artículos)
- **Componente**: `GoogleSitesEmbed`
- **Configuración**: Panel de administración > URL de Google Sites
- **Archivo**: `src/components/google-sites-embed.tsx`

## Integración con Redes Sociales

### Instagram

- **Propósito**: Mostrar publicaciones recientes
- **Componente**: `SocialMediaFeed` (pestaña Instagram)
- **Configuración**: Panel de administración > Usuario de Instagram
- **Archivo**: `src/components/social-media-feed.tsx`

### Facebook

- **Propósito**: Mostrar publicaciones de la página
- **Componente**: `SocialMediaFeed` (pestaña Facebook)
- **Configuración**: Panel de administración > ID de Página de Facebook
- **Archivo**: `src/components/social-media-feed.tsx`

## Configuración del Sitio

La configuración del sitio se gestiona a través del contexto `SiteSettingsContext` y se almacena en el localStorage del navegador. La estructura de la configuración es:

```typescript
interface SiteSettings {
  calendarId: string          // ID del calendario de Google
  instagramUsername: string   // Nombre de usuario de Instagram
  facebookPageId: string      // ID o nombre de página de Facebook
  contactEmail: string        // Email de contacto
  contactPhone: string        // Teléfono de contacto
  contactAddress: string      // Dirección física
  googleSiteUrl: string       // URL del sitio de Google Sites
  businessHours: {            // Horarios de atención
    weekdays: string          // Lunes a viernes
    saturday: string          // Sábado
    sunday: string            // Domingo
  }
}
```

Esta configuración es accesible en todos los componentes que la necesiten mediante el hook `useSiteSettings()`.

## Despliegue

El sitio está configurado para desplegarse en Netlify:

1. Los cambios se pushean al repositorio en GitHub
2. Netlify detecta los cambios e inicia el proceso de build
3. El sitio se construye con `next build`
4. Las páginas se despliegan como archivos estáticos y funciones serverless

## Soporte y Contacto

Para problemas técnicos o soporte, contactar al desarrollador en soporte@ejemplo.com.