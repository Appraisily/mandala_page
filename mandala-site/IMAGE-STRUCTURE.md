# Mandala Ourense - Estructura de Imágenes

## Organización de Carpetas

Hemos reorganizado las imágenes del sitio en una estructura más lógica y mantenible para facilitar la gestión de los recursos visuales.

### Estructura Actual

```
public/
  images/
    yoga/                # Imágenes específicas de estilos de yoga
      hatha-yoga.png     # Imagen para la sección de Hatha Yoga
      daoyin-yoga.png    # Imagen para la sección de Daoyin Yoga
      yoga-nidra.png     # Imagen para la sección de Yoga Nidra & Meditación
    
    icons/               # Iconos y elementos gráficos pequeños
      hatha-icon.svg     # Icono para Hatha Yoga
      daoyin-icon.svg    # Icono para Daoyin Yoga
      nidra-icon.svg     # Icono para Yoga Nidra
    
    testimonials/        # Imágenes de perfil para testimonios
      testimonial1.jpg   # Imagen para Laura García
      testimonial2.jpg   # Imagen para Carlos Rodríguez
      testimonial3.jpg   # Imagen para Marta Fernández
    
    # Imágenes generales del sitio
    new-hero-background.jpg  # Imagen de fondo para el hero section
    yoga-meditation.jpg      # Imagen alternativa para meditación
    therapy.jpg              # Imagen para la sección de terapias
    yoga-studio.jpg          # Imagen del estudio
    yoga-pose.jpg            # Imagen para poses de yoga
    woman1.jpg               # Imagen de perfil femenino 1
    woman2.jpg               # Imagen de perfil femenino 2
    man1.jpg                 # Imagen de perfil masculino
    cta-background.jpg       # Fondo para sección de llamada a la acción
```

## Convenciones de Nomenclatura

- **Nombres descriptivos**: Cada imagen debe tener un nombre que describa claramente su contenido.
- **Minúsculas con guiones**: Usar minúsculas y separar palabras con guiones para mantener consistencia.
- **Carpetas específicas**: Agrupar imágenes por su propósito o sección del sitio.

## Formatos de Imagen

- **SVG**: Para iconos y gráficos vectoriales que necesitan escalar sin pérdida de calidad.
- **PNG**: Para imágenes que requieren transparencia o detalles nítidos.
- **JPG**: Para fotografías y fondos donde la compresión es aceptable.

## Optimización de Imágenes

Todas las imágenes deben ser optimizadas antes de subirlas al repositorio:

1. **Redimensionar** al tamaño adecuado para su uso (no subir imágenes de 5000px si solo se mostrarán a 800px)
2. **Comprimir** sin pérdida visible de calidad
3. **Usar formatos apropiados** según el contenido de la imagen

## Gestión de Imágenes Responsivas

Para asegurar un buen rendimiento en todos los dispositivos:

1. Utilizar el componente `<Image>` de Next.js que optimiza automáticamente las imágenes
2. Configurar los atributos `width` y `height` o usar `fill` con un contenedor de tamaño definido
3. Utilizar `priority` para imágenes importantes above-the-fold

## Flujo de Trabajo para Añadir Nuevas Imágenes

1. Optimizar la imagen con herramientas como TinyPNG, ImageOptim, etc.
2. Colocarla en la carpeta adecuada siguiendo la estructura de organización
3. Usar un nombre descriptivo que siga las convenciones
4. Actualizar cualquier referencia en el código usando rutas relativas

## Consideraciones de Accesibilidad

1. Todas las imágenes deben tener textos alternativos (atributo `alt`) descriptivos
2. Las imágenes decorativas pueden tener `alt=""` pero nunca omitir el atributo
3. Los SVG interactivos deben incluir roles ARIA y etiquetas adecuadas

---

*Esta estructura de organización permite un mantenimiento más sencillo del proyecto y facilita la localización y actualización de recursos visuales según sea necesario.* 