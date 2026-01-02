# Pastebin Lite

A minimal pastebin service supporting:
- Create paste
- Share URL
- TTL expiry
- Max view expiry
- Deterministic testing
- Redis persistence
- HTML + API view

## Run locally
npm install
npm run dev

## Env
REDIS_URL=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
TEST_MODE=0

## Deploy
Deploy to Vercel

## Persistence
Upstash Redis