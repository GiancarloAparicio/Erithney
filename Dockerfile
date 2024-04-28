FROM node:19-alpine

# Instalar Chromium y certificados
RUN apk add --no-cache \
    chromium \
    ca-certificates

# Configuración de Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV SCULLY_PUPPETEER_EXECUTABLE_PATH '/usr/bin/chromium-browser'

# Instalar Angular CLI de forma global
RUN npm install -g @angular/cli

# Crear un nuevo proyecto Angular llamado "Erithney" con enrutamiento y estilo SCSS
RUN ng new Erithney --routing --style=scss

# Establecer el directorio de trabajo
WORKDIR /Erithney

# Exponer el puerto 4200 para que Angular sirva la aplicación
EXPOSE 4200

# Ejecutar ng serve al iniciar el contenedor
CMD ["ng", "serve", "--host", "0.0.0.0"]
