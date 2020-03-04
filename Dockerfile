FROM node:12.16

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY index.js /app

RUN npm install

EXPOSE 3000/tcp


CMD ["node","index.js"]

