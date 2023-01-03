FROM node:19.1.0

WORKDIR /app

COPY . ./

RUN apt-get update && npm install

EXPOSE 3000 80

CMD ["npm", "start"]