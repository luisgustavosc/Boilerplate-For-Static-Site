FROM node:16 as dev

ARG APP_ENV
ENV APP_ENV ${APP_ENV}

WORKDIR /usr/src/app

#Install App
COPY package.json ./package.json
COPY webpack ./webpack
COPY src ./src

RUN npm install

RUN set -ex; \
  if [ "$APP_ENV" = "prod" ]; then \
    npm run build; \
  fi;

COPY ./docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

CMD /usr/local/bin/docker-entrypoint.sh $APP_ENV

FROM nginx as prod

COPY --from=dev /usr/src/app/build /usr/share/nginx/html