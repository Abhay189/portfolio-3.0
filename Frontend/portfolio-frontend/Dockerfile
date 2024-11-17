# Frontend Dockerfile
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the development server's port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host","0.0.0.0"]