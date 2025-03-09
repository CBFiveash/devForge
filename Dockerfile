# Stage 1: Build the frontend
FROM node:20 AS build-frontend
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app/ ./
RUN npm run build

# Stage 2: Build the backend
FROM node:20 AS build-backend
WORKDIR /server
COPY server/package*.json ./
RUN npm install
COPY server/ ./

# Stage 3: Final production-ready image
FROM node:20-alpine
WORKDIR /app

# Copy the frontend build from the first stage
COPY --from=build-frontend /app/dist ./frontend

# Copy the backend files from the second stage
COPY --from=build-backend /server ./server

# Install backend dependencies (production-only)
WORKDIR /server
RUN npm install --production

# Expose ports for both frontend and backend
EXPOSE 5000 
EXPOSE 8080 

# Start both frontend and backend with a script
CMD ["sh", "-c", "npm run dev & npx vite preview"]
