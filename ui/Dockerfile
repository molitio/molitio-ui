#currently configured for dev environment
#TODO: configuration for public release
FROM node:12 AS builder
WORKDIR /src/usr/dist
COPY package*.json ./
RUN npm install
EXPOSE 4200
CMD [ "npm", "start" ]
COPY . .