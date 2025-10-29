# Usa una imagen base de Node.js
FROM node:20-slim

# Crea el directorio de trabajo
WORKDIR /usr/src/app

# Copia e instala las dependencias
COPY package*.json ./
RUN npm install --omit=dev

# Copia el código fuente
COPY server.js .

# Comando de inicio: Render ejecutará este archivo
CMD [ "node", "server.js" ]