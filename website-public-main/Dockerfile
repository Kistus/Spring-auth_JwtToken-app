FROM node:20.4.0-alpine AS build
WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20.4.0-alpine
WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.js ./next.config.js
COPY --from=build /app/pages ./pages
COPY --from=build /app/styles ./styles
COPY --from=build /app/components ./components

EXPOSE 3000
CMD ["npx", "next", "start"]
