# Development image: runs `next dev` with hot reloading.
# docker-compose.yml mounts the source in, so edits show up without a rebuild.
FROM node:20-alpine

# Next.js's SWC binaries need glibc compatibility on Alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies first so this layer is cached until package files change.
# package-lock.json is gitignored, so fall back to npm install on a fresh clone.
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]
