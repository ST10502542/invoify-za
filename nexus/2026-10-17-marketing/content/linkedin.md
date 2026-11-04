# LinkedIn drafts (Days 0, 4 and 8)

Post from the founder account. Nothing here has been posted. Check each link resolves once `{SITE_URL}` is live. Reply to every comment on Days 0 to 2 (strategy.md).

---

## Day 0: launch-day founder post (about 150 words)

I built a free tax invoice generator for South Africa.

I kept seeing freelancers and small business owners doing invoices in Word or Excel, or paying for an app they use a few times a month. So I made something simpler.

Fill in a form, pick one of 13 templates, download a PDF. Add your VAT number and the invoice is titled Tax Invoice, and the VAT you add shows in rand. Add your client's VAT number too if they are VAT-registered.

Free, no account, no sign-up. Your saved invoices stay in your browser. Invoice details go to our server only to make the PDF and aren't stored in a database.

It includes the fields SARS lists for a tax invoice. You still need to fill in the details and check them.

Try it: {SITE_URL}/?utm_source=linkedin&utm_medium=social&utm_campaign=launch-oct26&utm_content=founder-1

If something breaks or is missing, tell me in the comments. I will read every one.

A free tool by LD Industries. Based on Invoify by Ali Abbasov (MIT).

---

## Day 4: follow-up post 1, points to the article and gives one tip

One thing that trips people up on invoices: the serial number.

A tax invoice needs a unique serial number and a date of issue. If you restart at 1 every month, or skip numbers, you make life harder for yourself and your bookkeeper. Pick a simple pattern, like INV-2026-001, and keep counting.

I wrote up the full list of what a South African tax invoice needs, in plain language: [paste LinkedIn article link]

And if you want a free way to make one: {SITE_URL}/?utm_source=linkedin&utm_medium=social&utm_campaign=launch-oct26&utm_content=founder-2

No account, no sign-up. The tool does not check serial numbers for you, so that part is on you.

---

## Day 8: follow-up post 2, an early question or feedback answered publicly

Only post this once there is a real question or piece of feedback. Replace the bracketed parts with what was actually said, and ask the person first if you quote them.

A week in, the question I get most is: "[real question from a comment or message]".

Short answer: [plain answer that matches facts.md, for example "Your client's VAT number is optional in the tool. SARS asks for more detail on tax invoices over R5,000, including your client's VAT number if they have one, so add it. Check SARS's tax invoice page."]

Someone also pointed out [real feedback]. [What you will do about it, or "not planned, and here is why".]

If you have used the generator, I would like to hear what was clumsy: {SITE_URL}/?utm_source=linkedin&utm_medium=social&utm_campaign=launch-oct26&utm_content=founder-3

---

## Day 14: wrap-up post (under 150 words)

Fill the brackets with real numbers from the Vercel dashboard and Search Console. Do not post estimates as results. No prices.

Two weeks ago I launched a free tax invoice generator for South Africa.

Where it stands:
- [real number] visits
- [real number] invoice requests on the PDF route (this counts attempts, so it runs a little high)
- [indexed or not indexed yet, from Search Console]

What I got wrong: [one real thing from feedback].
What I changed: [one real change, or "nothing yet"].

Still free, no account, no sign-up. The code is public on GitHub: https://github.com/ST10502542/invoify-za

Next for LD Industries is Stack'n, a finance app for small businesses. No dates or prices yet. The invoice tool stays separate.

Thank you to everyone who tried it and told me what was clumsy: {SITE_URL}/?utm_source=linkedin&utm_medium=social&utm_campaign=launch-oct26&utm_content=founder-4

---

## Day 0: LinkedIn article

**Title:** What a South African tax invoice needs (and a free way to make one)

If you invoice as a freelancer, sole proprietor or small business in South Africa, you have probably asked yourself whether your invoice is a proper tax invoice. A Word template you copied from a friend might be missing something. A paid app might be more than you need for a few invoices a month.

This article covers what SARS lists for a tax invoice, the mistakes I see most, and a free way to make one. It is general guidance, not tax or legal advice. For your own situation, check with SARS or your accountant.

**First, do you need a tax invoice at all?**

A tax invoice is the document a VAT vendor issues when it supplies goods or services. If you are VAT-registered, you issue tax invoices. If you are not registered for VAT, you do not charge VAT, and you issue a normal invoice. Registration is a separate decision, so I will not cover it here.

**What SARS lists for a tax invoice**

On its tax invoice page, SARS lists the details a tax invoice needs. In plain terms:

1. The words "Tax Invoice", "VAT Invoice" or "Invoice" in a clear place.
2. Your name, address and VAT number as the supplier.
3. The name and address of the recipient. If the recipient is a VAT vendor, their VAT number too.
4. A serial number and the date of issue.
5. A description of the goods or services. If goods are second-hand, say so.
6. The quantity or volume.
7. The value of the supply, the VAT charged, and the total.

SARS asks for more detail on tax invoices over R5,000 (including your client's VAT number if they have one), and a tax invoice is generally due within 21 days of the sale. Check SARS's tax invoice page for the full list: sars.gov.za, under Tax Invoices.

**The mistakes I see most**

- **No VAT number.** If you are registered, your VAT number belongs on every tax invoice. Without it, the document is just an invoice.
- **Missing client details above R5,000.** SARS asks for more detail on larger invoices, including your client's VAT number if they have one. It is easy to forget, because most templates treat it as optional.
- **Broken numbering.** Duplicate or skipped serial numbers cause questions at year-end.
- **VAT hidden inside the total.** Show the VAT amount in rand, so your client can see it and claim it.
- **Vague descriptions.** "Services" is not a description. "Website design, 12 hours" is.

**A free way to make one**

I built a free tax invoice generator for South Africans because I was tired of seeing people fight with spreadsheets. It works like this:

- Fill in a form and pick one of 13 templates.
- Add your VAT number, and the invoice is titled Tax Invoice, and the VAT you add shows in rand.
- Add your client's VAT number if they are VAT-registered. It is optional in the tool, so you have to add it yourself.
- Download a PDF. There is a live preview, and it works on a phone.

It includes the fields SARS lists for a tax invoice. It does not fill in your details for you, and it does not check things like serial number order or the 21-day rule. You still need to read the invoice before you send it.

It is free, with no account and no sign-up. Your saved invoices and address book stay in your browser, encrypted. Invoice details go to our server only to make the PDF and aren't stored in a database. The privacy page has the full detail, including that a few recent PDFs can sit in server memory for a few minutes.

**What it does not do**

I would rather you hear the limits from me. PDF generation in Firefox is untested, so use Chrome, Edge or Safari if you hit a problem. The interface is in 18 languages, but some PDF translations fall back to English. It makes invoices only. It does not track payments or send reminders.

**Where to start**

The guide on the site walks through each field: {SITE_URL}/en/guide?utm_source=linkedin&utm_medium=owned&utm_campaign=launch-oct26&utm_content=article-1

Or open the generator and make your first invoice: {SITE_URL}/?utm_source=linkedin&utm_medium=owned&utm_campaign=launch-oct26&utm_content=article-1

If you spot something wrong or missing, tell me. I read every comment.

A free tool by LD Industries. Based on Invoify by Ali Abbasov (MIT).
