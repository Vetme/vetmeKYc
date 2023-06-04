FROM node:17-appine

WORKDIR /appine

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ['npm', 'start']