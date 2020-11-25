#currently configured for dev environment
#TODO: configuration for public release
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
COPY security-headers.conf /etc/nginx/security-headers.conf
COPY /dist/molitio-ui /usr/dist/nginx/html
