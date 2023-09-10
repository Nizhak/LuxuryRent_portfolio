FROM node:lts

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN yarn install

RUN yarn run build

CMD [ "yarn", "run", "start" ]