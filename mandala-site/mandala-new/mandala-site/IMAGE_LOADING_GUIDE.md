# Guía de Solución de Problemas para Imágenes en MandalaOurense

## Resumen del Problema

Se han identificado problemas con la carga de imágenes en el sitio desplegado en Netlify (mandala-new.netlify.app). Aunque las imágenes existen físicamente en el servidor, algunas no se muestran correctamente en el sitio web.

## Estructura de Imágenes en el Servidor

Según la investigación, las imágenes están disponibles en las siguientes rutas:

```
/images/
  /yoga/
    hatha-yoga.png
    daoyin-yoga.png
    yoga-nidra.png
  therapy.jpg
  yoga-meditation.jpg
  cta-background.jpg
  woman1.jpg
  woman2.jpg
  man1.jpg
```

## Soluciones Implementadas

1. **Configuración de Next.js**
   - Se ha actualizado `next.config.js` para incluir el dominio de Netlify
   - Se ha configurado `unoptimized: true` para evitar problemas con la optimización de imágenes
   - Se ha añadido `output: 'standalone'` para mejorar la compatibilidad con Netlify

2. **Corrección de Rutas de Imágenes**
   - Se ha cambiado `.jpg` a `.png` en las imágenes de estilos de yoga
   - Se ha verificado y corregido todas las rutas para asegurar que coincidan con las existentes en el servidor

3. **Cambios en los Componentes**
   - Se ha mejorado el manejo de errores en las imágenes
   - Se han añadido fondos de respaldo para evitar secciones en blanco

## Verificación de Imágenes en el Servidor

Para verificar que las imágenes existen en el servidor, se puede:

1. Abrir las herramientas de desarrollo del navegador (F12)
2. Ir a la pestaña "Sources" o "Network"
3. Buscar en el directorio `/images/` para confirmar las rutas correctas

## Pasos para Resolver Problemas Persistentes

Si siguen apareciendo problemas con las imágenes:

1. **Vaciar la caché del navegador**:
   - Chrome: Ctrl+Shift+Del > "Imágenes y archivos en caché" > "Borrar datos"
   - Firefox: Ctrl+Shift+Del > "Caché" > "Limpiar ahora"

2. **Verificar las rutas de las imágenes**:
   - Asegurarse de que se usan rutas absolutas: `/images/nombre-archivo.jpg`
   - Comprobar que las extensiones sean correctas (.jpg, .png)

3. **Revisar la configuración de Next.js Image**:
   - Verificar que el componente Image recibe: src, alt, fill o width/height
   - Asegurarse de que las imágenes estáticas están en la carpeta `/public`

4. **Problemas de CORS**:
   - Si hay errores de CORS, revisar la configuración del servidor Netlify
   - Añadir cabeceras adecuadas en el archivo `netlify.toml`

## Solución para Usuarios Finales

Si un usuario final reporta problemas con las imágenes:

1. Pedirle que recargue la página (Ctrl+F5 o Cmd+Shift+R)
2. Sugerirle que vacíe la caché del navegador
3. Verificar si el problema ocurre en diferentes navegadores

## Mejoras Futuras

1. Considerar el uso de servicios CDN para imágenes
2. Implementar carga progresiva de imágenes
3. Añadir imágenes de respaldo para casos de fallo
4. Mejorar el manejo de errores para mostrar alternativas

---

Para cualquier problema adicional, contactar con el desarrollador o abrir un issue en el repositorio del proyecto. 