
### STAGE 1: Build ###
FROM node:15.11.0-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
COPY . .
RUN npm run start