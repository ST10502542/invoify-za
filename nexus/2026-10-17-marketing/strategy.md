# Strategy: invoify-za launch

Brief goal: "First 500 invoices generated in the 2 weeks after go-live, and the site indexed for 'free tax invoice generator South Africa'." Budget R0, organic only, drafts only, link placeholder `{SITE_URL}`. Facts follow `facts.md`.

## 1. Objective and KPIs

**Objective:** get South African freelancers, sole proprietors, small businesses and bookkeepers to generate a first invoice, and get the landing page indexed for the target phrase.

**Measurement plan: open, user decides before launch.** Vercel Hobby log retention is short and unverified, and Hobby is for non-commercial use, so log exports are not a reliable way to count invoices. Two options:

- **(a) Vercel Pro.** Allows commercial use and custom events. Add a `pdf_generated` custom event; the invoice count is then measured directly in Web Analytics.
- **(b) Stay on Hobby.** Web Analytics page views and referrers only. Visits to the builder are the proxy KPI, and the invoice count is unmeasured. The 500-invoice goal then cannot be confirmed, only inferred from visits.

The table shows both columns where they differ.

| KPI | Target (Day 0-14) | How measured |
|---|---|---|
| Invoices generated | 500 (brief) | (a) `pdf_generated` event count. (b) Not measured. |
| Visits to the builder | 2,500 (estimate) | Vercel Web Analytics page views, cookieless. This is the headline proxy under (b). |
| Visit to invoice rate | 20% (estimate) | (a) `pdf_generated` events divided by visits. (b) Not available. |
| Visits by source | Tracked, no target | Vercel Web Analytics referrers plus `utm_source` per channel on every link (linkedin, facebook, reddit, x, whatsapp). |
| Indexed pages | Landing page and `/guide` indexed by Day 7 (estimate) | Google Search Console URL inspection and Pages report; sitemap submitted Day 0. |
| Target phrase in queries | Appears by Day 14 (estimate) | Search Console Performance, query filter. Indexing is the realistic goal in 2 weeks; ranking is a bonus. |

## 2. Channel roles

- **LinkedIn (founder posts and one article):** credibility with freelancers, consultants and bookkeepers. Story-led: why we built it, what a tax invoice includes. Carries the SEO article as a LinkedIn article on Day 0 (no blog route exists).
- **Facebook small-business groups:** where owners already ask "which invoice template do you use?". Answer the question, mention the tool once, stay in the thread.
- **Reddit (r/southafrica, r/PersonalFinanceZA, r/smallbusiness):** honest feedback and search-minded readers. Reddit was not reachable for rule checks, so every post says "check the sub's current rules and flair before posting". Value-first; link goes in a comment only if rules allow.
- **X:** short post and one thread on what a SARS tax invoice includes. Cheap reach among SA tech and startup accounts.
- **WhatsApp share text:** copy for the founder to send to their own contacts and for users to forward, including bookkeepers sending it to clients.
- **SEO:** the on-site target is the invoice site's own `/guide` page. The article ships as a LinkedIn article on Day 0 and later as a page on the LD Industries main site when that exists. Wording on SARS stays at "includes the fields SARS lists for a tax invoice", with no implied SARS endorsement.

Which channel converts best is unknown until the UTM data comes in; the Day 7 review decides.

## 3. Launch calendar (Day 0 = go-live)

| Day | Channel | Piece |
|---|---|---|
| Pre-0 | Setup | Search Console verified, sitemap ready, UTM links built, measurement option (a) or (b) chosen by the user |
| 0 | LinkedIn | Launch post (founder story) and the SEO article as a LinkedIn article |
| 0 | X | Launch post |
| 0 | WhatsApp | Share text to founder's own contacts |
| 0 | SEO | Sitemap submitted; `/guide` inspected in Search Console |
| 1 | Facebook groups | Answer-first post in one or two groups that allow it |
| 2 | Reddit | One sub whose rules allow it, or replies in existing threads, after the rules check |
| 3 | X | Thread: what a SARS tax invoice includes |
| 4 | LinkedIn | Short post pointing to the LinkedIn article, one practical tip |
| 5 | Facebook groups | Second group, different wording |
| 7 | Review | Indexing check, per-channel visits, drop the weakest channel |
| 8 | LinkedIn | An early user question or feedback, answered publicly |
| 9 | WhatsApp | Forwardable text for bookkeepers to send to clients |
| 10 | Reddit | One reply-led contribution in a finance thread |
| 11 | X | Short tip post |
| 12 | Facebook groups | Follow-up answering recurring questions |
| 14 | LinkedIn | Wrap-up post: what we learned, the numbers we can measure under the chosen option, what comes next (Stack'n later, no prices) |

## 4. Engagement rules

**All channels**
- Reply within 4 hours between 07:00 and 20:00 SAST on Days 0-3, within 24 hours after.
- Reply as a named person from LD Industries. No fake accounts, no asking friends to upvote.
- Say "free, no account, no sign-up". No "free forever", no price claims.
- Never say "SARS-ready", "SARS-compliant" or "SARS-approved". Say the invoice includes the fields SARS lists for a tax invoice, and point people to SARS for their own situation.
- Mention the recipient's VAT number as optional: the user adds it. SARS asks for more detail on tax invoices over R5,000 (including the client's VAT number if they have one); check SARS's tax invoice page.

**LinkedIn:** reply to every comment on Day 0-2; ask a follow-up where it fits. No engagement pods.

**Facebook groups:** read the group rules first; ask an admin if self-promotion is unclear. If an admin says no, stop.

**Reddit:** check the sub's current rules and flair before posting. Disclose that we built it in the first line. Answer criticism with facts. Stop in a sub after one removal.

**X:** reply to quotes and questions; do not argue with plain dismissals.

**WhatsApp:** send only to contacts and groups you belong to. No bulk sending to people who have not agreed to it (POPIA and spam rules).

**"Is this a scam? What is the catch?"** Same answer on every channel:
1. "It is free, no account, no sign-up."
2. "Your saved invoices and address book stay in your browser, encrypted. Invoice details go to our server only to make the PDF and aren't stored in a database."
3. "It is open source (MIT), built from the Invoify project, and the code is public at github.com/ST10502542/invoify-za."
4. "LD Industries builds custom software and is working on a finance app, Stack'n. That is where we hope some people become customers later. The invoice tool is separate."

Do not say "never leaves your device", "nothing is stored on a server", "not retained" or "100% secure". The privacy page notes up to 8 recent PDFs can sit in server memory for a few minutes, and the README notes a script injected into the page is not covered.

**Open items:** SARS wording and the privacy wording go to Compliance. Firefox PDF generation is a known open upstream issue (README), so make no "works everywhere" claim. Never mention email sending: that feature was removed.
