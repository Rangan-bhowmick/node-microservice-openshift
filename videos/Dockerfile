FROM node:latest

WORKDIR /src

COPY . /src

RUN npm install --production

EXPOSE 3002

CMD [ "node", "server.js" ]