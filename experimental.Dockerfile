FROM node:14.15.1-alpine3.10 as build-ui
WORKDIR /usr/src/app
COPY . .
RUN npm install @angular/cli && npm install && npm run build-prod

FROM node:14.15.1-alpine3.10 as serve-ui
WORKDIR /root/
COPY --from=build-ui /usr/src/app/dist ./app/dist
COPY package*.json ./
RUN npm install
COPY server.js .

CMD ["node", "server.js"]