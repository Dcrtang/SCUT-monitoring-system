FROM node:14-alpine AS build

COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*
COPY ./nginx.conf /etc/nginx/conf.d/
COPY --from=build /app/dist /app
