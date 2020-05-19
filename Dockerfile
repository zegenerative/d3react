FROM node:10-alpine AS build

WORKDIR /*FILL IN*

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.15-alpine

RUN rm -rf /usr/share/nginx/html

WORKDIR /usr/share/nginx/html/

COPY --from=build /*FILL IN*/build . 

COPY --from=build /*FILL IN*/nginx/default.conf /etc/nginx/conf.d