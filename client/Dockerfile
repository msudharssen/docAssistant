FROM node:lts-alpine
WORKDIR /appClient
COPY package.json /appClient/
COPY package-lock.json /appClient/
RUN npm install
COPY . /appClient/
EXPOSE 3000
CMD ["npm", "run", "dev"]


