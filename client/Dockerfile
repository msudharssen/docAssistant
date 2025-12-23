#Stage 1: Build Stage
FROM node:18-alpine AS builder
WORKDIR /appClient
COPY package.json /appClient/
COPY package-lock.json /appClient/
RUN npm install
COPY . /appClient/
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN ["npm", "run", "build"]


#Stage 2: Production Stage
FROM nginx:alpine AS production
COPY --from=builder /appClient/build /usr/share/nginx/html



