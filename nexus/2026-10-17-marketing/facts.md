# Settled facts for all campaign files (Orchestrator, after Gate 1, verified in code)

1. **No email feature.** `app/api/invoice/send` was removed in the SA edition; only generate, export and warm routes exist. README.md:35 and en.json still mention email: that is a product bug to fix, not a feature to market. Never mention email sending.
2. **Where data goes.** Invoice data is sent to the server when the PDF is generated, rendered, and a small number of recent PDFs (up to 8) can sit in server memory for a few minutes (privacy page). Saved invoices and the address book stay in the browser, encrypted at rest. Allowed wording: "No account. Your saved invoices stay in your browser. Invoice details go to our server only to make the PDF and aren't stored in a database." Banned: "never leaves your device", "nothing is stored on a server", "not retained", "until you download".
3. **VAT numbers.** The supplier's VAT number turns the title into "Tax Invoice". The recipient's VAT number is optional (SARS requires it on full tax invoices over R5,000; the user must add it). Don't say "both VAT numbers" as if automatic.
4. **SARS wording.** Allowed: "includes the fields SARS lists for a tax invoice". Banned: "SARS-ready", "SARS-compliant", "SARS-approved", "as SARS requires".
5. **Free.** Allowed: "free, no account, no sign-up". Banned: "free forever", "no catch".
6. **Hosting plan.** Vercel Hobby: page views and referrers only, no custom events. KPI for invoices = request count on `/api/invoice/generate` in Vercel logs. Mark any target number not in the brief as "(estimate)".
7. **No blog route.** The site has no blog. The SEO article ships as a LinkedIn article on launch day and as a page on the LD Industries main site when that exists; the invoice site's own `/guide` page is the on-site SEO target.
8. **Unverified platform rules.** Reddit was not reachable; every Reddit post must say "check the sub's current rules and flair before posting" and be value-first with the link in a comment only if rules allow.

## Added after Gates 2 and 3
9. **Repo is public** (github.com/ST10502542/invoify-za, checked with `gh`). "The code is public on GitHub" is allowed, with that link.
10. **Routes are locale-prefixed:** `{SITE_URL}/en/privacy`, `{SITE_URL}/en/terms`, `{SITE_URL}/en/guide`. Every link, including Reddit, carries the funnel.md UTM.
11. **SARS figures.** State them only as: "SARS asks for more detail on tax invoices over R5,000 (including your client's VAT number if they have one), and a tax invoice is generally due within 21 days of the sale. Check SARS's tax invoice page for the full list." Every post that mentions them says "check SARS".
12. **Measurement is a user decision (open).** Vercel Hobby log retention is short and unverified, and Hobby is for non-commercial use. The kit names two options and the user picks: (a) Vercel Pro, which allows commercial use and custom events (`pdf_generated`); (b) stay on Hobby and use Web Analytics visits to the builder as the KPI proxy, with the invoice count unmeasured.
