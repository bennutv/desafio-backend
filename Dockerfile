FROM node:alpine

RUN apk update \
    && apk add tzdata \
    && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
    && echo "America/Sao_Paulo" >  /etc/timezone \
    && apk del tzdata

WORKDIR /app

COPY src/ ./src

WORKDIR /app/src

RUN npm i

EXPOSE 3030

CMD ["npm", "start"]
