import { getSession, setSession } from "@/lib/sessions/actions";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASEURL}/auth/login`, {
                email,
            });

            if (response.status >= 200 && response.status < 300) {
                const { data } = response;
                const session = await getSession();
                session.isLoggedIn = true;
                session.token = data.token;
                session.user = data.user;
                await setSession({ user: data.user, token: data.token });
                await session.save();

                return NextResponse.json({
                    message: "Login successful",
                    user: response.data.user,
                    session: session,
                    status: 201,
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                const { status, data } = error.response;

                return NextResponse.json({
                    message: "Error while logging user!",
                    status: status,
                    error: data,
                });
            } else {
                return NextResponse.json({
                    message: "Unexpected error occurred!",
                    status: 500,
                    error: error,
                });
            }
        }
    } catch (error) {
        return NextResponse.json({
            message: "Error trying to log in user!",
            status: 500,
            error: error,
        });
    }
}
