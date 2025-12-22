# Backend Dockerfile for Google Cloud Run
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose port (Cloud Run uses PORT env variable)
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
