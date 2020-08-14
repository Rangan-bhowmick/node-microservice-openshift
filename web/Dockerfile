FROM node:latest

WORKDIR /src

COPY ./web /src

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]