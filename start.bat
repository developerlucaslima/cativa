@echo off

REM Instalar e rodar o front-end
cd cativa-client
npm install
start cmd /k "npm run dev"

REM Instalar e rodar o back-end
cd ..
cd cativa-server
npm install
start cmd /k "npm run dev"

pause