# ---- Build stage ----
FROM node:20-alpine AS build

WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm install

# Copy source and build the static site
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:1.27-alpine AS serve

# Custom nginx config for a single-page app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
