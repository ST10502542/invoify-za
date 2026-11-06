# Design DNA: SA tax invoice generator

Source of truth: the LD Industries brand guide (`ld-industries-brand` skill). This file records how it maps to this app.

- **Palette:** black #000000, white #FFFFFF, text #1D1D1F, secondary text #6E6E73, borders #D1D1D6, panels #F5F5F7. Tokens live in `app/globals.css`. Status colours (destructive, success, warning) stay, because errors must read as errors.
- **Type:** Outfit in the app, as shipped. The brand fonts apply to LDI documents, not to a user's invoice.
- **Spacing:** Tailwind scale, as shipped.
- **Shape:** sharp corners (`--radius: 0`), thin rules, no gradients.
- **Motion:** none beyond the shadcn defaults.
- **Imagery:** the LDI logo files only.
- **Voice:** direct and plain. Claim only what the code does.
- **Invoices:** the default accent is black. Users can still pick any colour, because the invoice is theirs.
- **Never:** recolour or stretch the logo, bring back upstream indigo as a default, add rounded badges, add the old swoosh.
