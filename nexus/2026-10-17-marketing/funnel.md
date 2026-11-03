# Funnel, landing changes, share loop and measurement

Brief goal: "First 500 invoices generated in the 2 weeks after go-live, and the site indexed for 'free tax invoice generator South Africa'." Budget R0, organic only. Nothing here is posted or built. Wording follows facts.md.

**Fix before launch (product, not marketing):** the email-delivery claims in README.md:35 and en.json (landing features.3 and how.3) describe a feature that was removed, and en.json:270 ("Nothing is stored on a server") is wrong against the privacy page. Correct both before any post goes out. Also check en.json:223 ("SARS-ready") and :229 ("as SARS requires") against fact 4.

## 1. Funnel and drop-off risk

| Step | What happens | Drop-off risk |
|---|---|---|
| 1. First touch | Click from a LinkedIn, Facebook, Reddit, X or WhatsApp post, or Google later | Visitor expects a tool, lands on a busy builder. Reddit and group visitors distrust tool links. |
| 2. Landing | Builder fills the screen. By the code, the h1, intro and FAQ sit below the viewport-height shell (`LandingContent.tsx`, `app/[locale]/page.tsx`). Not yet checked on a rendered page. | Likely the biggest risk: no "free, no sign-up" line visible without scrolling. |
| 3. Start filling | First field typed | "Is this safe with client details?" The answer is only in the FAQ and privacy page. |
| 4. Template and form | Pick one of 13 templates, add lines | Long form on a phone. Unsure what makes it a Tax Invoice. |
| 5. Generate PDF | Details go to the server to render the PDF | Slow render or error with no retry. Firefox PDF generation is untested (README.md:83). |
| 6. Download | PDF saved | Low. |
| 7. Came back / shared | Reopens a saved draft, or tells someone | No account or email, so no reminder. |

## 2. Landing changes, ranked (suggestions, all owner-gated code changes outside this run)

1. **Value strip above the builder**: "Free South African tax invoice generator. No account, no sign-up. Your saved invoices stay in your browser. Invoice details go to our server only to make the PDF and aren't stored in a database." Link "privacy" to the privacy page. Files: `app/[locale]/page.tsx`, `i18n/locales/en.json`.
2. **Short privacy note by the Generate button** using the same sentence. File: `app/components/invoice/InvoiceActions.tsx`.
3. **VAT hint on the sender VAT field**: "Add your VAT number and the invoice is titled Tax Invoice. Add your client's VAT number too if they are VAT-registered." Per fact 3 the client number is optional. Files: sender field under `app/components/invoice/form/`, `en.json`.
4. **Footer share link** opening the share text in section 3. File: `app/components/layout/BaseFooter.tsx`.
5. **After download, one line**: "Saved. Your drafts stay in this browser, so bookmark this page for next month." File: `app/components/invoice/actions/FinalPdf.tsx`.

## 3. Share loop (no account, opt-in only)

- **Share button after download**, never before. Copies or opens `wa.me` with: "Free tax invoice generator, no sign-up: {SITE_URL}/?utm_source=share&utm_medium=whatsapp&utm_campaign=launch-oct26&utm_content=peer". The link carries no invoice data.
- **Optional PDF footer line, off by default**: checkbox "Add 'Made with {SITE_URL}' to the PDF footer". Never added without a tick; the choice stays in the browser. The client's PDF stays clean otherwise.
- Not done: no email capture, no share-to-unlock, no pre-ticked box, no tracking in the PDF.

## 4. Measurement (plan: Vercel Hobby, cookieless)

`<Analytics />` is already in `app/[locale]/layout.tsx:160`. On Hobby it gives page views, referrers, UTM sources, countries and devices. It gives no custom events.

| KPI | Measure with |
|---|---|
| Visits by channel | Vercel Web Analytics referrer plus `utm_source` |
| Invoices generated (brief's 500) | Request count on `/api/invoice/generate` in Vercel logs. Hobby log retention is short (check the dashboard), so export the count at least weekly. A request is a PDF attempt, so it slightly overcounts failed renders and repeat edits. |
| Indexing | Google Search Console (needs the domain set) |

**If upgraded to Pro (optional, not assumed):** custom events would add `pdf_generated` (success from `/api/invoice/generate`), `pdf_downloaded` (`downloadPdf`), `pdf_error`, `draft_restored` and `share_clicked`, all in `contexts/InvoiceContext.tsx` or `FinalPdf.tsx`. No invoice contents, names, amounts or emails in any event. Check Vercel's Hobby terms for commercial use before go-live.

## 5. UTM convention

`{SITE_URL}/?utm_source=<site>&utm_medium=<type>&utm_campaign=launch-oct26&utm_content=<post-id>`

| Channel | utm_source | utm_medium | utm_content example |
|---|---|---|---|
| LinkedIn founder post | linkedin | social | founder-1 |
| Facebook groups | facebook | social | group-smallbiz-1 |
| Reddit | reddit | social | r-southafrica-1 |
| X | x | social | thread-1 |
| WhatsApp share text | whatsapp | share | peer |
| SEO article (LinkedIn article, later main site page) | linkedin or ld-site | owned | article-1 |

Lowercase, hyphens, one `utm_content` per post. Never put UTMs in the canonical URL or sitemap.
