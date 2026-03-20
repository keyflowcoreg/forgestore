# ForgeStore — AI App Marketplace

## What
Marketplace where developers sell MCP servers, AI rules, prompts, skills, and templates. 10% platform fee, 90% to creators.

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- framer-motion
- pnpm

## Architecture
- `app/layout.tsx` — Root layout, Inter font, dark theme
- `app/page.tsx` — Homepage (client component): hero, categories, featured products, how-it-works, newsletter
- `app/[category]/page.tsx` — Category listing page (client component, dynamic route)
- `lib/products.ts` — Mock product data, types, helpers

## Categories
1. MCP Servers
2. Coding Rules
3. Prompt Packs
4. Agent Skills
5. Templates
6. Security

## Conventions
- Dark theme only (zinc-950 background)
- Purple accent (#a855f7 / purple-400/500/600)
- `'use client'` only where needed (pages with animations/state)
- Products use mock data — no backend yet
- No payment integration yet (MVP phase)

## Commands
```bash
pnpm dev      # development
pnpm build    # production build
pnpm start    # serve production build
```
