import { NextRequest, NextResponse } from "next/server";

// Services
import { exportInvoiceService } from "@/services/invoice/server/exportInvoiceService";
import { getClientKey, rateLimit } from "@/lib/server/rateLimit";

export async function POST(req: NextRequest) {
    const limited = rateLimit(`export:${getClientKey(req)}`, 60, 60_000);
    if (!limited.allowed) {
        return NextResponse.json(
            { error: "Too many requests" },
            { status: 429, headers: { "Retry-After": String(limited.retryAfterSeconds) } }
        );
    }

    const result = await exportInvoiceService(req);
    return result;
}
