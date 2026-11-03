# Compliance notes: invoify-za launch

Guidance, not legal advice. Have a South African attorney or your accountant confirm before anything is posted.

Brief constraints quoted: "'SARS-ready' style wording must be checked against what SARS actually requires for a tax invoice; avoid implying SARS endorsement." and "POPIA: the privacy claims must match `README.md` exactly (data leaves the machine only for PDF generation, not retained)."

## 1. SARS tax invoice check

Source for all rows: SARS, Tax Invoices, https://www.sars.gov.za/businesses-and-employers/tax-invoices/ (fetched today; it cites the VAT Act s20). I could not open the VAT Act text or the VAT 404 guide, so the s20 wording itself is unchecked.

Thresholds (same page): full tax invoice when consideration is more than R5,000; abridged allowed at R5,000 or less; no tax invoice needed at R50 or less; issue within 21 days of the supply. The page words the R5,000 boundary inconsistently, so avoid quoting it exactly.

| # | SARS requires | Status | Evidence |
|---|---|---|---|
| 1 | Words "Tax Invoice", "VAT Invoice" or "Invoice" | Covered when sender VAT number is filled in. The label becomes "Tax Invoice #" beside the number. There is no large "Tax Invoice" heading. | TemplateFrame.tsx:38-41 |
| 2 | Supplier name, address, VAT number | Covered. User must fill them in. VAT number is only checked as 10 digits starting 4. | BillFromSection.tsx:100; schemas.ts:98-117; parts/index.tsx:140-195 |
| 3 | Recipient name, address, and VAT number if a vendor | Name and address: user fills in. Recipient VAT: optional, not enforced above R5,000 (the placeholder only says it is required). | BillToSection.tsx:95-97; schemas.ts:123-129 |
| 4 | Serial number and date of issue | Fields exist and are required. User must keep numbers unique and sequential. | schemas.ts:194-195; parts/index.tsx:221-222 |
| 5 | Description of goods or services (second-hand goods stated) | Description field exists. Second-hand wording: user must type it. | parts/index.tsx:312-316 |
| 6 | Quantity or volume | Covered. | schemas.ts:136; parts/index.tsx:323 |
| 7 | Value of supply, tax charged, consideration | Subtotal, VAT amount in rand (backed out of total), and total are shown. Default rate is 15%, but it is editable. | parts/index.tsx:356-384, 417; variables.ts:312 |

Gaps worth knowing (none are marketing claims, but do not promise them):
- No separate abridged invoice mode. A full invoice is acceptable at any amount, so this is fine.
- Nothing stops a user issuing an invoice with no VAT number; it then simply is not titled "Tax Invoice".
- Nothing checks the 21-day rule, serial-number uniqueness, or that the recipient VAT number is present above R5,000.
- Not checked: i18n/locales/en.json keys were only read for landing copy (lines 222-274), not for field labels.

## 2. Claim wording

Safe: "Includes the fields SARS lists for a tax invoice", "Adds the words Tax Invoice, your VAT number and the VAT amount in rand, with room for your client's VAT number", "You still need to fill in the details and check them".
Never: "SARS-approved", "SARS-compliant", "guaranteed valid", "accepted by SARS", any SARS logo.

"SARS-ready" (en.json:223 meta description): risky. It reads as an assurance of validity, but validity depends on what the user types and the product does not enforce rows 3 to 5 above. Suggested swap: "Make a tax invoice that includes the fields SARS lists for a tax invoice". The intro at en.json:229 ("as SARS requires") is also banned wording (facts.md 4): change it to "includes the fields SARS lists for a tax invoice". Do not say "both VAT numbers" as if automatic: the recipient VAT number is optional and the user must add it.

## 3. POPIA and privacy

The README and the privacy page do not match exactly, and the brief says they must.
- README.md:54: data leaves the machine "when you generate a PDF or send one by email, and it is not retained afterwards".
- privacy/page.tsx:44-52: data goes to the server (hosted on Vercel, US), is rendered, not written to a database or logs, but up to 8 recent PDFs sit in server memory for a few minutes. That is short-lived retention, so "not retained" is slightly loose.
- Email is settled: no email route exists (facts.md 1; only generate, export and warm routes remain). README.md:35 and the en.json mentions of email are product bugs to fix, not features. Never mention email sending in marketing. The privacy page is right to omit it.
- en.json:270 (FAQ) says "Nothing is stored on a server". This contradicts the privacy page (server render plus up to 8 PDFs in memory for minutes). It is a public claim marketing must not repeat, and it should be fixed in the product before launch.
- The privacy page still has unfilled placeholders: [[ADDRESS]], [[CONTACT EMAIL]], [[INFORMATION OFFICER]]. Do not launch before these are filled.

Wording marketing may use:
- "No account and no database. Drafts are saved in your browser, encrypted."
- "No account. Your saved invoices stay in your browser. Invoice details go to our server only to make the PDF and aren't stored in a database." (facts.md 2 wording)
Banned: "never leaves your device", "nothing is stored on a server", "not retained", "until you download", "we never see your data", "fully private". Link the privacy page.

## 4. Platform rules (UNVERIFIED)

Reddit was not reachable and searches returned no official rule text, so everything below is unverified general practice, not the subs' actual rules. Posting rule (facts.md 8): every Reddit post must say "check the sub's current rules and flair before posting", be value-first, and put the link in a comment only if the rules allow. A person must read each sidebar by hand before anything is posted.
- r/southafrica, r/PersonalFinanceZA, r/smallbusiness. Do: read the rules page first; lead with a useful answer (what a SARS tax invoice needs), disclose "I built this"; use a weekly self-promo thread if one exists; message mods first if unsure. Don't: post a bare link, post the same text in several subs, use a new throwaway account, ask for upvotes. Search suggests r/smallbusiness tolerates value-first posts; r/PersonalFinanceZA likely restricts promotion (typical for finance subs).
- Facebook groups (not researched, general practice). Do: read each group's rules, ask the admin, post in promo-allowed threads. Don't: mass-post across groups, tag people, DM members unprompted.
- LinkedIn and X (not researched). Do: post from the founder account, disclose it is your product, keep claims to section 2. Don't: tag SARS or imply endorsement, auto-DM, use fake engagement.

## 5. Consumer Protection Act and "free forever"

Search confirmed CPA s29 and s41 bar false or misleading representations about a material fact; I could not verify the text on "free" offers specifically. Watch:
- "Free forever" is a promise about the future. Say "free to use today, no account" unless LD Industries commits in writing, and drop "forever" if a paid tier is possible.
- Do not claim "no catch" while a path to Stack'n or custom software is offered. Say the free tool is optional and separate.
- The terms page and landing copy must say the same thing (en.json:266 says "no paid tier").
- No price claims (per the brief).
