import { NextResponse } from "next/server";
import { getSession } from "@/lib/sessions/actions";

export async function GET() {
 const session = await getSession();

 return NextResponse.json(session);
}
