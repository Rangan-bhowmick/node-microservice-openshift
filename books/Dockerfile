FROM node:latest

WORKDIR /src

COPY ./books /src

RUN npm install --production

EXPOSE 3000

CMD [ "node", "server.js" ]
