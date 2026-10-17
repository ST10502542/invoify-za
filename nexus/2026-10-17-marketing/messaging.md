# Messaging: invoify-za launch

Brief: "Free forever, no sign-up" is the offer; "No claim the product can't back up"; "Voice: plain, direct SA English, no hype, no em dashes". Wording below follows facts.md (items 1-5), which overrides the brief's "free forever".

## 1. Positioning

**Line:** A free South African tax invoice generator that runs in your browser, with no account.

**Elevator (25 words):** Fill in a form, pick a template, download a PDF. Add your VAT number for a Tax Invoice with 15% VAT shown. Free, no account.

## 2. Pillars

| Pillar | Proof | Allowed wording |
|---|---|---|
| SA tax invoice | Title becomes "Tax Invoice" when the supplier's VAT number is set (TemplateFrame.tsx); default rate 15%, shown in rand | "Add your VAT number and the invoice is titled Tax Invoice, with 15% VAT in rand." and "Includes the fields SARS lists for a tax invoice." Your client's VAT number is optional: "add your client's VAT number if they are VAT-registered." |
| Free, no account | `landing.faq.1` and `.2`: no paid tier, no trial, no account | "Free, no account, no sign-up." |
| Private by design | README: no accounts, no database; saved invoices and address book in the browser, encrypted at rest; privacy page: PDF is rendered on the server, up to 8 recent PDFs can sit in server memory for a few minutes | "No account. Your saved invoices stay in your browser. Invoice details go to our server only to make the PDF and aren't stored in a database." |

Safe supporting facts: 13 templates, live preview, real PDF, interface in 18 languages, works on a phone.

## 3. Voice

**Do**
1. Lead with what the tool does.
2. Use SA terms: VAT, rand, sole proprietor, bookkeeper, SARS.
3. Name the pain: Word and Excel templates, paying for an app for a few invoices a month.
4. Write short sentences, first person from the founder.
5. Say plainly what is not covered (Firefox PDF issue untested, some PDF translations fall back to English) when asked.

**Don't**
1. Use hype words (game-changer, seamless, effortless).
2. Use em dashes or exclamation marks.
3. Talk down to accountants or other invoicing tools.
4. Promise tax or legal outcomes.
5. Post the same text in two groups.

**Before:** "Revolutionise your invoicing with our SARS-compliant, 100% secure platform!"
**After:** "I built a free tax invoice generator for South Africa. Add your VAT number, download a PDF. No account."

## 4. Avoid

Banned wording (facts.md):
- "never leaves your device", "nothing is stored on a server", "not retained", "until you download"
- "SARS-ready", "SARS-compliant", "SARS-approved", "as SARS requires"
- "free forever", "no catch"
- "both VAT numbers" as if automatic (only the supplier's number is automatic)
- Any mention of email sending. The feature does not exist, even though README.md:35 and en.json still advertise it (a product bug, not a claim).

Also avoid: "100% secure", "bank-level security" (README says encryption does not stop an injected script); "works in every browser"; any POPIA claim beyond the privacy wording above; SARS logos or anything implying endorsement; testimonials, user counts, "accountant-approved"; future Stack'n pricing.

## 5. LD Industries credit

One line, as in the app footer: "A free tool by LD Industries." Put it last, link once, no pitch. Mention Stack'n or custom software only if asked. Where space allows: "Based on Invoify by Ali Abbasov (MIT)."
