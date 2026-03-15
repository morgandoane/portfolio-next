# Agent Guidelines for portfolio-next

Guidance for AI coding agents working on this project. **Read the relevant docs before coding.** Official documentation is the source of truth; training data may be outdated.

---

## Next.js

**Docs:** https://nextjs.org/docs (App Router) | **LLM index:** https://nextjs.org/docs/llms.txt

- **Always consult the docs** for routing, data fetching, Server/Client Components, caching, and API changes. Next.js evolves quickly.
- **App Router only.** This project uses the App Router (`app/` directory), not Pages Router.
- **Server Components by default.** Use `"use client"` only when needed (interactivity, hooks, browser APIs).
- **File conventions:** `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`.
- **Navigation:** Use `next/link` for links; `useRouter`, `usePathname`, `useSearchParams` for programmatic navigation.
- **Data:** Prefer async Server Components and Server Actions over client-side fetching when possible.
- **Turbopack:** Dev uses `next dev --turbopack`; keep this in mind for build behavior.

---

## Tailwind CSS v4

**Docs:** https://tailwindcss.com/docs

- **Tailwind v4.** Uses `@tailwindcss/postcss` and `@import "tailwindcss"` in CSS (no `tailwind.config.js`).
- **Theme tokens.** Design tokens live in `app/globals.css` via CSS variables (`:root`, `.dark`).
- **Custom theme:** `@theme inline` in globals.css maps variables (e.g. `--color-background`, `--radius-lg`).
- **Dark mode:** Uses `@custom-variant dark (&:is(.dark *))`; theme toggled via `next-themes` and `.dark` class on `html`.

---

## shadcn/ui

**Docs:** https://ui.shadcn.com/docs | **LLM index:** https://ui.shadcn.com/llms.txt

- **Not a traditional library.** Components are copied into the project. Edit them directly; don’t wrap or override from outside.
- **Style:** `radix-nova` (from `components.json`).
- **Paths:**
  - Components: `@/components` (UI: `@/components/ui`)
  - Utils: `@/lib/utils` - use `cn()` for class merging
  - Hooks: `@/hooks`
- **Icons:** `lucide-react` (configured in `components.json`).
- **Adding components:** Use `npx shadcn@latest add <component>`. It respects `components.json`.
- **Forms:** Supports React Hook Form and TanStack Form; see https://ui.shadcn.com/docs/forms.
- **Dark mode:** Uses `next-themes`; see https://ui.shadcn.com/docs/dark-mode/next.

---

## Project Conventions

- **Path alias:** `@/` → project root (e.g. `@/components`, `@/lib/utils`).
- **Class merging:** Use `cn()` from `@/lib/utils` (clsx + tailwind-merge).
- **Fonts:** `next/font/google` (Geist, Geist_Mono) with CSS variables.
- **Theme provider:** `ThemeProvider` from `@/components/theme-provider` wraps the app.

---

## Quick Reference

| Concern        | Where to look / use                          |
|----------------|----------------------------------------------|
| Next.js API    | https://nextjs.org/docs/app/api-reference    |
| Routing        | https://nextjs.org/docs/app/getting-started/layouts-and-pages |
| Server/Client  | https://nextjs.org/docs/app/getting-started/server-and-client-components |
| shadcn component | https://ui.shadcn.com/docs/components/radix/[component] |
| Tailwind v4    | https://tailwindcss.com/docs                 |
