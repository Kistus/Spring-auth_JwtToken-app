FROM node:20.4.0-alpine AS stage1
WORKDIR /website-public
COPY package.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM node:20.4.0-alpine AS final
WORKDIR /website-public
COPY --from=stage1 /website-public/node_modules ./node_modules
COPY . .

EXPOSE 3000
CMD ["npm", "start"]