## Gate 1: strategy (Evidence Collector)

Date 2026-10-17. Scope: strategy.md, funnel.md, messaging.md, compliance.md against brief.md and PLAN.md item 2. Method: read all four files and spot-checked claims against README.md, i18n/locales/en.json, app/ and docs/launch-checklist.md. Not tested: nothing was run or deployed; SARS pages and subreddit rules were not re-fetched.

**Overall: NEEDS WORK.** All four files have the shape PLAN.md item 2 asks for, but they contradict each other on privacy and "free" wording, and two product claims they lean on are false. Em dashes: 0 in all four files (grep count). No hype words outside labelled "Before" examples.

### Deliverable check (PLAN item 2)
- strategy.md: KPIs (section 1), channel roles (section 2), 2-week calendar (section 3). Delivered.
- funnel.md: landing tweaks (section 2), share loop (section 3), tracking events (section 4). Delivered.
- messaging.md: positioning line, 3 pillars, voice do/don't. Delivered.
- compliance.md: SARS claim check (7-row table), POPIA, platform rules. Delivered, but platform rules are self-declared unverified.

### Verdict per file

**strategy.md: NEEDS WORK**
Verified: "README says injected script not covered" = README.md:52; Firefox open issue = README.md:83; UTM plan matches funnel.md section 5.
Problems:
1. KPI "Invoices generated" (table row 1) relies on a custom event that funnel.md section 4 says needs Vercel Pro. docs/launch-checklist.md:8 says Hobby is the plan. The fallback, "PDF-generation route request count in Vercel logs", is a weak proxy: Hobby log retention is short (my recollection, verify in the dashboard). On Hobby the 500-invoice goal is not reliably measurable.
2. Invented numbers: 2,000 visits and 20% visit-to-invoice rate sit in the KPI table as targets. Only the note under the table calls them "a planning estimate". Label them in the table.
3. "Lowest volume, best conversion" (WhatsApp) and "Main driver of Day 0 traffic" (LinkedIn) are unevidenced.
4. The scam answer ("No catch", "stay in your browser, encrypted", "not kept afterwards") is what compliance.md sections 3 and 5 forbid. privacy/page.tsx:44-49 says up to 8 PDFs sit in server memory for minutes.
5. Calendar puts the blog article on Day 0 and Day 4, but no blog route exists (`app/[locale]` has only guide, privacy, terms, [...rest]; sitemap.ts has no article entry).
6. Reddit and Facebook rules rest on compliance.md section 4, which is unverified.

**funnel.md: NEEDS WORK**
Verified: `<Analytics />` at app/[locale]/layout.tsx:160; LandingContent at app/components/layout/LandingContent.tsx; FinalPdf.tsx, InvoiceActions.tsx, BaseFooter.tsx exist; `generatePdf` and `downloadPdf` at contexts/InvoiceContext.tsx:65-67; routes export/generate/warm exist; 13 templates (README.md:32); privacy page names Vercel Web Analytics (privacy/page.tsx:68).
Problems:
1. Proposed value strip (section 2, item 1): "Your invoice details stay in your browser until you download." False. Data goes to the server at generate time (README.md:54; privacy/page.tsx:44-49), before download. The file says to reuse README wording "exactly" and then does not.
2. It names `pdf_downloaded` as the 500-invoice measure while admitting custom events need Pro, and never states the plan, though the checklist says Hobby. Needs an explicit decision: upgrade, or measure page views only and drop the event KPI.
3. Items 4 and 5 and all events are code changes outside this run; mark them owner-gated.
4. "No sentence saying free above the fold" is not checked against a rendered page; no screenshot or DOM check is cited.

**messaging.md: NEEDS WORK**
Verified: en.json:229 intro and en.json:266 "no paid tier" quoted correctly; 13 templates and 18 languages (README.md:32, 40, 58); PDF translation fallback README.md:60; Firefox note.
Problems:
1. Pillar 3 allowed wording says data is sent "to make the PDF or send the email, and is not retained". No email feature exists in code (grep for mail in app/api, app/components, contexts finds only a comment at contexts/InvoiceContext.tsx:525; docs/launch-checklist.md:3 lists email as N/A). "Not retained" also lacks the memory-cache caveat compliance.md requires.
2. Pillar 1 "both VAT numbers" overclaims: compliance.md row 3 says the recipient VAT number is optional and not enforced.
3. Pillar 2 allows "free forever" as the owner's commitment; compliance.md section 5 says drop "forever" unless committed in writing. Unresolved conflict.
4. "As SARS requires" (en.json:229): messaging says flag it, compliance calls it acceptable.
5. "Elevator (25 words)" is 28 words.
6. Voice do-rule 1 ("say there is no catch once") collides with compliance.md section 5.

**compliance.md: NEEDS WORK (closest to pass)**
Verified: TemplateFrame.tsx:38-41 (label becomes "Tax Invoice #" only when sender.vatNumber is set); placeholders [[ADDRESS]], [[CONTACT EMAIL]], [[INFORMATION OFFICER]] at privacy/page.tsx:24-25; 8-PDF cache privacy/page.tsx:47-49; en.json:223 "SARS-ready" and :266 "no paid tier" exact; default rate 15 at contexts/InvoiceContext.tsx:312. It correctly flags the README versus privacy-page mismatch and its own unverified sources.
Problems:
1. Section 3 says "confirm whether [email] exists". The code answers it: it does not. README.md:35 and en.json features.3 and how.3 advertise it anyway. Resolve, do not leave open.
2. It checked only en.json:223, :229, :266. It misses FAQ 2 "Nothing is stored on a server" (en.json:270), which conflicts with the server render and memory cache.
3. Platform rules unverified (Reddit blocked). The content gate must treat them as "read each sidebar by hand".
4. SARS thresholds come from a page "fetched today" with no quote. Keep them out of posts (it already advises that).
5. Does not address Vercel Hobby commercial-use terms.
6. No single approved-wording list for the other three files to cite, which is why they drifted.

### Cross-file contradictions
1. Privacy wording: strategy scam answer and messaging pillar 3 ("not retained / not kept") versus compliance section 3 (memory-cache caveat). Funnel strip adds a third, wrong version.
2. "Free forever" (messaging) versus compliance section 5.
3. "No catch" (strategy, messaging) versus compliance section 5.
4. Custom-event KPI (strategy) versus Hobby plan (funnel, checklist).
5. Email referenced (messaging) versus no email feature (code).
6. "As SARS requires": messaging flags, compliance accepts.

### Required fixes
- strategy.md: label 2,000 and 20% as estimates in the table; state the KPI is unmeasurable on Hobby or record the plan decision; replace the scam answer with compliance-approved wording; drop "best conversion" and "main driver"; make the Day 0 blog item conditional on a blog route; mark Reddit and Facebook rules as read-by-hand.
- funnel.md: rewrite the value strip, for example "Free South African tax invoice generator. No sign-up. Saved drafts stay in your browser." with a privacy link; state the plan assumption and an event fallback; mark code changes owner-gated; add a rendered-page check or soften the above-the-fold claim.
- messaging.md: delete "or send the email"; add the 8-PDF memory caveat; change "both VAT numbers" to "your VAT number and your client's, if they are VAT-registered"; settle "forever" with compliance; fix the elevator word count; remove or reframe "no catch".
- compliance.md: close the email question (does not exist); add en.json:270 and the email claims (README.md:35, en.json features.3 and how.3) to the risk list; add one approved-wording list the others cite; add a Hobby commercial-use check; align the "as SARS requires" verdict with messaging.

### Launch blockers for the product itself (outside marketing)
1. privacy and terms pages still contain [[LEGAL NAME]], [[REG NO]], [[ADDRESS]], [[CONTACT EMAIL]], [[INFORMATION OFFICER]] (privacy/page.tsx:13,24-25,92; terms/page.tsx:16-18,95); unticked at docs/launch-checklist.md:6.
2. Email delivery is advertised but not built (README.md:35; en.json landing features.3 and how.3). Remove the claim or build it.
3. en.json:223 meta description says "SARS-ready"; en.json:229 "as SARS requires" is pending review.
4. en.json:270 "Nothing is stored on a server" is inaccurate against privacy/page.tsx:44-49.
5. No blog or article route and no sitemap entry, so the SEO article has no page; the indexing KPI depends on it.
6. Domain and NEXT_PUBLIC_SITE_URL not set (docs/launch-checklist.md:7). {SITE_URL} cannot resolve and Search Console cannot be verified until then.
7. Vercel plan: custom events need Pro, and Hobby terms are non-commercial. A business tool with a path to paid software may not qualify. Check terms and decide the plan before go-live.
8. Landing FAQ 1 says "Is Invoify really free?" while h1 and meta brand it as an LD Industries tool. Check branding consistency.
9. Rate limiter is in-memory per instance (docs/launch-checklist.md:40); a launch spike could bypass it. Accepted risk, watch it.
10. Firefox PDF generation is untested (README.md:83); WhatsApp-driven traffic will include Firefox users. Test before launch.
11. No South African attorney or accountant has confirmed the SARS wording (compliance.md line 200).


## Gate 1b: strategy re-check (Evidence Collector)

Re-read all four files against the Gate 1 fixes and facts.md. Em dashes: 0 in every file (grep). Product launch blockers are the user's and are not counted against the files.

**strategy.md: PASS.** Gate 1 fixes all present: 2,500 visits, 20%, Day 7 indexing and Day 14 query targets carry "(estimate)" (table rows 2, 3, 5, 6); the 500 KPI is measured by `/api/invoice/generate` log counts with scheduled exports and a Hobby retention caveat (row 1, matches facts 6); the blog is replaced by a LinkedIn article and `/guide` (section 2 and calendar, matches fact 7); "best conversion" and "main driver" removed (section 2 closes with "unknown until the UTM data comes in"); scam answer uses the fact 2 wording and drops "no catch"; Reddit says check rules and flair (fact 8); VAT line follows fact 3 (line 60). No email mention except "feature was removed".

**funnel.md: PASS.** Value strip now uses the fact 2 sentence, no "until you download" (section 2 item 1). Plan stated as Hobby, no custom events; Pro events are an optional, not-assumed block (section 4). Code changes marked owner-gated. The above-the-fold risk is reworded as "by the code ... not yet checked on a rendered page", which is honest. Product bugs (email, en.json:270, :223, :229) listed at the top as pre-launch fixes. Residual: the strip is long for a "strip"; wording is correct, so not a fail.

**messaging.md: PASS.** Pillar 1 no longer says "both VAT numbers" and states the client number is optional; pillar 3 uses fact 2 wording; "free forever", "no catch", "not retained", "until you download", "as SARS requires" and email are in the Avoid list; elevator is now exactly 25 words (counted). Minor stale text: line 141 still quotes the brief's old "Free forever" offer, which the corrected brief no longer says (brief.md:11); harmless but should be trimmed.

**compliance.md: NEEDS WORK (two small fixes).**
Fixed and verified: email settled (line 232); en.json:270 added as a must-not-repeat and product fix (line 233); platform rules labelled UNVERIFIED with the fact 8 posting rule (section 4); "as SARS requires" aligned with messaging (line 225); "forever" and "no catch" handled in section 5.
Remaining:
1. Line 222 "Safe" list still includes "Adds the words Tax Invoice, both VAT numbers and the VAT amount in rand". That is the exact phrasing fact 3 bans and line 225 itself warns against. Replace with "Adds the words Tax Invoice, your VAT number and the VAT amount in rand".
2. Line 225 suggests the swap "Make a tax invoice with the fields SARS requires", which sits close to the banned "as SARS requires" and contradicts the file's own safe wording. Use "includes the fields SARS lists for a tax invoice".
Also: line 196 still quotes the brief's constraint "not retained"; if the brief constraints were not updated, align them with fact 2 (brief.md constraints were not part of the stated correction).

## Gate 1c: Orchestrator close-out
compliance.md lines 31 and 34 and brief.md line 19 fixed to the facts.md wording as Gate 1b listed (small text edits, done by the Orchestrator rather than a fourth loop). messaging.md line 141 quotes the brief's old offer line in order to override it; left as is. **Strategy phase: PASS.**


## Gate 3: final (Reality Checker)

Date 2026-10-17. Scope: whole kit (brief, facts, strategy, funnel, messaging, compliance, content/*) against README.md, i18n/locales/en.json, app/ and the privacy and terms pages. Not tested: nothing run or deployed, no rendered page, no SARS or platform rules re-fetched. The Evidence Collector's line-by-line content check is separate.

**Verdict: NEEDS WORK.** Not "ready once product blockers are fixed", because the kit has its own defects (items K1 to K4) as well as product blockers. Realistic grade: B-. The wording discipline is good; the measurement and the open-source claim are not.

### 1. Internal consistency
- Calendar vs content: every calendar day has a draft except Day 14 (LinkedIn wrap-up with real numbers). linkedin.md has Days 0, 4, 8 only. PLAN item 3 also names `content/blog-what-a-sa-tax-invoice-needs.md`; the article lives inside linkedin.md instead (acceptable under facts.md fact 7, but PLAN was not updated).
- Wording: the facts.md phrases are used consistently in all five content files. No "SARS-ready", "free forever", "not retained" or email mention found in content/.
- KPI vs measurement: the headline goal (500 invoices) is measured by request counts on `/api/invoice/generate` in Vercel logs on Hobby. I could not verify Hobby log retention; my recollection is that runtime logs are kept for about an hour (UNVERIFIED, check the dashboard). If so, exports on Day 3, 7, 10 and 14 would miss most requests and the main KPI cannot be measured. That is a kit defect, not just a caveat. Also a request is a PDF attempt, so repeat edits and failed renders inflate it.
- Hobby terms are non-commercial. The kit's own Day 14 post and the "what's the catch" answer pitch LD Industries and Stack'n as the commercial path. Plan and wording are in tension; unresolved.

### 2. Claims checked against code (7 verified, 4 failed)
Verified true: (a) title becomes "Tax Invoice #" only when `sender.vatNumber` is set, TemplateFrame.tsx:38-41; (b) default 15% rate, VAT shown; (c) 13 templates and 18 languages, README.md:32,58; (d) Firefox untested, README.md:83; (e) PDF translations fall back to English, README.md:60; (f) up to 8 PDFs in server memory for minutes, privacy/page.tsx:47-49; (g) encrypted saved data, injected script not covered, README.md:51-52; (h) no email route: `app/api/invoice` has only export, generate, warm; (i) `/guide` route exists and privacy/terms are in sitemap.
Failed or unverifiable:
- The kit says the site "is a fork of Invoify (MIT)" and, in facebook-groups.md reply 1, "anyone can read the code". Repo is `ST10502542/invoify-za`; its visibility is unknown. reddit.md reply 6 correctly flags this, facebook-groups.md does not. Fix before posting.
- "It includes the fields SARS lists for a tax invoice" rests on a SARS page summarised in compliance.md with no quote. Whether the templates actually show a supplier address, a recipient address, a serial number, date, quantity and a description field on all 13 templates was not checked by anyone. Spot-check each template before the sentence goes public.
- R5,000 and 21-day figures (linkedin.md article, x.md thread 3/7, facebook-groups.md Day 1, reddit.md): from one unquoted SARS page that the kit itself calls inconsistent. Facebook and X state them flatly. UNVERIFIED.
- Links: content uses `{SITE_URL}/en/privacy` and `{SITE_URL}/privacy` (reddit.md reply 2) inconsistently. Routes are locale-prefixed (`localePath` returns `/en`), so the unprefixed form may 404 or redirect. Use `/en/` everywhere.

### 3. Product blockers (campaign misleads without these)
1. README.md:5 says "nothing about your customers stored on a server"; README.md:54 "not retained afterwards". Contradicts privacy/page.tsx:47-49 and the kit's own wording. The README is the repo's public face and will be read by Reddit.
2. README.md:35 and en.json:244, :259 advertise email delivery. No such route exists. A visitor who reads the landing page after a post will look for it.
3. en.json:270 FAQ "Nothing is stored on a server." False against privacy/page.tsx:47-49. Highest risk: it sits on the landing page that every post links to.
4. en.json:223 meta description "SARS-ready": banned wording, and it is the search snippet for the target keyword.
5. en.json:229 intro "as SARS requires, with both parties' VAT numbers": banned; the client VAT number is optional.
6. privacy/page.tsx:13,24-25,92 and terms/page.tsx:16-18,95 still contain `[[LEGAL NAME]]`, `[[REG NO]]`, `[[ADDRESS]]`, `[[CONTACT EMAIL]]`, `[[INFORMATION OFFICER]]`. The kit sends people to the privacy page and promises a contact; none exists. docs/launch-checklist.md:6 unticked.
7. No domain and no `NEXT_PUBLIC_SITE_URL` (docs/launch-checklist.md:7): `{SITE_URL}` cannot resolve, Search Console cannot be verified, so the indexing half of the goal cannot start.
8. Vercel plan: decide Hobby vs Pro before launch (log retention for the KPI, commercial-use terms).
9. Firefox PDF generation untested (README.md:83); WhatsApp and Facebook traffic will include Firefox users. Test before launch.
10. Rate limiter is in-memory per instance (docs/launch-checklist.md, Security); a launch spike can bypass it. Accepted risk, watch it.

### 4. Kit defects to fix before the kit is ready
- K1: replace the log-count KPI with a method that works on Hobby (check retention, add a log drain, or upgrade), and say which.
- K2: add the Day 14 LinkedIn draft, or drop it from the calendar.
- K3: fix facebook-groups.md reply 1 "anyone can read the code" until repo visibility is confirmed; use `/en/` links.
- K4: label R5,000 and 21-day figures as "per SARS's page, check it" in X and Facebook as the Reddit drafts do; keep PLAN.md in step with where the article lives.

### 5. Unverified in the kit
Reddit, Facebook group and LinkedIn self-promotion rules (never fetched; the kit says "read the sidebar"). SARS figures and the field list (one unquoted page). Hobby log retention and commercial terms. Repo visibility. Template completeness per SARS field. Any traffic or conversion number: 2,500 visits and 20% are labelled estimates, and 500 invoices from R0 organic in 14 days is the brief's target, not a forecast; with no audience data in the kit it is optimistic. Above-the-fold copy not seen on a rendered page. No South African attorney or accountant has reviewed the SARS wording.

**Status:** NEEDS WORK. Re-assess after K1 to K4 and product items 1 to 9 are done.

## Gate 2: content (Evidence Collector)

Date 2026-10-17. Scope: the five files in content/ against facts.md, brief.md, messaging.md, compliance.md, strategy.md section 3 and funnel.md section 5. Spot-checked README.md (13 templates :32, 18 languages :40, Firefox untested :83, encrypted local storage :47, MIT :144), en.json and the code (15% default at lib/variables.ts:312, VAT in rand at parts/index.tsx). Nothing was posted or run. Not verified: Reddit and Facebook rules, SARS page re-fetch.

**Overall: NEEDS WORK.** Em dashes: 0 and exclamation marks: 0 in all five files (grep). No banned phrases outside the "never say" list in reddit.md section 5. No email mentions. Privacy line matches facts.md 2 wherever it appears. Two real defects (Reddit UTMs, X thread has no "check SARS"), three smaller ones.

### Deliverable check (PLAN item 3)
PLAN lists a separate `blog-what-a-sa-tax-invoice-needs.md`. It does not exist; the article sits inside linkedin.md (per facts.md 7 this is acceptable, but PLAN.md or the file name should say so). Strategy Day 14 (LinkedIn wrap-up) has no draft anywhere. Every other calendar day has a draft or reply bank.

### Verdict per file

**linkedin.md: PASS (one note)**
Days 0, 4, 8 plus article match strategy.md. Day 0 post: facts 2, 3, 4, 5 wording used; "15% VAT shown in rand" is accurate (default 15%, parts/index.tsx). Links use `{SITE_URL}` and the full UTM set (founder-1/2/3, article-1 with medium owned). R5,000 and 21 days appear in the article with "read it yourself", "check with SARS or your accountant" and an admission the page words thresholds loosely: accurate. Limits section (Firefox, PDF translation fallback, no payment tracking) matches README. Placeholders `[paste LinkedIn article link]` and Day 8 brackets are clearly marked. Note: Day 14 wrap-up is absent (see overall).

**facebook-groups.md: NEEDS WORK**
1. Reply 1 says "anyone can read the code" and "open source (MIT)". reddit.md reply 6 correctly says to confirm the LD Industries repo is public first; this file has no such gate. Fix: add the same "[User: confirm repo is public]" marker, or say only "built on an MIT project".
2. Checklist line "Over R5,000 you need the full details above" is looser than SARS wording (compliance.md says avoid quoting the boundary exactly). Fix: "SARS requires the full details on full tax invoices over R5,000; check sars.gov.za for your own situation."
3. Privacy link `{SITE_URL}/en/privacy` is fine (routing is localePrefix "always"). UTMs on Days 1 and 12 are correct; Day 5 inherits "new utm_content" in prose only, acceptable.
Everything else passes: Days 1, 5, 12 match the calendar, disclosure present, no identical-text rule stated.

**x.md: NEEDS WORK**
1. The Day 3 thread states the R5,000 rule (3/7) and "from what SARS lists" but never says "check SARS" or "not tax advice". Required by compliance.md section 4 and the task rubric. Fix: add to 7/7 or 2/7 "Check sars.gov.za for your own case."
Passes: days 0, 3, 11 match; UTMs (launch-1, thread-1, tip-1, tip-2) follow the convention with source x, medium social; wording clean; no SARS tag.

**whatsapp.md: PASS**
Days 0 and 9 match. Both say "No account, no sign-up", `utm_source=whatsapp&utm_medium=share&...&utm_content=peer` exactly as funnel.md. No privacy, SARS or R5,000 claims to get wrong. `[name]` placeholder marked. Word counts are labelled 36 and 43; actual is about 50 and 45, cosmetic.

**reddit.md: NEEDS WORK**
1. Links violate the UTM convention. Header says "add ?utm_source=reddit"; the posts and replies use bare `{SITE_URL}` (sections 1 to 3 link placement, reply 2 uses `{SITE_URL}/privacy`). funnel.md section 5 requires `{SITE_URL}/?utm_source=reddit&utm_medium=social&utm_campaign=launch-oct26&utm_content=r-southafrica-1` (one per post: r-southafrica-1, r-personalfinanceza-1, r-smallbusiness-1). Without it Reddit traffic cannot be separated from direct.
2. `{SITE_URL}/privacy` lacks the locale prefix; use `/en/privacy`.
3. No Day 10 "reply-led contribution" draft beyond the reply bank; acceptable, but say in the header that the bank covers Day 10.
Passes: fact 8 wording ("Check the sub's current rules and flair before posting") on every post; value-first, link only if rules allow, disclosure up front; R5,000 and 21 days stated with "per SARS's page" and "check SARS or your accountant"; "I could not read the Act" disclosed; privacy line correct including the 8 PDFs in memory; `[name], [role]` and the repo-public check are marked for the user.

### Required fixes (summary)
1. reddit.md: full UTM links with per-post utm_content, `/en/privacy`.
2. x.md: add "check SARS" to the thread.
3. facebook-groups.md: repo-public gate on reply 1; soften the R5,000 line.
4. Add a Day 14 LinkedIn template (real numbers as placeholders) or record it as deferred in PLAN.md "Parked"; note the article location versus PLAN item 3.
Re-test required: YES, a quick re-grep of the three edited files.


## Gate 3b: final re-check (Reality Checker)

Date 2026-10-17. Re-read facts.md items 9-12 and re-grepped strategy.md and content/*. Not run or deployed.

**Verdict: READY TO LAUNCH ONCE PRODUCT BLOCKERS ARE FIXED, with one 2-minute kit fix and the user decisions below.** Grade B.

K1 resolved as a labelled user decision (facts 12, strategy.md line 9). K2 resolved: Day 14 draft at linkedin.md:55, with real-number placeholders (under option b the "invoice requests" line cannot be filled, so drop it then). K3 resolved: repo public (facts 9), GitHub link used, locale-prefixed links (grep finds no unprefixed `{SITE_URL}/path`). K4 resolved: the R5,000 and 21-day figures use the fact 11 wording with "check SARS" in linkedin, facebook, reddit and x (x.md:41). Gate 2 items: Reddit UTMs present (4 matches), X check-SARS added, em dashes 0 in all files.

**One residual kit defect:** strategy.md:65 still says "SARS requires it on full tax invoices over R5,000", which contradicts fact 11 (and the strategy file is an internal rule that posters copy). Replace with "SARS asks for more detail on tax invoices over R5,000, including your client's VAT number if they have one; check SARS." Minor: strategy.md:80 could name the GitHub link.

### Final launch-blocker list
Product (fix before any post goes out):
1. README.md:5 and :54 say "nothing about your customers stored on a server" and "not retained"; contradicts privacy/page.tsx:47-49.
2. README.md:35, en.json:244 and :259 advertise email delivery that does not exist.
3. en.json:270 FAQ "Nothing is stored on a server" is false.
4. en.json:223 "SARS-ready" in the meta description.
5. en.json:229 "as SARS requires, with both parties' VAT numbers".
6. Placeholders on privacy (page.tsx:13,24-25,92) and terms (page.tsx:16-18,95); no real contact or Information Officer.
7. Domain and `NEXT_PUBLIC_SITE_URL` not set; Search Console cannot be verified until then.
8. Firefox PDF generation untested; test before WhatsApp and Facebook traffic arrives.
9. Spot-check that all 13 templates show the SARS fields (supplier and client address, serial number, date, quantity, description) before "includes the fields SARS lists" goes public.
10. Landing FAQ 1 "Is Invoify really free?" versus LD Industries branding; align.
User decisions:
11. Vercel Pro (invoice count measurable, commercial use allowed) or Hobby (visits only, 500-invoice goal unconfirmable). Decide before launch.
12. Confirm who posts, their name and role (reddit reply 5), and read each sub and group rule by hand (never verified).
13. Accept the in-memory rate limiter risk during a launch spike.
Still unverified: SARS field list and figures (one unquoted page), platform rules, no SA attorney or accountant review, 500 invoices in 14 days from R0 organic is the brief's target, not a forecast.

## Gate 3c: Orchestrator close-out
strategy.md:65 and :80 reworded to facts.md 11 and 9. **Final verdict: READY TO LAUNCH ONCE PRODUCT BLOCKERS ARE FIXED.**
