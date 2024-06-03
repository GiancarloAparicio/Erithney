# Use the official lightweight Node.js 14 image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all local files to the working directory
COPY . .

# Build the Vue.js app
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Command to run the Vue.js app
CMD ["npm", "run", "serve"]
