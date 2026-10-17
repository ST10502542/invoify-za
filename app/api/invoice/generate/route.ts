export const runtime = "nodejs";
export const maxDuration = 60;

import { NextRequest, NextResponse } from "next/server";

// Services
import { generatePdfService } from "@/services/invoice/server/generatePdfService";
import { getClientKey, rateLimit } from "@/lib/server/rateLimit";

export async function POST(req: NextRequest) {
    // Each request drives headless Chromium, so cap it per client to stop cost abuse.
    // shortcut: in-memory, per serverless instance; move to Upstash if abuse shows up in Vercel usage.
    const limited = rateLimit(`generate:${getClientKey(req)}`, 60, 60_000);
    if (!limited.allowed) {
        return NextResponse.json(
            { error: "Too many requests" },
            { status: 429, headers: { "Retry-After": String(limited.retryAfterSeconds) } }
        );
    }

    const result = await generatePdfService(req);
    return result;
}
