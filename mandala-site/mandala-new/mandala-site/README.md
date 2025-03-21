# Mandala Ourense Website

Un sitio web moderno para Mandala Ourense, un centro de yoga y bienestar ubicado en Ourense, Galicia. Diseñado para ofrecer una experiencia de usuario óptima y permitir una gestión sencilla del contenido por parte de los administradores sin conocimientos técnicos.

## Características

- Diseño moderno y minimalista inspirado en shadcn/ui
- Totalmente responsive para dispositivos móviles y de escritorio
- Optimizado para SEO con múltiples rutas específicas
- Panel de administración protegido por contraseña
- Integración con servicios de Google (Calendar, Forms, Sites)
- Integración con redes sociales (Instagram, Facebook)
- Sistema de configuración dinámica mediante localStorage
- Analytics mediante Google Tag Manager
- Formularios de contacto integrados con Google Forms
- Mapa de localización enlazado a Google Maps
- Páginas detalladas para cada modalidad de yoga y terapia
- Página de Aviso Legal y condiciones de uso
- Documentación técnica y guía de administración

## Tecnologías utilizadas

- Next.js 15 - Framework React con App Router
- TypeScript - Tipado estático para un código más robusto
- Tailwind CSS - Framework de utilidades CSS para diseño rápido
- shadcn/ui - Componentes de interfaz de usuario accesibles y personalizables
- React Context API - Para gestión de estado global
- Google Tag Manager - Para integración de Analytics
- Netlify - Despliegue y hosting

## Estructura del proyecto

```
src/
├── app/                      # Rutas y páginas de Next.js
│   ├── (routes)/             # Rutas adicionales para SEO
│   ├── admin/                # Panel de administración
│   ├── aviso-legal/          # Página de aviso legal
│   ├── contacto/             # Página de contacto
│   ├── docs/                 # Documentación técnica (noindex)
│   ├── horarios-precios/     # Horarios y precios
│   ├── terapias/             # Terapias ofrecidas
│   ├── yoga/                 # Páginas para tipos de yoga
│   └── layout.tsx            # Layout principal con GTM
├── components/               # Componentes reutilizables
│   ├── analytics/            # Componentes de analytics
│   ├── sections/             # Secciones de páginas
│   ├── ui/                   # Componentes de interfaz básicos
│   ├── footer.tsx            # Pie de página con información legal
│   ├── google-calendar.tsx   # Integración de Google Calendar
│   ├── google-form.tsx       # Integración de formularios de Google
│   ├── google-sites-embed.tsx # Integración de Google Sites
│   ├── google-tag-manager.tsx # Integración de Google Tag Manager
│   ├── navbar.tsx            # Barra de navegación
│   ├── social-media-feed.tsx # Feed integrado de redes sociales
│   └── ...                   # Otros componentes
├── lib/                      # Utilidades y funciones auxiliares
│   └── settings-context.tsx  # Contexto para configuración del sitio
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

## Panel de Administración

El sitio incluye un panel de administración accesible en `/admin` protegido con contraseña. Desde este panel se pueden configurar:

- ID de Google Calendar para los horarios
- ID de Google Tag Manager para analytics
- URL de Google Sites para contenido dinámico
- Usuarios de Instagram y Facebook para integración social
- Información de contacto y horarios de apertura

Esta configuración se almacena en localStorage y es accesible a través del contexto `SiteSettingsContext` para toda la aplicación.

## Integraciones de Google

### Google Tag Manager
- Añade tu ID de GTM en el panel de administración
- Permite gestionar Google Analytics y otras herramientas de seguimiento sin modificar el código

### Google Calendar
- Muestra el calendario de clases directamente desde Google Calendar
- Configurable desde el panel de administración

### Google Forms
- Formularios de contacto integrados con Google Forms
- Permite gestionar las respuestas directamente desde Google

### Google Sites
- Permite mostrar contenido dinámico gestionado a través de Google Sites
- Ideal para noticias, eventos especiales o información que cambia con frecuencia

## Despliegue

El sitio está configurado para despliegue automático en Netlify. Cada push a la rama principal desencadenará un nuevo despliegue.

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas sobre el proceso de despliegue.

## Documentación Adicional

- [KNOWLEDGE_BASE.md](./KNOWLEDGE_BASE.md) - Documentación técnica completa
- [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) - Guía para administradores no técnicos
- [GOOGLE_SERVICES_GUIDE.md](./GOOGLE_SERVICES_GUIDE.md) - Guía para configurar los servicios de Google

## Personalización

- Los colores de marca se pueden modificar en `tailwind.config.js`
- La configuración del sitio se gestiona desde el panel de administración
- Las integraciones de Google se pueden actualizar sin necesidad de modificar el código

## Créditos

- Diseño y desarrollo: Claude AI
- Iconos: Lucide React