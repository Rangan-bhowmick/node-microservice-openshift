FROM node:latest

WORKDIR /work/

COPY ./books/package.json /work/package.json

RUN npm install

Copy ./books/ /work/

EXPOSE 3000

CMD [ "node", "server.js" ]
