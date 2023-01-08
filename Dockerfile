FROM node:19.1.0

WORKDIR /app/node

COPY ./node ./

RUN apt-get update \
    apt-get install -yq tzdata && \
    ln -fs /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

EXPOSE 3000 3000

CMD ["npm", "start"]