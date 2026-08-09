# Dgeneris Bid & Tender Solutions

Specialist UK bid writing and tender support for care and cleaning providers — marketing site, client portal, admin CMS, and Stripe checkout.

## Run locally

Prerequisites: Node.js 24+, pnpm, and a Supabase project.

```bash
cp .env.example .env
```

Set `DATABASE_URL` in `.env` to your Supabase Postgres URI  
(Supabase → **Project Settings → Database → Connection string → URI**).

```bash
pnpm install
pnpm run db:push
```

Then in two terminals:

```bash
pnpm run dev:api
pnpm run dev:web
```

- Website: http://localhost:5173  
- API: http://localhost:8080/api/healthz  

### Other commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas
- `pnpm run db:push` — push Drizzle schema to Supabase

### Environment

| Variable | Used by |
|----------|---------|
| `DATABASE_URL` | Supabase Postgres connection string |
| `SUPABASE_URL` | Project URL (`https://jccrgzqjutliwpwnmfvw.supabase.co`) |
| `PORT` | API (default `8080`) |
| `WEB_PORT` | Website (default `5173`) |
| `BASE_PATH` | Website (default `/`) |
| `API_PROXY_TARGET` | Vite `/api` proxy target (default `http://localhost:8080`) |
| `STRIPE_SECRET_KEY` | Checkout (optional in dev) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhooks (optional in dev) |
| `NEXT_PUBLIC_SITE_URL` | Checkout success/cancel redirects |

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Website: Vite, React 19, Tailwind CSS 4, Wouter, TanStack Query
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod, drizzle-zod
- API codegen: Orval (from OpenAPI spec)
- Payments: Stripe

## Where things live

| Path | Purpose |
|------|---------|
| `artifacts/dgeneris-website` | Public website, portal, admin UI |
| `artifacts/api-server` | Express API |
| `artifacts/mockup-sandbox` | Optional UI mockup preview |
| `lib/db` | Drizzle schema and DB client |
| `lib/api-spec` | OpenAPI source of truth |
| `lib/api-zod` | Generated Zod schemas |
| `lib/api-client-react` | Generated React Query hooks |
| `attached_assets` | Shared static assets |
