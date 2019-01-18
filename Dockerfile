# FROM johnpapa/angular-cli as angular-built
# Using the above image allows us toskip the angular-cli install
FROM node:8.9-alpine as angular-built
WORKDIR /usr/src/app
RUN npm i -g @angular/cli
RUN npm i -g http-server
COPY . .
RUN npm install --silent
EXPOSE 8080
CMD [ "http-server", "./dist/boilerplate" ]
