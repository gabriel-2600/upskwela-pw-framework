FROM mcr.microsoft.com/playwright:v1.57.0-noble

WORKDIR /upskwela-pw

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test"]
