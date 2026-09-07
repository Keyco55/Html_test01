# Portfolio v1 release checklist

Run this after Foundation integration produces the Next.js application and before any Cloudflare dashboard action.

## Static / performance

- [ ] `npm run build` completes and produces `out/` with static HTML.
- [ ] No server database query, Supabase dependency, self-hosted video, or large binary asset is introduced.
- [ ] Images are sized to their rendered dimensions and encoded as WebP or AVIF where appropriate.
- [ ] Video references are thumbnail-plus-external-link, not repeated embedded iframes.
- [ ] Only required local font weights load; no animation library is added without a measured need.

## SEO / sharing

- [ ] Root `<html>` is `lang="ko"` and Korean is the primary copy.
- [ ] Exactly one descriptive title and meta description exist per public route.
- [ ] `NEXT_PUBLIC_SITE_URL` contains the verified final HTTPS canonical origin, without a path.
- [ ] Canonical, OpenGraph URL/image, Twitter preview, `/robots.txt`, and `/sitemap.xml` resolve after production build.
- [ ] Social preview image is 1200 × 630 and has meaningful text alternative metadata.
- [ ] Person JSON-LD is emitted only with a verified public site URL and accurate identity details.

## Accessibility / responsive QA

- [ ] Review at 375, 768, 1024, and 1440 CSS-pixel widths; no horizontal overflow.
- [ ] Keyboard focus is visible, ordered, and never hidden behind sticky UI.
- [ ] Interactive targets are comfortably tappable (target 44 × 44 CSS pixels where the layout permits).
- [ ] Heading levels describe a single logical outline; images have meaningful `alt` or intentional empty alt.
- [ ] Text reflows at 200% zoom and badges/chips wrap without clipping.
- [ ] Text and controls meet contrast requirements in their normal, hover, focus, and disabled states.
- [ ] `prefers-reduced-motion: reduce` removes nonessential movement.

## Privacy / release boundary

- [ ] Public assets contain no email, phone, local machine path, account ID, token, cookie, internal URL, raw screenshot, or KBO-Hub configuration.
- [ ] The new portfolio Cloudflare account is the only account connected; no KBO-Hub or Supabase values are copied.
