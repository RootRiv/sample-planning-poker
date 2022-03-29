FROM node:16.14.2 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.20.1 as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
