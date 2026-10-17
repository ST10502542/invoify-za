import { LegalPage, legalMetadata } from "@/app/components/layout/LegalPage";

// Next Intl
import { Link } from "@/i18n/navigation";

export const metadata = legalMetadata(
    "terms",
    "Terms of Use",
    "Terms for the free South African tax invoice generator. Provided as is; you are responsible for your invoices and tax compliance."
);

export default function TermsPage() {
    return (
        <LegalPage title="Terms of Use">
            <p>
                This site is owned and operated by [[LEGAL NAME]]
                (registration number [[REG NO]]), trading as LD Industries
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;), of [[ADDRESS]]. By using
                it you agree to these terms. If you do not agree, please do not
                use it.
            </p>

            <h2>The service</h2>
            <p>
                The tool is free and lets you build an invoice and download it
                as a PDF. We may change, suspend or stop it at any time, and we
                give no support commitment.
            </p>

            <h2>Not tax advice</h2>
            <p>
                The tool is built around South African tax invoice rules,
                including section 20 of the VAT Act, but it is not tax, legal or
                accounting advice. SARS rules may change, and we may not update
                the tool straight away. You are responsible for the
                correctness of your invoices, your VAT calculations and your
                own tax compliance. Check anything important with SARS or a
                registered tax practitioner.
            </p>

            <h2>Your use</h2>
            <ul>
                <li>You must be 18 or older and able to enter a contract.</li>
                <li>
                    You must have the right to use any information you enter,
                    including your customers&apos; details.
                </li>
                <li>
                    Do not use the tool for unlawful or fraudulent invoices,
                    attack or overload it, or try to bypass its limits.
                </li>
            </ul>

            <h2>Your content</h2>
            <p>
                You keep all rights in the invoices you create. We use your
                invoice data only to produce your PDF, as described in our{" "}
                <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>Our rights and open source</h2>
            <p>
                The tool is based on Invoify by Ali Abbasov, released under the
                MIT licence. The LD Industries name and logo are ours and are
                not covered by that licence.
            </p>

            <h2>No warranty</h2>
            <p>
                The tool is provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo;, without warranties of any kind, including
                that it will be error-free, uninterrupted or fit for a
                particular purpose.
            </p>

            <h2>Limit of liability</h2>
            <p>
                To the extent the law allows, we are not liable for any loss,
                including lost profits, penalties or interest from SARS, or lost
                data, arising from your use of the tool. Nothing in these terms
                limits rights you have under the Consumer Protection Act 68 of
                2008 that cannot be limited, or liability for our gross
                negligence or intentional wrongdoing.
            </p>

            <h2>Changes and law</h2>
            <p>
                We may update these terms by changing this page and the
                effective date. Continued use means you accept the update.
                These terms are governed by the laws of South Africa, and the
                South African courts have jurisdiction.
            </p>

            <h2>Contact</h2>
            <p>[[CONTACT EMAIL]]</p>
        </LegalPage>
    );
}
