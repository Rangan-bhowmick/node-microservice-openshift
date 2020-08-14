FROM node:latest

WORKDIR /src

COPY ./videos /src

RUN npm install

EXPOSE 3003

CMD [ "node", "server.js" ]