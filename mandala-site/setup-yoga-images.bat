@echo off
echo Configurando imágenes para la sección de yoga...

REM Crear directorios si no existen
mkdir mandala-new\mandala-site\public\images\yoga 2>nul
mkdir mandala-new\mandala-site\public\images\icons 2>nul

REM Copiar las imágenes de yoga proporcionadas a las carpetas correspondientes
echo Copiando imágenes de yoga...
copy "appraisily.com_image_for_website_to_ilustrate_section_Hatha_Yog_aedcd08c-139f-452c-9caa-39ee6dd4e961.png" "mandala-new\mandala-site\public\images\yoga\hatha-yoga.png"
copy "appraisily.com_image_for_website_to_ilustrate_section_Daoyin_Yo_52ef161b-ef9f-4af1-a6aa-8e358ba11651.png" "mandala-new\mandala-site\public\images\yoga\daoyin-yoga.png"
copy "appraisily.com_image_for_website_to_ilustrate_section_Yoga_Nidr_d609463d-e60e-496d-a011-1ed9b9b4fd7f.png" "mandala-new\mandala-site\public\images\yoga\yoga-nidra.png"

echo Verificando que los archivos SVG de iconos existan...
if not exist "mandala-new\mandala-site\public\images\icons\hatha-icon.svg" (
  echo Los archivos SVG no existen. Asegúrate de crearlos manualmente.
)

echo.
echo Configuración de imágenes completada.
echo Asegúrate de verificar la estructura final en:
echo   - mandala-new\mandala-site\public\images\yoga\
echo   - mandala-new\mandala-site\public\images\icons\
echo.
echo Presiona cualquier tecla para salir...
pause > nul 