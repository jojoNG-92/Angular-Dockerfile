FROM node:14 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build 

FROM nginx:latest

#COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html
COPY --from=build /usr/local/app/dist/angular-dashboard-ui /usr/share/nginx/html

#COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
