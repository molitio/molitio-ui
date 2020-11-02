#currently configured for dev environment
#TODO: configuration for public release
FROM nginx:1.17.1-alpine
COPY nginx.conf etc/nginx/nginx.conf
COPY /dist/molitio-ng /usr/dist/nginx/html
