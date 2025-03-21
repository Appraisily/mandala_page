# Mandala Ourense Website

Un sitio web moderno para Mandala Ourense, un centro de yoga y bienestar ubicado en Ourense, Galicia. Diseñado para ofrecer una experiencia de usuario óptima y permitir una gestión sencilla del contenido por parte de los administradores sin conocimientos técnicos.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Configuración inicial](#configuración-inicial)
- [Rutas y páginas](#rutas-y-páginas)
- [Panel de Administración](#panel-de-administración)
- [Seguridad](#seguridad)
- [Integraciones de Google](#integraciones-de-google)
- [Imágenes locales](#imágenes-locales)
- [Documentación Adicional](#documentación-adicional)
- [Personalización](#personalización)
- [Resolución de problemas](#resolución-de-problemas)
- [Créditos](#créditos)

## Características

- Diseño moderno y minimalista inspirado en shadcn/ui
- Totalmente responsive para dispositivos móviles y de escritorio
- Optimizado para SEO con múltiples rutas específicas
- Panel de administración protegido por contraseña
- Integración con servicios de Google (Calendar, Forms, Sites)
- Contenido estático de redes sociales (Instagram, Facebook)
- Sistema de configuración dinámica mediante localStorage
- Analytics mediante Google Tag Manager (opcional)
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
- Google Tag Manager - Para integración de Analytics (opcional)
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
│   ├── social-media-feed.tsx # Feed estático de redes sociales
│   └── ...                   # Otros componentes
├── lib/                      # Utilidades y funciones auxiliares
│   └── settings-context.tsx  # Contexto para configuración del sitio
├── styles/                   # Estilos globales
└── public/                   # Archivos estáticos
    └── images/               # Imágenes locales
        ├── testimonials/     # Imágenes de testimonios
        └── ...               # Otras imágenes
```

## Configuración inicial

### Requisitos previos
- Node.js 18.x o superior
- npm 9.x o superior

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mandala-site.git
   cd mandala-site
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Copia el archivo `.env.local.example` a `.env.local`
   ```bash
   cp .env.local.example .env.local
   ```
   - Edita `.env.local` y configura los valores necesarios:
     - `NEXT_PUBLIC_APP_URL`: URL de tu sitio en producción
     - `NEXT_PUBLIC_ADMIN_PASSWORD`: Contraseña para el panel de administración
     - `NEXT_PUBLIC_GTM_ID`: ID de Google Tag Manager (opcional)

4. **Asegúrate de que las imágenes locales estén en su lugar**
   - Ejecuta el script de configuración de imágenes
   ```bash
   ./copy-testimonial-images.bat
   ```

5. **Iniciar en modo desarrollo**
   ```bash
   npm run dev
   ```

6. **Construir para producción**
   ```bash
   npm run build
   npm start
   ```

## Rutas y páginas

El sitio utiliza la estructura de carpetas de Next.js App Router para definir las rutas:

| Ruta | Descripción | Contenido |
|------|-------------|-----------|
| `/` | Página principal | Introducción al centro, clases destacadas, testimonios |
| `/about` | Sobre nosotros | Historia, misión, equipo y espacio del centro |
| `/terapias` | Terapias holísticas | Listado y descripciones de terapias ofrecidas |
| `/horarios-precios` | Horarios y precios | Calendario de clases, tarifas y bonos |
| `/contacto` | Contacto | Formulario, mapa, dirección y teléfono |
| `/noticias` | Blog/Noticias | Actualizaciones, eventos y artículos |
| `/admin` | Panel de administración | Configuración protegida con contraseña |
| `/yoga/hatha-yoga` | Hatha Yoga | Descripción específica de esta modalidad |
| `/yoga/nidra-yoga-meditacion` | Yoga Nidra | Detalles sobre yoga Nidra y meditación |
| `/yoga/yin-yoga` | Yin Yoga | Información sobre Yin Yoga |
| `/aviso-legal` | Aviso legal | Términos y condiciones, privacidad |
| `/docs` | Documentación | Documentación técnica (no indexada) |

## Panel de Administración

El sitio incluye un panel de administración accesible en `/admin` protegido con contraseña. Desde este panel se pueden configurar:

- ID de Google Calendar para los horarios
- ID de Google Tag Manager para analytics
- URL de Google Sites para contenido dinámico
- Usuarios de Instagram y Facebook para integración social
- Información de contacto y horarios de apertura

Esta configuración se almacena en localStorage y es accesible a través del contexto `SiteSettingsContext` para toda la aplicación.

### Acceso al panel de administración
1. Navega a `/admin` en tu navegador
2. Introduce la contraseña configurada en `.env.local` (`NEXT_PUBLIC_ADMIN_PASSWORD`)
3. Configura los parámetros necesarios

## Seguridad

### Credenciales y contraseñas
- **NUNCA** incluyas contraseñas reales en archivos de código fuente
- Usa SIEMPRE el archivo `.env.local` para almacenar credenciales (este archivo no se sube a Git)
- La contraseña de administración se establece en la variable `NEXT_PUBLIC_ADMIN_PASSWORD`
- No uses contraseñas obvias o débiles

### Variables de entorno
- El prefijo `NEXT_PUBLIC_` hace que las variables sean visibles en el cliente
- Usa variables sin este prefijo para secretos que solo deben estar disponibles en el servidor
- Las variables de entorno se establecen en `.env.local` y se pueden sobreescribir en entornos de Netlify

### Seguridad en Netlify
- Para producción, configura las variables de entorno en el panel de Netlify
- Asegúrate de que el sitio use HTTPS en producción

## Integraciones de Google

### Google Tag Manager (Opcional)
- Añade tu ID de GTM en el panel de administración o en `.env.local`
- Para activar GTM, establece el prop `enableTracking` a `true` en el componente `GoogleTagManagerScript`
- Por defecto está desactivado para evitar errores de CSP y bloqueo

### Google Calendar
- Muestra el calendario de clases directamente desde Google Calendar
- Configurable desde el panel de administración
- Debe ser un calendario público para poder ser embebido

### Google Forms
- Formularios de contacto integrados con Google Forms
- Permite gestionar las respuestas directamente desde Google
- Consulta GOOGLE_SERVICES_GUIDE.md para instrucciones de configuración

### Google Sites
- Permite mostrar contenido dinámico gestionado a través de Google Sites
- Ideal para noticias, eventos especiales o información que cambia con frecuencia
- Asegúrate de que el sitio de Google sea público

## Imágenes locales

Para evitar problemas con servicios externos, todas las imágenes se almacenan localmente:

### Estructura de carpetas de imágenes
```
public/
  images/
    testimonials/     # Imágenes de testimonios de clientes
      testimonial1.jpg
      testimonial2.jpg
      testimonial3.jpg
    yoga-meditation.jpg  # Imagen de fondo de hero
    therapy.jpg          # Imagen de terapias
    yoga-studio.jpg      # Espacio del estudio
    ...
```

### Actualizando imágenes
- Reemplaza cualquier imagen en la carpeta correspondiente manteniendo el mismo nombre
- Para añadir nuevas imágenes, actualiza también las referencias en los componentes
- Recomendamos optimizar las imágenes antes de subirlas para mejorar el rendimiento

## Documentación Adicional

- [KNOWLEDGE_BASE.md](./KNOWLEDGE_BASE.md) - Documentación técnica completa
- [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) - Guía para administradores no técnicos
- [GOOGLE_SERVICES_GUIDE.md](./GOOGLE_SERVICES_GUIDE.md) - Guía para configurar los servicios de Google
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Instrucciones detalladas sobre el proceso de despliegue
- [fixes-implemented.md](./fixes-implemented.md) - Registro de correcciones implementadas

## Personalización

- Los colores de marca se pueden modificar en `tailwind.config.js`
- La configuración del sitio se gestiona desde el panel de administración
- Las integraciones de Google se pueden actualizar sin necesidad de modificar el código
- Para cambiar el contenido estático, edita los archivos correspondientes en `src/app`

## Resolución de problemas

### Imágenes no se muestran
- Verifica que las imágenes existan en la carpeta correcta
- Ejecuta el script `copy-testimonial-images.bat` para configurar las imágenes de testimonios
- Comprueba las rutas en los componentes

### Errores de consola
- La mayoría de errores de recursos externos se han solucionado utilizando contenido estático
- Si aparecen errores de Google Tag Manager, verifica la configuración o deshabilítalo
- Para errores de CORS, asegúrate de usar imágenes locales en lugar de externas

### Problemas de despliegue
- Revisa los logs de Netlify para identificar errores específicos
- Verifica que todas las variables de entorno estén configuradas en Netlify
- Comprueba que el archivo `netlify.toml` tenga la configuración correcta

## Créditos

- Diseño y desarrollo: Claude AI
- Iconos: Lucide React