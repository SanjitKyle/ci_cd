# 1. We start with a blank Linux computer that already has Node.js installed
FROM node:20-alpine

# 2. We create a folder inside the container called /app
WORKDIR /app

# 3. We create a fake backend file inside the container
RUN echo "console.log('🚀 My Backend is running inside an indestructible Docker container!');" > server.js

# 4. We tell the container exactly what to do when AWS turns it on
CMD ["node", "server.js"]
