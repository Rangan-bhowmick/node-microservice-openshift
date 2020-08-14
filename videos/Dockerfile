FROM node:latest

WORKDIR /src

COPY ./videos /src

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]