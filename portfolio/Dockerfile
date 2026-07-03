# 1. Escolhe a imagem base do Node
FROM node:20-alpine

# 2. Define o diretório de trabalho dentro do container
WORKDIR /app

# 3. Copia package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# 4. Instala as dependências
RUN npm install

# 5. Copia todo o resto do código
COPY . .

# 6. Expõe a porta que o Vite usa
EXPOSE 5173

# 7. Comando para rodar o Vite
CMD ["npm", "run", "dev", "--", "--host"]