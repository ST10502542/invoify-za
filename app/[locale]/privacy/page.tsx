import { LegalPage, legalMetadata } from "@/app/components/layout/LegalPage";

export const metadata = legalMetadata(
    "privacy",
    "Privacy Policy",
    "How the free South African tax invoice generator handles your data: invoice drafts stay in your browser, PDFs are rendered and not stored."
);

export default function PrivacyPage() {
    return (
        <LegalPage title="Privacy Policy">
            <p>
                [[LEGAL NAME]] (registration number [[REG NO]]), trading as LD
                Industries (&ldquo;we&rdquo;, &ldquo;us&rdquo;), runs this free
                South African tax invoice generator. This policy explains what
                personal information the tool handles. We process it under the
                Protection of Personal Information Act 4 of 2013 (POPIA) and
                follow the same principles as the GDPR.
            </p>

            <h2>Who is responsible</h2>
            <p>
                We are the responsible party under POPIA. Address:
                [[ADDRESS]]. Email: [[CONTACT EMAIL]]. Information Officer:
                [[INFORMATION OFFICER]].
            </p>

            <h2>What we do not have</h2>
            <p>
                There are no accounts, no database, no payments, no marketing
                emails and no AI features. We do not sell or share your
                information for advertising.
            </p>

            <h2>What stays in your browser</h2>
            <p>
                Invoice drafts, saved clients and saved senders are stored in
                your own browser (IndexedDB and localStorage), encrypted with a
                key that never leaves the browser. We never receive them unless
                you generate a PDF. Clearing your browser data deletes them,
                and we cannot recover them.
            </p>

            <h2>What happens when you generate a PDF</h2>
            <p>
                When you click Generate PDF or export, the invoice data you
                entered is sent to our server, rendered into a PDF and sent
                back to you. This may include names, addresses, VAT numbers,
                bank details and line items of you and your customers. We use
                it only to produce that file. We do not keep it in a database
                or write it to logs. The server holds up to 8 recent PDFs in
                memory for a few minutes as a speed cache, then they are gone.
            </p>
            <p>
                Please only enter personal information about other people, such
                as your customers, that you are allowed to use for invoicing.
            </p>

            <h2>Hosting and analytics</h2>
            <ul>
                <li>
                    The site is hosted on Vercel in the United States. Your
                    requests, including generated invoice data, are processed
                    there. This is a cross-border transfer under POPIA section
                    72.
                </li>
                <li>
                    We use Vercel Web Analytics for anonymous page-view counts.
                    It sets no cookies and does not track you across sites.
                </li>
                <li>
                    To limit abuse, we hold your IP address in memory for one
                    minute to rate limit requests. It is not kept after that.
                </li>
            </ul>

            <h2>Cookies</h2>
            <p>
                We set no tracking or advertising cookies, so there is no
                consent banner. The language routing library may set one
                strictly necessary cookie, <strong>NEXT_LOCALE</strong>, which
                only remembers your chosen language. It is set in some cases,
                for example when your language choice differs from your browser
                language, and it holds a language code and nothing else.
            </p>

            <h2>Your rights</h2>
            <p>
                You may ask us whether we hold your personal information, to
                correct or delete it, and to object to its processing. Because
                we keep no invoice data after a PDF is produced, there is
                usually nothing to retrieve. Email [[CONTACT EMAIL]] and we
                will reply within a reasonable time.
            </p>
            <p>
                If you are unhappy, you can complain to the Information
                Regulator of South Africa at inforeg.org.za. If you are in the
                EEA or UK, you can contact your local data protection
                authority.
            </p>

            <h2>Security</h2>
            <p>
                Traffic is sent over HTTPS and local data is encrypted in your
                browser. No system is perfectly secure. If a breach affects
                personal information we hold, we will tell the Information
                Regulator and affected people as POPIA requires.
            </p>

            <h2>Changes</h2>
            <p>
                We will update this page if our practices change and revise the
                effective date above.
            </p>
        </LegalPage>
    );
}
