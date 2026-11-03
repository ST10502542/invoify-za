# NEXUS-Micro close-out: invoify-za launch campaign

Date: 2026-10-17. Scope: this kit only. Nothing has been posted, sent or deployed.

## 1. Situation and result

This kit is the launch campaign for LD Industries' free South African tax invoice generator, a public fork of Invoify (MIT). It holds the strategy, funnel, messaging and compliance notes, five channel files and a 14-day calendar, all organic at R0. The final gate (Reality Checker, Gate 3b, closed out in 3c) says it is ready to launch once the product blockers below are fixed. The copy is disciplined, but the site still makes claims its own privacy page contradicts, and the legal pages still hold placeholders.

## 2. What's in the kit

- `brief.md`: goal, audience, channels, constraints, done-when.
- `facts.md`: 12 settled facts every file follows (privacy, SARS and "free" wording; email removed).
- `gates.md`: review log for Gates 1 to 3c, with every fix.
- `strategy.md`: KPIs, channel roles, 14-day calendar, engagement rules, the standard "what's the catch" answer.
- `funnel.md`: landing page changes, share loop, UTM convention, tracking events.
- `messaging.md`: positioning line, three pillars, voice rules, avoid list.
- `compliance.md`: SARS claim check, POPIA, platform rules (unverified), risk list.
- `content/linkedin.md`: Day 0, 4 and 8 posts, the SEO article, Day 14 wrap-up.
- `content/x.md`: launch post, SARS thread, tip posts.
- `content/facebook-groups.md`: answer-first posts for Days 1, 5 and 12, plus a reply bank.
- `content/reddit.md`: drafts for three subs, plus a reply bank.
- `content/whatsapp.md`: share text for Day 0, forwardable text for Day 9.

## 3. Launch-day checklist

**Product blockers (fix before any post goes out)**
- [ ] `README.md:5` and `:54`: "nothing about your customers stored on a server" and "not retained afterwards" contradict `app/[locale]/privacy/page.tsx:47-49`.
- [ ] `README.md:35`, `i18n/locales/en.json:244` and `:259`: email delivery is advertised, but no route exists. Remove the claim.
- [ ] `en.json:270`: the FAQ line "Nothing is stored on a server" is false. Highest risk, because every post links to the page it's on.
- [ ] `en.json:223`: the meta description says "SARS-ready", which is banned, and it's the search snippet.
- [ ] `en.json:229`: "as SARS requires, with both parties' VAT numbers" is banned, and the client's VAT number is optional.
- [ ] Placeholders `[[LEGAL NAME]]`, `[[REG NO]]`, `[[ADDRESS]]`, `[[CONTACT EMAIL]]`, `[[INFORMATION OFFICER]]`: `privacy/page.tsx:13, 24-25, 92` and `terms/page.tsx:16-18, 95`.
- [ ] Set the domain and `NEXT_PUBLIC_SITE_URL` (`docs/launch-checklist.md:7`).
- [ ] Test PDF generation in Firefox (`README.md:83`).
- [ ] Spot-check all 13 templates for the SARS fields before "includes the fields SARS lists" goes public.
- [ ] Align landing FAQ 1 ("Is Invoify really free?") with the LD Industries branding (`en.json`).

**User decisions (before launch)**
- [ ] Vercel plan. Pro allows commercial use and makes the invoice count measurable. Hobby gives visits only, and its terms are non-commercial.
- [ ] Who posts: fill in the name and role for Reddit reply 5 and the founder posts.
- [ ] Platform rules: check each Reddit sub, Facebook group and LinkedIn self-promotion rule by hand. None were verified.
- [ ] Accept the in-memory rate limiter risk during a launch spike, or fix it first.

**Day 0**
- [ ] Replace `{SITE_URL}` with the live domain and fill the `[name]`, `[role]` and article-link placeholders.
- [ ] Post the LinkedIn founder post and the SEO article (`content/linkedin.md`).
- [ ] Post the X launch post (`content/x.md`).
- [ ] Send the WhatsApp share text to your own contacts (`content/whatsapp.md`).

## 4. Still unverified

- The SARS field list and the R5,000 and 21-day figures come from one SARS page. No attorney or accountant has reviewed the wording.
- Reddit, Facebook group and LinkedIn promotion rules were never fetched.
- 500 invoices in 14 days is the brief's target, not a forecast. The visit and conversion numbers are labelled estimates.
- Hobby log retention and commercial terms were not confirmed in the Vercel dashboard.
