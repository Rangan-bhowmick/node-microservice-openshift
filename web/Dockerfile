FROM node:latest

WORKDIR /src

COPY ./books /src

RUN npm install

EXPOSE 3003

CMD [ "node", "server.js" ]