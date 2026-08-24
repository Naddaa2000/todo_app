FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm config set fetch-retries 5 \
  && npm config set fetch-retry-mintimeout 20000 \
  && npm config set fetch-retry-maxtimeout 120000 \
  && npm ci

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
