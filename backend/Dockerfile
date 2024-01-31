FROM node:20.10.0

WORKDIR /test/docker-practise

COPY package.json .
COPY index.js .
COPY routers/ ./routers

RUN npm install
RUN npm install -g nodemon

CMD ["nodemon", "--legacy-watch", "index.js"]