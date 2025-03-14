# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app's source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM ubuntu

RUN apt-get update
RUN apt-get install nginx -y
COPY --from=builder /app/dist /var/www/html/
COPY nginx.conf /etc/nginx/sites-available/default
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

