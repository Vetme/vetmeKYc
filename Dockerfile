FROM node:alpine3.16 AS build

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

RUN npm run build-pro

FROM  nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [ "nginx","-g","daemon off;" ]
