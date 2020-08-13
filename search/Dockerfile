FROM node:latest

WORKDIR /src

COPY ./books /src

RUN npm install

EXPOSE 3001

CMD [ "node", "server.js" ]