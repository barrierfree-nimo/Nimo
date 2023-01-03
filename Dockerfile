FROM node:19.1.0

RUN mkdir -p /app

COPY ./node /app

WORKDIR /app/node

RUN apt-get update && npm install && sh ./config/scripts/deploy.sh

EXPOSE 3000 80

CMD ["npm", "start"]