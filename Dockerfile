FROM node:16 as dependencies
WORKDIR /app
COPY package.json package-lock.json ./

RUN  npm install --legacy-peer-deps
# # install dependencies
# FROM node:16 as builder
# WORKDIR /build
COPY . .
RUN npm rebuild node-sass
# COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build
# build the project
FROM node:16 as runner
WORKDIR /my-project
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/public ./public
COPY --from=dependencies /app/.next ./.next
COPY --from=dependencies /app/package.json ./package.json

EXPOSE 3000
CMD ["npm","run", "start"]