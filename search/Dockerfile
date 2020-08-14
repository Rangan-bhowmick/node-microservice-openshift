FROM node:latest

WORKDIR /src

COPY ./search /src

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]