import { getSession, removeSession } from "@/lib/sessions/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        console.log(req);
        const session = await getSession();
        session.destroy();
        await removeSession();

        return NextResponse.json({
            message: "Logout successful",
            user: null,
            session: session,
            status: 201,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response) {
            console.log(error);
            const { status, data } = error.response;

            return NextResponse.json({
                message: "Error while clearing user session!",
                status: status,
                error: data,
            });
        } else {
            return NextResponse.json({
                message: "Unexpected error occurred!",
                status: 500,
            });
        }
    }
}
