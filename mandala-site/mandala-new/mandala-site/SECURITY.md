# Guía de Seguridad - Mandala Ourense Website

## ⚠️ Importante: Protección de Credenciales

Este documento proporciona pautas esenciales para mantener seguro el sitio web de Mandala Ourense.

## Credenciales y Contraseñas

### Reglas fundamentales:

1. **NUNCA almacenes contraseñas reales en código fuente** (incluyendo archivos `.env.local.example`, `README.md`, o repositorios de Git)
2. **NUNCA compartas capturas de pantalla o logs con contraseñas visibles**
3. **NUNCA uses la misma contraseña que aparece en ejemplos o documentación**
4. **SIEMPRE usa el archivo `.env.local` para contraseñas y tokens** (este archivo está en `.gitignore` y no se sube a Git)

## Acceso al Panel de Administración

El acceso al panel de administración en `/admin` está protegido por una contraseña. Esta contraseña:

- Se configura en la variable `NEXT_PUBLIC_ADMIN_PASSWORD` en `.env.local`
- Debe ser fuerte (12+ caracteres con letras, números y símbolos)
- Debe cambiarse periódicamente
- No debe compartirse innecesariamente

## Variables de Entorno

### Variables Cliente vs. Servidor

- Variables con prefijo `NEXT_PUBLIC_` son accesibles desde el navegador del cliente
- Para secretos que no deben estar expuestos al cliente, usa variables sin este prefijo

### Configuración en Netlify

En producción:
1. Accede al panel de Netlify para tu sitio
2. Ve a **Site settings** > **Build & deploy** > **Environment**
3. Añade las variables de entorno necesarias
4. Nunca expongas estas variables en registros o capturas de pantalla

## APIs y Servicios Externos

### Credenciales de Google

Si utilizas servicios de Google (Calendar, Forms, Analytics):
- Crea una cuenta de Google específica para el proyecto en lugar de usar cuentas personales
- Usa permisos mínimos necesarios para cada servicio
- Rota periódicamente las claves de API y tokens de acceso

### Redes Sociales

- No almacenes tokens de acceso a redes sociales en el código
- Usa cuentas y apps de desarrollador dedicadas al proyecto
- Configura el scope mínimo necesario para cada integración

## Reporte de Incidentes de Seguridad

Si descubres una vulnerabilidad o exposición de credenciales:

1. Cambia inmediatamente todas las contraseñas afectadas
2. Revoca y regenera cualquier token de API expuesto
3. Analiza los logs para determinar si hubo acceso no autorizado
4. Documenta el incidente y las medidas tomadas

## Buenas Prácticas Generales

- Mantén todas las dependencias actualizadas regularmente
- Usa HTTPS en todos los entornos, incluyendo desarrollo
- Realiza auditorías de seguridad periódicas
- Mantén un registro de quién tiene acceso a credenciales y administración del sitio

---

*Este documento debe revisarse y actualizarse periódicamente para mantener la seguridad del sitio.* 