FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Dest /app 
COPY package.json ./

RUN npm install

COPY . .

RUN npm run test

# delete files
RUN rm -rf tests && rm -rf node_modules

# only production
RUN npm install --prod

# run command
CMD ["node", "app.js"]


