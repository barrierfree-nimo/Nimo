FROM node:19.1.0

WORKDIR /app/node

COPY ./node ./

RUN apt-get update && npm install

EXPOSE 3000 3000

CMD ["npm", "start"]