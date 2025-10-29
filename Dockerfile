FROM --platform=amd64 node:25.1-alpine AS build
# Using AMD64 here explicitly because Github runners are on AMD64 and the compile don't need to slow down because of Qemu virtualization
USER root
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . .
RUN npm install \
  && npm run build

FROM rtsp/lighttpd:1.4.76-rtsp3
RUN apk add curl --no-cache
HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://localhost/ || exit 1
COPY --from=build home/node/app/dist/k0r0pt-ai-image-prompt-gen/browser/ /var/www/html/
RUN ls -lart /var/www/html
USER lighttpd
EXPOSE 80
