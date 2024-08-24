FROM node:20.5.0-bullseye-slim AS base

RUN apt-get -y update
RUN apt-get -y install git

WORKDIR /app

#Install App
COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml
COPY webpack ./webpack
COPY src ./src

RUN npm install

#Dev
FROM base AS development

WORKDIR /app

ENTRYPOINT [ "npm", "start" ]

#Builder
FROM base AS builder

RUN npm run build

#Prod
FROM nginx AS production

COPY --from=builder /app/build /usr/share/nginx/html
