# Use a base image with Node.js and TypeScript support
FROM node:14-alpine as builder

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code to container and build
COPY . .
RUN npm run build

# Use a multi-stage build to keep the container light
FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./

# Install production dependencies only
RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/index.js"]