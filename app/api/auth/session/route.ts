import { NextResponse } from "next/server";
import { getSession } from "@/lib/sessions/actions";

export async function GET() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session: any = await getSession();

    return NextResponse.json(session);
}
