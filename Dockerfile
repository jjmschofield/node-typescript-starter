FROM node:10.16.0-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 54535

CMD [ "npm", "start" ]
