FROM ubuntu:18.04

# We use bubuntu to have all the tools usefull for debut and tests

# Isntall nodejs
RUN apt-get update &&  apt-get install -y curl wget vim && apt-get install -y nodejs

COPY node_modules/ /app/node_modules
COPY index.js /app
COPY README.md /app

EXPOSE 3000/tcp

WORKDIR /app
CMD ["node","index.js"]

