import { getSession } from "@/lib/sessions/actions";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/events", "/videos", "/reports"];

export async function middleware(req: NextRequest) {
    const session = await getSession();

    if (!session.isLoggedIn && protectedRoutes.includes(req.nextUrl.pathname)) {
        // Check if this is the first time redirecting to avoid infinite redirects
        if (!req.nextUrl.searchParams.has("reload")) {
            const reloadUrl = new URL(req.url);
            reloadUrl.searchParams.set("reload", "true"); // Add cache-busting parameter
            return NextResponse.redirect(reloadUrl);
        }

        const redirectUrl = new URL("/landing", req.url);
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}
