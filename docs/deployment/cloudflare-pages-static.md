# Cloudflare Pages static deployment runbook

## Decision

Portfolio v1 is static, has no database or server query, and should use a Next.js static export on Cloudflare Pages. This is the smallest free-tier-friendly deployment shape. Do not add Supabase, D1, R2, Workers bindings, or KBO-Hub configuration for v1.

Cloudflare's current guidance distinguishes this path from full-stack Next.js: static exports may be deployed to Pages; Workers with vinext are the recommended path only when server-side Next.js features are actually required.

## Required application contract

- Set `output: "export"` in the project-owned Next configuration once the Foundation track creates it.
- Keep all portfolio data as static TypeScript modules and use statically generated routes.
- Do not use Next image optimization requiring a server. Store only optimized WebP/AVIF images when photos are needed.
- Set `NEXT_PUBLIC_SITE_URL` only in the new portfolio Cloudflare project after its final custom domain is verified. Local development may leave it unset; canonical, absolute OpenGraph URLs, sitemap entries, and Person JSON-LD then intentionally stay absent.
- Retain `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/icon.svg`, and `public/og/default.svg` from this track.

## Cloudflare dashboard setup (later, human-operated)

1. Create/connect a **new portfolio-only** Cloudflare account and Git repository connection. Do not reuse a KBO-Hub account, project, token, variable, or secret.
2. Create a Pages project from the repository.
3. Select **Next.js (Static HTML Export)**.
4. Configure build command: `npx next build`; output directory: `out`; production branch: `main`.
5. Add only the verified production `NEXT_PUBLIC_SITE_URL` build variable. It is public metadata, not a secret.
6. Check the preview deployment before promoting production, then bind the custom domain and ensure it redirects one canonical host consistently.

## Static pre-deploy checks

```sh
npm run typecheck
npm run build
test -f out/index.html
test -f out/robots.txt
test -f out/sitemap.xml
```

Confirm generated markup includes one title, a Korean `lang="ko"` root, description, favicon, and (only after `NEXT_PUBLIC_SITE_URL` is set) canonical/OpenGraph absolute URLs.

## Future boundary

If personalization, write APIs, protected data, or server rendering become necessary, evaluate the current Cloudflare Workers + vinext compatibility check before changing deployment architecture. Consider D1 only for a genuine relational-data requirement; it is out of scope for v1.

## Sources

- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
