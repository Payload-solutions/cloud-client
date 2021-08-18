# FROM node:latest

# RUN npm install webpack -g

# WORKDIR /tmp
# COPY package.json /tmp/
# RUN npm config set registry http://registry.npmjs.org/ && npm install

# WORKDIR /usr/src/app
# COPY . /usr/src/app/
# RUN cp -a /tmp/node_modules /usr/src/app/

# RUN webpack

# ENV NODE_ENV=production
# ENV PORT=8080

# CMD [ "/usr/local/bin/node", "./index.js" ]

# EXPOSE 8080

# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
