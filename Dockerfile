FROM node

WORKDIR /test

COPY . .

EXPOSE 8080:8081

CMD ["node", "script.js"]