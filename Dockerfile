FROM node:latest
WORKDIR /usr/src/
COPY package*.json ./
COPY ./app/ ./app/
RUN npm install
RUN npm run build
