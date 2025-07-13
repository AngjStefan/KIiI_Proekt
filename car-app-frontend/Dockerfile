# Stage 1: Build the frontend with correct backend URL
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm install && npm run build

# Stage 2: Serve with lightweight NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Replace default NGINX config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

