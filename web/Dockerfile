FROM node:latest

WORKDIR /src

COPY . /src

RUN npm install --production

EXPOSE 3003

CMD [ "node", "server.js" ]