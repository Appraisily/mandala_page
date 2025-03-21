@echo off
echo Running Mandala Netlify Comprehensive Test...
cd %~dp0
node comprehensive-netlify-test.js
echo Test completed.
pause 