#Utilisation de l'image node comme base
FROM node:20 as builder

# Définition du répertoire de travail dans le conteneur
WORKDIR /usr/local/app

# Copie de tous fichiers".json" de configuration et du code source
COPY *.json  ./

# Installation des dépendances
RUN npm install

# Copie du code source vers le repertoire de travail
COPY . .

# Construction de l'application
RUN npm run build

FROM nginx:1.25
COPY --from=builder /usr/local/app/dist/angular-dashboard-ui/browser  /usr/share/nginx/html
EXPOSE 82

CMD ["nginx", "-g", "daemon off;"]


