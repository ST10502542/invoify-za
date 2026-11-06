import { ImageResponse } from "next/og";

import { getMessages } from "@/i18n/messages";
import { BASE_URL } from "@/lib/variables";

/**
 * Open Graph card, generated rather than committed.
 *
 * A static PNG would have to be redrawn by hand for every locale and would
 * drift the moment the wording changed. Generating it means the card always
 * says what the page says. The previous setup had no OG image at all — links
 * to the site unfurled as a bare URL — and `lib/seo.ts` pointed its JSON-LD
 * `image` at a hashed build artefact that 404s after any rebuild.
 */
export const alt = "Free South African tax invoice generator by LD Industries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** public/assets/img/ldi-icon-white.svg, inlined so the render reads no files. */
const LDI_ICON =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjIyLjEgMTYuMiAzOTguOCAxNjAuMyIgd2lkdGg9IjM5OSIgaGVpZ2h0PSIxNjAiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iTERJIj48ZyBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJNNzcuMTY1MjYxMTk4OTY4OCAyNC44MzU5Mzc1SDEyMS40MDM1NDI0NDg5Njg4TDg2LjM0MTQwNzI1OTc3MzM2IDEzMi43NDYwOTM3NUgxNTUuMzg0Mzc2MDA5NzczMzVMMTQzLjkyOTY4NzUgMTY4LjBIMzAuNjQ4NDM3NVpNMjExLjE0OTYzNjE5ODk2ODggMjQuODM1OTM3NUgyNzYuODcyMjkyNDQ4OTY4OFEyOTYuMzA1ODg2MTk4OTY4OCAyNC44MzU5Mzc1IDMwNi41NTUzMzMxMTMzNjU2IDMwLjEwOTM3NVEzMTYuODA0NzgwMDI3NzYyNCAzNS4zODI4MTI1IDMyMS40MTI1MDU2ODAxNTI2NiA0NS4yNDYwOTM3NVEzMjYuMDIwMjMxMzMyNTQyOTUgNTUuMTA5Mzc1IDMyNS4yODM5Nzc0OTUxMjAxNSA2OC4xOTUzMTI1UTMyNC41NDc3MjM2NTc2OTczNiA4MS4yODEyNSAzMTkuNzg4MTU3Nzk0OTEwNiA5NS45Mjk2ODc1UTMxMi4zMzE1MDQ2MDk4NzgxNSAxMTguODc4OTA2MjUgMzAyLjk5NzgwMzM3MzMzODkgMTMxLjUyNTM5MDYyNVEyOTMuNjY0MTAyMTM2Nzk5NyAxNDQuMTcxODc1IDI4MS42MTAzNDQ5NjY4NDA4IDE1Mi43MTY3OTY4NzVRMjY5LjU1NjU4Nzc5Njg4MTkgMTYxLjI2MTcxODc1IDI1Ny45OTE4NzM4MTM0MDk4IDE2NC4wOTM3NVEyNDIuMTcxODc1IDE2OC4wIDIzMC4zNTU0Njg3NSAxNjguMEgxNjQuNjMyODEyNVpNMjQ0Ljg1MzQxMTY3MjY2NzU2IDU3LjI1NzgxMjUgMjE5LjQzNzMyOTk2NTM4NjUgMTM1LjQ4MDQ2ODc1SDIzMC4yNzcxNzM3MTUzODY1UTI0NC4xNDQzNjEyMTUzODY1IDEzNS40ODA0Njg3NSAyNTEuMDAzMjQ1MDQ2NTcxNzUgMTMyLjQwNDI5Njg3NVEyNTcuODYyMTI4ODc3NzU2OTYgMTI5LjMyODEyNSAyNjMuNjczMjgwODQ1OTQ4NiAxMjEuNjYyMTA5Mzc1UTI2OS40ODQ0MzI4MTQxNDAzNSAxMTMuOTk2MDkzNzUgMjc1LjA2ODk5MDA5MzE0MzQ0IDk2LjgwODU5Mzc1UTI4Mi40NjIxODI0MDAwMDU0IDc0LjA1NDY4NzUgMjc3Ljc2OTEyNTE2MTMzNjUgNjUuNjU2MjVRMjczLjA3NjA2NzkyMjY2NzU2IDU3LjI1NzgxMjUgMjU1Ljg4ODU2NzkyMjY2NzU2IDU3LjI1NzgxMjVaTTM2Ny44ODc5MTc0NDg5Njg4NCAyNC44MzU5Mzc1SDQxMi4yMjM4NTQ5NDg5Njg4TDM2NS43MDcwMzEyNSAxNjguMEgzMjEuMzcxMDkzNzVaIi8+PC9nPjwvc3ZnPg0K";

export default async function OpengraphImage(props: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await props.params;
    const messages = await getMessages(locale);
    const meta = (messages as Record<string, Record<string, string>>)?.meta ?? {};

    const title = meta.ogTitle ?? "Free invoice generator";
    const description =
        meta.ogDescription ??
        "Thirteen templates. Fill it in, download the PDF. No account.";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#000000",
                    padding: 72,
                    // Satori has no default font stack; system-ui resolves on
                    // the render host.
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <img src={LDI_ICON} alt="" width={140} height={56} />
                    <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 700 }}>
                        LD Industries
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div
                        style={{
                            color: "#FFFFFF",
                            fontSize: 66,
                            fontWeight: 700,
                            lineHeight: 1.1,
                            maxWidth: 900,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            color: "#D1D1D6",
                            fontSize: 30,
                            lineHeight: 1.35,
                            maxWidth: 860,
                        }}
                    >
                        {description}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: 12,
                        color: "#D1D1D6",
                        fontSize: 24,
                    }}
                >
                    <span>{new URL(BASE_URL).host}</span>
                </div>
            </div>
        ),
        size
    );
}
