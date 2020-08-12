FROM node:latest

WORKDIR /src

COPY . /src

RUN npm install --production

EXPOSE 3001

CMD [ "node", "server.js" ]