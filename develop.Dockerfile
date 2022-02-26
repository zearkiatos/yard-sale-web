FROM node:15-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

WORKDIR /app

COPY . ./

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npx browserslist@latest --update-db

EXPOSE 8080

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]