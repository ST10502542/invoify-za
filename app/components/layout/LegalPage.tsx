import type { Metadata } from "next";
import type { ReactNode } from "react";

import { BASE_URL } from "@/lib/variables";

export const LEGAL_EFFECTIVE_DATE = "17 October 2026";

export const legalMetadata = (
    slug: "privacy" | "terms",
    title: string,
    description: string
): Metadata => ({
    metadataBase: new URL(BASE_URL),
    title: `${title} | LD Industries`,
    description,
    robots: { index: true, follow: true },
    // English only, so every locale points at the one copy.
    alternates: { canonical: `/en/${slug}` },
});

export const LegalPage = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => (
    <main>
        <section className="border-t border-border bg-card">
            <div className="container py-16 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                        {title}
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Effective {LEGAL_EFFECTIVE_DATE}
                    </p>
                    <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    </main>
);
