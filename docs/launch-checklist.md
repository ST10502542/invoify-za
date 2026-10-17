# Launch checklist: SA tax invoice generator

Checked 2026-10-17 against `~/.claude/skills/software-factory/templates/site-launch-checklist.md`. Free public tool: no accounts, database, payments, uploads to storage, email or AI, so those sections are N/A.

## Owner items before going live
- [ ] Fill the placeholders on /privacy and /terms: `[[LEGAL NAME]]`, `[[REG NO]]`, `[[ADDRESS]]`, `[[CONTACT EMAIL]]`, `[[INFORMATION OFFICER]]`
- [ ] Pick the domain (subdomain of the LD Industries site, e.g. `invoice.<domain>`), then set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_STUDIO_URL` in Vercel
- [ ] Create the Vercel project from `ST10502542/invoify-za` (Hobby is enough) and check aliases after the first deploy
- [ ] Optional: link to Stack'n from the footer once it has a public URL

## Pages and SEO
- [x] Custom 404 page (upstream `app/not-found.tsx`)
- [x] CTA above the fold (the builder is the page)
- [x] Meta title and description per page (home, guide, privacy, terms)
- [x] Open Graph image (rebranded, shows our own host)
- [x] Favicon set (upstream favicon kept; swap for LDI icon later)
- [x] robots.txt and sitemap.xml (privacy and terms added)
- [x] Alt text on images
- [x] Mobile breakpoints (e2e mobile project passes)
- [x] Sticky mobile CTA (upstream MobileActionBar)
- [x] Loading and form error states (upstream; VAT number validation added)
- N/A Thank-you page: no form submission, the PDF download is the result
- [x] Analytics installed (Vercel Web Analytics, cookieless)
- [ ] Real contact address (owner item above)

## Legal
- [x] Terms of use page (from legal-templates terms-of-use). N/A for the "I agree" box: no signup
- [x] Privacy policy (from legal-templates privacy-policy-gdpr, adapted to POPIA)
- N/A Cookie banner: only the strictly necessary NEXT_LOCALE cookie, analytics is cookieless (stated in the privacy policy)
- N/A Tracking consent: no session replay, no tracking cookies
- [x] Fonts self-hosted (next/font and embedded PDF fonts, no Google CDN from the visitor)
- N/A Age gate, marketing email, subscriptions, DMCA agent: none of these exist
- [x] No accessibility overlay widget

## Security
- N/A Data and access, auth and sessions, payments and webhooks, AI: no accounts, database, payments or AI
- [x] Input validated at the trust boundary: Zod `InvoiceSchema` on every API route, VAT number format checked
- [x] SSRF: logo must be a data URL (upstream), signature font is an allowlisted enum
- [x] XSS: React escapes all user text; no `dangerouslySetInnerHTML` on user data
- [x] Rate limits on generate, export and warm routes (60/60/30 per minute per IP). shortcut: in-memory per instance; move to Upstash if Vercel usage shows abuse
- [x] Email-sending route removed (would have been an open mail relay)
- [x] No secrets in the repo; no env vars needed beyond the two public URLs
- [x] Production errors generic (upstream route handlers)
- [x] Security headers: HSTS, nosniff, referrer policy, frame-ancestors 'self' and X-Frame-Options SAMEORIGIN. Full CSP not set: Next inline scripts would need nonces
- [x] Timeouts: route maxDuration 60s generate, 30s warm

## Supply chain
- [x] Next.js upgraded to 15.5.28 (critical advisory cleared)
- [ ] Accepted for now, with reason:
  - Puppeteer chain (proxy-agent, basic-ftp, extract-zip, high): only runs when downloading a browser binary, never on user input. Fix is puppeteer-core 25 (major), test it with @sparticuz/chromium before upgrading.
  - Tailwind 3 chain (braces, micromatch, chokidar, high/moderate): build-time only. Fix is Tailwind 4 (major migration).
  - sharp/libvips (high): sharp is never called on user images; logos are rendered by Chromium.
- [x] Lockfile committed
- [x] Reviewed: ponytail-review on the VAT change; 60 e2e tests pass (desktop + mobile), including a VAT total test
