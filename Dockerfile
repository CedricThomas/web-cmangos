FROM node:alpine AS builder

ENV NG_CLI_ANALYTICS=false

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/