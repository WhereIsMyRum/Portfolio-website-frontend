FROM node:16.20
WORKDIR /usr/src/
COPY package*.json ./
COPY ./app/ ./app/
RUN npm install
RUN npm run build
