FROM node:lts-alpine
WORKDIR /appClient
COPY package.json /appClient/
COPY package-lock.json /appClient/
RUN npm install
COPY . /appClient/
EXPOSE 3000
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
CMD ["npm", "start"]


