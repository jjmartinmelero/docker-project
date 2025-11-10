FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Dest /app 
COPY app.js package.json ./


RUN npm install

CMD ["node", "app.js"]


