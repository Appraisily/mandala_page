# Guía de Despliegue - Mandala Ourense Website

Esta guía proporciona los pasos necesarios para desplegar correctamente el sitio web de Mandala Ourense en Netlify.

## Requisitos previos

- Cuenta en Netlify
- Git instalado en tu computadora
- Node.js 18.x o superior

## Lista de verificación antes del despliegue

- [ ] Reemplazar las imágenes de stock por fotografías reales del centro
- [ ] Verificar toda la información de contacto (teléfono, email, dirección)
- [ ] Comprobar todos los enlaces internos del sitio
- [ ] Verificar que los horarios y precios son correctos
- [ ] Ajustar textos y descripciones según sea necesario
- [ ] Probar el formulario de contacto y asegurar que funciona
- [ ] Validar que el mapa muestra la ubicación correcta
- [ ] Comprobar la visualización en dispositivos móviles

## Pasos para el despliegue en Netlify

1. **Preparar el proyecto para producción**

   ```bash
   npm run build
   ```

2. **Crear un nuevo repositorio Git (si no existe)**

   ```bash
   git init
   git add .
   git commit -m "Primera versión del sitio web de Mandala Ourense"
   ```

3. **Conectar con Netlify**

   - Inicia sesión en [Netlify](https://app.netlify.com/)
   - Haz clic en "New site from Git"
   - Selecciona el proveedor Git donde está tu repositorio
   - Autoriza Netlify para acceder a tus repositorios
   - Selecciona el repositorio del proyecto

4. **Configurar opciones de construcción**

   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Si deseas, puedes configurar variables de entorno en la interfaz de Netlify

5. **Desplegar**

   - Haz clic en "Deploy site"
   - Netlify comenzará a construir y desplegar automáticamente tu sitio

## Personalización del dominio

1. **Añadir un dominio personalizado**

   - En el panel de Netlify, ve a "Site settings" > "Domain management"
   - Haz clic en "Add custom domain"
   - Introduce el dominio que deseas utilizar (ej. mandalaourense.com)
   - Sigue las instrucciones para configurar los DNS

2. **Configurar HTTPS**

   - Activa el SSL/TLS automático de Netlify en la sección "SSL/TLS certificate"
   - Selecciona "Let's Encrypt" para obtener un certificado gratuito

## Monitorización y mantenimiento

- Utiliza Google Analytics para monitorizar el tráfico (añade el ID en `layout.tsx`)
- Configura notificaciones en Netlify para recibir alertas sobre errores de construcción
- Establece un calendario regular para actualizar contenido (eventos, horarios, etc.)

## Solución de problemas comunes

- **Error en la construcción**: Revisa los logs de despliegue en Netlify
- **Problemas con formularios**: Verifica la configuración de formularios en Netlify (Settings > Forms)
- **Problemas de cache**: Utiliza la función "Clear cache and deploy site" en Netlify

## Soporte

Para más información sobre cómo mantener y actualizar el sitio, contacta al desarrollador:

[Tu nombre o empresa]
[Tu correo electrónico]