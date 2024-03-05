FROM node:4

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "app.js"]
