FROM node:latest

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN yarn install

RUN yarn build

CMD yarn db:migrate && yarn start
