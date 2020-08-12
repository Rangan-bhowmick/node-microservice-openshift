FROM node:latest

WORKDIR /work/

COPY ./package.json /work/package.json

RUN npm install --production

copy ./src/ /work/

EXPOSE 3000

CMD node .