
FROM node


WORKDIR /src


COPY . .


EXPOSE 9999


CMD node server.js