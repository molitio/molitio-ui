#currently configured for dev environment
#TODO: configuration for public release
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
COPY security-headers.conf /etc/nginx/security-headers.conf

# dist folder only present in local environment as an artifact of ng build
#COPY /dist/molitio-ui /usr/dist/nginx/html

# used by ci with anticipated artifact path
COPY /molitio-ui /usr/dist/nginx/html
