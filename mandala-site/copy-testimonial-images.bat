@echo off
echo Copying testimonial images...

set SOURCE_DIR=mandala-new\mandala-site\public\images
set TARGET_DIR=mandala-new\mandala-site\public\images\testimonials

if not exist %TARGET_DIR% mkdir %TARGET_DIR%

copy "%SOURCE_DIR%\woman1.jpg" "%TARGET_DIR%\testimonial1.jpg"
copy "%SOURCE_DIR%\man1.jpg" "%TARGET_DIR%\testimonial2.jpg"
copy "%SOURCE_DIR%\woman2.jpg" "%TARGET_DIR%\testimonial3.jpg"

echo Testimonial images copied successfully.
echo.
echo You can now run the site with updated images.
pause 