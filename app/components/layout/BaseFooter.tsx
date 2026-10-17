"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

// Next Intl
import { Link } from "@/i18n/navigation";

// Variables
import { AUTHOR_GITHUB, STUDIO_URL } from "@/lib/variables";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        // pb clears the sticky MobileActionBar, which only renders below xl
        <footer className="border-t border-border">
            <div className="container flex flex-col items-center justify-between gap-2 py-6 pb-28 text-sm text-muted-foreground sm:flex-row xl:pb-6">
                <p>
                    A free tool by{" "}
                    {STUDIO_URL ? (
                        <a
                            href={STUDIO_URL}
                            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                        >
                            LD Industries
                        </a>
                    ) : (
                        <span className="font-medium text-foreground">LD Industries</span>
                    )}
                    . Based on{" "}
                    <a
                        href={`${AUTHOR_GITHUB}/invoify`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                    >
                        Invoify
                    </a>{" "}
                    by Ali Abbasov (MIT).
                </p>

                <nav>
                    <Link
                        href="/guide"
                        className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                    >
                        {_t("footer.guide")}
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default BaseFooter;
